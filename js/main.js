//IIFE Where everything is handled
(function () {
    //Adding the HTML for the start screen before the board 
    $(".board").before('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><div class="twoPlayerOptions"><a href="#" style="margin: 2%;" class="button startButton newGame">Start game</a><br><br><br><p>Optional:</p>Player One: <input type="text" class="playerOneName"><br><br>Player Two: <input type="text" class="playerTwoName"><br></div></header</div>');

    //This Module handles the initial creatation of the game and restart games
    Module = {

        //Hides all screens but the start screen
        start: function () {
            $(".board").css("display", "none");
            $(".screen-win-one").css("display", "none");
            $(".screen-win-two").css("display", "none");
            $(".screen-win-tie").css("display", "none");
            $(".screen-start").css("display", "block");
        },

        //Hides all screens but the board.
        gameBoardReset: function () {
            $(".screen-win-one").css("display", "none");
            $(".screen-win-two").css("display", "none");
            $(".screen-win-tie").css("display", "none");
            $(".screen-start").css("display", "none");
            $(".board").css("display", "block");
        },

        //Starts the Games with playerOne in the start place
        initiatePlayerOne: function () {
            $("#player2").addClass("active");
            $(".box").not('.box-filled-2, .box-filled-1').hover(function () {
                if ($(".player1").hasClass("active")) {
                    if (!$(".box").hasClass('box-filled-1')) {
                        if (!$(".box").hasClass('box-filled-2')) {
                            $(this).css("background-image", 'url(' + "img/o.svg" + ')')
                        }
                    }
                }
            }, function () {
                $(this).css("background-image", '')
            })
        },

        //Adds a box class with a number to each box element for later evaluation.
        appendBoxNums: function () {
            $(".box").each(function (i) {
                $(this).addClass('box-' + (i + 1));
            });
        },
    };

    //Adding the HTML to be displayed after the board in the Dom to be referenced
    $('.startButton').click(function () {

        //If player one has a name use it, otherwise start blank.
        if ($('.playerOneName').val() !== '') {
            $(".board").after('<div class="screen screen-win  screen-win-one" id="finish"><header><h2>' + $('.playerOneName').val().toUpperCase() + ' IS THE WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        } else {
            $(".board").after('<div class="screen screen-win  screen-win-one" id="finish"><header><h2>WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        }
        //If player Two has a name use it, otherwise start blank.
        if ($('.playerTwoName').val() !== '') {
            $(".board").after('<div class="screen screen-win  screen-win-two" id="finish"><header><h2>' + $('.playerTwoName').val().toUpperCase() + ' IS THE WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        } else {
            $(".board").after('<div class="screen screen-win  screen-win-two" id="finish"><header><h2>WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        }

        //This gets appended if there were to be a tie
        $(".board").after('<div class="screen screen-win screen-win-tie" id="finish"><header><h2>Tie Game!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');

        //When start game button is click the first game is started
        $(".newGame").click(function () {

            Module.gameBoardReset();

        });
    });

    //When New game is selected the game restarts
    $(".newGame").click(function () {

        Module.gameBoardReset();

    });

    //Display Nothing, but Start Screen
    Module.start();


    //Player one always starts the game
    Module.initiatePlayerOne();


    //Adds Class to boxes so that we can evaluate a winning condition.
    Module.appendBoxNums();


    //    //IIFE Where the board is handled
    //    (function () {
    $(".box, .newGame").click(function () { //This allows the start click to set the player to be fully active.

        //If player one is active we do this:
        if ($(".player1").hasClass("active")) {
            // Adds the class to the selected button.
            $(this).addClass("box-filled-1");

            //Changes the players class
            $(".player1").removeClass("active");
            $(".player2").addClass("active");
            $(".playerOne").css("display", "none");

            //Handles the players name being displayed
            if ($('.playerTwoName').val() !== '') {
                $(".playerOne").css("display", "none");
                $(".boxes").before("<h2 class='playerTwo' style='text-align: center; align-content: center;'>It is " + $('.playerTwoName').val() + "'s turn.</h2>")
            }

            //Handles the highlighting on the players square
            $(".box").not('.box-filled-2, .box-filled-1').hover(function () {
                if ($(".player1").hasClass("active")) {
                    if (!$(this).hasClass('box-filled-1')) {
                        if (!$(this).hasClass('box-filled-2')) {
                            $(this).css("background-image", 'url(' + "img/o.svg" + ')')
                        }
                    }
                }
            }, function () {
                $(this).css("background-image", '')
            })

        } else if ($(".player2").hasClass("active")) {
            // Adds the class to the selected button.
            $(this).addClass("box-filled-2");

            //Changes the players class
            $(".player2").removeClass("active");
            $(".player1").addClass("active");
            $(".playerTwo").css("display", "none");

            //Handles the players name being displayed
            if ($('.playerOneName').val() !== '') {
                $(".playerTwo").css("display", "none");
                $(".boxes").before("<h2 class='playerOne' style='text-align: center; align-content: center;'>It is " + $('.playerOneName').val() + "'s turn.</h2>")
            }

            //Handles the highlighting on the players square
            $(".box").not('.box-filled-2, .box-filled-1').hover(function () {
                if ($(".player2").hasClass("active")) {
                    if (!$(this).hasClass('box-filled-1')) {
                        if (!$(this).hasClass('box-filled-2')) {
                            $(this).css("background-image", 'url(' + "img/x.svg" + ')')
                        }
                    }
                }
            }, function () {
                $(this).css("background-image", '')
            })
        }

        //Resets the board when the winning evaluation is determined
        function resetBoard(screen) {
            $(".box").removeClass('box-filled-1')
            $(".box").removeClass('box-filled-2')
            $(".board").css("display", "none");
            $(screen).css("display", "block");
        }

        //This Mass of code handles the possible winning outcomes for each player:
        if ($(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-9").hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-2").hasClass('box-filled-1') && $(".box-3").hasClass('box-filled-1') || $(".box-4").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') || $(".box-7").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-4").hasClass('box-filled-1') && $(".box-7").hasClass('box-filled-1') || $(".box-2").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') || $(".box-3").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-3").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-7").hasClass('box-filled-1')) {
            //Resets the board
            resetBoard(".screen-win-one");
        } else if ($(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-9").hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-2").hasClass('box-filled-2') && $(".box-3").hasClass('box-filled-2') || $(".box-4").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') || $(".box-7").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-4").hasClass('box-filled-2') && $(".box-7").hasClass('box-filled-2') || $(".box-2").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') || $(".box-3").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-3").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-7").hasClass('box-filled-2')) {
            resetBoard(".screen-win-two");
        } else if ($('.box-filled-2').length === 5 || $('.box-filled-1').length === 5) {
            resetBoard(".screen-win-tie");
        }
    })
}());
