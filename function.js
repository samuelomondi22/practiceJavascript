

// function is a piece of code that does one or more actions.
function getAverage(a, b) {
    var average = (a + b) / 2;
    console.log(average);
    return average;
}

var myResult = getAverage(8, 12);
console.log("the average is " + myResult);

// or
function getAverage(a, b) {
    var average = (a + b) / 2;
    console.log(average);
}
getAverage(7, 12);

// function is a regular binding where the value of binding is the function.

var square = function (x) {
    return x * x
};
console.log(square(12));

// has set of parameters(words in brancket) and body(statement)
// ie with no parameters name 
var makeNoise = function () {
    console.log("pling!");
};
makeNoise();

// some function produces value such a power and square
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));

// Each scope can “look out” into the scope around it, so x is visible inside the block in the example. The exception is when multiple bindings have the same name—in that case, code can see only the innermost one
const halve = function (n) {
    return n / 2
};
let n = 10;
console.log(halve(100));
console.log(n);

// declaration notation . That statement defined the binding square nand points it a given function.
function square(x) {
    return x * x
};
console.log(square(9));

// The preceding code works, even though the function is defined below the code that uses it. useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.
console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

// arrow functions(=>). It expresses something like “this input (the parameters) produces this result (the body)”.
const square1 = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(square1(2, 10));

//When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function.
const power1 = x => x * x;
console.log(power1(5));
//or
const power3 = (x) => { return x * x };
{
    console.log(power3(5))

    // call stack. Because a function has to jump back to the place that called it when it returns, the computer must remember the context from which the call happened. In one case, console.log has to return to the greet function when it is done. In the other case, it returns to the end of the program.
    // The place where the computer stores this context is the call stack. Every time a function is called, the current context is stored on top of this stack. When a function returns, it removes the top context from the stack and uses that context to continue execution.
    function greet(who) {
        console.log("Hello " + who);
    }
    greet("Harry");
    console.log("Bye"); //run in a browser

    // optional arguments. JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.
    function square(x) { return x * x; }
    console.log(square(4, true, "hedgehog"));
    //  also upside is that this behavior can be used to allow a function to be called with different numbers of arguments. For example, this minus function tries to imitate the - operator by acting on either one or two arguments:
    function minus(a, b) {
        if (b === undefined) return -a;
        else return a - b;
    }

    console.log(minus(10));
    console.log(minus(10, 5)); //run in browser.

    function go() {
        alert('hi');
        alert('hey there');
    }
    console.log(go()); // run in a browser t

    //If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.
    function power(base, exponent = 2) {
        let result = 1;
        for (let count = 0; count < exponent; count++) {
            result *= base;
        }
        return result;
    }

    console.log(power(4));
    console.log(power(2,6)); //run on browser t

    // closure. The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called, brings up an interesting question. What happens to local bindings when the function call that created them is no longer active?
function wrapValue(n){
let local = n;
return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2()); //run in browser t

//the function body sees the environment in which it was created, not the environment in which it is called.
//In the example, multiplier is called and creates an environment in which its factor parameter is bound to 2. The function value it returns, which is stored in twice, remembers this environment. So when that is called, it multiplies its argument by 2.
function multiplier(factor){
    return number => number * factor
}
let twice = multiplier(2);
console.log(twice(5));

//rercusion- code recalls itself
function power(base, exponent){
    if (exponent == 0){
    return 1;}
else { return base * power(base, exponent -1);
}
};
console.log(power(2,10)); //run in browser t

//while loops keeps adding zeros in front of the number strings until they arae atlest 3 characters , .length gives length of strings
function printFarmInventory(cows,chickens){
    let cowString = String(cows);
    while (cowString.length<3){
        cowString = "0" + cowString;
    }
    console.log( `${cowString} Cows`);
    let chickenString = String(chickens);
    while(chickenString.length<3){
        chickenString= "0" + chickenString;
    }
    console.log(` ${chickenString} Chickens`);
    }
    printFarmInventory(7,10);
 

}


//arguments
function simpleFunc(a,b,c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
simpleFunc("steve", "omera", "iwalo"); //steve
                                    //omera
                                    //iwalo
//
function sam(a,b,c){
    if (typeof arguments[0] && typeof arguments[1]=== 'number'){
        console.log(`${a/b} is a divident of ${a} and ${b}`)
    }
}

sam(4,5,8); //0.8 is the divident of 4 and 5
//
function fam(a,b){
    if (arguments !== undefined){
        console.log("nigga");
    }
}
fam(2,4,5); //nigga
//
const prod = (a,b) => a*b;
const sum = (c,d) => c + d;
const sumProduct = (10, prod(4,5)); //30
const div = (e,f) => e/f;
const div_sumProduct = div(60,sumProduct); //2