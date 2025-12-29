let text= `Hello, World!`;
console.log(typeof(text));
// it allows to use double or single quotws inside the text

let type = `hello i am Mansi Saxena.
i have a father.
i have a mother`
console.log(typeof(type));
console.log(type);

//Interpolation

let name=`Maya`;
let age=21;
let obj=`Welcome ${name}, you are eligible as your age is ${age}`;
console.log(obj);

//Expression subsitution

let price=10
let VAT= 0.25

let total=`Total: ${(price * (1+VAT)).toFixed(2)}`;
console.log(total);


//template
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `${header}`;
for (const x of tags) {
  html += `${x}`;
}
console.log(html);
