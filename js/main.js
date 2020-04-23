const modalOverlay = document.querySelector('.modal-overlay');

const recipes = document.querySelectorAll('.recipe-item');

for (const recipe of recipes) {
    recipe.addEventListener('click', function() {
        let idRecipe = recipe.getAttribute('id');


        modalOverlay.classList.add('active');
        modalOverlay.querySelector('img').src = `img/${idRecipe.trim(idRecipe)}.png`;
        modalOverlay.querySelector('h3').innerHTML = recipe.querySelector('h3').textContent;
        modalOverlay.querySelector('p').innerHTML = recipe.querySelector('p').textContent;

    });

}