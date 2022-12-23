//linked list has no indices they are just pointing to the next element
//head is the beginning
//tail is the end
//consists of nodes ponting to antother
//singly linked lists means each node only points to one other node inone direction
//utilizes "next" pointer
//cant ask for the 10th item and get it rigth away, must go through each link to find the 10
//good to help with insertion and deletion

// what is a node?
    // strores a piece of sata
    // stores a refrencxe to the next node
class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val){
        let node = new Node(val)
        this.length++
        if(this.length === 1){
            this.head = node
            this.tail = node
        }else if(this.length === 2){
            this.head.next = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        return this
    }
    traverse(){
        let current = this.head
        while(current){
            console.log(current.val)
            current = current.next
        }
        return this
    }
    pop(){
        if(this.length === 0){
            return undefined
        }else if(this.length === 1){
            this.head = null
            this.tail = null
            this.length--
        }else{
            //need to find the second to last value and set that node to the the tail and the next of that node to null
            let current = this.head
            while(current){
                if(!current.next.next){
                    this.tail = current
                    current.next = null
                    this.length--
                }
                current = current.next
            }
            return this.tail
        }

    }
    shift(){
        if(this.length === 0){
            return undefined
        }else if(this.length === 1){
            let temp =  this.head
            this.tail = null
            this.head = null
            this.length--
            return temp
        }else{
            let oldHead = this.head
            let newHead = this.head.next
            this.head =  newHead 
            this.length--
            return oldHead
        }
    }
    unshift(val){
        let node = new Node(val)
        this.length++
        if(this.length === 1){
            this.head = node
            this.tail = node
            return this
        }else{
            node.next = this.head
            this.head = node
            return this
        }
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let current = this.head
        for(let i = 0; i < index ; i++){
            current = current.next
        }
        return current
    }
    set(val, index){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(val, index){
        let node = new Node(val)
        if(this.length === 0 && index === 0){
            this.head = node
            this.tail = node
            return this
        }
        if(index === 0){
            this.unshift(val)
            return this
        }
        if(index < 0 || index > this.length) return null
        let left = this.get(index - 1)
        let right = this.get(index)
        left.next = node
        node.next = right
        this.length++
        return this
    }
    remove(index){
        let removingNode = this.get(index)
        if(!removingNode) return null
        if(!removingNode.next){
            this.pop()
            return this
        }
        if(index === 0){
            this.shift()
            return this
        }
        this.get(index - 1).next = this.get(index + 1)
        this.length--
        return this
    }
    reverse(){
        if(this.length === 0) return null
        if(this.length === 1) return this

        let temp = this.head
        this.head = this.tail
        this.tail = temp
        let leftNode = this.tail
        let middleNode = leftNode.next
        let rightNode = middleNode.next
        let rightNodeNext = rightNode.next
        this.tail.next = null
        while(rightNode.next){
            rightNodeNext = rightNode.next
            middleNode.next = leftNode
            leftNode = middleNode
            middleNode = rightNode
            rightNode = rightNodeNext
        }
        rightNode.next = middleNode
        middleNode.next = leftNode

        return this
    }
}

list = new SinglyLinkedList()
list.push("hello")
list.push("how")
list.push("are")
list.push("you")
list.push("doing")
list.reverse()
console.log(list)
