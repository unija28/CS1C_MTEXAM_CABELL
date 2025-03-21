let FavoriteNumber = 28;
let correct = false;

while (!correct) {
    var guessNumber = parseInt(prompt("Can you guess my favorite number?"), 10);

    if (guessNumber < FavoriteNumber) {
        console.log("Too Low!");
    } else if (guessNumber > FavoriteNumber) {
        console.log("Too High!");
    } else {
        console.log("Correct!");
    }
}
