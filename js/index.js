const PASSWORD = "052"

function checkWin() {
    var userGuess = document.getElementById('passbox').value;
    if (userGuess === PASSWORD) {
        document.getElementById('page').innerHTML = "<h1>Well done, you solved the puzzle</h1><br><p>The puzzle was taken from <a href='https://www.amazon.co.uk/Sherlock-Holmes-Mind-Palace-Puzzles/dp/1787395537/ref=sr_1_1?keywords=mind+palace+puzzles'>Mind Palace Puzzles</a>, which contains within it the best tutorial on becoming an expert on mind palaces as well as a lot of puzzles. I highly recommend it</p><br><p>Now it's time for your actual present: Please log into thewoman@sherllymail.com <a href='https://sherllymail.com'>here</a>. You can ask me for the password.";
    }
    else {
        document.getElementById('passbox').style.borderColor = "red";
        document.getElementById('passbox').value = "";
    }
}

