// Code your solution in this file!
let drivers = 2
const people = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (arr) => {
    const firstArr = []
    for(let i = 0; i < drivers; i++){
       firstArr.push(arr[i]) 
    }
    return firstArr
}


const returnLastTwoDrivers = (arr) => {
    const lastArr = []
    for(let i = drivers; i > 0; i--){
        let x = -Math.abs(i)
        lastArr.push(arr.at(x)) 
     }
    return lastArr
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return (fare) => num * fare
}

function fareDoubler(fare){
    const multiplier = createFareMultiplier(2)(fare)
    return multiplier
}

function fareTripler(fare){
    const multiplier = createFareMultiplier(3)(fare)
    return multiplier
}

function selectDifferentDrivers(arr, func){
    return func(arr)
}
