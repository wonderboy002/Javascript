let a=33
console.log(typeof a);
let b="33"
console.log(typeof b);

// converting string to number
let valueInb=Number(b)
console.log(typeof valueInb);

//what if b="30abc"
//type gets converted to number but value is Nan
let B="30abc"
let valueInB=Number(B)
console.log(typeof valueInB);
console.log(valueInB);

//what if c=null
//type gets converted to number and value is 0
let c=null
let valueInC=Number(c)
console.log(typeof valueInC);
console.log(valueInC);

//what if c=undefined
//type gets converted and value is Nan
let C=undefined
let valueIn_C=Number(C)
console.log(typeof valueIn_C);
console.log(valueIn_C);

//incovertible string
//result is Nan
let str="Nipun"
console.log(typeof Number(str));
console.log(Number(str));

//conversion to boolean
//any non zero number => true
//string empty gives false else true
let logged=-100
let booleanLogged=Boolean(logged)
console.log(booleanLogged);