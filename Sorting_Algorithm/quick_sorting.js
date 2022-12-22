const pivot = (array) => {
    //need to find out how many items are smaller than the first item in the array
    //need to make sure that each number that is smaller then the first index are all contiguous to eachother and the firstindex
    //sqwap the first index and number of items smaller than the first item

    if(array.length === 1) return array

    let pivotIndex = 0
    const pivotValue = array[0]

    for(let i = 1; i < array.length; i++){
        if(array[i] <= pivotValue){
            pivotIndex++
            let temp = array[pivotIndex]
            array[pivotIndex] = array[i]
            array[i] = temp
        }
    }
    
     
    array[pivotIndex] = array[0]
    array[0] = pivotValue
    return pivotIndex
}


const quickSort = (array,  left = 0 , right = array.length) => {
    if( left < right ){
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left,  pivotIndex - 1)
        quickSort(array, pivotIndex + 1, right)
    }

    else{
        return array
    }

}

console.log(pivot([2,5,3,1,7,5,8,1,4,7,4,2]))