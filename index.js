


//Esta es una funcion

/*function showFullname(){
 return "Jhonatan Quispe"
}*/

//objeto que contiene propiedades

const user = {

    name: "Jhonatan",//propiedad
    lastname: "Quispe",
    age: 32,

    //se va convertir la funcion como metodo

    //showFullname: showFullname 

    //una forma de llamar el metodo
    /*  showFullname: function(){
       return "Jhonatan Quispe"
      }*/
    //otra forma de llamar el metodo

    showFullname() {
        
        //console.log(this.name);
        //return "Jhonatan Quispe"

        return this.name+" "+this.lastname;

    }

}

console.log(user.showFullname());


const account ={

       number :"123456789",
       amount: 100,

       //agrego un parametro a la funcion "quantity"
       deposit(quantity){
            //this.amount = this.amount + 100;
            this.amount+=quantity

       },

       withdraw(quantity){
           
        this.amount-=quantity;

       }



}

account.deposit(100);
account.deposit(50);
account.deposit(10);
console.log(account);

account.withdraw(10);
account.withdraw(200);
console.log(account);


