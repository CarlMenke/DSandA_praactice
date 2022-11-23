function validAnagram(str1, str2) {
    const obj1 = {}
    const obj2 = {}
    
    for(const index in str1){
        obj1[str1[index]]? obj1[str1[index]]++ : obj1[str1[index]] = 1
    }
    for(const index in str2){
        obj2[str2[index]]? obj2[str2[index]]++ : obj2[str2[index]] = 1
    }
    console.log(obj2, obj1)
    for(const val in obj2){
        if(!obj1[val]){
            return false
        }
        if(obj2[val] !== obj1[val]){
            return false
        }
    }
    return true
}

console.log(validAnagram("hello", "helol"))