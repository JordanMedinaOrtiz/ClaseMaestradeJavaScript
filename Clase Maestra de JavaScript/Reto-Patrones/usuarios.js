const Usuarios = {
	arreglo: [],

	agregarUsuario(usuario) {
		this.arreglo.push(usuario);
		console.log("Usuario '" + `${usuario}` + "' agregado.");
	},

	mostrar() {
		console.log('Lista de usuarios:');
		this.arreglo.forEach(usuario => {
			console.log(usuario);
		});
	}
}

export default Usuarios;