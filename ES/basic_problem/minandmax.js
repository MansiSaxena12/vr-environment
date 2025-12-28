let max=0;
let min=10
for(let i=0;i<5;i++){ 
    const dice=Math.floor(Math.random()*99)+10;
    if(dice<min){
        min=dice;
    }else if(dice>max){
        max=dice;
    }else{
        continue;
    }
}
console.log(min," ", max);