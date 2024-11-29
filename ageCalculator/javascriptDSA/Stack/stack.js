class Stack{
    constructor(){
        this.stack=[];
        this.maxSize=100;
        this.top = -1;
        
    }
    push(value){
        if(this.isFull()){
            return false;
        }
        this.top++;
        this.stack[this.top] = value;
        return true;
    }
    isFull(){
        return this.top === this.maxSize-1
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        this.top--;
        return this.stack.pop()
        
    }
    isEmpty(){
        return this.top === -1
    }
    peek(){
        return this.stack[this.top];
    }
}
function reverseString(str){
    let stack = new Stack();
    let stringtoadd ='';
    for(let i=0; i<str.length; i++){
stack.push(str[i])
    }
    while(!stack.isEmpty()){
        stringtoadd += stack.pop()
    }
    return stringtoadd
}
function balancedPerenthasis(str){
    let stack = new Stack();
    for(let i=0; i<str.length; i++){
        if(str[i] !== "()"){
            return "sorry please enter correct type"
        }
        else if(str[i] === "("){
            stack.push(str[i])

        }else if(str[i] === ")"){
            if(stack.isEmpty()){
                return false;
            }
            stack.pop()
        }
    }
    return stack.isEmpty();
}
let stack = new Stack();
stack.push("Hello")
stack.push("Friend")
stack.push("How")
stack.push("are")
stack.push("You")

console.log(stack)
console.log(stack.pop())
console.log(stack.peek())
console.log(reverseString("find it"))

console.log(balancedPerenthasis("()"))
console.log(reverseString("Find it here"))