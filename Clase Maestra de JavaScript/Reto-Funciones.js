/*
  Refuerza tus conocimientos en funciones creando un sistema de envió de un formulario.
  Utiliza una función flecha que permita validar si un formulario cuenta con los
  valores de "nombre", "email" y "mensaje" y otra función para enviarlo, debes imprimir
  en la consola "¡Formulario enviado con éxito!", de lo contrario imprime "Por favor completa todos los campos.". 🧠
*/
const formulario = {
  nombre: 'Jordan',
  email: 'jordanmedina49@hotmail.com',
  mensaje: "Hola, estudio en Academia X",
  }

  const validarFormulario = (formulario) => {
    return formulario.nombre && formulario.email && formulario.mensaje
  }

  function enviarFormulario(formulario) {
    if(validarFormulario(formulario)) {
      console.log('¡Formulario enviado con éxito!')
    }else {
      console.log('Por favor completa todos los campos')
    }
  }

enviarFormulario(formulario)