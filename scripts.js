cards = document.querySelectorAll('.memory-card');


function shuffelCards()
{
  cards = document.querySelectorAll('.memory-card');
  
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * (cards.length - 2)) + 1;

    let exchangeHTML = cards[0].innerHTML;
    cards[0].innerHTML = cards[randomPos].innerHTML;
    
    cards[randomPos].innerHTML = exchangeHTML;
  
  })
}

function flipCard() {
  this.classList.toggle('flip');
}

function setCardsListener(){
  cards = document.querySelectorAll('.memory-card');

  cards.forEach(card => {
    card.addEventListener('click', flipCard);
  })
}


function setCardsNumber()
{
  cards = document.querySelectorAll('.memory-card');
  
  cards.forEach((card, index) => {
    paragraph = card.querySelector('.back-face-fnt');
    paragraph.innerHTML = index + 1;
  })
}

shuffelCards();
setCardsListener();
setCardsNumber();

