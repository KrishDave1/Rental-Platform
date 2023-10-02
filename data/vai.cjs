const SerpApi = require("google-search-results-nodejs");
const search = new SerpApi.GoogleSearch(
  "1af6bd39851368f542784213c70e1cd7932e2410c3346a3713f0c72abf0ac871"
);

const params = {
  engine: "home_depot",
  q: "study-chair",
};

const callback = function (data) {
  console.log("{");

  console.log("[");
  for (var i = 0; i < data["products"].length; i++) {
    console.log("{");
    console.log('"Title" :"' + data["products"][i]["title"] + '"');
    console.log(',"Product_Id":' + data["products"][i]["product_id"]);
    console.log(',"image" :');
    // // console.log('"' + data["products"][i]["thumbnails"][0][0] + '",');
    // console.log('"' + data["products"][i]["thumbnails"][0][1] + '",');
    // console.log('"' + data["products"][i]["thumbnails"][0][2] + '",');
    // console.log('"' + data["products"][i]["thumbnails"][0][3] + '",');
    // console.log('"' + data["products"][i]["thumbnails"][0][4] + '",');
    // console.log('"' + data["products"][i]["thumbnails"][0][5] + '",');
    console.log('"' + data["products"][i]["thumbnails"][0][6] + '"');
    // console.log("]");
    console.log(',"Price" :' + data["products"][i]["price"]);
    if (data["products"][i]["reviews"] === undefined)
      console.log(',"Reviews": ' + '"undefined"');
    else console.log(',"Reviews": ' + data["products"][i]["reviews"]);
    console.log(',"Rating":' + data["products"][i]["rating"]);
    if (data["products"][i]["price_was"] === undefined) {
      console.log(',"Price was":' + '"undefined"');
    } else {
      console.log(',"Price was":' + data["products"][i]["price_was"]);
    }
    if (data["products"][i]["percentage_off"] === undefined)
      console.log(',"Percentage off":' + '"undefined"');
    else
      console.log(',"Percentage off":' + data["products"][i]["percentage_off"]);
    console.log(',"Type": "' + params["q"] + '"');
    console.log("},");
  }
  console.log("]");
  console.log("}");
  // console.log(data["products"]);
};

// Show result as JSON
search.json(params, callback);
