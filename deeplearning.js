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
'В ту же ночь', 'приехал', 'я в Симбирск', 'где должен был', 'пробыть сутки', 'для закупки', 'нужных вещей', 'что и было поручено Савельичу.', 'Я остановился', 'в трактире.', 'Савельич', 'с утра', 'отправился по лавкам']
let result = [array[3]+''+array[7]+''+array[0]+''+array[8]+''+array[11]+''+array[5]+''+array[9]+''+array(6)+''+array[4]+''+array[1]+''+array[12]+''+array[2]+''+array[10];
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
