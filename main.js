// The information of the hometown //

let str1 = "Kaliningrad";
let str2 = "In Russia";
let num1 = "437 456 people";
let bool = "true";


// The square of rectangle //

let num2 = 40;
let num3 = 70;
let square = num2 * num3;


// Task //

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let approachspeed = speedOfFirst + speedOfSecond;
let way = approachspeed * time;
console.log(way)


// The code task //

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log("randomNumber меньше 20");
}
if (randomNumber > 50) {
    console.log("randomNumber больше 50");
}
if (randomNumber > 20 < 50) {
    console.log("randomNumber больше 20 и меньше 50")
}

// Switch case //

switch (randomNumber) {
    case (randomNumber < 20):
        console.log("randomNumber меньше 20");
        break;
    case (randomNumber > 50):
        console.log("randomNumber больше 50");
        break;
    default:
        console.log("randomNumber больше 20 и меньше 50");

}