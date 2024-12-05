const firstTask = require('./stringUtils.js')
const secondTask = require('./mathOperations.js')
const thirdTask = require('./arrayUtils.js')
const fourthTask = require('./dateUtils.js')




console.log(firstTask.reverseString("Alisa"))
console.log(firstTask.capitalizeString("alisa"))
console.log(firstTask.truncateString("Hello, world!", 3))


console.log(secondTask.add(2,3))
console.log(secondTask.subtract(4,2))
console.log(secondTask.multiply(4,5))
console.log(secondTask.divide(6,3))


console.log(thirdTask.unique([1,2,1,3,4,3]))
console.log(thirdTask.flatten([1,2,[3,4],5,6]))
console.log(thirdTask.chunk([1,2,3,4,5,6],2))


console.log(fourthTask.formatDate(new Date("03-12-2024"), "YYYY-MM-DD"))
console.log(fourthTask.isWeekend(new Date("2024-12-06")))
console.log(fourthTask.daysBetween(new Date("2024-12-01"), new Date("2024-12-05")))