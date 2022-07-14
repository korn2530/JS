

//(Encapsulamiento)Simplifica el uso del objeto, sin que el usuario sepa que hay en el interior.
/*
const company = {
         
    name: "Rocketseat",
    employes:[],

    sortEmployes: function(){

    }

}


//a la propiedad sortemployees lo convierto en string 
company.sortEmployes = "adadasdas"

company.sortEmployes()
*/


function Company(name){

    let employes = [];
     this.name = name;

     this.getEmployes = function(){
         return employes;
     }

     this.addEmployes = function(employe) {
         employes.push(employe);
     }

}

const company = new Company("Rocketseat");
const company2 = new Company("pepsi");

console.log(company);
console.log(company2);

company.addEmployes({name: "Diego"});
company2.addEmployes({name: "Diego"});


console.log(company.getEmployes());
console.log(company2.getEmployes());



