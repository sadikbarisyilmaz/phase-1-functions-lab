// Code your solution in this file!
const hq = 42

function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > hq) {
        let distance = pickupLocation - hq
        return distance
        
    } else {
        let distance =  hq - pickupLocation
        return distance
    }
}


function distanceFromHqInFeet(pickupLocation) {
    // return (distanceFromHqInBlocks(pickupLocation) * 264)
    let distance = distanceFromHqInBlocks(pickupLocation)
    return distance * 264
}



function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        let distanceTravelled = start - destination
        return (distanceTravelled * 264)
    } else {
        let distanceTravelled = destination - start
        return (distanceTravelled * 264)
    }
}

console.log(distanceTravelledInFeet(50, 51))


function calculatesFarePrice(start, destination) {

    let distanceTravelled = distanceTravelledInFeet(start, destination)

    if(distanceTravelled < 400){
        return 0
    }
    else if(distanceTravelled > 400 && distanceTravelled <= 2000){
        return ((distanceTravelled - 400) * 0.02)

    }else if(distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25

    }else if(distanceTravelled > 2500){
        return 'cannot travel that far'
    }
}