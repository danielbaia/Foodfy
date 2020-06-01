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
        var elements = document.getElementsByClassName('content-recipe');

        if (elements[i].classList.contains('inactive-content')) {
            elements[i].classList.remove('inactive-content');
            acc[i].innerHTML = "Esconder";
        } else {
            elements[i].classList.add('inactive-content');
            acc[i].innerHTML = "Mostrar";
        }
    });

}