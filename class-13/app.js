// --- Function ----- 

// function functionName(){
// // BLock of code 
// }

// functionName()


// Functions -- 4 types --
//  no Parameter no return ------ ✅
// with parameter but no return ------ ✅
//  no Parameter but with return ---- ✅
// with parameter with return ------ ✅


//  Write a function to display food List ... with a great sentence
//  Write a function to display food List ... get food elements from user and display on outputScreen


// no parameter -- no return
// function FoodList() {
//     console.log(`Mango is very metha metha .`);

// }


// FoodList()


// // no parameter -- with return
// function VegeList() {
//     return `Karela is very karva karva .`
// }


// let displayVege = VegeList()
// console.log(displayVege);




// //  Write a function to display food List ... get food elements from user and display on outputScreen



// with parameter but no return type .


// let food = "Biryani"
// let drink = "Marinda"
// let sente = "Iam here to eat Biryani and to drink Marinda"

// function displayFood(food,drink) {
//     console.log(`I am here to eat ${food} and to drink ${drink}`);

// }

// displayFood("Biryani","Marinda")
// displayFood("Pasta","Mango Juice")


// Employee
// ID
// name
// Department 
// Time 

// with parameter but no return
function getAttendence(name, id, depart, time) {
    console.log(`
        Name : ${name}
        ID: ${id}
        Department : ${depart}
        Time : ${time}
        `);

}
getAttendence("Sir Tahir", "Web-023", "Web-Development", "09: 00")

function getBio(name, id, depart, time) {
    return `
        Name : ${name}
        ID: ${id}
        Department : ${depart}
        Time : ${time}
        `

}
let displayBio = getBio("Ma'am Hina", "GD-13844", "Grapgic Desiging", "10: 00")


console.log(displayBio);



// --No parameter with return ----

function greet(){
    return "Hello Humna Arnib"
}

let disPlayGreeting = greet()

console.log(disPlayGreeting);
