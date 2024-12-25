// Задание 1

let str1 = 'js';
str1 = str1.toUpperCase();
console.log(str1);

// Задание 2

function massiv(array,string) {
    return array.filter(item => item.toLowerCase().startsWith(string.toLowerCase()));

}
const massiv2 = ['qwerty', 'qwe', 'asdf','zxcv','qwer'];
const str2='qwe'

const result2 =massiv(massiv2,str2);
console.log(result2);


// Задание 3

const num3 = 32.58884;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log(Math.round(num3));

// Задание 4

const numbers4 = [52, 53, 49, 77, 21, 32];

const minNum4 = Math.min(...numbers4);
const maxNum4 = Math.max(...numbers4);

console.log('Минимальное значение:', minNum4);
console.log('Максимальное значение:', maxNum4); 

// Задание 5

function random10() {
    return Math.ceil(Math.random() * 10);
}
console.log(random10());

Задание 6

function creatArray(n) {
    const randomArray = [];
    for (let index = 0; index < (num6 / 2); index++) {
        randomArray.push(Math.ceil(Math.random() * n));
        
    }
    return randomArray
}
const num6 = 10;
console.log(creatArray(num6));


// Задание 7

function range(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(range(5,100));

// Задание 8

console.log(new Date());

// Задание 9

let  currentDate = new Date();
let futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log(futureDate);

// Задание 10

function formatDate(date) {
    const daysOfWeek = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = daysOfWeek[date.getDay()];

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    console.log(`Дата: ${day} ${month} ${year} — это ${dayOfWeek}.`);
    console.log(`Время: ${hours}:${minutes}:${seconds}`);

}

const currentDate10 = new Date();
formatDate(currentDate10);

