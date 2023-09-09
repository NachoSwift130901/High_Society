import Deck from "./cards.js?v6"
import Jugador from "./players.js?v2"

const deck = new Deck()
deck.shuffleDeck()
console.log(deck.cards)

const jugadores = [new Jugador("Jugador1"), new Jugador("Jugador2"), new Jugador("Jugador3")];

const container = document.getElementById('contenedor');

const inventario = ['3', '9', 'passe', 'bonVivant', 'joieDeVivre', 'scaddale'];
console.log(obtenerPuntaje(inventario))


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