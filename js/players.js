//Para mostrar los botones y los jugadores

const valoresArray = [1, 2, 3, 4, 6, 8, 10, 12, 15, 20, 25];
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

export default class Jugador{
    constructor(nombre){
        this.nombre = nombre;
        this.dinero = [...valoresArray];
        this.inventario = [];
        this.fold = false;
        this.bid = 0;
    }
    obtenerNombre() {
        return this.nombre;
    }
    
    obtenerDinero() {
        return this.dinero;
    }
    
    obtenerInventario() {
        return this.inventario;
    }
    obtenerFold(){
        return this.fold;
    }
    obtenerBid(){
        return this.bid;
    }

    iniciarJugador(){
        this.dinero = [...valoresArray]
    }

}


