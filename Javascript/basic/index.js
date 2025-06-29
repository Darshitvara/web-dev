// console.log("Hello Universe !");

// way = 1 to take user input 
// ==========================

// window.alert("Thank you!");


// let name = window.prompt("Enter your name: ");
// document.getElementById("p1").innerHTML = "Hello My name is " + name;

// ===================================================================================================================

// way = 2 to take user input 
// ==========================


// document.getElementById("btn1").onclick = function(){
    //     name = document.getElementById("p2").value;
    //     document.getElementById("p1").innerHTML = "Hello " + name;
    // }
    
    
    
// ===================================================================================================================
// Switch statement in js
// ======================
    
        // let grade = 'A'
        
        // switch('A'){
        //     case 'A':
        //             console.log("Passed with Distinction")
        //             break
        //     case 'B':
        //             console.log("Passed with excellent marks")
        //             break
        //     case 'C':
        //             console.log("Passed with average marks")
        //             break
        //     case 'D':
        //             console.log("Passed with good marks")
        //             break
        //     case 'E':
        //             console.log("Passed with low marks")
        //             break
        //     case 'F':
        //             console.log("You are Fail.")
        //             break
        //     default:
        //             console.log("Please enter valid grade..")
        // }
                                
// ===================================================================================================================                      
// Switch case with different use case
// ===================================
// works as a nested if statement with more convience
// ==================================================
                                
        // let marks = 90
                                
        // switch(true){
        //     case (90 <= marks && marks <= 100):
        //         console.log("Passed with Distinction")
        //         break
        //     case (80 <= marks):
        //         console.log("Passed with excellent marks")
        //         break
        //     case (60 <= marks):
        //         console.log("Passed with average marks")
        //         break
        //     case (50 <= marks):
        //             console.log("Passed with good marks")
        //             break
        //     case (40 <= marks):
        //             console.log("Passed with low marks")
        //                 break
        //     case (40 > marks && marks >= 0):
        //                 console.log("You are Fail.")
        //                 break
        //     default:
        //         console.log("Please enter valid marks..")
        // }
        
// Loops in javascript
// ===================
        
        // let username = ""
        
        // while(username == ""){
        //     username = window.prompt("Enter Your Name : ")
        // }
        // document.getElementById("p1").innerHTML = "Hello My name is " + username;
        
 // ===================================================================================================================
        
        // let username = ""
        
        // do{
            //     username = window.prompt("Enter Your Name : ")
            // }while(username == "")
                // document.getElementById("p1").innerHTML = "Hello My name is " + username;
            
//  ===================================================================================================================
        // while(1){
            //     console.log("Infinite loop")
            // }
    
//  ===================================================================================================================

        // row = window.prompt("Enter Number of rows for triangle : ")
        // col = window.prompt("Enter Number of Column for triangle : ")
        // for(let i = 0 ; i < row ; i+=1){
        //     for(let j = 0 ; j <= col ; j+=1){
        //         document.getElementById("table").innerHTML += ((j+1)+(" ")); 
        //     }
        //     document.getElementById("table").innerHTML += "<br><br>"; 
        // }

//  ===================================================================================================================


// nested loop for triangle

        // for(let i = 0 ; i < row ; i+=1){
        //     for(let j = 0 ; j <= i ; j+=1){
        //         document.getElementById("table1").innerHTML += ("   *   "); 
        //     }
        //     document.getElementById("table1").innerHTML += "<br><br>"; 
        // }
        // for(let i = row ; i >= 0 ; i-=1){
        //     for(let j = 0 ; j <= i ; j+=1){
        //         document.getElementById("table1").innerHTML += ("   *   "); 
        //     }
        //     document.getElementById("table1").innerHTML += "<br><br>"; 
        // }
        

// ===================================================================================================================
        
        
// Functions in Javascript
// =======================

        // function for prime number
        // ========================

        // function isPrime(num){
        //     if(num<=1) return "not prime"
        //     if(num <= 3) return "prime"
        //     let limit = Math.sqrt(num)
        //     for(let i = 2 ; i <= limit ; i++){
        //         if(num % i === 0){
        //             return i + "Not prime"
        //         }
        //     }
        //     return "prime"
        // }
        
        // let n = window.prompt("Enter Number : ")
        // document.getElementById("p1").innerHTML =  ` ${n} is ` + isPrime(n)
        


        // function for odd/even number
        // ========================
        
        // function isEven(num){
        //     if(num & 1){
        //         return false
        //     }
        //     return true
        // }

        // let n = window.prompt("Enter Number : ")
        // document.getElementById("p1").innerHTML = n +" is " + (isEven(n) ? "Even" : "odd")        
        
        
// different string representations using toLocalString function
// =============================================================
// returns the language sensitive representation of number 
// =======================================================

        // let num = 39894802.4843

        // console.log(num.toLocaleString(undefined,{style:"currency" ,currency:"INR"}))
        // console.log(num.toLocaleString(undefined,{style:"percent"}))
        // console.log(num.toLocaleString(undefined,{style:"unit" ,unit:"celsius"}))
        // console.log(num.toLocaleString(undefined,{style:"unit" ,unit:"mile"}))

