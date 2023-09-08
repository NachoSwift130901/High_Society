
//Set inicial de 11 money cards
const moneyCards = ['1', '2', '3', '4','6','8','10','12','15','20','25'];

//Set de cartas para el mazo
const luxuryCards = ['1','2','3','4','5','6','7','8','9','10'];

const recognitionCards =['avantGarde','bonVivant','joieDeVivre'];

const misfortuneCards=['fauxPas','scaddale','passe'];

const allCardsImages = {
  //Imagenes de las cartas luxury
  '1': 'img/luxury1.jpg',
  '2': 'img/luxury2.jpg',
  '3': 'img/luxury3.jpg',
  '4': 'img/luxury4.jpg',
  '5': 'img/luxury5.jpg',
  '6': 'img/luxury6.jpg',
  '7': 'img/luxury7.jpg',
  '8': 'img/luxury8.jpg',
  '9': 'img/luxury9.jpg',
  '10': 'img/luxury10.jpg',
  //Imagenes de las recognitio cards
  'avantGarde': 'img/avantGarde.jpg',
  'bonVivant': 'img/bonVivant.jpg',
  'joieDeVivre': 'img/joieDeVivre.jpg',
  //Imagenes de las misfortunteCards
  'fauxPas': 'img/fauxPas.jpg',
  'scaddale': 'img/scaddale.jpg',
  'pasee': 'img/pasee.jpg',
}

//Contadores para el seguimiento de las tarjetas con fondo verde oscuro
//Las cuales terminan el juego cuando hayan salido 4
let endingCards = 0;

//Contador para el num de rondas
let rondas=1;
document.getElementById("ronda").textContent = `Ronda: ${rondas}`; // Actualiza el contenido del div 'ronda'

//Contador para la apuesta mas alta
let apuestaMasAltaRonda = 0;
document.getElementById("apuestaMasAlta").textContent = `Apuesta Más Alta de la Ronda: ${apuestaMasAltaRonda}`;

//Contador para ver que todos los jugadores hayan hecho su apuesta
let jugadoresApuestaRealizada = 0;

// Jugadores retirados
let jugadoresRetirados = 0;


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

      const img = document.createElement('img');

      
        img.src = allCardsImages[card];
      

      shownCard.innerHTML='';

      shownCard.appendChild(img);
    }
  }


        //Para mostrar los botones y los jugadores

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

          
        // Actualizar el elemento "apuestasActuales" para mostrar todas las apuestas actuales
          const apuestasActualesDiv = document.getElementById('apuestasActuales');
          apuestasActualesDiv.innerHTML = 'Apuestas Actuales de los Jugadores:<br>';
          for (let i = 0; i < jugadores; i++) {
            apuestasActualesDiv.innerHTML += `Jugador ${i + 1}: ${jugadoresContadores[i]}<br>`;
          }
          

      
          for (const valor of valoresArray) {
              const button = document.createElement('button');
              button.textContent = valor;

      
              button.addEventListener('click', () => {
                const apuestaActual = jugadoresContadores[turnoActual] + valor;
                if (apuestaActual > apuestaMasAltaRonda || button.style.backgroundColor !== 'gray') {
                  jugadoresContadores[turnoActual] += (button.style.backgroundColor === 'gray' ? -valor : valor);
                  contador.textContent = `Contador: ${jugadoresContadores[turnoActual]}`;
                  button.style.backgroundColor = (button.style.backgroundColor === 'gray') ? '' : 'gray';
                }
                
            });
      
              jugadorDiv.appendChild(button);
          }
          
          container.appendChild(jugadorDiv);
      }

        function pasarSiguienteJugador() {
            jugadoresContadores[turnoActual] = 0; // Reiniciar contador
            turnoActual = (turnoActual + 1) % jugadores;
            siguienteButton.style.display = 'block'; // Mostrar el botón "Siguiente"

            // Incrementa el contador de rondas cuando todos los jugadores han realizado su apuesta
            jugadoresApuestaRealizada++;

            if (jugadoresApuestaRealizada === jugadores) {
              rondas++; // Incrementa el contador de rondas
              document.getElementById("ronda").textContent = `Ronda: ${rondas}`; // Actualiza el contenido del div 'ronda'
              jugadoresApuestaRealizada = 0; // Reinicia el contador de jugadores que han realizado su apuesta
              

              

              // Reiniciar la apuesta más alta de la ronda al finalizar la ronda
              apuestaMasAltaRonda = 0;
              document.getElementById("apuestaMasAlta").textContent = `Apuesta Más Alta de la Ronda: ${apuestaMasAltaRonda}`;

              // Actualiza el elemento "apuestasActuales" con la apuesta actual del jugador
              const apuestasActualesDiv = document.getElementById('apuestasActuales');
              apuestasActualesDiv.innerHTML += `Jugador ${turnoActual + 1}: ${jugadoresContadores[turnoActual]}<br>`;

              // Reinicia el contador de jugadores retirados
              jugadoresRetirados = 0;
    

          }


            actualizarTurno();
        }

        //Manejador de eventos al botón "Retirarse" para que los jugadores se retiren
        const retirarseButton = document.getElementById('retirarse');
        retirarseButton.addEventListener('click', () => {
                alert('te has retirado');
              // Marca al jugador actual como retirado
              jugadoresRetirados++;
              // Pasa al siguiente jugador
              pasarSiguienteJugador();
          });

        siguienteButton.addEventListener('click', () => {
          pasarSiguienteJugador();
        });

        siguienteButton.style.display = 'block'; // Mostrar el botón "Siguiente" al principio
        actualizarTurno();
        


        

        