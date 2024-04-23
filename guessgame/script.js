let cpu = Math.floor(Math.random() * 10 + 1);
let noOfGuess = 0;

function Result(randomNumber) {
    let user = document.getElementById("user").value;
    let parsedUser = Number(user);

    if (parsedUser > cpu) {
        noOfGuess++;
        alert("Too large");
    } else if (parsedUser < cpu) {
        noOfGuess++;
        alert("Too small");
    } else {
        noOfGuess++;
        let h1 = document.getElementById("h1");
        h1.innerHTML = `Congratulations! You guessed it right in ${noOfGuess} attempts`;
    }
}

