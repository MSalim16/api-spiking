"use strict";
const off = require("openfoodfacts-nodejs");
const client = new off();
client.getProduct("30720601").then(console.log);
