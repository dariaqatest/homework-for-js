const fs = require('fs');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

function httpGetParsed(theUrl) {
    xhr.open("GET", theUrl, false);
    xhr.send(null);
    return JSON.parse(xhr.responseText);
}

// RESAVE SOURCE
let source = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const sourceText = JSON.stringify(source, null, 4);
fs.writeFile('source.json', sourceText, function (err) { });

// CONVERT PRICES
let output = source;
let exchange = httpGetParsed('http://api.exchangeratesapi.io/v1/latest?access_key=0f66d35665cce346f319ea957d702467');

output.data.forEach(function (product) {
    product.Prices.Currency = "EUR";
    let newPrice = (product.Prices.Price / exchange.rates.USD).toFixed(2);
    product.Prices.Price = parseFloat(newPrice);
});

// SAVE OUTPUT FILE
const outputText = JSON.stringify(output, null, 4);
fs.writeFile('output.json', outputText, function (err) { });