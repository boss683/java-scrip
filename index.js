+ console.log("hell mama");
//  let declation
let name = "hussein";
console.log("name");
// var decraliton
// var age = 25;
// age = 45

// const maham = 3.34;

// console.log("agee your name plece full ", age)

// console.log("do you agree with low in the maham :", +age + "your", name);

// console.log("maham");

// let option = true;
// console.log(option);
// console.log(typeof option);
// //  arithmetic 
// let number1 = 120;
// let number2 = 120;
// let www = 120 + 120
// console.log(www);
// let x = 10;
// ++x;
// console.log(x);

// let z = 10;
// --z;
// console.log(z);


// let day ;
// let day =(new Date().getDate()) 
// {    
// switch(Date)
// case 0 :
// day = "sunday";
// break;
// case 1:
// day =     "monday";
// break;
// case 3:
//     day = "tuesday";





//     }
let day ;
let date = new Date().getDate();
switch (date) {
    case 0:
        day = "Monday";
        break;
    case 1:
     day = "Tuesday";
        break;
    case 2:
         day = "wednesday";
        break;
    case 3:
       day = "thursday";
        break;
    case 4:
        day = "firday";
        break;
    case 5:
       day = "saturday";
        break;
    case 6:
        day = "su";

}
console.log("the day is" + day);


let Age = 16;
let hussein =(Age >25 )? "he is not chiled ": "alod man ";
console. log(hussein) 






 switch(new Date().getDay())
 {
    case 0:
        day = "Sunday";
         break;
    case 1:
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
         day = "Wednesday";
         break;
     case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
         break;
    case 6:
        day = "Saturday";
     }
 console.log(`day is the ${day}`);



 let time = new Date().getHours();
let greeting;
 if (time < 10) {
   greeting = "Good morning";
 } 
 else if (time < 20) {
  greeting = "Good day";
 }
  else {
   greeting = "Good evening";
}
console.log(greeting);
 
// nested if statements 
let age = 25;
let game = "Abdalsalam";
if (age >= 18) 
    console.log("You are an adult.")
    if (game === "Abdalsalam") {
        console.log("Welcome, Abdalsalam!");
    }
    else{
        console.log("Welcome, guest!");
    }



    // function
    function myFunction(){
        console.log("maham camp")

    }
    myFunction();


    let tell ="hussein"
    function printname (){

    console. log (tell)

    }
    // parent
    function calcutesum(num1,num2){
        return num1 + num2;
    }
    console.log(calcutesum(1,9 ))


    // lock 
    function calcutesum (){
let a = 4;
return a * a ;
    }
    console.log(calcutesum());



// if you sccsses

  let grade = "A";
let score = 95;

switch (grade) {
  case "A":
    if (score > 90) {               // condition inside switch case
      console.log("Excellent! You got a high A.");
    } else {
      console.log("Good job! You got a low A.");
    }
    break;

  case "B":
    if (score > 80) {
      console.log("Nice! You got a strong B.");
    }
    
     else {
      console.log("Keep improving! You got a low B.");
    }
    break;

  default:
    console.log("Grade not recognized.");
}
// goalp 
let adam = "alight"
function display(){
    console.log(adam)

}
display();


// lock scope
function dispiay1(){

let rey = 13
console.log(rey)

}
dispiay1();
 
// return


function dispiay2(a){
    return a * a;
    // console.log ( display(3))
    // console.log( "futuer nrear time in past")

} 
// function expression
 console.log ( display(3))
 let coll = function(ten){
    
 }





// let time2 = new Date().getHours();
// let greeting2 = (time2 < 10) ? "Good morning" :
//   (time2 < 20) ? "Good day" :
//   "Good evening";
// console.log(greeting2);

// // function
// function myFunction() {
//     console.log("hello function");
// }
// myFunction();

// function myFunction2(name,age) {
//     console.log("hello function your name is "+name+" your age is "+age);
// }
// myFunction2("hussein",25);

// function myFunction3(name,age) {
//     return "hello function your name is "+name+" your age is "+age;
// }
// let result = myFunction3("hussein",25);
// console.log(result);

// // array
// let fruits = ["apple","banana","mango"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits.length);
// fruits.push("orange");
// console.log(fruits);                                    













