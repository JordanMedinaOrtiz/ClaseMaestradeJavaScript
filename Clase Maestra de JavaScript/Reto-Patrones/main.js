/*
  Refuerza tus conocimientos de Patrones creando un "módulo" para manejar
  la información de los usuarios. Agrega usuarios al módulo y muestra la lista de usuarios almacenados. 🧠
*/

import Usuario from './usuarios.js';

const usuario1 = 'Juan';
const usuario2 = 'María';

Usuario.agregarUsuario(usuario1);
Usuario.agregarUsuario(usuario2);
Usuario.mostrar();