

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
        return drivers.slice(-2)
    }
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

    const createFareMultiplier = (n) => {
        return (fare) => n*n 
    }
function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2 

}
function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
} 

const selectDifferentDrivers = function (drivers, selectingDrivers) {
    return selectingDrivers(drivers)    
}