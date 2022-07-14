

//(Polimofismo).sobrecarga de metodos que permite tomar parametros con diferentes tipo de datos. 
//Parametros genericos

function countItems(x){

      return x.toString().length;
}

console.log(countItems(5));
console.log(countItems("Hola"));


function sum(x=0,y=0,z=0){

      return x+y+z;

}

console.log(sum(5,5,5));