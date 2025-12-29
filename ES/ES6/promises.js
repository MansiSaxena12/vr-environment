let mypromise=new Promise(function(myResolve,myReject){
    let result=false;

    if(result==true){
        myResolve("Ok");
    }else{
        myReject("Error");
    }
});

mypromise.then(x=>myDisplay(x),x=>myDisplay(x));

function myDisplay(some) {
  console.log(some);
}