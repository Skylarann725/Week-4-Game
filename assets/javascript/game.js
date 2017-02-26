    $(document).ready(function() {
        var Random = Math.floor(Math.random() * 120 + 19)
        console.log(Random)
        $('#numberToGuess').text(Random);

        var targetNumbers = [];
        var counter = 0;
        var wins = 0;
        var losses = 0;

        $('#numberWins').text(wins);
        $('#numberLosses').text(losses);

        //for loop to create jewels for every numberOption.
        function fourRandomNumbers() {
            for (var i = 0; i < 4; i++) {
                var numberOptions = Math.floor(Math.random() * 12 + 1);
                targetNumbers.push(numberOptions);
            }
            console.log(targetNumbers)
        }

        fourRandomNumbers();

        //resets the game
        function reset() {
            Random = Math.floor(Math.random() * 120 + 19);
            console.log(Random)
            $('#numberToGuess').text(Random);
            targetNumbers = [];
            fourRandomNumbers();
            counter = 0;
            $('#score').text(counter);
        }

        //adds the wins to the total
        function winner() {
            wins++;
            $('#numberWins').text(wins);
            setTimeout(function(){ alert("You won!!!"); }, 100);
           
            setTimeout(function(){ reset(); }, 100);
        }

        //adds the losses to the total
        function loser() {
            losses++;
            $('#numberLosses').text(losses);
            setTimeout(function(){ alert("You lose!!"); }, 100);
            
            setTimeout(function(){ reset(); }, 100);
        }

        //sets up click for jewels
        $('#yellowJewel').on('click', function() {
            counter = counter + targetNumbers[0];
            console.log("New total= " + counter);
            $('#score').text(counter);

            //sets win/lose conditions
            if (counter == Random) {
                winner();
            } else if (counter > Random) {
                loser();
            }
        })

        $('#redJewel').on('click', function() {
            counter = counter + targetNumbers[1];
            console.log("New total= " + counter);
            $('#score').text(counter);

            if (counter == Random) {
                winner();
            } else if (counter > Random) {
                loser();
            }
        })

        $('#blueJewel').on('click', function() {
            counter = counter + targetNumbers[2];
            console.log("New total= " + counter);
            $('#score').text(counter);

            //sets win/lose conditions
            if (counter == Random) {
                winner();
            } else if (counter > Random) {
                loser();
            }
        })

        $('#greenJewel').on('click', function() {
            counter = counter + targetNumbers[3];
            console.log("New total= " + counter);
            $('#score').text(counter);


            if (counter == Random) {
                winner();
            } else if (counter > Random) {
                loser();
            }
        });

    });
