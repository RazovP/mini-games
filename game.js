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