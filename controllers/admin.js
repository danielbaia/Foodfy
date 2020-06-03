const fs = require('fs');
const data = require('../data.json');



exports.index = function(req, res) {
    return res.render("admin/index");
}

exports.create = function(req, res) {
    return res.render("admin/create");
}

exports.post = function(req, res) {

    const keys = Object.keys(req.body);

    for (const key of keys) {

        if (req.body[key] == "")
            return req.send("Please, fill the all fields");

    }

    let id = 1;
    const lastRecipe = data.recipes[data.recipes.length - 1];

    if (lastRecipe) {
        id = lastRecipe.id + 1;
    }

    const recipe = {
        ...req.body,
        id
    }

    data.recipes.push(recipe);

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file error....")
    });


    return res.redirect("/admin/recipe");

}


exports.edit = function(req, res) {

    const { id } = req.params;

    let index = 0;

    const foundRecipe = data.recipes.find(function(recipe, foundIndex) {

        if (recipe.id == id) {
            index = foundIndex;
            return true;
        }

    })

    if (!foundRecipe) res.send("Recipe is not found!!!");


    return res.render("admin/edit", { recipe: foundRecipe });


}