
const insertionSort = (array) => {
    //assume the first value in the array is sorted
    //start your iteration at the second value in the array
    for(let indexToBeSorted = 1; indexToBeSorted < array.length; indexToBeSorted++){
        for(let j = indexToBeSorted - 1; j >= 0; j--){
            if(array[indexToBeSorted] >= array[j]){
                // insert at the first index in which that value is larger than the valeu of index below it
                // stop iterating when you inset it
                //must then place in the start of the array in the correct place
                array.splice(j + 1, 0, ...array.splice(indexToBeSorted, 1))
                break
            }
            if(j === 0){
                // if you make it all the way to the end then insert at index 0
                array.splice(0, 0 , ...array.splice(indexToBeSorted, 1))
            }
        }
    } 
     return array
}

console.log(insertionSort([4,2,10,5,2,4,6,7,8,8,5,3,2,4,6,7,8,9,7,5,4,5,7]))