"use strict";

$(document).ready(function () {
let player="X";
let computer="O";
    let tab=[];
    let attribute;
    let endGame=9;
    let change;
    let oldValue;
    let turn;
    let start=false;
    let randomTurn;
    let playerr= $('#player');
    let OtherPlayer=$('#OtherPlayer');
    let currentPlayer=false
    let playerone;
    let playertwo;
    let totalMove;
    let turn_player=0;
    let turn_computer=0;
    playerr.click(function () {
    change= $('#symbol_computer').text();
      oldValue = $('#symbol_player').text();
        $('#symbol_player').text(change);
        $('#symbol_computer').text(oldValue)
    });
    OtherPlayer.click(function () {
        change= $('#symbol_computer').text();
        oldValue = $('#symbol_player').text();
        $('#symbol_player').text(change)
        $('#symbol_computer').text(oldValue)
    });
    $('#start_game').click(function () {
        console.log('ok');
        start=true;
        randomTurn= (Math.floor(Math.random() * 100))
        if((randomTurn>=50)){
            randomTurn=playerr;
            playerone=true;
            playertwo=false;
                playerr.addClass('validate_turn')
        turn_player+=2

        }else{
            playerone=false;
            randomTurn=OtherPlayer;
            playertwo=true;
                OtherPlayer.addClass('validate_turn')
            turn_computer+=2


        }



    });


$('.border').click(function () {
    if(start===true){
  attribute=  $(this).attr('id');
  if($(this).text()===""){
      tab.push(attribute);
      $(this).text(randomTurn.text())


          if(playerone===false){
              randomTurn=playerr;
              playerone=true;
              turn_player++

          }if(playertwo===false){
              randomTurn=OtherPlayer;
              playertwo=true;
              turn_computer++
          }

     



  }
    if(tab.length>=endGame){
        alert('Fin du game')
    }
    console.log(tab)
    }
})

});