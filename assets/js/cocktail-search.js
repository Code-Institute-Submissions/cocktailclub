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
            <div class="row container-fluid">
                <div class="row">
                    <div class="col-5">
                        <img class="cocktail-image" src="${cocktail.strDrinkThumb}" alt="Cocktail Image">
                    </div>
                    <div class="col-7 text-center">
                        <h4>${cocktail.strDrink}</h4>
                        ${
                        cocktail.strGlass
                            ? `<p><strong>Glass Required:</strong> ${cocktail.strGlass}</p>`
                            : ''
                        }
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <h5>Ingredients:</h5>
                        <ul>
                            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="col-6">
                        <p>${cocktail.strInstructions}</p>
                    </div>
                </div>
            </div>
        `;

        cocktail_container.innerHTML = newInnerHTML;
    };
}
