const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(
  "1af6bd39851368f542784213c70e1cd7932e2410c3346a3713f0c72abf0ac871"
);

const params = {
  engine: "home_depot",
  q: "chair",
};

const callback = function (data) {
  console.log(data["products"]);
};

// Show result as JSON
search.json(params, callback);
