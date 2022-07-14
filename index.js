

//(Polimofismo Parametricos

function Stack(){
 
         this.item = [];

         this.push = function(element){
             this.item.push(element);
         }
}

const stack = new Stack();
stack.push(1);

const stack2 = new Stack();
stack2.push("asda");

console.log(stack);
console.log(stack2);