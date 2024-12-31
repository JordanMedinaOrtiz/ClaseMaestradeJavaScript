/*
  Refuerza tus conocimientos de Módulos creando una función que permita
  verificar si un correo electrónico es valido o invalido.
  Después utiliza esta función en un archivo diferente.
*/
import { validateEmail } from './validateEmail.js';

const email1 = 'jordanmedina49@hotmail.com';
const email2 = 'academiaxhotmail.com';
const email3 = 'academiax@hotmailcom';
validateEmail(email1); // Email valido
validateEmail(email2); // Email invalido
validateEmail(email3); // Email invalido