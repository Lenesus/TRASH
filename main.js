// The information of the hometown //

let str1 = "Kaliningrad";
let str2 = 'In Russia';
let num1 = 437560;
let bool = true;


// The square of rectangle //

let num2 = 40;
let num3 = 70;
let square = num2 * num3;


// Task //

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;
let way = (speedOfFirst + speedOfSecond) * 2;

console.log(way)


// The code task //

const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber < 20) {
    console.log('randomNumber1 меньше 20');
} else if (randomNumber > 50) {
    console.log('randomNumber1 больше 50');
} else {
    console.log('randomNumber1 больше 20, и меньше 50')
}

// Switch case //

switch (true) {
    case randomNumber < 20:
        console.log("randomNumber2 меньше 20");
        break;
    case randomNumber > 50:
        console.log("randomNumber2 больше 50");
        break;
    default:
        console.log("randomNumber2 больше 20, и меньше 50");
        break;

}
