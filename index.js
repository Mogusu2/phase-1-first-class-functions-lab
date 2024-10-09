// returnFirstTwoDrivers function should return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function should return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array containing the functions returnFirstTwoDrivers and returnLastTwoDrivers
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function that returns a function which multiplies a fare by a given multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // fareDoubler function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function that takes an array of drivers and a function, and returns the result of calling the function with the drivers array
  const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
  };
  
  // Example Usage
  const drivers = ['Joy', 'James', 'Joan', 'Debra'];
  
  console.log(returnFirstTwoDrivers(drivers)); // ['Joy', 'James']
  console.log(returnLastTwoDrivers(drivers)); // ['Joan', 'Debra']
  console.log(selectingDrivers[0](drivers)); // ['Joy', 'James']
  console.log(selectingDrivers[1](drivers)); // ['Joan', 'Debra']
  
  const fare = 10;
  console.log(fareDoubler(fare)); // 20
  console.log(fareTripler(fare)); // 30
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // ['Joy', 'James']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // ['Joan', 'Debra']
  