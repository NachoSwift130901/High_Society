
//Set inicial de 11 money cards
const moneyCards = ['1', '2', '3', '4','6','8','10','12','15','20','25'];

//Set de cartas para el mazo
const luxuryCards = ['1','2','3','4','5','6','7','8','9','10'];
const recognitionCards =['avantGarde','bonVivant','joieDeVivre'];
const misfortuneCards=['fauxPas','scaddale','pasee'];

//Contadores para el seguimiento de las tarjetas con fondo verde oscuro
//Las cuales terminan el juego cuando hayan salido 4
let endingCards = 0;

//Creacion del mazo
const deck = [];

//Funcion para agregar cartas al mazo
function addCardsToDeck(cards) {
    deck.push(...cards);
}

//Agregar las cartas al mazo
addCardsToDeck(luxuryCards);
addCardsToDeck(recognitionCards);
addCardsToDeck(misfortuneCards);

//Funcion para barajar usando Fisher-Yates
function shuffleDeck(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
}

//Barajar el mazo
shuffleDeck(deck);

//Funcion para sacar la siguiente carta
function nextCard() {
    if (deck.length === 0) {
      console.log("El mazo está vacío");
      return null;
    }
    const card = deck.pop();

    if(recognitionCards.includes(card) || card ==='scaddale'){
        endingCards++;
        
        const endingCardsid = document.getElementById("endingCards");
        endingCardsid.textContent = endingCards;

        if(endingCards === 4){
            endingCardsid.textContent = 'GAME OVER';
        }
    }
    return card;
  }




//Funcion para mostrar la siguiente carta
  
  function showCard() {
    const card = nextCard();
    if (card !== null) {
      const shownCard = document.getElementById("showedCard");
      shownCard.textContent = card;
    }
  }