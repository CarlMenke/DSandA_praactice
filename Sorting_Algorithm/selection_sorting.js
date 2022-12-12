const swap = (array, index1, index2) => {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array 
}  

const getMinimumIndex = (array, startIndex) => {
    let minimumIndex = startIndex

    for(let i = startIndex; i < array.length; i++){
        if(array[minimumIndex] > array[i]){
            minimumIndex = i
        }
    }

    return minimumIndex
}

const selectionSort = (array) => {
    let newArray = array

    for(let i = 0; i < newArray.length; i++){
        let minimumIndex = getMinimumIndex(newArray, i)
        newArray = swap(newArray, minimumIndex, i)

    }

    return newArray
}


console.log(selectionSort([76,23,11,3, 5,6,7,8,9,33,4,4444, 55,55,55,55,55, 67,87,44,3,22,22,3,5]))