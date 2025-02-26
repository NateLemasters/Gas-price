# Us Gas-price:

#
###### Returns an array of dates based on the given US Average gas price. 
###### @param givenPrice {float} - This is the price the user calls and then is matched to a list of dates.
###### @return {array} - Returns a list of dates that fits the parameter given price or no matches if the list wasn't found. 
**` function getDateFromPrice(givenPrice) `**
#


###### Returns the price of gas that the user called. 
###### @param givenDate {string} - We use a certain date to get the price for that day. 
###### @return usAverage {float} - This pushes the usAverage gas price on the given day or -1 if the givenDate was not found. 
**` function getPriceDate(givenDate) `**
#



###### Returns the average gas price of the given city. 
###### @param chosenList {array} - This is a parameter that uses the given city to find the usAverage gas prices.
###### @return total / chosenlist.length {string} - This takes the total of all the gas prices and divides it by how many gas prices there are to find the average or -1 if the given city is not found. 
**` function getAveragePriceCity(city) `**
#


###### Returns the date when the usAverage was the highest. 
###### @param highestAverage {string} - This finds the highest usAverage gas price.
###### @return highestAverageDate {string} - This returns the date that matches when the usAverage was highest. 
**` function getHighestDate() `**
#

###### Returns the highest gas price in a city. 
###### @param whichCity {array} - This takes the variable city from the function getCity and makes it equal to the specified city such as "Boston" in the call section. 
###### @return cityMaxGas {string} - It returns the highest price for the city we called or -1 if the cityMaxGas is not found. 
**` function getHighestGasPrice `** 
#













