// ---- arrays -----


let vegetable = "Allo";

let veges = ["Tamatar", "Allo", "Piyaz", "Mattar", "Kareela", "Toori", "Bhindi", "Looki", "Kheera", "Kadu"
]


// --1  array elemt ko get karne ke liye count -- index wise (satrt with 0)
// --2  array ki length ko count karna ho , start with 1


// console.log(veges[0] , veges[1] , veges[2] , veges[3]);



// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// -------------------------------------------------
// ----------- array methods -------------


// push ---- last  add  -- element
// pop ---  last remove  -- element
// shift --- start remove -- element
// unshift --- start  add  -- element
// slice ---- shellow copy banata hai -- original ko distroy
// splice ---  deep copy banata hai -- original distroy karta

// let girlNames = ["Tuba" , "Bushra" , "Sumaiya" , "Manahil" , "Yumna" , "Sadia" , "Maryam" , "Javeria" ]


// console.log(girlNames);


// girlNames.push("sara")

// console.log(girlNames);

// girlNames.pop()

// console.log(girlNames);

// girlNames.shift()
// girlNames.unshift("Ayesha")


// console.log(girlNames);


let girlNames = ["Tuba" , "Bushra" , "Sumaiya" , "Manahil" , "Yumna" , "Sadia" , "Maryam" , "Javeria" ]


// // slice(stratIndex(included) , endIndex(excluded))
// // -- copy banata hai .
// // --- original array main changes nahi karta
console.log("slice ",girlNames.slice(2,6));
// console.log(girlNames.slice(3));

console.log("original array ",girlNames);


// splice(startindex(included),deleteCount, addElement)

console.log("splice ",girlNames.splice(2,3,"Ali", "Ahmed" ));

console.log("original array ",girlNames);



// DataTypes + Variables 
// comparision operators + conditions
// Loops (ForLoop + While)
// Functions + all types
// array + 6 methods (push pop shift unshift)