$(document).ready(function () {
    //Adding the HTML for the start screen before the board 
    $(".board").before('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>');

    //Adding the HTML to be displayed after the board in the Dom to be referenced later. 
    $(".board").after('<div class="screen screen-win" id="finish"><header><h1>Tic Tac Toe</h1><p class="message"></p><a href="#" class="button">New game</a></header></div>');

    //Display Nothing, but Start Screen
    //$(".board").css("display", "none");
    $(".screen-win").css("display", "none");
    //$(".screen-start").css("display", "block");

    //DELETE AT END:
    $(".screen-start").css("display", "none");

    //When Start Game is clicked, the start screen disappears.
    //$('#start a').on('click', function () {
    //    $(".board").css("display", "");
    //    $(".screen-start").css("display", "none");
    //});




    //$(".box").hover(function () {
    //    $(this).css("background-image", 'url(' + "../img/x.svg" + ')')
    //}, function () {
    //    $(this).css("background-image", '')
    //})

    //$(".box").not('.box-filled-1').click(function () {
    //    $(this).addClass("box-filled-2");
    //})

    //$(".box").not('.box-filled-2').click(function () {
    //    $(this).addClass("box-filled-1");
    //})

    var currentTurn = 1; // 1 = X and player1


    if (currentTurn === 1) {

        $("#player1").removeClass("active");
        $("#player2").addClass("active");

        $(".box").not($('.box-filled-1'), $('.box-filled-2')).hover(function () {
            $(this).css("background-image", 'url(' + "img/x.svg" + ')')
        }, function () {
            $(this).css("background-image", '')
        })

        $(".box").not($('.box-filled-1'), $('.box-filled-2')).click(function () {
            $(this).addClass("box-filled-2");

        })

    }

    if (currentTurn === 2) {

        $("#player2").removeClass("active");
        $("#player1").addClass("active");

        $(".box").not($('.box-filled-2'), $('.box-filled-1')).hover(function () {
            $(this).css("background-image", 'url(' + "img/o.svg" + ')')
        }, function () {
            $(this).css("background-image", '')
        })


        $(".box").not($('.box-filled-2'), $('.box-filled-1')).click(function () {
            $(this).addClass("box-filled-1");

        })

    }



});
