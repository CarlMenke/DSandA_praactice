// easiest way is to search an array is to look at each index and check it for true
// this is O(N) runtime

const linearSearchFunction =(array, target)=> {
    for( let i = 0; i < array.length; i++){
        if(array[i] === target) return i
    }
    return -1
}