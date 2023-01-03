const trackLuggage = (string) => {

    if(string.length === 0) return ""

    const weightMax = 40
    const luggage = string.split(",")
    let container = []
    const plane = []
    let weightCounter = 0

    for(let i = 0; i < luggage.length; i++){
        val = luggage[i]
        
        if(Number(val) > weightMax) continue

        if(weightCounter + Number(val) <= weightMax){
            container.push(val)
            weightCounter += Number(val)
        }
        else{
            i--
            plane.unshift(container)
            container = []
            weightCounter = 0
        }
    }

    container.length > 0 ? plane.unshift(container) : null
    return plane.flat().join(",")
}


console.log(trackLuggage("4,10,39,20,19,3"))