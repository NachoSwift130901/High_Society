//Para mostrar los botones y los jugadores

const valoresArray = [1, 2, 3, 4, 6, 8, 10, 12, 15, 20, 25];


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

    


}


