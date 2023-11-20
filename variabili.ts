type Player = {
  name: string;
  guess: number;
};

function randomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}

function calculateDifference(target: number, guess: number): number {
  return Math.abs(target - guess);
}

function vincitore(player1: Player, player2: Player, target: number): string {
  const diffPlayer1 = calculateDifference(target, player1.guess);
  const diffPlayer2 = calculateDifference(target, player2.guess);

  if (player1.guess === target || player2.guess === target) {
    return `${player1.guess === target ? player1.name : player2.name} ha indovinato!`;
  } else {
    return `nessuno ha indovinato, ma ${
      diffPlayer1 < diffPlayer2 ? player1.name : player2.name
    } si è avvicinato di più al numero.`;
  }
}

const player1: Player = { name: "Mario", guess: 20 };
const player2: Player = { name: "Filippo", guess: 75 };

const numeroRandom: number = randomNumber();

console.log(`Il numero casuale generato è: ${numeroRandom}`);
console.log(vincitore(player1, player2, numeroRandom));
