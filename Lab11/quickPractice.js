function deepFry(vegetable) {
    return " deep fried " + vegetable;
}

function makeDinner(vegetable, callback) {
    return callback(vegetable);
}
console.log(makeDinner("potato", deepFry));

aLaMode = (dessert) => {
    return " with ice cream";
}

eatDessert = (dessert, callback) => {
    return callback(dessert);
}