// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// const returnFirstTwoDrivers = (drivers) => {
//     var results = [];
//     for (var i = 0; i < 1; i++){
//         results.push(drivers[0]);
//         results.push(drivers[1])
//     }
//     return results;
// }


// cest mon essai
const returnFirstTwoDrivers = () => {
    // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    var results = [];
        results.push(drivers[0], drivers[1]);
        
  return results;
 } 

// function returnFirstTwoDrivers(drivers){
//     return drivers.slice(0, 2);
// }

    
// let returnFirstTwoDrivers = (drivers) => {
//     return drivers.slice(2);
// }


// const returnFirstTwoDrivers = (drivers) => {
//     var splits = drivers.split(" ", 2);
//     return splits;
// }





// const returnFirstTwoDrivers = () => {

// }

// const returnFirstTwoDrivers = (drivers) => {
//     let 
// }


const returnLastTwoDrivers = () => {
    // const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
    var results = [];
        results.push(drivers[2], drivers[3]);
    return results;
}





// const returnLastTwoDrivers = (drivers) => {
//     var results = [];
//     for (var i = 0; i < 1; i++){
//         results.push(drivers[2]);
//         results.push(drivers[3])
//     }
//     return results;
// }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x){
   return function (y) { 
       return x * y;
   }
}

// function fareDoubler(x){
//     return x * 2;
// }

let fareDoubler = createFareMultiplier(2);

// function fareTripler(x){
//     return x * 3;
// }

let fareTripler = createFareMultiplier(3);



// function selectDifferentDrivers(selectingDrivers, y){
//     if (y === returnFirstTwoDrivers){return returnFirstTwoDrivers()}
//     else {return returnLastTwoDrivers()};
// }

let selectDifferentDrivers = (arrayOfDrivers, functionToApply) => {
    return functionToApply(arrayOfDrivers);
}