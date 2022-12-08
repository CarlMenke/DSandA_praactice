// search for  asubstring in a larger srting

const searchString =(str, sub)=> {
    let counter = 1
    for(let i = 0; i < str.length; i++){
        if(str[i] === sub[0]){
            for(let j = 1; j < sub.length; j++){
                if(str[i + j] === sub[j]) counter ++
                if(counter === sub.length) return true
            }
            counter = 1
        }
    }
    return false
}

console.log(searchString("abcdefgigjxck", "defg"))