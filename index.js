// Code your solution in this file!
function distanceFromHqInBlocks(currentStreet){
    let dist = Math.abs(currentStreet-42)
    return dist
}

function distanceFromHqInFeet(currentStreet){
    let dist = distanceFromHqInBlocks(currentStreet)*264
    return dist
}

function distanceTravelledInFeet(block1, block2){
    let dist = Math.abs(block1-block2)*264
    return dist
}

function calculatesFarePrice(block1, block2){
    let dist = distanceTravelledInFeet(block1,block2)
    if (dist<=400){
        return 0
    }
    else if(dist >400 && dist<=2000){
        return (dist-400)*0.02
    }
    else if(dist >2000 && dist<=2500){
        return 25
    }
    else{
        return "cannot travel that far"
    }
}
