
const user1 = {

    name: "Jhonatan",//propiedad
    lastname: "Quispe",
    age: 32,

    showFullname() {

        //una forma
        /*return this.name+" "+this.lastname;*/

        //otra formac
        return `${this.name} ${this.lastname}`;

    }

}

//constructor
function Persona(){
         
    this.name = ""
    this.lastname=""
    this.age= 0
    this.showFullname = function(){
        return `${this.name} ${this.lastname}`
    }
    
}

const user2  = new Persona()
user2.name="Jhonatan"
user2.age="32"
user2.lastname="Quispe"
console.log(user2.showFullname())

const user3  = new Persona()
user3.name="Alejo"
user3.lastname="sarmiento"
const user4 = new Persona()
const user5 = new Persona()

console.log(user3,user4,user5)




