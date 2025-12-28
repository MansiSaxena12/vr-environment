
const leap = Number(prompt("Enter a year:"));

if ((leap % 400 === 0) || (leap % 4 === 0 && leap % 100 !== 0)) {
    console.log("Is Leap Year");
} else {
    console.log("Is Not a Leap Year");
}
