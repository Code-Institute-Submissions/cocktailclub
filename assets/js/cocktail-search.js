window.onload=function(){
    
    const search = document.getElementById("cocktail-search");
    const submit = document.getElementById("submit");
    const result_heading = document.getElementById("result-heading");
    const cocktail_list = document.getElementById("cocktail-list")
    const cocktail_recipe = document.getElementById("cocktail");
    const get_cocktail_btn = document.getElementById("get_cocktail");

    submit.addEventListener("submit", searchCocktails);

    //search cocktail from API
    function searchCocktails(e) {
        e.preventDefault();
        
        //clear anything that is there
        cocktail_recipe.innerHTML = "";

        //get 
        const input = search.value;

        //ensure search not empty
        if(input == "") {
            $('.cocktail-search').addClass('error');
            $('.error-message').css('display', 'block').css('height', '100%');
        } else {
            $('.cocktail-search').removeClass('error');
            $('.error-message').css('display', 'none');
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`)
            .then(res => res.json())
            .then(data => {
                result_heading.innerHTML = `<h3 class="section-header">Search results for '${input}':</h3>`;

                if(data.drinks == null) {
                    result_heading.innerHTML = `<p>No cocktails found, please try again!</p>`;
                } else {
                    cocktail_list.innerHTML = data.drinks.map(cocktail => `
                        <div class="cocktail-thumb" data-cocktailID="${cocktail.idDrink}">
                            <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="thumb-image"/>
                            <h5 class="cocktail-name">${cocktail.strDrink}</h5>
                        </div>
                    `)
                    .join("");
                }
            });
            //remove text from search bar
            search.value = "";
        }
    }

    //find recipes by data element
    cocktail_list.addEventListener("click", e => {
        const cocktailInfo = e.path.find(item => {
            if (item.classList) {
                //hide the cocktail list
                $('.cocktail-list').css('display', 'none'); 
                return item.classList.contains("cocktail-thumb");
            } else {
                return false;
            }
        });

        if (cocktailInfo) {
            const cocktailID = cocktailInfo.getAttribute("data-cocktailid");
            getCocktailById(cocktailID);
        }
    })

    //get cocktail by ID
    function getCocktailById(cocktailID) {  
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailID}`)
            .then(res => res.json())
            .then(data => {
                const cocktail = data.drinks[0];

                createCocktail(cocktail);
            })
    }

    //get random cocktail
    get_cocktail_btn.addEventListener("click", () => {       
        result_heading.innerHTML = "";
        cocktail_list.innerHTML = "";
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                createCocktail(res.drinks[0]);
            })
            .catch(e => {
                console.warn(e);
            });
        
    });

    //create cocktail recipe
    const createCocktail = (cocktail) => {
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (cocktail[`strIngredient${i}`]) {
                ingredients.push(
                    `${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`]}`
                );
            } else {
                break;
            }
        }

        const newInnerHTML = `
            <div class="row container-fluid cocktail-result">
                <button class="search-button" onclick="backButton()">Back</button>
                <div class="row justify-content-around">
                    <div class="col-sm-4 col-12">
                        <img class="cocktail-image" src="${cocktail.strDrinkThumb}" alt="Cocktail Image">
                    </div>
                    <div class="col-sm-7 col-12 cocktail-info">
                        <h3 class="cocktail-h">${cocktail.strDrink}</h3>
                        <h5>Ingredients:</h5>
                        <ul>
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        
                        <h5>Method:</h5>
                        <p>${cocktail.strInstructions}</p>
                        ${cocktail.strGlass
                            ? `<h5>Glass Required: </h5> 
                            <p>${cocktail.strGlass}</p>` : ''
                        }
                    </div>
                </div>
            </div>
        `;

        cocktail_recipe.innerHTML = newInnerHTML;
    };
    
};

//Button to go back to cocktail list from recipe
function backButton() {
    $('.cocktail-list').css('display', 'grid');
    $('.cocktail-result').css('display', 'none');
}
