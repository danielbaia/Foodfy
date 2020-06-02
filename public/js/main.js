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

    console.log("to aqui");
    const ingredients = document.querySelector("#ingredients");
    const fieldcontainer = document.querySelectorAll(".ingredient");

    const newField = fieldcontainer[fieldcontainer.length - 1].cloneNode(true);

    if (newField.children[0].value == "") {
        return false;
    }

    //deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);

}



document.querySelector(".btn-ingredient").addEventListener("click", function() {
    console.log("to aqui");
});