// spread operator (...)
// =====================

// allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (Unpacks the elements)
// =======================================================================================================================================

        // let numbers = [1,0,20,31,45,6,46,55,26,55,3264,3]
        // console.log(numbers)
        // console.log(...numbers)

        // let names = ["Jay","Harsh","Sumit","Rishabh"]
        // let cars = ["Ciron","virtus","Fortuner","Porche"]
        // console.log(names)
        // console.log(...names)

        // names.push(cars)
        // console.log(names)

        // names.push(...cars)
        // console.log(names)

// rest parameter(...)
// ====================

// represents an indefinite number of parameters(packs arguments into an array)
// ============================================================================


        // function total(...numbers){
        //         let total = 0
        //         for(let num of numbers){
        //                 total += num
        //         }
        //         return total
        // }
        // console.log(total(10,40,49,20))
        // console.log(total(49,20))
        // console.log(total(49,20,44,20,49,20,53,10,57))

// callback = a function passed as an argument to another function
// ===============================================================

// Ensures that a function is not going
// to run before a task is completed
// helps us develop asynchronous code that helps us avoid errors and potential problems
// EX. In file type converted program wait for a file to load then continues the further execution
// ===============================================================================================

        // function sum(a,b ,display){
        //         let total = a+b
        //         display(total)
        // }
        // function display(something){ 
        //         console.log(something)
        // }

        // sum(10,15,display)

// array.forEach() = executes a provided callback function once for each array element
// ===================================================================================

// element , index and array will be always provided by the forEach function so we don't necessarily need to declare it..
// ======================================================================================================================
        
        // let names = ["jay","harsh","darshit","rishabh"]
        // names.forEach(capitalize)
        // names.forEach(print)

        // function capitalize(element,index,array){
        //         array[index] = element.toUpperCase() 
        // }
        
        // function print(element){
        //         console.log(element)
        // }

// array.map() = executes a provided callback function once for each array element and creates a new array
// =======================================================================================================
// works similar as a forEach mathod 
// =================================
 
        // let nums = [1,2,3,4,5,6,7]
        // let cubes = nums.map(cube)
        // cubes.forEach(print)  
        // console.log(...cubes)
        // function cube(element){
        //         return Math.pow(element,3)
        // }
        // function print(element){
        //         console.log(element)
        // }

 
// array.filter() = creates a  new array with all elements that pass the test provided by a function
// =================================================================================================

        // let ages = [15,48,53,12,74,7,49]
        // let adults = ages.filter(checkAge)

        // console.log(...adults)

        // function checkAge(element){
        //         return element >= 18
        // }


// array.reduce() = reduces an array to a single value
// ===================================================

        // let ages = [15,48,53,12, 74,7,49]
        // let adults = ages.reduce(checkAge)

        // console.log(adults)

        // function checkAge(total,element){
        //         return element+ total
        // }

// array.sort() = by default sorts an array based on string and for numeric sorting we need to provide function that has two parameters and returns positive on greater value , zero in equal and negetive on less value.
// ======================================================================================================================================================================================================================

        // let ages = [15,48,53,12, 74,7,49]
        // // let adults = ages.sort((a,b) => a-b)
        
        // ages = ages.sort(compare)

        // function compare(a,b){
        //         return a-b
        // }
        // console.log(...ages)

// arrow function(=>) = compact alternative to a traditional function
// ==================================================================

        // let ages = [15,53,12, 74,7,49]
        // let squared = ages.map((element) => element*element);

        // let squared = ages.map((a) => Math.pow(a,2) );

        // ages.forEach(function(element){
        //         return Math.pow(element,2)
        // });

        // squared.forEach((element) => console.log(element))
        

// program to suffle the cards
// ===========================

        // let  cards = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

        // let shuffeldCards = shuffle(cards)
        // console.log(...shuffeldCards)
        // console.log(cards)
        // console.log(...cards)

        // function shuffle(array){
        //         let length = array.length
        //         let current_index = length
        //         let temp = 0

        //         while(current_index != 0){
        //                 random_index = Math.floor(Math.random() * length)
        //                 current_index-=1;
        //                 temp = array[current_index]
        //                 array[current_index] = array[random_index]
        //                 array[random_index] = temp
        //         }
        //         return array
        // }

// map - object that holds key-value pairs of any data types
// =========================================================


// this keyword - reference to a particular Object,object depends on the immediate OfflineAudioContext
// ===================================================================================================
// car is an object here.
// ======================
// const car = {
//          model :"ferrari",
//          color : "red",
//          year : 2024,

//          drive : function(){
//                 console.log("car can be drived..");
//          },
//          break : function(){
//                 console.log("breaks can be pressed to stop the car.")
//          }
// }


// const car = {
//         model :"ferrari",
//         color : "red",
//         year : 2024,

//         model:function(){
//                 console.log(`mode : ${model}`);
                //  console.log(`mode : ${this.model}`); 
//         },
//         break : function(){
//                console.log("breaks can be pressed to stop the car.")
//         }
// }
// car.model(); // it will give an error(Uncaught ReferenceError: model is not definedat Object.model)
// // to eliminate this proble "this" keyword is used.




