const canciones = ['cancion1', 'cancion2', 'cancion3', 'cancion4', 'cancion5', 'cancion6', 'cancion7', 'cancion8', 'cancion9', 'cancion10'];
const ultimasCanciones = [];

function rocola() {
  let cancion;

  do{
    cancion = canciones[Math.floor(Math.random() * canciones.length)];
  }while(ultimasCanciones.includes(cancion));

  ultimasCanciones.push(cancion);
  if(ultimasCanciones.length > 4){
    ultimasCanciones.shift();
  }

  console.log(cancion);
}

function play() {
  rocola();
}

for(let i = 0; i < 20; i++) {
  play();
}