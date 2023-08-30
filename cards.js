
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

//Para mostrar los botones

const valoresArray = [1, 2, 3, 4, 6, 8, 10, 12, 15, 20, 25];
        const jugadores = 3;

        const container = document.getElementById('container');
        const siguienteButton = document.getElementById('siguiente');

        let turnoActual = 0;
        const jugadoresContadores = [];

        for (let i = 0; i < jugadores; i++) {
            jugadoresContadores.push(0);
        }

        function actualizarTurno() {
            container.innerHTML = ''; // Limpiar el contenido del contenedor

            const jugadorDiv = document.createElement('div');
            jugadorDiv.innerHTML = `<h2>Jugador ${turnoActual + 1}</h2>`;
            
            const contador = document.createElement('p');
            contador.textContent = `Contador: ${jugadoresContadores[turnoActual]}`;
            jugadorDiv.appendChild(contador);

            for (const valor of valoresArray) {
                const button = document.createElement('button');
                button.textContent = valor;
                button.addEventListener('click', () => {
                    if (!button.disabled) {
                        jugadoresContadores[turnoActual] += valor;
                        contador.textContent = `Contador: ${jugadoresContadores[turnoActual]}`;
                        button.disabled = true;
                    }
                });

                jugadorDiv.appendChild(button);
            }
            
            container.appendChild(jugadorDiv);
        }

        function pasarSiguiente() {
            jugadoresContadores[turnoActual] = 0; // Reiniciar contador
            turnoActual = (turnoActual + 1) % jugadores;
            siguienteButton.style.display = 'block'; // Mostrar el botón "Siguiente"
            actualizarTurno();
        }

        siguienteButton.addEventListener('click', pasarSiguiente);

        siguienteButton.style.display = 'block'; // Mostrar el botón "Siguiente" al principio
        actualizarTurno();
