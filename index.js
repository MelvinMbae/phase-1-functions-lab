// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >= 43) {
        return distance - 42
    }

    else { return distance - 26 }
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264
}
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        return (destination - start) * 264
    }


    else { return (start - destination) * 264 }

}
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination) {
    const travelDistance = distanceTravelledInFeet(start, destination)
    if (travelDistance <= 400) {
        return 0
    }
    else if (travelDistance >= 400 && travelDistance <= 2000) {
        return (travelDistance - 400) * 0.02
    }
    else if (travelDistance > 2000 && travelDistance <= 2500) {
        return 25
    }
    else if (travelDistance > 2500) {
        return "cannot travel that far"
    }

}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)
