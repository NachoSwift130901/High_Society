import Deck from "./cards.js?v6"
import Jugador from "./players.js?v2"

const deck = new Deck()
deck.shuffleDeck()
console.log(deck.cards)


const container = document.getElementById('contenedor');



const jugadores = [new Jugador("MARII"), new Jugador("nacho"), new Jugador("juan")];

const contenedor = document.getElementById("jugadores-container");

// Itera a través de la lista de jugadores y crea un div para cada uno
jugadores.forEach((jugador) => {
  const jugadorDiv = document.createElement("div");
  jugadorDiv.classList.add("jugador"); // Puedes agregar una clase CSS para dar estilo al div

  // Crea elementos para mostrar los datos del jugador
  const nombreElement = document.createElement("p");
  nombreElement.textContent = `Jugador: ${jugador.obtenerNombre()}`;

  const dineroElement = document.createElement("p");
  dineroElement.textContent = `Dinero: ${jugador.obtenerDinero().join(", ")}`;

  const cartasElement = document.createElement("p");
  cartasElement.textContent = `Cartas: ${jugador.obtenerInventario().join(", ")}`;

  const apuestaElement = document.createElement("p");
  apuestaElement.textContent = `Apuesta Actual: ${jugador.obtenerBid()}`;

  // Agrega los elementos al div del jugador
  jugadorDiv.appendChild(nombreElement);
  jugadorDiv.appendChild(apuestaElement);
  jugadorDiv.appendChild(cartasElement);
  jugadorDiv.appendChild(dineroElement);
  
  

  // Agrega el div del jugador al contenedor
  contenedor.appendChild(jugadorDiv);
});


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

    function mostrarDinero(jugadores){
      for (const valor of valoresArray) {
        const button = document.createElement('button');
        const img = document.createElement('img');
        img.src = valoresArrayImages[valor];

        img.classList.add('botonesDinero');

        button.appendChild(img);


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
    