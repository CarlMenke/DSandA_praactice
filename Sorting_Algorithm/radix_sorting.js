//using radix sort to order an array based on the length of each digit

//have 9 buckets (arrays) that will be labeled 0 - 9 (representing the value of the current digit being looked at)

//start on the smallest digit and place each item in the array into the corresponding bucket 

//combine the buckets (arrays) into one array and redo the same process until you have done this process the same amount of times as the length of the largest digit



const createBuckets = () => {
    const buckets = {}

    for(let i = 0; i <= 9; i++){
        buckets[i] = []
    }
    
    return buckets
}

const sortIntoBuckets = (array, index) => {
    const buckets = createBuckets()

    for(let val of array){
        buckets[getDigit(val, index)].push(val)
    }

    return buckets
}

const combineBuckets = (buckets) => {
    let array = []

    for(const key in buckets){
        array = array.concat(buckets[key])
    }

    return array
}

const getMostDigits = (array) => {
    let largest = array[0]
    for(const val of array){
        if(val > largest){
            largest = val
        }
    }
    return String(largest).length
}

// num = 238
// digitIndex = 2
23 
const getDigit  = (number, digitIndex) => {
    return Math.floor(number / Math.pow(10,digitIndex-1)) % 10
}


const radixSort = (array) => {
    for(let i = 0; i <= getMostDigits(array); i++){
        let buckets = sortIntoBuckets(array, i)
        array = combineBuckets(buckets)
    }
    return(array)
}


console.log(radixSort([1,432342,67457,6794,3,63,767584,452,1234525,6,34,344,543,34,3,5]))

