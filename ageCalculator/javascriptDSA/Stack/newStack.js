const display=(str)=>console.log(str)
class Stack{
constructor(){
    this.maxSize = 100;
    this.stack = [];
    this.top = -1
}
push(item){
    if(this.isFull()){
        return false;
    }
    this.top++;
    this.stack[this.top] = item;
    return true;
}
isFull(){
    return this.top === this.maxSize-1
}
isEmpty(){
    return this.top === -1                                                                                                                               
}
pop(){
    if(this.isEmpty()){
        return null;
    }
    this.top--;
    return this.stack.pop()
    
}
}

function reverString(str){
    let stack = new Stack();
    for(let i = 0; i < str.length; i++){
        stack.push(str[i])
    }
    let sentence="";
    while(!stack.isEmpty()){
        sentence += stack.pop();
    }
    return sentence;
}


display(reverString("Hello Friend"))