// Task 1

for (let i = 10; i < 50; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }
}

// Task 2

const mySelf = {
    name: 'Artyom',
    surname: 'Ermachenkov',
    age: 19,
    pet: true
};



// Task 3

const array = [
    'я в Симбирск,',
    'в трактире.',
    'с утра',
    'В ту же ночь',
    'Я остановился',
    'для закупки',
    'что и было поручено Савельичу.',
    'приехал,',
    'где должен был',
    'нужных вещей',
    'отправился по лавкам',
    'пробыть сутки',
    'Савельич'
]

const result = ['В ту же ночь', 'приехал', 'я в Симбирск', 'где должен был', 'пробыть сутки', 'для закупки', 'нужных вещей', 'что и было поручено Савельичу.', 'Я остановился', 'в трактире.', 'Савельич', 'с утра', 'отправился по лавкам'];
console.log(result);




//Task 4

const fullName = (firstName, lastName) => {

    const fullName = `${firstName} ${lastName}`;
    console.log(fullName);
}

fullName('Artyom', 'Ermachenkov');

// Task 5

let i = 21;
while (i < 67) {
    i++;
    if (i % 2 != 0)
        console.log(i);
}