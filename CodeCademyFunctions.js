// Calculate the area of a rectangle

const width = 10;
const height = 6;
const area = width * height;
console.log(area); // output

greetWorld() // Hoisting feature from JS allows access to function declaration
             // before they're defined 

function greetWorld() {
    console.log(" Hello World!!! ")
}

// Call function
greetWorld()


function getReminder() {
    console.log('Water the Plants')
}

getReminder()


function greetInSpanish() {
    console.log('Buenas Tardes')
}

greetInSpanish()


function sayThanks(name){
    console.log('Thank you for your purchase ' + name + '! We appreciate  your business.');
}
sayThanks('Leila')


function greeting(name = 'stranger') {
    console.log(`Hello, ${name}!`)
}

greeting('Nick')
greeting()

function rectangleArea(width, height) {
    const area = width * height;
    return area
}
console.log(rectangleArea(5, 7))



// function monitorCount(rows, columns) {
//     return rows * columns
// }

// const numOfMonitors = monitorCount(5, 4);

// console.log(numOfMonitors);

// convert temperature from Celcius to Fahrenheit

function multilpyByNineFifths(number) {
    return number * (9/5)
}

function getFahrentheit(celcius) {
    return multilpyByNineFifths(celcius) + 32
}

console.log(getFahrentheit(15)) 

// Return 59


function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200
}

const totalCost = costOfMonitors(5,4)
console.log(totalCost)

const calculateArea2 = function(width, height) {
    const area = width * height;
    return area
}

console.log(calculateArea2(5, 5))


const plantNeedsWater = function(day){
    if(day === 'Wednesday') {
        return true;
    } else {
        return false
    }
}

plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'))


// Arrow Functions   () =>

const rectangleArea3 = (width, height) => {
    let area = width * height
    return area
}

console.log(rectangleArea3(5, 6))


const plantNeedsWater2 = (day) => {
    if (day === 'Wednesday') {
        return true
    } else {
        return false
    }
}

console.log(plantNeedsWater2('Wednesday'))
console.log(plantNeedsWater2('Friday'))


// Concise Body Arrow Functions is the most condense way to write a function

// Zero parameter
const functionName = () => {}

// One Parameter
const functionName2 = paramOne => {}

// two or more Parameter
const functionName3 = (paramOne, paramTwo) => {}


// Single Line Block
const sumNumbers = numbers => number + number

// Multi line block

const sumNumbers2 = numbers2 => {
    const sum = numbers2 + numbers2
    return sum
}

const squareNum = (num) => {
    return num * num
}

const squareNum2 = num => num * num 

// refractor

const plantNeedsWater4 = day => day === 'Wednesday' ? true : false

console.log(plantNeedsWater4('Saturday'))
console.log(plantNeedsWater4('Wednesday'))


