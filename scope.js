let x=10;
function addition(){
    let y=20;
    console.log(x +y);
}
addition();

// local scope

function local(){
    let x=10;
    console.log(x);
}
local();

// Block and lexical scope

function lexical(){
    let x=10//local variable
    {
        let y=4;//block scope
        console.log(y);
    }
    function nested(){
        console.log(x)//lexical scope
    }
    
    nested();
    
}
lexical();


//block scope
{
    //can be accessible outside scope
    var l=10;
    //cannot be accessible outside scope
    const z=20;
    let y=30;

    console.log(y);
    console.log(z);
}
console.log(l);