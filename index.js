

//(Herencia).
/*
function Persona(){
    this.name = "";
    this.lastame = "";
}


function Programmer(){

    this.language = "";
}

Programmer.prototype = new Persona();

console.log(Programmer);
console.log(Persona);

const persona = new Persona();
persona.name = "Jhonatan";
persona.lastame = "Doe";
console.log(persona);

const programmer = new Programmer();
programmer.name = "Juan";
programmer.lastame= "Perez";
programmer.language = "JavaScript";

console.log(programmer);*/

class Persona{

     constructor(name, lastame){
            this.name = name
            this.lastame = lastame
            this.age = null
     }

}

class Programmer extends Persona{
     constructor(language, name, lastame){
      super( name, lastame);
       this.language = language

     }

}

const persona= new Persona("Jhonatan", "Quispe");

console.log(persona);

const programmer = new Programmer("Teresa", "Quispe", "JavaScript");

console.log(programmer);
