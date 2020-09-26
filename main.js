function calculateBTCinIDR() {

    //send ajax request to get BTC Price in EUR
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);
            convertEURToIDR(result.bpi.EUR.rate_float);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}

// convert BTC price from EUR to IDR
function convertEURToIDR(priceEUR) {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.exchangeratesapi.io/latest";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let result = JSON.parse(this.responseText);
            calculateTotal((result.rates.IDR * priceEUR));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

// calculate total price
function calculateTotal(priceBTCIDR) {
    amountBTC = document.getElementById("btc").value;
    total = amountBTC * priceBTCIDR;
    document.getElementById("id01").innerHTML = total;
}