class Rocola {
  constructor(canciones, turnosParaRepetir) {
    this.canciones = canciones;
    this.turnosParaRepetir = turnosParaRepetir;
    this.historial = [];
  }

  reproducirCancion() {
    let cancion;

    do {
      cancion = this.canciones[Math.floor(Math.random() * this.canciones.length)];
    }while(this.historial.includes(cancion));

    this.historial.push(cancion);
    if(this.historial.length > this.turnosParaRepetir) {
      this.historial.shift();
    }

    console.log(`Reproduciendo: ${cancion}`);
    return cancion;
  }
}

const canciones = ['cancion1', 'cancion2', 'cancion3', 'cancion4', 'cancion5', 'cancion6', 'cancion7', 'cancion8', 'cancion9', 'cancion10'];
const rocola = new Rocola(canciones, 4);

for(let i = 0; i < 10; i++) {
  rocola.reproducirCancion();
}