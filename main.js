// What to wear:
// Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.
// An example is:

// const clothesToWear = youCreateThisFunctionName(18);
// console.log(clothesToWear); // Logs out: "shorts and a t-shirt"


function GetShortsWeather(temperature) {
    if (temperature >= 10) {
        return "shorts and a t-shirt";
    }
    else {
        return "jacket";
    }
}

console.log(GetShortsWeather(10));
console.log(GetShortsWeather(9));



// Dice game
// Write a function that simulates a dice roll.
// You call the function with the number of times you would like to roll the dice.
// Every time the dice hits a 6 log out You just hit 6!

function rollADice() {
    return 1 + Math.floor(Math.random() * 6);
    for(let i = 0; i < 1; i++);

    const diceroll = rollADice(); {
        if (diceroll = 6) {
            return ("you hit 6") }
    }

}

console.log(rollADice(3));
//kunne ikke få "you hit 6" frem.