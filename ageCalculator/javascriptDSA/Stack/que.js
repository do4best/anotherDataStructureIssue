const display=(str)=>console.log(str)
class Queue{
    constructor(){
        this.queue=[];
        this.head=0;
        this.tail=0;
        this.maxSize=100
    }
    enqueue(item){
        if(this.isFull()){
            return false;
        }
        this.queue[this.tail] = item;
        this.tail++;
        return true;
    }
    deque(){
        const item = this.enqueue[this.head]
        this.head++;
        return item

    }
    isFull(){
        return this.getLength() === this.maxSize;
    }
    getLength(){
        return this.tail - this.head;
    }
    peek(){
        return this.enqueue[this.head]
    }
}

let que = new Queue()
que.enqueue('a')
que.enqueue('b')
que.enqueue('c')
que.enqueue('d')
que.deque('e')
que.deque('f')
que.deque('g')
display(que)