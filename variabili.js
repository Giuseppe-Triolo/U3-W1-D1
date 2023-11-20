function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
function calculateDifference(target, guess) {
    return Math.abs(target - guess);
}
function vincitore(player1, player2, target) {
    var diffPlayer1 = calculateDifference(target, player1.guess);
    var diffPlayer2 = calculateDifference(target, player2.guess);
    if (player1.guess === target || player2.guess === target) {
        return "".concat(player1.guess === target ? player1.name : player2.name, " ha indovinato!");
    }
    else {
        return "nessuno ha indovinato, ma ".concat(diffPlayer1 < diffPlayer2 ? player1.name : player2.name, " si \u00E8 avvicinato di pi\u00F9 al numero.");
    }
}
var player1 = { name: "Mario", guess: 20 };
var player2 = { name: "Filippo", guess: 75 };
var numeroRandom = randomNumber();
console.log("Il numero casuale generato \u00E8: ".concat(numeroRandom));
console.log(vincitore(player1, player2, numeroRandom));
