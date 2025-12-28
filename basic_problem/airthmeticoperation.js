let num1 = 5;
let num2 = 3;
let num3 = 7;

let ans1=num1+num2*num3;
let ans2=num1%num2+num3;
let ans3=num1+num2/num3;
let ans4=num1*num2+num3;
let max=ans1;
if (ans2 > max) {
    max = ans2;
}
if (ans3 > max) {
    max = ans3;
}
if (ans4 > max) {
    max = ans4;
}
console.log(max);

let min=ans1;
if (ans2 < min) {
    min = ans2;
}
if (ans3 < min) {
    min = ans3;
}
if (ans4 < max) {
    min = ans4;
}
console.log(min);