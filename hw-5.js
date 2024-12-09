// Задание 1

let min = (a, b) => {
    if (a >= b) {
        return b;
    } else {
        return a;
    }
}

console.log(min(8, 4));

// Задание 2

let even = (a) => {
    if (a % 2 === 0) {
        console.log("Число четное");
    } else {
        console.log("Число нечетное");
    }
}

even(52);

// Задание 3.1

let square1 = (a) => {
    console.log(a ** 2);
}

square1(6);

// Задание 3.2

let square2 = (a) => {
    return a ** 2;
}

let squar = square2(5);
console.log(squar);

// Задание 4

let age = (a) => {
    if (a >= 13) {
        alert("Добро пожаловать!");
    } else {
        if (a >= 0 && a < 13) {
            alert("Привет друг!");
        } else {
            alert("Вы ввели неправильное значение.")
        }
    }
}

age(prompt("Сколько вам лет?"));

// Задание 5

let twoNumber = () => {
    let a = Number(prompt("Введите первое число"));
    let b = Number(prompt("Введите второе число"));

    if (isNaN(a) || isNaN(b)) {
        alert("нечисло");
    } else {
        alert(a * b);
    }
}

twoNumber();

// Задание 6

let cube = () => {
    let n = Number(prompt("Введите число"));
    if (isNaN(n)) {
        alert("Переданный параметр не является числом!");
    } else {
        alert(`${n} в кубе равняется ${n ** 3}`);
    }
}

cube();

// Задание 7

function getCircleArea() {
    return Math.PI * this.radius ** 2
}

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius
}

const circle1 = {
    radius: 5,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

const circle2 = {
    radius: 8,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
}

console.log(circle1.getArea());
console.log(circle2.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getPerimeter());