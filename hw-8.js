// Задание 1

let people = [
	{ name: 'Глеб', age: 29 },
	{ name: 'Анна', age: 17 },
	{ name: 'Олег', age: 7 },
	{ name: 'Оксана', age: 47 }
 ];
 

console.log(people.sort((a, b) => a.age - b.age));

//Задание 2

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        if (ruleFunction(array[i])) { 
            result.push(array[i]);
        }
    }
    return result; 
}

console.log(filter([3, -4, 1, 9], isPositive)); 

people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale)); 
 
// Задание 3

function logCurrentDate() {
    const currentDate = new Date();
    console.log(currentDate.toString());
}

const intervalId = setInterval(logCurrentDate, 3000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log('30 секунд прошло');
}, 30000);

// Задание 4 изменил время на 4с для наглядности.

function delayForSecond4(callback) {
    setTimeout(callback, 4000);
}

delayForSecond4(function () {
    console.log('Привет, Глеб!');
});

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => sayHi('Антон'));