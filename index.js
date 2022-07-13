
// el constructor object es igual que instanciarlo a como ponerle entre {}

/*
function Person(name,lastname){
    this.name = name
    this.lastname= lastname
    this.displayName = function(){
       return `${this.name} ${this.lastname}`
    }
}

const Jhonatan = new Person("Jhonatan","Quispe")
const Alejo = new Person("Alejo","Sarmiento")
const Maria = new Person("Maria","Salvador")
const Jose = new Person("Jose","Castillo")

Person.prototype.greet = function(){

     return `hello iam ${this.name}`

}

Person.prototype.age = 100

console.log(Jhonatan.age)
console.log(Alejo.age)
console.log(Maria.age)
console.log(Jose.age)*/

const s = new String("Hola")

String.prototype.concatTest = function (){
          
   return this + " Test";

}

console.log(s.concatTest())