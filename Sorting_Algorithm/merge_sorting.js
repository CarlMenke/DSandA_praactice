const mergeSortedArrays = (array1, array2) => {
    let mergedArray = []
    let j = 0
    let i = 0
    while(j < array1.length || i < array2.length ){
        if(array1[j] < array2[i] || !array2[i]){
            mergedArray.push(array1[j])
            j++
        }else if(array2[i] < array1[j] || !array1[j]){
            mergedArray.push(array2[i])
            i++
        }else{
            mergedArray.push(array1[j], array2[i])
            i++
            j++
        }
    }
    return mergedArray
}   

// mergeSort([1,3,4,3,4,2]) 
// returns: mergeSortedArrays(mergeSort([1,3,4]), mergeSort([3,4,2]))
//         returns: mergeSortedArrays(mergeSortedArrays(mergeSort([1]), mergeSort([3,4])),  mergeSortedArrays(mergeSort([3]), mergeSort([4,2])))
//                 returns: mergeSortedArrays(mergeSortedArrays([1], mergeSortedArrays(mergeSort([3]), mergeSort([4]))),  mergeSortedArrays([3], mergeSortedArrays(mergeSort([4]), mergeSort([2]))))
//                         returns: mergeSortedArrays(mergeSortedArrays([1], mergeSortedArrays([3], [4])),  mergeSortedArrays([3], mergeSortedArrays([4], [2])))
//                                 returns: mergeSortedArrays(mergeSortedArrays([1], [3,4]),  mergeSortedArrays([3], [2,4]))
//                                         returns: mergeSortedArrays([1,3,4],  [2,3,4])
//                                                 returns: [1,2,3,3,4,4]

const mergeSort = (array) => {
    if(array.length <= 1) return array
    let midPoint = Math.floor(array.length / 2)
    let leftSide = mergeSort(array.slice(0,midPoint))
    let rightSide = mergeSort(array.slice(midPoint))
    return mergeSortedArrays(leftSide, rightSide)
}

console.log(mergeSort([1,1,1,2,3,4,5]))