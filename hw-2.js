// Задание 1
let a = 10;
alert(a);
a=20;
alert(a);

// Задание 2
const iphone1 = 2007;
alert(`Первый Iphone вышел в ${iphone1} году.`);

// Задание 3
const creatorJS="Brendan Eich";
alert(`${creatorJS} - американский программист, создатель языка программирования JavaScript.`);

// Задание 4
let q=10;
let w=2;
alert(`Сумма 10 и 2 равна ${q+w}, разность ${q-w}, произведение ${q*w}, частное ${q/w}`);

// Задание 5
let result=2**5
alert(`2 в 5 степени равняется ${result}`);

// Задание 6
q=9;
w=2;
alert(`Остаток от деления 9 на 2 равен ${q%w}`);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(`Задание 7, Ответ: ${num}`);

// Задание 8
let age = prompt("Сколько Вам лет?")
alert(age)

// Задание 9
const user = {
    name: "Pavel",
    age: 35,
    isAdmin: true
}

alert(`тип переменной имени ${typeof(user.name)} , возраста ${typeof(user.age)}, админ ${typeof(user.isAdmin)}`);

// Задание 10
let name = prompt("Как Вас зовут?");
alert(`Привет, ${name}!`);

// Доп задание

let number = prompt("Загадайте любое число");
let numberx2 = number * 2;
alert(numberx2);
let number3 = numberx2 + 10;
alert(number3);
let number4 = number3 / 2;
alert(number4);
let number5 = number4 - number;
alert(number5);
alert("Результат равен 5.")

