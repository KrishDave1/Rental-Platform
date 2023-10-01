const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(
  "1af6bd39851368f542784213c70e1cd7932e2410c3346a3713f0c72abf0ac871"
);

const params = {
  engine: "home_depot",
  q: "chair",
};

const callback = function (data) {
  for (var i = 0; i < data["products"].length; i++) {
    console.log("Title:" + data["products"][i]["title"]);
    console.log("Product_Id:" + data["products"][i]["product_id"]);
    console.log(data["products"][i]["thumbnails"]);
    console.log("Price:" + data["products"][i]["price"]);
    console.log("Reviews:" + data["products"][i]["reviews"]);
    console.log("Rating:" + data["products"][i]["rating"]);
    console.log("Price was:" + data["products"][i]["price_was"]);
    console.log("Percentage off:" + data["products"][i]["percentage_off"]);
    console.log("Type:" + params["q"]);
  }
  // console.log(data["products"]);
};

// Show result as JSON
search.json(params, callback);
