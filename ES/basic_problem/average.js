let sum=0;
for(let i=0;i<5;i++){ 
    const dice=Math.floor(Math.random()*99)+10;
    sum+=dice;
    console.log(dice);
}
console.log(sum/5);