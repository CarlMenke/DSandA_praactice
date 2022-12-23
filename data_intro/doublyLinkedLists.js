class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedLists{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        this.length++
        let node = new Node(val)
        if(this.length === 1){
            this.head = node
            this.tail = node
        }else if(this.length === 2){
            this.tail = node
            node.prev = this.head
            this.head.next = node
        }else{
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        return this
    }
}


let list = new DoublyLinkedLists()

list.push("a")
list.push("b")
list.push("c")
list.push('d')
list.push('e')
console.log(list)