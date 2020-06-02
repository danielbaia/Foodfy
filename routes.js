const express = require('express')
const recipes = require('./data2');


const routes = express.Router();


routes.get("/", function(req, res) {
    return res.render("site/index", { recipes })
})

routes.get("/recipe", function(req, res) {
    return res.render("site/recipe")
})

routes.get("/about", function(req, res) {
    return res.render("site/about")
})

routes.get("/recipes", function(req, res) {
    return res.render("site/recipes", { recipes })
})

routes.get("/recipes/:index", function(req, res) {

    const recipeIndex = req.params.index;

    return res.render('site/recipe', {
        recipe: recipes[recipeIndex - 1]
    });
})


routes.get("/admin/recipe/", function(req, res) {
    return res.render("admin/index");
})

routes.get("/admin/recipe/create", function(req, res) {
    return res.render("admin/create");
})


module.exports = routes;