class Usuario {
    constructor(usuario, nombre, email, password) {
        this.usuario = usuario;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
    saludar() {
        return "Hola, mi nombre es " + this.nombre;
    }
}
  
let mariachi=new Usuario('juanin125', 'Juan', 'juan@gmail.com', 'juan1234_')
console.log(mariachi.saludar()); 
