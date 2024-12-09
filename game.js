// Игра угадай число
function guessGame() {
    let hiddenNumber = Math.ceil(Math.random() * 100);
    console.log(hiddenNumber);
    let userNumber = Number(prompt("Угадайте загаданное число от 1 до 100"));

    while (hiddenNumber != userNumber) {

        if (hiddenNumber > userNumber) {
            userNumber = prompt(`Загаданное число больше ${userNumber}, попробуй еще раз!`);
        } else {
            userNumber = prompt(`Загаданное число меньше ${userNumber}, попробуй еще раз!`);
        }
    }

    alert("Молодец, ты угадал загаданное число!!!!")
}