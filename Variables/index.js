const email="nipunkup@gmail.com" // constant value

// let age=22
// let password="123456"

// console.log(email,age,password);
// console.table([email,age,password]);
test1();

function test1(){
    //var has a global scope
    //let and const has a block based scope
    //var can be redeclared and let+const can't be in the same scope
    const age=21
    if (age===21){
        const age=22;
        console.log("inside if block",age);
    }
    console.log("outside if block",age);
}

var temp=12;
var temp=13;
console.log(temp,"this is temp");


