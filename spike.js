"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatsecret_api_1 = require("fatsecret-api");
const fs = require("fs");
const fatSecretClient = new fatsecret_api_1.FatSecretClient({
    clientId: "a058fa2aa20349fc8ba86b47b2c3b4fc",
    clientSecret: "afa981a7eede4776b0f4a9d3a1ecce80",
    scope: "basic",
});
// fatSecretClient
//   .getRecipe({ recipe_id: "31341" })
//   .then(recipe => {
//     console.log(recipe);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// fatSecretClient
//   .getRecipeSearch({ search_expression: "", max_results: 50 })
//   .then(console.log)
//   .catch(console.log);
for (let i = 37; i < 74; i++) {
    fatSecretClient
        .getRecipeSearch({ search_expression: "", page_number: i, max_results: 50 })
        .then(res => {
        if (res.recipe) {
            res.recipe.forEach(recipe => {
                fs.appendFileSync("recipes.json", JSON.stringify(recipe) + "*94");
            });
        }
        else {
            console.log("error");
            fs.appendFileSync("failed.json", String(i) + "*");
        }
    })
        .catch(err => { });
}
