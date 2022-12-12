const swap = (array, index1, index2) => {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array 
}   

const bubblesort =(array)=> {

    let newArray = array
    let j = array.length

    while(j > 1){
        for(let i = 0 ; i <= j - 1 ; i++){
            if(newArray[i] > newArray[i+1]){
                console.log(newArray, j, i)
                newArray = swap(newArray, i, i+1)
                console.log(newArray, j, i)
            }
        }
        j--
    }
    return newArray
}

console.log(bubblesort([4,2,5,3,2,7,8,56,34,7,8]))