// class - a blueprint for creating objects define what propertices and method they have use a constructor for unique properties 
// =============================================================================================================================

// class Student{
//         constructor(name , age, CGPA){
//                 this.name = name;
//                 this.age = age;
//                 this.CGPA = CGPA;
//         }
//         print(){
//                 console.log(`student name : ${this.name}`);
//                 console.log(`student age  : ${this.age}`);
//                 console.log(`student cgpa : ${this.CGPA}`);
//         }
// }
// const s1 = new Student("Darshit",19,9.78);
 
// s1.print();

// setTimeout() = invokes a function after a number of milliseconds asynchronous(Doesn't pause execution) function.
// ================================================================================================================
// let name = "Human";

// let timer1 = setTimeout(f1,2000,name);
// let timer2= setTimeout(f2,5000);
// let timer3 =setTimeout(f3,9000);

// function f1(name){
//         alert(`Hello ${name}..`);
// }
// function f2(){
//         alert("Good morning..!"
//         );
// }
// function f3(){
//         alert("Good night");

// }

// clearTimeout() - It is used to clear the timeouts.
// ==================================================

// clearTimeout(timer2);

// setInterval() = invokes a function repeatedly after a number of milliseconds. asynchronous function
// ====================================================================================================

// let count = 0;
// let max = Number(window.prompt("Enter number : "));

// let interval1 = setInterval(countTill,1000,max);
// function countTill(max){
//         count += 1;
//         if(count >= max){
//                 clearInterval(interval1);
//         }
//         console.log(count);
// }

// The Date object is used to work with dates & times.
// =================================================================



let date = new Date();
// let date = new Date(2024,7,13,20,8,55);
// date = date.toLocaleString();


// date.setFullYear(2025);

// let year = date.getFullYear();
// let month = date.getMonth();
// let day = date.getDate();
// let week = date.getDay();
// let hour = date.getHours();
// let minute = date.getMinutes();
// let second = date.getSeconds();
// let milliseconds = date.getMilliseconds();


// document.getElementById("date").innerHTML = formateTime();
// function formateTime(){
//         return `${date.getDate()} / ${date.getMonth()+1} / ${date.getFullYear()} `
// }

// document.getElementById("date").innerHTML = second;

// synchronous code - In an ordered sequence step-by-step linear instructions
// ==========================================================================

// asynchronous code - Out of sequence. Ex Access a database , Fetch a file,Tasks that take time
// =============================================================================================

// console.time() - Start a timer you can use to track how long an operation takes ,give each timer a unique name.
// ============================================================================================================


// console.time("Taken time");

// alert("click..");

// console.timeEnd("Taken time");



// A promise in JavaScript is like a container for a future value. It is a way of saying, “I don’t have this value right now, but I will have it later.” Imagine you order a book online. You don’t get the book right away, but the store promises to send it to you. While you wait, you can do other things, and when the book arrives, you can read it.
// ========================================================================================================================================================================================================================================================================================================================================================
// In the same way, a promise lets you keep working with your code while waiting for something else to finish, like loading data from a server. When the data is ready, the promise will deliver it.
// =====================================================================================================================================================================================================

// A promise can be in one of three states:
// =========================================
// Pending: The promise is waiting for something to finish. For example, waiting for data to load from a website.
// Fulfilled: The promise has been completed successfully. The data you were waiting for is now available.
// Rejected: The promise has failed. Maybe there was a problem, like the server not responding.
// ============================================================================================================
// let promise = new Promise((resolve,reject) => {
        
//         if(compare()){
//                 resolve();
//         }
//         else{
//                 reject();
//         }
        
// });
// promise.then(() => {
//         console.log("Both are same.");
// })
// .catch(() => {
//         console.log("Both are diffrent.");
// })
// function compare(){
//         let val1 = window.prompt("Enter value 1 :");
//         let val2 = window.prompt("Enter value 2 :");
//         return val1 === val2;
// }


// We can not change the value of PI because it's defined as constant 
// ==================================================================

// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

// Object.defineProperty(Math,"PI",{
//         writable:  true
//         })
        
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

// In normal object properties can be easily modify.
// ==================================================================

// const obj = {
//         username : "user1",
//         password : "pass1"
// }
// console.log(Object.getOwnPropertyDescriptor(obj,"username"))

// Object.defineProperty(obj,"username",{
//         value : "Darshit",
//         writable: false
// })

// console.log(Object.getOwnPropertyDescriptor(obj,"username"))


// binds two contexts without loosing any.. 
// In out case, function handleClick() is called from the context of button ..
// (by word button context means the context that helps to locate the button from which function is invoked.)
// and button context is not aware with the current context of React.handleClick()
// to let button context know the current context we bind the current context using bind methos
// It does not overrides the button context .. 

// class React {
//         constructor(){
//             this.library = "React"
//             this.server = "https://localhost:300"

//             //requirement
//             document
//                 .querySelector('button')
//                 .addEventListener('click', this.handleClick.bind(this))
//         }
//         handleClick(){
//                 console.log(this)
//             console.log("button clicked");
//             console.log(this.server);
            
//         }
//     }

//     const app = new React()