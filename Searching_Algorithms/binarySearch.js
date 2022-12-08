//much fatser than linear search 
// eliminate half of the data at a time (must be sorted)

function binarySearch(array, target){
    let left = 0
    let right = array.length - 1
    
    do{
        if(array[left] === target){
            return left
        }
        if(array[right] === target){
            return right
        }
        
        let middle = Math.floor((left + right) / 2)
        
        if(array[middle] === target){
            return middle
        }else if(array[middle] > target){
            right = middle
        }else{
            left = middle
        }
        console.log(left, right)
    }while(right - left !== 1)
    return -1
}

console.log(binarySearch([1,2,3,4,5],6))

