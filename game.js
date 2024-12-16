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
        console.log(userNumber);
    }

    alert("Молодец, ты угадал загаданное число!!!!")
}