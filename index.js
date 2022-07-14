//class y funcion en constructor son lo mismo


class Persona {

    constructor(nombre,apellido){

        this.nombre = nombre;
        this.apellido = apellido;

    }
}

const jhon = new Persona('jhon','doe');
const maria =  new Persona('maria','lopez');

//relation
maria.parent = jhon;

console.log(maria);
console.log(jhon);
