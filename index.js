/* global getWinner */
var ifStarted;
var game = {
  items:[]
};


ifStarted = false;
window.addEventListener('load', function wListener() {
  'use strict';
  var startButton = document.querySelector('.startNewGame');
  var field = document.querySelector('.field');
  var cells = document.querySelectorAll('.cell');
  var winnerMessage = document.querySelector('.winner-message');
  var childes = field.childNodes;
  var i;

  function setEvents(event) {
    if (event.target.className !== 'field' && event.target.className !== 'row') {
      if (!event.target.classList.contains('x') && !event.target.classList.contains('o')) {
        if (document.querySelectorAll('.cell.x').length <= document.querySelectorAll('.cell.o').length) {
          event.target.classList.add('x');
        } else {
          event.target.classList.add('o');
        }
        if (document.querySelectorAll('.cell.x').length + document.querySelectorAll('.cell.o').length === 9) {
          field.removeEventListener('click', setEvents);
          ifStarted = false;
        }
      }
      setWinner('x', 'Хрестик переміг!!!');
      setWinner('o', 'Нулик переміг!!!');


    }
  }

  function setWinner(xo, xoMessage) {
    if (getWinner() === xo) {
      field.removeEventListener('click', setEvents);
      winnerMessage.innerHTML = xoMessage;
      ifStarted = false;
    }
  }
  function startGame() {
    winnerMessage.innerHTML = '';
    for (i = 0; i < cells.length; i++) {
      cells[i].classList.remove('x', 'o');
    }


    console.log (childes);
    for (i=1; childes.length<i; i++){
      console.log (childes[i]);
    }


    if (!ifStarted) {
    field.addEventListener('click', setEvents);
    }
    ifStarted = true;
  }


  startButton.addEventListener('click', startGame);
});

