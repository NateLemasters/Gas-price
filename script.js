var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Economics/US%20Gas%20Prices.csv";
var date = getColumn(url, 1);
// console.log(breedNames)
var usAverage = getColumn(url, 2);
var boston = getColumn(url, 3);
var chicago = getColumn(url, 4);
var cleveland = getColumn(url , 5);
var denver = getColumn(url, 6);
var houston = getColumn(url, 7);
var losAngeles = getColumn(url, 8);
var Miami = getColumn(url, 9);
var newYorkCity = getColumn(url, 10);
var sanFranisco = getColumn(url, 11);
var seattle = getColumn(url, 12);

var cities = [boston, chicago, cleveland, denver, houston, losAngeles, Miami, newYorkCity, sanFranisco, seattle]

function getCity(city){
    if(city == "Boston"){
        return 0;
    }else if(city == "Chicago"){
        return 1;
    }else if(city == "Cleveland"){
        return 2;
    }else if(city == "Denver"){
        return 3;
    }else if(city == "Houston"){
        return 4;
    }else if(city == "Los Angeles"){
        return 5;
    }else if(city == "Miami"){
        return 6;
    }else if(city == "New York City"){
        return 7;
    }else if(city == "San Franisco"){
        return 8;
    }
    if(city == "Seattle"){
        return 9;
    }
}

// Returns a date that the price was the highest
// Return {string} - Returns the date that the price was the highest
  function getHighestDate(){
    var highestAverageDate = "";
    var highestAverage = 0; 

    for(var i = 0; i < usAverage.length; i++){
        if(usAverage[i] > highestAverage){
            highestAverage = usAverage[i];
            highestAverageDate = date[i];
        }
        
    }
    return highestAverageDate
  }
  console.log(getHighestDate(""));


// Returns average gas price in city
// City {String} - The city you want the gas price
// Return {Number} - The average Gas price in the city
// Return {-1} - If the City is undefined, then return -1
function getAveragePriceCity(city) {
    var chosenList = cities[getCity(city)];
    var total = 0;
    if(getCity(city) == undefined){
      return -1;
    }
    for (var i = 0; i < chosenList.length; i++){
        if(total += parseFloat(chosenList[i]));
 
    }
    return total / chosenList.length
  }

  console.log(getAveragePriceCity("New York City"));
  
// Returns the price of Gas on the date provided
// givenDate {String} - The price of the specfic date 
// return {Number} - the price of Gas on that date
// return {-1} - If the givenDate is undefined, then return -1
function getPriceDate(givenDate){
  
    for( var i =0; i < date.length; i++){
        if(date[i] == givenDate){
            return parseFloat(usAverage[i]);
        }
            
    }
    return -1;
    //-1 makes this robust because it is an error message. 
}
console.log(getPriceDate("7/14/2003"))

// Returns a list of date that matches the price
// givenPrice {Number} - The price that will match with specific dates
// return {Array} - A list of date that matches the price 
// return {-1} - If there list is nothing in the list, then return -1
function getDateFromPrice(givenPrice){
    var usAverageDate = [];
    for( var i =0; i < usAverage.length; i++){
        if(usAverage[i] == givenPrice){
            usAverageDate.push(date[i]);
        }
            
    }
    if(usAverageDate.length == 0){
      return -1;
    }
    return usAverageDate
    //-1 makes this robust because it is an error message. 
}
console.log(getDateFromPrice("1.52"))


// Returns highest gas price per given city or -1 if the city is not found
// city {String} - The city you want the gas price
// return {Number} - Highest Gas price in city
// return {-1} - If the City is undefined, then return -1
function getHighestGasPrice(city){
  var cityMaxGas = 0;
  if(getCity(city) == undefined){
    return -1;
  }
   var whichCity = cities[getCity(city)];
  
  for (var i = 0; i < whichCity.length; i++){
     if(whichCity[i] > cityMaxGas){
         cityMaxGas = whichCity[i];
   }
}
return cityMaxGas;
}
console.log(getHighestGasPrice("Denver"))

