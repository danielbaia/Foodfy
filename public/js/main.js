//Redirect for recipe
const recipes = document.querySelectorAll('.recipe-item');
for (const recipe of recipes) {

    recipe.addEventListener('click', function() {
        const recipeID = recipe.getAttribute('id');

        window.location.href = `/recipes/${recipeID}`;
    })
}


//Show and Hidden items
const acc = document.getElementsByClassName('accordion-recipe');
for (let i = 0; i < acc.length; i++) {

    acc[i].addEventListener("click", function() {
        var items = document.getElementsByClassName('content-recipe');

        if (items[i].classList.contains('inactive')) {
            items[i].classList.remove('inactive');
            acc[i].innerHTML = "Esconder";
        } else {
            items[i].classList.add('inactive');
            acc[i].innerHTML = "Mostrar";
        }
    });

}

//add ingredients

function addIngredients() {

    const ingredients = document.querySelector("#ingredients");
    const fieldcontainer = document.querySelectorAll(".ingredient");

    const newField = fieldcontainer[fieldcontainer.length - 1].cloneNode(true);

    //verifica se o campo anterior está vazio
    if (newField.value == "") {
        return false;
    }

    //deixa o valor do input vazio
    newField.value = "";
    ingredients.appendChild(newField);

}


function addPreparations() {

    const preparations = document.querySelector("#preparations");
    const fieldContainer = document.querySelectorAll(".preparation");

    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    if (newField.value == "") {
        return false;
    }

    newField.value = "";
    preparations.appendChild(newField);

}

document.querySelector(".add-ingredient").addEventListener("click", addIngredients);
document.querySelector(".add-preparation").addEventListener("click", addPreparations);