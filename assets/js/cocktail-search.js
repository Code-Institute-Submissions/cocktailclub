window.onload=function(){
    const get_cocktail_btn = document.getElementById("get_cocktail");
    const cocktail_container = document.getElementById("cocktail");

    get_cocktail_btn.addEventListener("click", () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(res => {
                createCocktail(res.drinks[0]);
            })
            .catch(e => {
                console.warn(e);
            });
    });

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
                <div class="row justify-content-around">
                    <div class="col-sm-4 col-12">
                        <img class="cocktail-image" src="${cocktail.strDrinkThumb}" alt="Cocktail Image">
                    </div>
                    <div class="col-sm-6 col-12 cocktail-info">
                        <h3 class="cocktail-name">${cocktail.strDrink}</h3>
                        <h5>Ingredients:</h5>
                        <ul>
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                        
                        
                        <h5>Method:</h5>
                        <p>${cocktail.strInstructions}</p>
                        ${
                        cocktail.strGlass
                            ? `<p><strong>Glass Required:</strong> ${cocktail.strGlass}</p>`
                            : ''
                        }
                    </div>
                </div>
            </div>
        `;

        cocktail_container.innerHTML = newInnerHTML;
    };
}
