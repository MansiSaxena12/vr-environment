let money = 100;
let goal = 200;
let wins = 0;
let totalBets = 0;

while (money > 0 && money < goal) {
    let gamble = Math.floor(Math.random() * 2); 
    totalBets++;

    if (gamble === 1) {
        money++;  
        wins++;
    } else {
        money--;   
    }
}
console.log(money);
console.log(totalBets);
console.log(wins);