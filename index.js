//class y funcion en constructor son lo mismo


class Persona {

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;

    }

    greet(){
         
           return `hello i am  ${this.nombre} ${this.apellido}`;
    }

}





const user = new Persona("Jhon", "Doec");
const user2 = new Persona("Jane", "Doe");

console.log(user.greet());
console.log(user2.greet());

console.log(typeof Persona);


/*function Persona() {

    this.nombre = "";
    this.apellido = "";

      
}*/