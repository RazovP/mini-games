// Задание 1
for (i = 1; i < 3; i++) {
    console.log("Привет!");
}

// Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Здание 3
for (let i = 7; i <= 22; i++) {
    console.log(i);
 }

// Задание 4
const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}
for (const key in obj) {

    console.log(`${key}- зарплата ${obj[key]} долларов.`);
}

//Задание 5
let n = 1000;
let num = 0;
while (n > 50) {
    n /= 2;
    num++;
}
console.log(`Получилось число ${n}, для этого было сделано ${num} делений на 2`)

// Задание 6
let pitniza = 6;
do {
    console.log(`Сегодня пятница, ${pitniza}-е число. Необходимо подготовить отчет.`);
    pitniza += 7;
} while (pitniza<=31);

// Доп задание 1
let iteration=0;
let k=100;
do {
    k-=7;
    iteration++;
} while (k>0);
console.log(`Колличество операций равно ${iteration}, итоговое число ${k}`);

// Доп задание 2
const months ={
    Январь: 1,
    Февраль: 2,
    Март: 3,
    Апрель: 4,
    Май: 5,
    Июнь: 6,
    Июль: 7,
    Август: 8,
    Сентябрь: 9,
    Октябрь: 10,
    Ноябрь: 11,
    Декабрь: 12
}
for (const key in months) {
    console.log(`${key}- это ${months[key]} месяц года.`);
}

// Доп Задание 3
const book ={
    Название: 'Приключения Чиполлино',
    Автор: 'Джанни Родари',
    "Год Издания": '1999',
    Жанр: 'Приключения'
}
for (const key in book) {
    console.log(`${key}:  ${book[key]}.`);
}

// Доп задание 4
const number ={
    1: 52,
    2: 5,
    3: -5,
    4: 6,
    5: 0,
    6: 2.5,
    7: 100,
    8: -5.5,
    9: -6,
    10: -6
}
let min = number[1];
let minkey;
for (let key in number) {
    minkey=number[key];

    if (minkey<min) {
        min=minkey
    }
}
console.log(min);