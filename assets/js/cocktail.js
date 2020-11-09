window.onload=function(){
    
    const search = document.getElementById("cocktail-search");
    const submit = document.getElementById("submit");
    const resultHeading = document.getElementById("result-heading");
    const cocktailList = document.getElementById("cocktail-list");
    const cocktailRecipe = document.getElementById("cocktail");
    const randomButton = document.getElementById("random-cocktail");
    const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/";


    submit.addEventListener("submit", searchCocktails);

    //search cocktail from API
    function searchCocktails(e) {
        e.preventDefault();
        
        //clear search bar
        cocktailRecipe.innerHTML = "";

        //get input from search bar
        const input = search.value;

        //ensure search not empty
        if(input == "") {
            $('.cocktail-search').addClass('error');
            $('.error-message').css('display', 'block').css('height', '100%');
        } else {
            $('.cocktail-search').removeClass('error');
            $('.error-message').css('display', 'none');
            fetch(`${baseURL}search.php?s=${input}`)
            .then(res => res.json())
            .then(data => {
                resultHeading.innerHTML = `<h3 class="section-header">Search results for '${input}':</h3>`;

                if(data.drinks == null) {
                    resultHeading.innerHTML = `<p class="no-match">No cocktails found, please try again!</p>`;
                } else {
                    let listCockTail = ""
                    data.drinks.forEach(cocktail => {
                        listCockTail += `
                            <div class="cocktail-thumb" data-cocktailID="${cocktail.idDrink}">
                                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="thumb-image"/>
                                <h5 class="cocktail-name">${cocktail.strDrink}</h5>
                            </div>
                        `
                    })
                    $('#cocktail-list').empty().append(listCockTail)
                }
            });
            //remove text from search bar
            search.value = "";
        }
    }


    cocktailList.addEventListener("click", showDetail, false);
    cocktailList.addEventListener("touchstart", showDetail, false);
    function showDetail(e) {
        const cocktailInfo = e.path.find(item => {
            if (item.classList) {
                //hide the cocktail list
                $("#result-heading").css("display", "none");
                $(".cocktail-list").css("display", "none");
                return item.classList.contains("cocktail-thumb");
            } else {
                return false;
            }
        });
        if (cocktailInfo) {
            const cocktailID = cocktailInfo.getAttribute("data-cocktailid");
            getCocktailById(cocktailID);
        }
    }
    

    //get cocktail by ID
    function getCocktailById(cocktailID) {  
        fetch(`${baseURL}lookup.php?i=${cocktailID}`)
            .then(res => res.json())
            .then(data => {
                const cocktail = data.drinks[0];

                createCocktail(cocktail);
            });
    }

    //get random cocktail
    randomButton.addEventListener("click", () => {      
        resultHeading.innerHTML = "";
        cocktailList.innerHTML = "";
        fetch(`${baseURL}random.php`)
            .then(res => res.json())
            .then(res => {
                createCocktail(res.drinks[0], false);
            })
    });

    //create cocktail recipe
    const createCocktail = (cocktail, showBackButton = true) => {
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (cocktail[`strIngredient${i}`]) {
                const quantity = cocktail[`strMeasure${i}`]
                ingredients.push(`${cocktail[`strIngredient${i}`]} ${ quantity ? `- ${quantity}` : ""}`);
            } else {
                break;
            }
        }

        const newInnerHTML = `
            <div class="container-fluid cocktail-result">
                
                <div class="row justify-content-around my-auto">
                    <div class="col-md-4 col-12 mx-auto">
                        <img class="cocktail-image" src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
                    </div>
                    <div class="col-md-7 col-12 mx-auto cocktail-info">
                        <h3 class="cocktail-h">${cocktail.strDrink}</h3>

                        <ul class="categories">
                            ${cocktail.strCategory ? `<li>${cocktail.strCategory}</li>` : ''}
                            ${cocktail.strAlcoholic ? `<li>${cocktail.strAlcoholic}</li>` : ''}
                            
                        </ul>
                        
                        <h5>Ingredients:</h5>
                        <ul class="ingredients-list">
                            ${ingredients.map(ingredient => `<li><i class="fas fa-caret-right"></i>  ${ingredient}</li>`).join('')}
                        </ul>
                        
                        <h5>Method:</h5>
                        <p>${cocktail.strInstructions}</p>
                        ${cocktail.strGlass ? `<p class="glass-type"><strong>Serve in a ${cocktail.strGlass}</strong></p>` : ''}
                    </div>
                    <div class="text-center"> 
                        ${showBackButton ? '<button class="button btn-light" onclick="backButton()">Back</button>' : ''}
                    </div>
                </div>
            </div>
        `;

        cocktailRecipe.innerHTML = newInnerHTML;
    };
    
};


//Button to go back to cocktail list from recipe
function backButton() {
    $("#result-heading").css("display", "block");
    $(".cocktail-list").css("display", "grid");
    $(".cocktail-result").css("display", "none");
}


