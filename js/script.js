import Deck from "./cards.js?v6"
import Jugador from "./players.js?v4"

const deck = new Deck()
deck.shuffleDeck()
console.log(deck.cards)


const container = document.getElementById('contenedor');



const jugadores = [new Jugador("Taylor"), new Jugador("nacho"), new Jugador("ricochet")];


const contenedor = document.getElementById("jugadores-container");

crearDivJugador();



      function crearDivJugador(){
        jugadores.forEach((jugador) => {
          const jugadorDiv = document.createElement("div");
          jugadorDiv.classList.add("jugador"); // Puedes agregar una clase CSS para dar estilo al div
        
          // Crea elementos para mostrar los datos del jugador
          const nombreElement = document.createElement("p");
          nombreElement.textContent = `Jugador: ${jugador.obtenerNombre()}`;
        
          const apuestaElement = document.createElement("p");
          apuestaElement.textContent = `Apuesta Actual: ${jugador.obtenerBid()}`;
        
          const cartasElement = document.createElement("p");
          cartasElement.textContent = `Cartas: ${jugador.obtenerInventario().join(", ")}`;
        
          // const dineroElement = document.createElement("p");
          // dineroElement.textContent = `Dinero: ${jugador.obtenerDinero()}`;
        
          const botonesDineroDiv = document.createElement('div');
          botonesDineroDiv.classList.add("botonesDinero");
        
          mostrarDinero(jugador, botonesDineroDiv, apuestaElement);
        
          
        
          // Agrega los elementos al div del jugador
          jugadorDiv.appendChild(nombreElement);
          jugadorDiv.appendChild(apuestaElement);
          jugadorDiv.appendChild(cartasElement);
          
          jugadorDiv.appendChild(botonesDineroDiv);
        
          
          // Agrega el div del jugador al contenedor
          contenedor.appendChild(jugadorDiv);
        });
        }
      function mostrarDinero(jugador, contenedor, apuestaElement){
            const valoresArray = jugador.obtenerDinero();
            const valoresArrayImages = {
        
              '1': 'img/1francs.jpg',
              '2': 'img/2francs.jpg',
              '3': 'img/3francs.jpg',
              '4': 'img/4francs.jpg',
              '6': 'img/6francs.jpg',
              '8': 'img/8francs.jpg',
              '10': 'img/10francs.jpg',
              '12': 'img/12francs.jpg',
              '15': 'img/15francs.jpg',
              '20': 'img/20francs.jpg',
              '25': 'img/25francs.jpg',
              
            }

            for (const valor of valoresArray) {
              const button = document.createElement('button');
              const img = document.createElement('img');

              img.src = valoresArrayImages[valor];
              img.classList.add('botonesDinero');
              button.appendChild(img);


              button.addEventListener('click', () => {
                  const apuestaActual = jugador.obtenerBid();
                  const valorBoton = valor;
                  
                  const estaPresionado = button.style.backgroundColor === 'gray';

                  if (!estaPresionado) {
                    // Sumar el valor del botón a la apuesta del jugador
                    jugador.bid = apuestaActual + valorBoton;
                    // Cambiar el fondo del botón a gris
                    button.style.backgroundColor = 'gray';
                  } else {
                    // Restar el valor del botón de la apuesta del jugador
                    jugador.bid = apuestaActual - valorBoton;
                    // Cambiar el fondo del botón a su estado original (no gris)
                    button.style.backgroundColor = ''; 
                  }
                  apuestaElement.textContent = `Apuesta Actual: ${jugador.obtenerBid()}`;
            });
            contenedor.appendChild(button);
          }
      }
      function obtenerPuntaje(inventario){
        let puntaje = 0;

        for (let i = 0; i < inventario.length; i++) {
            const carta = inventario[i];
            
            if (carta >= 1 && carta <= 10) {
              puntaje += parseInt(carta);
            } else if (carta === 'passe') {
              puntaje -= 5;
            } else if (carta === 'scaddale') {
              puntaje /= 2;
            } else if (carta === 'avantGarde' || carta === 'bonVivant' || carta === 'joieDeVivre') {
              puntaje *= 2;
            }
          }
        return puntaje;

      }
      function ofertaMasAlta(){
        
      }