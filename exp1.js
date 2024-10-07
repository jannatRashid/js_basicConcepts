// var and let
var a = "this is";
console.log(a);
{
    let a = "jenny";
    console.log(a);
}






// objects in js 

const school = {
    "class3": 60,
    "class4": 86,
    class8: 90,
}
school["class9 "] = 93;

console.log(school);

// another format
console.log(school["class4"]);

//also can access through  dot
console.log(school.class8);










// operators

let c = 6;
let c2 = "6";
console.log("c==c2 ->", c == c2);  // compares only value
console.log("c===c2 ->", c === c2);  // compared data type

// string methods 
//concatinate method
let name = "jenifer";
let pet = "sweetie";
console.log(name.concat("  has a pet cat named  ", pet));

let fr = "jenny" + "louis"; //another way for concatenation
console.log(fr);


// trim method
let friend = "     mena      ";
console.log(friend);
console.log(friend.trim());


// Array with Loop

console.log("for each ");

let num = [3, 2, 4, 5];
num.forEach((Element) => {
    console.log(Element + Element);
    console.log(Element * Element);

})

//ARRAY.FROM
console.log("Array.From");

let i = "jannat";
let arr = Array.from(i);
console.log(arr);


// FOR OF 
// will print the values in array
console.log("for of loop");

for (let i of num) {
    console.log(i);
}

// FOR IN
//will print the index number of items in array
console.log("for in loop");
for (let index in num) {
    console.log(index);
}

//Map function
//creates a new array 
console.log("Map function")
let arr3 = [2, 4, 6, 8];
let a1 = arr3.map((value) => {
    console.log(value);
    return value + 1;
})
console.log(a1)
// have additional arguments called value index and array 
console.log("Map function with all argument")
let arr2 = [2, 4, 6, 8];
let a2 = arr2.map((value,index,arr2) => {
    console.log(value,index,arr2);
    return value + index;
})
console.log(a2)

//filter function
//filters the array on behaflf of the condition 
console.log("filter  function")
let arr4 = [2, 4, 6, 8,90,30,65,88];
let a3 = arr4.filter((j) => {
   
    return j>10;
})
console.log(a3);

//reduce function
//filters the array on behaflf of the condition 
console.log("reduce function")
let arr5 = [1,2,3,4,5];
let a4 = arr5.reduce((j1,j2) => {
   
    return j1+j2;
})
console.log(a4);



