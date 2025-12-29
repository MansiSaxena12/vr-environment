//Spreadoperatores
const startnumbers=[1, 2, 3];
const continuenumbers=[4, 5, 6];
const merge=[...startnumbers,...continuenumbers];
console.log(merge);


//rest operatres
const numbers=[1, 2, 3, 4, 5, 6];
const [one, two, apes,...hello]=numbers;
console.log(apes);
console.log(hello);