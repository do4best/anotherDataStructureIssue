let str = 'Hello Friend'
let stack=[];
let a_sentence="";
for(let i=0; i < str.length; i++){
    stack.push(str[i])}
while(stack.length > 0){
    a_sentence += stack.pop();
}
console.log(str)
console.log(a_sentence)
class Stack{
    constructor(){
        this.top = -1
        this.maxSize = 100;
        this.stack = [];
    }
    push(value){
        if(this.isFull){
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return false;
    }
    
}