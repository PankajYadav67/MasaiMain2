const x : number = 10 ;
const y : number = 20;

function sum1 (a : number, b : number){
    return a + b;
}
sum1(45,8);

if(x==y){
    const min = x-y;
};




var a : boolean = true;
a = false;
// a= 1


var b : number = 15;
b =41;
// b = false





let arr : Array<number> = [12,65,445];
const arrString : string[] = ["247","258","836"];




// or operator

let arr199 : Array<number | string> = [12,"65",445];




//array of number | boolean
let arrBooleanNumber: Array< number|boolean> = [true,12,true,954] ;

// array of boolean
let arrBoolean1: Array<boolean> = [true,false,true,false] ;
let arrBoolean2: boolean[] = [true,false,true,false] ;

// array of number | string
let arrStringNumber: Array< number|string> = ["true",12,"true",954] ;



// null

let p : null | number = null;
p =5 ;

//undefined
let bv : undefined | number = undefined;
bv =5 ;





// function 

// argument

function sum2 (a : number, b : string) : string{
    return (a + b).toString();
}

// optional argument
function sum3 (a : number, b?: string ) : string{
    if(!b){
        return a.toString();
    }
    return (a + b).toString();
}

//default value seted

function sum4 (a : number, b: string = "0" ) : string{
    if(!b){
        return a.toString();
    }
    return (a + b).toString();
}

// void -> not returning anything just do thing only

//any -> avoid use any just similar to js idk anything kindof thing

function sum5 (a : number, b: number = 0 ) : any{
    if(!b){
        return a;
    }else{
        return (a- b);
    }
    return (a + b);
}

//onject

type User= {
    name:string;
    age:number;
    place:"India"| "U.S.A" | "Russia" | "Japan";
    number:number;
    ismarried:boolean;
}
type Student = {
    rollNo:number;
    batch:number;
}

let u : User & Student ={
    name : "ritesh",
    age: 20,
    place:"India",
    number:1122,
    ismarried:false,
    rollNo:1,
    batch:2
}



//interface

interface User1 {
    name:string;
    age:number;
    place:"India"| "U.S.A" | "Russia" | "Japan";
    number:number;
    ismarried:boolean;
}

interface Students extends User1 {
    rollNo:number;
    batch:number;
}

let us1 :User1 ={
    name : "ritesh",
    age: 20,
    place:"India",
    number:1122,
    ismarried:false,
  

}