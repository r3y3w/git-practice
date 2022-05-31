// let i = 0 -> initializes varialbe
// i < 10 -> is the condition to be checked
// i++ -> this adds 1 to i,  i = i + 1 (++ is the short hand)

// for(let i = 0; i < 10; i ++) {
//     console.log("loop is running", i)
//     }
    



// for(let i = 0; i <= 100; i ++) {
//     console.log("Just Testing...", i)
//     }

// const cars = ['chevy', 'volvo', 'saab', 'ford', 'ferrari', 'tesla', 'nissan']

// for (let i = 0; i < cars.length; i++) {
// if(i >= 4 && i < 6) {
//     console.log('Check out my car', cars[i])
//     }
// }


/**************  LAB   **************
 * 
 * // 1. Write a loop that outputs;
// 10
// 9
// 8
// ...
// 2
// 1
// BlAST OFF!
 */

for(let i = 10; i >= 0; i --) {
    if(i > 0) {
    console.log(i)
    } else
    console.log('BLAST OFF !!!!!')
}

