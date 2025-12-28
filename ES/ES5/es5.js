let str="MansiSaxena";
console.log(str.charAt(0));
console.log(str[1]);

//trim
var st="    Hello";
console.log(st);
console.log(st.trim());

//array is array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

result = Array.isArray(fruits);
console.log(result);

//for each
// const numbers = [45, 4, 9, 16, 25];
// let txt="";
// numbers.forEach(myFunction);
// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
  
// }

//mapping
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
console.log(numbers2);
function myFunction(value) {
  return value * 2;
}
