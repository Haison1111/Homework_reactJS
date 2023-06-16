// let const var
/* 
Giống nhau
  + Khai báo biến

Khác nhau : 
  + scope
   - let,const => block scope
   - var => function scope, global scope 

  +hoisting
    - var => có cơ chế hoisting
    - let, const = > không có hoisting
  
  + re-assign 
    - let, var => có thể gán lại giá trị mới ( re-assign)
    - const => không thể gán lại


*/
//  Demo về scope
// {
//     { 
//         let b= 10;
//         const c = 100;
//         var a = 5;
//         console.log(b)
// console.log(c)
//     }
//     
//     console.log(a)
// }

// function greeting(){
//   const isMale = true;
  

//   if ( isMale){
//     console.log("hi bro")
//   } else {
//     console.log("hi sis")
//   }
// }


//  best practices sử dụng Const nhiều nhất có thể


// các loại function trong javascript

  // 1. Function declaration
  function sum(a,b) {
    const sum = a + b;
    console.log(`${a} + ${b} = ${sum}`);
  }
  sum(10,15)
//   2. Expession function
  // const greeting = (name) => {
  //   console.log(`Hello ${name}`);
  // }
  // greeting("CIJS Mindx")
 

  //  3.Immediately invoke function expession : IIFE

  // (function (){
  //   console.log("hello mindx")
  // })();

  // // 4. Arrow function 
  // // không có cơ chế hoisting
  // const sumArrow = (a,b) => {
  //    const sum = a + b;
  //    console.log(`${a} + ${b} = ${sum}`)
  // }

  // // hình thai khác của arrow function

  // const getSQRT = (num) =>  Math.sqrt(num);

  // getSQRT = 5;

  //  return về object
//  Sự khác nhau về context giữa normal function và arrow function

// const person = {
//   name: "CR7"
// }
import {nums} from "./arraymethods.mjs"

console.log(nums)