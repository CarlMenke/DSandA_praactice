class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }
    _hash(key){
        let total = 0
        let prime = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length
        }
        return total
    }
    set(key, value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = [[key, value]]
        }else{
            this.keyMap[index].push([key, value])
        }
        return this.keyMap
    }
    get(key){
        const index = this._hash(key)
        if(!this.keyMap[index]){
            return undefined
        }else if(this.keyMap[index].length === 1){
            return this.keyMap[index][0][1]
        }else{
            for(const val of this.keyMap[index]){
                if(val[0] === key){
                    return val[1]
                }
            }
        }
    }
}

let hash = new HashTable(31)

hash.set("key1", "value1")
hash.set("key2", 'value2')
hash.set("key3", 'value3')
hash.set("key4", 'value4')

console.log(hash.get("key1"))
