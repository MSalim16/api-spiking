import { FatSecretClient } from "fatsecret-api";

const fatSecretClient = new FatSecretClient({
  clientId: "a058fa2aa20349fc8ba86b47b2c3b4fc",
  clientSecret: "afa981a7eede4776b0f4a9d3a1ecce80",
  scope: "basic",
});

fatSecretClient
  .getRecipe({ recipe_id: "31341" })
  .then(recipe => {
    console.log(recipe);
  })
  .catch(err => {
    console.log(err);
  });
