//class y funcion en constructor son lo mismo

const company = {
name: "google",
employees:[]
}

class Persona {

    constructor(nombre,apellido){

        this.nombre = nombre;
        this.apellido = apellido;

    }
}

const jhon = new Persona('jhon','doe');
const maria =  new Persona('maria','lopez');

company.employees.push(jhon);
company.employees.push(maria);


console.log(maria);
console.log(jhon);

console.log(company);
