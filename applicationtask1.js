var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

async function currencyConvertor(base, count, target) {
    return new Promise( (resolve, reject) => {
        xhr.open("GET", `http://api.exchangeratesapi.io/v1/latest?access_key=0f66d35665cce346f319ea957d702467&base=${base}`, true);
        xhr.onload = function (e) {
            let exchange = JSON.parse(xhr.responseText);
            if (exchange.hasOwnProperty('error'))
            {
                reject(exchange.error.message);
                return;
            }

            let rate = exchange.rates[target];

            let result = {};        
            result.amount = parseFloat((rate * count).toFixed(2));
            result.message = `${count} ${base} = ${result.amount} ${target}`;

            resolve(result);
        };
        xhr.onerror = function () {
            reject('Network request failed');
        };
        xhr.send();
    });
}

currencyConvertor('EUR1', 40, 'USD').then(function (result) {
    let amount = result.amount;
    console.log(result.message);
}).catch(function (err) {
    console.log(err);
});