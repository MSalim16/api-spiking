import { FatSecretClient } from "fatsecret-api";
const fs = require("fs");

const recipes = require("./recipes.js");

const fatSecretClient = new FatSecretClient({
  clientId: "a058fa2aa20349fc8ba86b47b2c3b4fc",
  clientSecret: "afa981a7eede4776b0f4a9d3a1ecce80",
  scope: "basic",
});

fatSecretClient
  .getRecipe({ recipe_id: "31341" })
  .then((recipe) => {
    console.log(recipe);
  })
  .catch((err) => {
    console.log(err);
  });

// fatSecretClient
//   .getRecipeSearch({ search_expression: "", max_results: 50 })
//   .then(console.log)
//   .catch(console.log);

// for (let i = 37; i < 74; i++) {
//   fatSecretClient
//     .getRecipeSearch({ search_expression: "", page_number: i, max_results: 50 })
//     .then(res => {
//       if (res.recipe) {
//         res.recipe.forEach(recipe => {
//           fs.appendFileSync("recipes.json", JSON.stringify(recipe) + "*94");
//         });
//       } else {
//         console.log("error");

//         fs.appendFileSync("failed.json", String(i) + "*");
//       }
//     })
//     .catch(err => {});
// }

// let readfile = fs.readFileSync();

// const scrapeAPI = async () => {
//   for (let i = 0; i < 3687; i++) {
//     if (!recipes[i].ingredients)
//       await fatSecretClient
//         .getRecipe({ recipe_id: recipes[i].recipe_id })
//         .then(async (recipe) => {
//           recipes[i].ingredients = recipe.ingredients.ingredient;
//           console.log("writing to file")
//           console.log(i)
//          await fs.writeFile(
//             "recipesWithIngredients.json",
//             recipe,
//             "utf8",
//             function (err: any) {
//               if (err) {
//                 console.log(
//                   "An error occured while writing JSON Object to File."
//                 );
//                 return console.log(err);
//               }

//               console.log("JSON file has been saved.");
//             }
//           );
//         })
//         .catch(console.log);
//   }
// };

// scrapeAPI()

// while (!recipes.every((recipe: any) => recipe.ingredients)) {
//   setTimeout(scrapeAPI, 60000);
// }

// fatSecretClient
//   .getRecipe({ recipe_id: recipes[0].recipe_id })
//   .then((recipe) => console.log).catch(console.log);

// const fullRecipes:Array<any> = []

// const grabIngredientsForRecipes = async () => {
//   for (let i = 71; i < 100; i++) {
//     await fatSecretClient
//       .getRecipe({ recipe_id: recipes[i].recipe_id })
//       .then((recipe) => {
//         fullRecipes.push(recipe)
//       }).catch(console.log);
//   }
// }

// grabIngredientsForRecipes()
// console.log(fullRecipes)

const writeFullRecipes = async () => {
  for (let i = 120; i < 150; i++) {
    await fatSecretClient
      .getRecipe({ recipe_id: recipes[i].recipe_id })
      .then(async (recipe) => {
        console.log(recipe)
        await fs.writeFileSync("fullRecipes.txt", JSON.stringify(recipe) + ",", {
          encoding: "utf8",
          flag: "a+"
        });
      })
      .catch(console.log);
  }
};

writeFullRecipes()
