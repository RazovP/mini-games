// Игра угадай число
function guessGame() {
    let hiddenNumber = Math.ceil(Math.random() * 100);
    console.log(hiddenNumber);
    let userNumber = (prompt("Угадайте загаданное число от 1 до 100"));

    while (hiddenNumber != userNumber) {
        if (userNumber === null) {
            return;

        } else if (isNaN(userNumber)) {
            userNumber = prompt(`Вы ввели не число, попробуйте еще раз.`);
        } else if (hiddenNumber > userNumber) {
            userNumber = prompt(`Загаданное число больше ${userNumber}, попробуй еще раз!`);
        } else {
            userNumber = prompt(`Загаданное число меньше ${userNumber}, попробуй еще раз!`);
        }

    }

    alert("Молодец, ты угадал загаданное число!!!!")
}

// Игра простая арифметика

function arifm() {
    const firstNumber = Math.ceil(Math.random() * 20);
    const secondNumber = Math.ceil(Math.random() * 20);
    const operations = ['+', '-', '*', '/'];
    const randomOperation = Math.ceil(Math.random() * 4);
    let result
    switch (randomOperation) {
        case 1:
            result = firstNumber + secondNumber;
            break;
        case 2:
            result = firstNumber - secondNumber;
            break;
        case 3:
            result = firstNumber * secondNumber;
            break;
        case 4:
            result = firstNumber / secondNumber;
            break;
        default:
            break;

    }
    result = Math.round(result * 10) / 10;
    console.log(result);
    userNumber = prompt(`Введите результат арифметической операции: ${firstNumber} ${operations[randomOperation - 1]} ${secondNumber}. Если результат не целое число, округлите его до первого знака после запятой.`);


    while (userNumber != result) {
        if (userNumber === null) {
            return;
        }
        userNumber = prompt(`Неверно, попробуйте еще раз! Введите результат арифметической операции: ${firstNumber} ${operations[randomOperation - 1]} ${secondNumber}`);
    }
    alert(`Молодец!!!`)

}

// Игра переверни текст

function revers() {
    let wordUser = prompt(`Введите любое слово, а мы его перевернем!`);
    if (wordUser === null) {
        return;
    }
    let wordRevers = wordUser.split('').reverse().join('');
    alert(`Слово наоборот: ${wordRevers}`);

}

// Игра Викторина

function quiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let userAnswer;
    let numerCorrect = 0;
    for (const index in quiz) {
        userAnswer = prompt(`${quiz[index].question} Выберите номер варианта ответа: ${quiz[index].options.join('; ')}`);
        console.log(userAnswer);

        if (userAnswer === null) {
            return;
        }
        if (userAnswer == quiz[index].correctAnswer) {
            numerCorrect++
        }

    }
    alert(`Колличество правильных ответов: ${numerCorrect}`);
}

// Игра "Камень, ножницы, бумага"
function knb() {

    let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();
    if (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага") {
        alert("Вы ввели что-то не так, пожалуйста, выберите: камень, ножницы или бумага.");
    } else {
        const options = ["камень", "ножницы", "бумага"];
        const computerChoice = options[Math.floor(Math.random() * options.length)];
        let result;
        if (userChoice === computerChoice) {
            result = "Ничья!";
        } else if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            result = "Вы победили!";
        } else {
            result = "Вы проиграли!";
        }

        alert(`Ваш выбор: ${userChoice}; Выбор компьютера: ${computerChoice}; Результат: ${result}`);
    }
}
