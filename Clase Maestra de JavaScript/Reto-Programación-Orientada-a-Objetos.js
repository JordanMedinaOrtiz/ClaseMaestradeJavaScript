/*
  Refuerza tus conocimientos de POO creando un sistema de Vehículos.
    1. Crea una clase Vehículo que incluya un constructor que establezca el número de ruedas
      y un método para mostrar detalles generales del vehículo.
    2. Crea dos subclases de Vehículos cualesquiera que hereden de Vehículo e incluyan un
      constructor con atributos específicos, como la capacidad de pasajeros, y un método para mostrar detalles personalizados.
    3. Crea una instancia de cada Vehículo y muestra sus detalles en la consola. 🚗🚲
*/
/* Ejercicio con salida igual a la que se pide: */
class Vehiculo {
  constructor(ruedas) {
    this.ruedas = ruedas;
  }
}

class Coche extends Vehiculo {
  constructor(ruedas, numPasajeros) {
    super(ruedas);
    this.numPasajeros = numPasajeros;
  }

  mostrarInfo() {
    console.log(`Este vehículo tiene ${this.ruedas}. Puede transportar ${this.numPasajeros} pasajeros.`);
  }
}

class Bicicleta extends Vehiculo {
  constructor(ruedas, tipo) {
    super(ruedas);
    this.tipo = tipo;
  }

  mostrarInfo() {
    console.log(`Este vehículo tiene ${this.ruedas}. Es una bicicleta de tipo ${this.tipo}.`);
  }
}

const coche = new Coche(4, 5);
coche.mostrarInfo();

const bicicleta = new Bicicleta(2, 'Montaña');
bicicleta.mostrarInfo();

/* Segundo ejercicio para practicar: */
class Vehiculo_2 {
  constructor(ruedas_2, marca_2, modelo_2) {
    this.ruedas_2 = ruedas_2;
    this.marca_2 = marca_2;
    this.modelo_2 = modelo_2;
  }

  mostrarInfo_2() {
    console.log(`Marca: ${this.marca_2}, Modelo: ${this.modelo_2}, Ruedas: ${this.ruedas_2}`);
  }
}

class Coche_2 extends Vehiculo_2 {
  constructor(ruedas_2, numPasajeros_2) {
    super(ruedas_2, 'Tesla', 'Model S');
    this.numPasajeros_2 = numPasajeros_2;
  }

  mostrarInfo_2() {
    super.mostrarInfo_2();
    console.log(`Este coche puede transportar ${this.numPasajeros_2} pasajeros.`);
  }
}

class Bicicleta_2 extends Vehiculo_2 {
  constructor(ruedas_2, tipo_2) {
    super(ruedas_2, 'Specialized', 'Rockhopper');
    this.tipo_2 = tipo_2;
  }

  mostrarInfo_2() {
    super.mostrarInfo_2();
    console.log(`Esta bicicleta es de tipo ${this.tipo_2}.`);
  }
}

const coche_2 = new Coche_2(4, 5);
coche_2.mostrarInfo_2();

const bicicleta_2 = new Bicicleta_2(2, 'Montaña');
bicicleta_2.mostrarInfo_2();