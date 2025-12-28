let tail=0;
let head=0;

while(head===11 || tail===11){
    let flip = Math.floor(Math.random() * 2);
    if(flip===0){
        head++;
    }
    if(flip===1){
        tail++;
    }
}
if(head===11){
    console.log("head");
}else{
    console.log("tail");
}