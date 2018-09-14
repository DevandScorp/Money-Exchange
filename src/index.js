// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency<=0)return {};
    if(currency>=10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var values = {
        H:50,
        Q:25,
        D:10,
        N:5,
        P:1,
    }
    var money = {
        H:0,
        Q:0,
        D:0,
        N:0,
        P:0,
    };
    for(key in money){
        if(Math.floor(currency/values[key])) {
            money[key] = Math.floor(currency / values[key]);
            console.log(money[key]);
            currency -= money[key] * values[key];
        }else{
            money[key] = Math.floor(currency / values[key]);
        }
    }
    for(key in money){
        if(!money[key])delete money[key];
    }
    return money;
}
