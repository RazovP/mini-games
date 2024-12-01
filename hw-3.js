// Задание 1
let password="pass";
let userPass=prompt("Введите пароль");
if (password===userPass) {alert("Пароль введен верно.");

} else {
    alert("Пароль введен неправильно.")
}

// Задание 2
// Решил сделать включительно
let c=prompt("Ведите число от 0 до 10");
if (c>=0&&c<=10) {alert("Верно");

} else {
    alert("неверно");
}

// Задание 3
let d=prompt("Введите первое число");
let e=prompt("Введите второе число");
if (d>100||e>100) {alert("Верно");

} else {
    alert("Неверно")
}

// Задание 4
let a = '2';
let b = '3';
alert(+a + +b)

// Задание 5
let monthNumber = Number(prompt("Введите номер месяца"))
switch (monthNumber) {
    case 1:
        alert("это Зима...");
        break;
    case 2:
        alert("это Зима...");
        break;
    case 3:
        alert("это Весна..");
        break;
    case 4:
        alert("это Весна..");
        break;
    case 5:
        alert("это Весна..");
        break;
    case 6:
        alert("это ЛЕТО!!!...");
        break;
    case 7:
        alert("это ЛЕТО!!!...");
        break;
    case 8:
        alert("это ЛЕТО!!!...");
        break;
    case 9:
        alert("это Осень...");
        break;
    case 10:
        alert("это Осень...");
        break;
    case 11:
        alert("это Осень...");
        break;
    case 12:
        alert("это Зима...");
        break;

    default:
        alert("Вы что-то не то ввели!")
        break;
}

// Доп Задание 1
let chet = Number(prompt("Пожалуйста, введите любое число."));
chet %= 2;
    console.log(chet);
switch (chet) {
    case 0:
        alert("Число четное")
        break;
    case 1:
        alert("Число нечетное");
        break;
    default:
        alert("Вы что то не то ввели!");
        break;
}

// Доп Задание 2
let clientOS = Number(prompt("Выберете Вашу Операционную систему: 0 - iOS, 1 - Android"))
switch (clientOS) {
    case 0:
        alert("Установите версию приложения для iOS по ссылке .....")
        break;
    case 1:
        alert("Установите версию приложения для Android по ссылке .....")
        break;
    default:
        alert("Не смоли определить Вашу ОС!")
        break;
}

// Доп задание 3
clientOS = Number(prompt("Выберете Вашу Операционную систему: 0 - iOS, 1 - Android"))
let clientDeviceYear = Number(prompt("какого года производства модель вашего телефона?"));
switch (clientOS) {
    case 0:
        if (clientDeviceYear > 2015) {
            alert("Установите версию приложения для iOS по ссылке .....")
        } else {
            alert("Установите облегченную версию приложения для iOS по ссылке .....")
        }
        break;
    case 1:
        if (clientDeviceYear > 2015) {
            alert("Установите версию приложения для Android по ссылке .....")
        } else {
            alert("Установите облегченную версию приложения для Android по ссылке .....")
        }
        break;
    //Хочется еще как то проверить год ли ввели, но не очень понимаю как.
    default:
        alert("Не смоли определить Вашу ОС!")
        break;
}
// альтернативное громоздкое решение, но выполняется условие о 2 вложениях.
let checkYaer = clientDeviceYear % 2;

switch (checkYaer) {
    case 0:
        checkYaer = 1;
        break;
    case 1:
        checkYaer = 1;
        break;
    default:
        checkYaer = 0;
        alert("Не смогли определить год производства вашего устройства!")
        break;
}
let checkOS
switch (clientOS) {
    case 0:
        checkOS = 1;
        break;
    case 1:
        checkOS = 1;
        break;
    default:
        checkOS = 0;
        alert("Не смоли определить Вашу ОС!");
        break;
}
if (checkOS === 1 && checkYaer === 1){
    if (clientOS === 0 && clientDeviceYear>2015) {
        alert("Установите версию приложения для iOS по ссылке .....")
    }
    if (clientOS === 0 && clientDeviceYear<=2015) {
        alert("Установите облегченную версию приложения для iOS по ссылке .....")
    }
    if (clientOS === 1 && clientDeviceYear>2015) {
        alert("Установите версию приложения для Android по ссылке .....")
    }
    if (clientOS === 1 && clientDeviceYear<=2015) {
        alert("Установите облегченную версию приложения для Android по ссылке .....")
    }
}