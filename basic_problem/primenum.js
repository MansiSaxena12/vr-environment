let n=8;
let isprime=true;
for(let i=0;i<n;i++){
    if(n%i===0){
        isprime=false;;
        break;
    }
}
if(isprime){
    console.log("Prime");
}else{
    console.log("Notprime");
}
