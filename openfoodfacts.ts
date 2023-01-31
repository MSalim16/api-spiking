const off = require("openfoodfacts-nodejs");

const client = new off();

client.getProduct("54781877240").then((item:any) => {
  console.log(typeof item)
  console.log(item)
})
