// Задание 1

const massiv1 = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < massiv1.length; index++) {
    console.log(massiv1[index]);
    if (massiv1[index] === 10) {
        break;
    }
}

// Задание 2

const massiv2 = [1, 5, 4, 10, 0, 3];
for (let index = 0; index < massiv2.length; index++) {
    if (massiv2[index] === 4) {
        console.log(`Индекс элемента 4 ${index}`);
    }
}

// Задание 3

const massiv3 = [1, 3, 5, 10, 20];
console.log(massiv3.join(' '));

// Задание 4

const massiv4 = [];

for (let i = 0; i < 3; i++) {
    let podMassiv4 = []
    for (let j = 0; j < 3; j++) {
        podMassiv4.push(1);

    }
    massiv4.push(podMassiv4);
}
console.log(massiv4)

// Задание 5

const massiv5 = [1, 1, 1];
for (let index = 0; index < 3; index++) {
    massiv5.push(2);

}
console.log(massiv5);

// Задание 6

const massiv6 = [9, 8, 7, 'a', 6, 5];
massiv6.sort();
massiv6.pop();
console.log(massiv6);

// Задание 7

const massiv7 = [9, 8, 7, 6, 5];
// let userMassiv7 = 3;
let userMassiv7 = Number(prompt(`Угадай число из массива`));

if (massiv7.includes(userMassiv7) == true) {
    alert(`Угадал`);
} else {
    alert(`не угадал`);
}

// Задание 8

let str = 'abcdef'
let splitStr = str.split("");
splitStr.reverse();
str = splitStr.join("");
console.log(str);

// Задание 9

let massiv9 = [[1, 2, 3], [4, 5, 6]];
massiv9 = [...massiv9[0], ...massiv9[1]];
console.log(massiv9);

// Задание 10

const massiv10 = [];
for (let i = 0; i < 10; i++) {
    massiv10[i] = Math.ceil(Math.random() * 10)
}
console.log(massiv10);
for (let i = 0; i < massiv10.length - 1; i++) {
    let sum = massiv10[i] + massiv10[i + 1];
    console.log(`Сумма элементов ${massiv10[i]} и ${massiv10[i + 1]}: ${sum}`);
}

// Задание 11

function square(mass) {
    return mass.map(mass => mass ** 2);
}
let massiv11 = [];
for (let i = 0; i < 10; i++) {
    massiv11[i] = Math.ceil(Math.random() * 10);
}
let squared = square(massiv11);
console.log(massiv11);
console.log(squared);

// Задание 12

function length(string) {
    return string.map(str => str.length);
}
let string = ['sdfs', 'asdasaa', 'asdasdasdad'];
console.log(string);
let leng = length(string);
console.log(leng);

// Задание 13

let massiv13 = [5, -5, 6, 4, -7, -2, 30, 0, -85];
console.log(massiv13);
function negative(numbers) {
    return numbers.filter(num => num < 0);
}
let neg = negative(massiv13);
console.log(neg);

// Задание 14

let massiv14 = [];
for (let i = 0; i < 10; i++) {
    massiv14[i] = Math.ceil(Math.random() * 10);
}
console.log(massiv14);
let even = massiv14.filter(eve => (eve % 2 === 0));
console.log(even);

// Задание 15

let massiv15 = [];
for (let i = 0; i < 6; i++) {
    massiv15[i] = Math.ceil(Math.random() * 10);
}
console.log(massiv15);
let sum = massiv15.reduce((total, number) => total + number, 0);
console.log(sum / 6);