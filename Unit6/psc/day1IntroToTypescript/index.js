var x = 10;
var y = 20;
function sum1(a, b) {
    return a + b;
}
sum1(45, 8);
if (x == y) {
    var min = x - y;
}
;
var a = true;
a = false;
// a= 1
var b = 15;
b = 41;
// b = false
var arr = [12, 65, 445];
var arrString = ["247", "258", "836"];
// or operator
var arr199 = [12, "65", 445];
//array of number | boolean
var arrBooleanNumber = [true, 12, true, 954];
// array of boolean
var arrBoolean1 = [true, false, true, false];
var arrBoolean2 = [true, false, true, false];
// array of number | string
var arrStringNumber = ["true", 12, "true", 954];
// null
var p = null;
p = 5;
//undefined
var bv = undefined;
bv = 5;
// function 
// argument
function sum2(a, b) {
    return (a + b).toString();
}
// optional argument
function sum3(a, b) {
    if (!b) {
        return a.toString();
    }
    return (a + b).toString();
}
//default value seted
function sum4(a, b) {
    if (b === void 0) { b = "0"; }
    if (!b) {
        return a.toString();
    }
    return (a + b).toString();
}
// void -> not returning anything just do thing only
//any -> avoid use any just similar to js idk anything kindof thing
function sum5(a, b) {
    if (b === void 0) { b = 0; }
    if (!b) {
        return a;
    }
    else {
        return (a - b);
    }
    return (a + b);
}
var u = {
    name: "ritesh",
    age: 20,
    place: "India",
    number: 1122,
    ismarried: false,
    rollNo: 1,
    batch: 2
};
var us1 = {
    name: "ritesh",
    age: 20,
    place: "India",
    number: 1122,
    ismarried: false,
};
