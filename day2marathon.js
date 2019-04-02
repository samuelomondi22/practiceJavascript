//FUNCTIONS
//block of code designed to perform a particular task
function square(x){ //expression starts with key wordfunction followed by name and()....x is a parimeter and acts as a local var
    console.log(x * x);
}
square(4); // 4 is an argument(value when revocked)
//>16

//function with no perimeter
function call(){
    console.log("nigga");
}
call(); //>nigga
//return statement determines the value the function returns, functions oftn compute return value
// A return keyword without an expression after it will cause the function to return undefined
//when it reaches return it stops executing.
function myFo(a, b){
    return a * b;
};
myFo(4, 3); //12
//function can reuse code
function toReuse(f){ //toReuse refers to function obj and toReuse() refers to function result
    return (5/9) * (f - 32);
}
toReuse(77); //>25
//Accessing a function without () will return the function definition instead of the function result:
square = x => x * x;
//>[Function:square] ie
square(4); //>16
//scope looks outs for scope around it. when it is same name code only sees innermost one
const halves = function(n) {
    return n/ 2;
};
let n = 10;
console.log(halve(100)); //>50
console.log(n);//>10
//() invokes function
function toDay(f){
    return (5/9 ) * (f - 32);
}
toDay(77); //>25


//OBJECTS
//has properties and methods. properties due differ
//obj are var too 
var car = "Fiat";
console.log(car); //>Fiat
//but can contain many values
var car = {model: 500, type:"BMW", color:"white"}; //values normally written as name.value
car.model; //>500
car.color;//>white
//obtaining object properties. obj_name.propertyName, obj_name["propertyName"], 
//methods. actions that can be performed on objects
//this keyword refers to owner of the function ie this.lastName(this is person obj that owns lastName function)
//do not declare strings, numbers, booleans as a object
//constructor creates new obj
//creating obj within am initialiser is key:value
var Volvo = {model: 500, color: 'white' ,make: 'china'};
Volvo.model; //500. model ,color and make are the keys while 500, white and china are the values. the dot(.) or ([]) is how to access the properties
//when there are var you wish to put in your obj
var a = 'foo',
    b = 42,
    c = {};
    var o = {
        a:a,
        b:b,
        c:c
    };
    //or
    var a = 'foo',
    b = 42,
    c = {};
var o ={a, b ,c};
//
console.log(o.a === {a}.a));