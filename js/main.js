$(document).ready(function () {
    //Adding the HTML for the start screen before the board 
    $(".board").before('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><div class="twoPlayerOptions"><a href="#" style="margin: 2%;" class="button startButton newGame">Start game</a><br><br><br>Player One: <input type="text" class="playerOneName"><br><br>Player Two: <input type="text" class="playerTwoName"><br></div></header</div>');


    //<a href="#" style="margin: 2%;" class="button singlePlayerButton">Single Player</a><a href="#" style="margin: 2%;" class="button twoPlayerButton">Two Player</a>
    //    $('.twoPlayerOptions').css("display", "none");
    //    $('.twoPlayerButton').click(function () {
    //        $('.twoPlayerOptions').css("display", "block");
    //        $(".twoPlayerButton").css("display", "none");
    //        $(".singlePlayerButton").css("display", "none");
    //
    //    });

    $('.singlePlayerButton').click(function () {
        $('.player2').addClass('AI');
        $(".screen-win-one").css("display", "none");
        $(".screen-win-two").css("display", "none");
        $(".screen-win-tie").css("display", "none");
        $(".screen-start").css("display", "none");
        $(".board").css("display", "block");

    });


    //Adding the HTML to be displayed after the board in the Dom to be referenced to if player onw wins. 
    $('.startButton').click(function () {

        if ($('.playerOneName').val() !== '') {
            $(".board").after('<div class="screen screen-win  screen-win-one" id="finish"><header><h2>' + $('.playerOneName').val().toUpperCase() + ' IS THE WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        } else {
            $(".board").after('<div class="screen screen-win  screen-win-one" id="finish"><header><h2>WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        }

        if ($('.playerTwoName').val() !== '') {
            $(".board").after('<div class="screen screen-win  screen-win-two" id="finish"><header><h2>' + $('.playerTwoName').val().toUpperCase() + ' IS THE WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        } else {
            $(".board").after('<div class="screen screen-win  screen-win-two" id="finish"><header><h2>WINNER!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
        }

        $(".newGame").click(function () {

            $(".screen-win-one").css("display", "none");
            $(".screen-win-two").css("display", "none");
            $(".screen-win-tie").css("display", "none");
            $(".screen-start").css("display", "none");
            $(".board").css("display", "block");

        });
    });

    $(".board").after('<div class="screen screen-win screen-win-tie" id="finish"><header><h2>Tie Game!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');

    //    $(".board").after('<div class="screen screen-win  screen-win-one" id="finish"><header><h2>You Beat the AI!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');
    //
    //    $(".board").after('<div class="screen screen-win  screen-win-two" id="finish"><header><h2>AI has won!</h2><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button newGame">New game</a></header></div>');



    $('.playerOneName').keyup(function () {
        $(".playerOne").css("display", "none");
        $(".boxes").before("<h2 class='playerOne' style='text-align: center; align-content: center;'>It is " + $('.playerOneName').val() + "'s turn.</h2>")
    });

    $(".newGame").click(function () {

        $(".screen-win-one").css("display", "none");
        $(".screen-win-two").css("display", "none");
        $(".screen-win-tie").css("display", "none");
        $(".screen-start").css("display", "none");
        $(".board").css("display", "block");

    });

    //Display Nothing, but Start Screen
    $(".board").css("display", "none");
    $(".screen-win-one").css("display", "none");
    $(".screen-win-two").css("display", "none");
    $(".screen-win-tie").css("display", "none");
    $(".screen-start").css("display", "block");

    //    //DELETE AT END:
    //    $(".screen-start").css("display", "none");


    //Player one always starts the game
    $("#player1").addClass("active");
    //    $(".box").not($('.box-filled-2'), $('.box-filled-1')).hover(function () {
    //        $(this).css("background-image", 'url(' + "img/o.svg" + ')')
    //    }, function () {
    //        $(this).css("background-image", '')
    //    })

    $(".box").each(function (i) {
        $(this).addClass('box-' + (i + 1));
    });
    var player = 1; // 1 = o, 2 = x






    (function () {
        $(".box").click(function () {

            if (!$(this).hasClass('box-filled-1')) {
                if (!$(this).hasClass('box-filled-2')) {
                    if ($(".player1").hasClass("active")) {



                        $(this).addClass("box-filled-1");
                        $(".player1").removeClass("active");
                        $(".player2").addClass("active");
                        $(".playerOne").css("display", "none");

                        if ($('.playerTwoName').val() !== '') {
                            $(".playerOne").css("display", "none");
                            $(".boxes").before("<h2 class='playerTwo' style='text-align: center; align-content: center;'>It is " + $('.playerTwoName').val() + "'s turn.</h2>")
                        }


                        //                        $(".box").not($('.box-filled-1'), $('.box-filled-2')).hover(function () {
                        //                            $(this).css("background-image", 'url(' + "img/x.svg" + ')')
                        //                        }, function () {
                        //                            $(this).css("background-image", '')
                        //                        })

                    } else if ($(".player2").hasClass("active")) {

                        $(this).addClass("box-filled-2");
                        $(".player2").removeClass("active");
                        $(".player1").addClass("active");
                        $(".playerTwo").css("display", "none");



                        if ($('.playerOneName').val() !== '') {
                            $(".playerTwo").css("display", "none");
                            $(".boxes").before("<h2 class='playerOne' style='text-align: center; align-content: center;'>It is " + $('.playerOneName').val() + "'s turn.</h2>")
                        }

                        //                        $(".box").not($('.box-filled-2'), $('.box-filled-1')).hover(function () {
                        //                            $(this).css("background-image", 'url(' + "img/o.svg" + ')')
                        //                        }, function () {
                        //                            $(this).css("background-image", '')
                        //                        })

                    }
                }
            }

            //            if ($(".player2").hasClass("active")) { // This is where the AI will go
            //                if ($(".player2").hasClass("AI")) {
            //
            //                    var playableSpaces = []; // I want the box-number in here
            //                    var options = playableSpaces.push($('.box:not(box-filled-1)'));
            //                    alert(options);
            //
            //                    if (!$('.box').hasClass('box-filled-1') && !$('.box').hasClass('box-filled-2')) {
            //                        const randNum = Math.floor(Math.random() * 4);
            //                    }
            //                }
            //            }

            //First Play:
            //                    if ($('.box-filled-1').length < 2) {
            //                        if (!$(".box-5").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-5").click();
            //                            }, 500);
            //                        } else {
            //                            const bestMove = [1, 3, 7, 9];
            //                            const randNum = Math.floor(Math.random() * 4);
            //                            setTimeout(function () {
            //                                $(".box-" + bestMove[randNum] + "").click();
            //                            }, 500);
            //                        }
            //                    } else if ($(".box-1").hasClass('box-filled-1') && $(".box-2").hasClass('box-filled-1') && !$(".box-3").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-3").click();
            //                        }, 500);
            //                    } else if ($(".box-4").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-6").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-6").click();
            //                        }, 500);
            //                    } else if ($(".box-7").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') && !$(".box-9").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-9").click();
            //                        }, 500);
            //                    } else if ($(".box-2").hasClass('box-filled-1') && $(".box-3").hasClass('box-filled-1') && !$(".box-1").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-1").click();
            //                        }, 500);
            //                    } else if ($(".box-5").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') && !$(".box-4").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-4").click();
            //                        }, 500);
            //                    } else if ($(".box-8").hasClass('box-filled-1') && $(".box-9").hasClass('box-filled-1') && !$(".box-7").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-7").click();
            //                        }, 500);
            //                    } else if ($(".box-1").hasClass('box-filled-1') && $(".box-4").hasClass('box-filled-1') && !$(".box-7").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-7").click();
            //                        }, 500);
            //                    } else if ($(".box-2").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-8").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-8").click();
            //                        }, 500);
            //                    } else if ($(".box-3").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') && !$(".box-9").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-9").click();
            //                        }, 500);
            //                    } else if ($(".box-9").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') && !$(".box-3").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-3").click();
            //                        }, 500);
            //                    } else if ($(".box-8").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-2").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-2").click();
            //                        }, 500);
            //                    } else if ($(".box-7").hasClass('box-filled-1') && $(".box-4").hasClass('box-filled-1') && !$(".box-1").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-1").click();
            //                        }, 500);
            //                    } else if ($(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-9").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-9").click();
            //                        }, 500);
            //                    } else if ($(".box-9").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-1").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-1").click();
            //                        }, 500);
            //                    } else if ($(".box-3").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-7").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-7").click();
            //                        }, 500);
            //                    }
            //                    if ($(".box-7").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && !$(".box-3").hasClass('box-filled-1')) {
            //                        setTimeout(function () {
            //                            $(".box-3").click();
            //                        }, 500);
            //                    } else if ($(".box-1").hasClass('box-filled-2') && $(".box-2").hasClass('box-filled-2') && !$(".box-3").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-3").click();
            //                        }, 500);
            //                    } else if ($(".box-4").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-6").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-6").click();
            //                        }, 500);
            //                    } else if ($(".box-7").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') && !$(".box-9").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-9").click();
            //                        }, 500);
            //                    } else if ($(".box-2").hasClass('box-filled-2') && $(".box-3").hasClass('box-filled-2') && !$(".box-1").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-1").click();
            //                        }, 500);
            //                    } else if ($(".box-5").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') && !$(".box-4").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-4").click();
            //                        }, 500);
            //                    } else if ($(".box-8").hasClass('box-filled-2') && $(".box-9").hasClass('box-filled-2') && !$(".box-7").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-7").click();
            //                        }, 500);
            //                    } else if ($(".box-1").hasClass('box-filled-2') && $(".box-4").hasClass('box-filled-2') && !$(".box-7").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-7").click();
            //                        }, 500);
            //                    } else if ($(".box-2").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-8").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-8").click();
            //                        }, 500);
            //                    } else if ($(".box-3").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') && !$(".box-9").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-9").click();
            //                        }, 500);
            //                    } else if ($(".box-9").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') && !$(".box-3").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-3").click();
            //                        }, 500);
            //                    } else if ($(".box-8").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-2").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-2").click();
            //                        }, 500);
            //                    } else if ($(".box-7").hasClass('box-filled-2') && $(".box-4").hasClass('box-filled-2') && !$(".box-1").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-1").click();
            //                        }, 500);
            //                    } else if ($(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-9").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-9").click();
            //                        }, 500);
            //                    } else if ($(".box-9").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-1").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-1").click();
            //                        }, 500);
            //                    } else if ($(".box-3").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-7").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-7").click();
            //                        }, 500);
            //                    } else if ($(".box-7").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && !$(".box-3").hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $(".box-3").click();
            //                        }, 500);
            //                    } else if ($(".box-1").hasClass('box-filled-2')) {
            //                        if (!$(".box-2").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-2").click();
            //                            }, 500);
            //                        } else if (!$(".box-4").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-4").click();
            //                            }, 500);
            //                        }
            //                    } else if ($(".box-3").hasClass('box-filled-2')) {
            //                        if (!$(".box-2").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-2").click();
            //                            }, 500);
            //                        } else if (!$(".box-6").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-6").click();
            //                            }, 500);
            //                        }
            //                    } else if ($(".box-9").hasClass('box-filled-2')) {
            //                        if (!$(".box-8").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-8").click();
            //                            }, 500);
            //                        } else if (!$(".box-6").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-6").click();
            //                            }, 500);
            //                        }
            //                    } else if ($(".box-7").hasClass('box-filled-2')) {
            //                        if (!$(".box-4").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-4").click();
            //                            }, 500);
            //                        } else if (!$(".box-8").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-8").click();
            //                            }, 500);
            //                        }
            //                    } else if ($(".box-5").hasClass('box-filled-2')) {
            //                        if (!$(".box-2").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-2").click();
            //                            }, 500);
            //                        } else if (!$(".box-4").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-4").click();
            //                            }, 500);
            //                        } else if (!$(".box-6").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-6").click();
            //                            }, 500);
            //                        } else if (!$(".box-8").hasClass('box-filled-1')) {
            //                            setTimeout(function () {
            //                                $(".box-8").click();
            //                            }, 500);
            //                        }
            //                    } else if (!$('.box-6').hasClass('box-filled-2')) {
            //                        setTimeout(function () {
            //                            $('.box-6').click();
            //                        }, 500);
            //                    }


            //            if (!$(".player2").hasClass("AI")) {
            //                if ($(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-9").hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-2").hasClass('box-filled-1') && $(".box-3").hasClass('box-filled-1') || $(".box-4").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') || $(".box-7").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-4").hasClass('box-filled-1') && $(".box-7").hasClass('box-filled-1') || $(".box-2").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') || $(".box-3").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-3").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-7").hasClass('box-filled-1')) {
            //                    $(".box").removeClass('box-filled-1')
            //                    $(".box").removeClass('box-filled-2')
            //                    $(".board").css("display", "none");
            //                    $(".screen-win-one").css("display", "block");
            //                } else if ($(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-9").hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-2").hasClass('box-filled-2') && $(".box-3").hasClass('box-filled-2') || $(".box-4").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') || $(".box-7").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-4").hasClass('box-filled-2') && $(".box-7").hasClass('box-filled-2') || $(".box-2").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') || $(".box-3").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-3").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-7").hasClass('box-filled-2')) {
            //                    $(".box").removeClass('box-filled-1')
            //                    $(".box").removeClass('box-filled-2')
            //                    $(".board").css("display", "none");
            //                    $(".screen-win-two").css("display", "block");
            //                } else if ($('.box-filled-2').length === 5 || $('.box-filled-1').length === 5) {
            //                    $(".box").removeClass('box-filled-1')
            //                    $(".box").removeClass('box-filled-2')
            //                    $(".board").css("display", "none");
            //                    $(".screen-win-tie").css("display", "block");
            //                }
            //            } else {
            if ($(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-9").hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-2").hasClass('box-filled-1') && $(".box-3").hasClass('box-filled-1') || $(".box-4").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') || $(".box-7").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-4").hasClass('box-filled-1') && $(".box-7").hasClass('box-filled-1') || $(".box-2").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-8").hasClass('box-filled-1') || $(".box-3").hasClass('box-filled-1') && $(".box-6").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-1").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $('.box-9').hasClass('box-filled-1') || $(".box-3").hasClass('box-filled-1') && $(".box-5").hasClass('box-filled-1') && $(".box-7").hasClass('box-filled-1')) {
                $(".box").removeClass('box-filled-1')
                $(".box").removeClass('box-filled-2')
                $(".board").css("display", "none");
                $(".screen-win-one").css("display", "block");
            } else if ($(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-9").hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-2").hasClass('box-filled-2') && $(".box-3").hasClass('box-filled-2') || $(".box-4").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') || $(".box-7").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-4").hasClass('box-filled-2') && $(".box-7").hasClass('box-filled-2') || $(".box-2").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-8").hasClass('box-filled-2') || $(".box-3").hasClass('box-filled-2') && $(".box-6").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-1").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $('.box-9').hasClass('box-filled-2') || $(".box-3").hasClass('box-filled-2') && $(".box-5").hasClass('box-filled-2') && $(".box-7").hasClass('box-filled-2')) {
                $(".box").removeClass('box-filled-1')
                $(".box").removeClass('box-filled-2')
                $(".board").css("display", "none");
                $(".screen-win-two").css("display", "block");
            } else if ($('.box-filled-2').length === 5 || $('.box-filled-1').length === 5) {
                $(".box").removeClass('box-filled-1')
                $(".box").removeClass('box-filled-2')
                $(".board").css("display", "none");
                $(".screen-win-tie").css("display", "block");
            }
            //            }
        })




    }());
});
