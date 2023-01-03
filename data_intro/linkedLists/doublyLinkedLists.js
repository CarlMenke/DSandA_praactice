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
    pop(){
        if(this.length === 0){
            return null
        }else if(this.length === 1){
            this.length--
            let oldTail = this.tail
            this.tail = null
            this.head = null
            return oldTail
        }else{
            this.length--
            let oldTail = this.tail
            let newTail = oldTail.prev
            this.tail.prev = null
            this.tail = newTail
            this.tail.next = null
            return oldTail
        }
    }
    shift(){
        if(this.length === 0) return null
        if(this.length === 1){
            this.length--
            let oldHead = this.head
            this.tail = null
            this.head = null 
            return oldHead
        }else{
            this.length--
            let oldHead = this.head
            oldHead.next.prev = null
            this.head = oldHead.next 
            oldHead.next = null
            return oldHead
        }
    }
    unshift(val){
        let node = new Node(val)
        this.length++
        if(this.length === 1){
            this.tail = node
            this.head = node
            return this
        }else{
            this.head.prev = node
            node.next = this.head
            this.head = node
            return this
        }
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let changer = 1
        let shifter = "next"
        let currentNode = this.head
        if(this.length / 2 < index){
            counter = this.length - 1
            changer = -1
            shifter = "prev"
            currentNode = this.tail
        }
        while(counter != index){
            currentNode = currentNode[shifter]
            counter += changer
        }
        return currentNode
    }
    set(val, index){
        if(index < 0 || index >= this.length) return null
        this.get(index).val = val
        return this
    }
    insert(val, index){
        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.unshift(val)
        if(index === this.length) return this.push(val)
        let newNode = new Node(val)
        let leftNode = this.get(index - 1)
        let rightNode = this.get(index)
        
        leftNode.next = newNode
        newNode.prev = leftNode

        rightNode.prev = newNode
        newNode.next = rightNode

        return this 
    }
    remove(index){
        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()
        this.length--
        let deletedNode = this.get(index)
        let rightNode = deletedNode.next
        let leftNode = deletedNode.prev

        deletedNode.next = null
        deletedNode.prev = null;

        leftNode.next = rightNode
        rightNode.prev = leftNode

        return deletedNode
    }
    
}


let list = new DoublyLinkedLists()

list.push("a")
list.push("b")
list.push("c")
list.push('d')
list.push('e')
console.log(list.remove(1))
console.log(list)