let cardCount = 5;
let firstCard = secondCard = 0;
let win = 0;

function createNumber() {
  let number = [];
  for(let i = 1; i <= cardCount; i++) {
    // push dua angka karena kita membutuhkan dua angka
    // agar bisa mendapat pasangan kembar
    // dengan push(i, i) maka js akan push i sebanyak dua kali
    // karena kita menuliskan i sebanyak dua kali.
    number.push(i, i);
  }

  return number;
}

function randomNumberPosition(number) {
  let randNumber = number.sort(function() {
    return 0.5 - Math.random();
  });
  
  return randNumber;
}

function makeCard(randomNumberPosition) {
  let string = '';
  randomNumberPosition.forEach(function(i) {
    string += (
			'<div class="card" value="'+i+'">'+
				'<div class="back">'+ i +'</div>'+
				'<div class="front">CARD</div>'+
			'</div>'
		);
  });
  $(".board").append(string);
}

function gameRules() {
  $(".card").click(function() {
    $(this).addClass("flip");
    if(firstCard === 0) {
      firstCard = $(this).attr("value");
    } else {
      secondCard = $(this).attr("value");
      if(firstCard === secondCard) {
        win++;
        $('.flip').addClass("same");
        $('.same').removeClass("flip");
        firstCard = secondCard = 0;
        if(win === cardCount) {
          winningScreen();
        }
      } else {
        firstCard = secondCard = 0;
        $(this).one('transitionend', function() {
          $('.card').removeClass("flip");
        })
      }
    }
  });
}

function winningScreen() {
  $(".board").empty().html("<h3>CONGRATULATIONS</h3>");
  $.confetti.start();
}

$(document).ready(function() {
  let number = createNumber();
  let randomNumber = randomNumberPosition(number);

  makeCard(randomNumber);
  console.log(randomNumber);
  gameRules();
});