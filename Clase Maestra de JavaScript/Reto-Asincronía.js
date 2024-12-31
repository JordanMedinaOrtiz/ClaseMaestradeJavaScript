/*
  Refuerza tus conocimientos de Asincronía creando una función que permita
  obtener los datos de la API "https://jsonplaceholder.typicode.com/posts" utilizando fetch.
  Después crea una función que muestre los datos obtenidos en la consola después de un cierto tiempo. 🧠
*/
async function fetchPosts() {
  console.log('Iniciando solicitud a la API...');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  }catch(error) {
    console.error('Error al obtener los datos:', error.message);
    throw error;
  }
}

function displayDataAfter(data, delay = 2000 ) {
  setTimeout(() => {
    console.log('Datos obtenidos de la API', data);
  }, delay);
}

fetchPosts()
.then(data => displayDataAfter(data))
.catch(error => console.error('Error al obtener los datos:', error.message));