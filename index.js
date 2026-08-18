//console.log("Hello Shreya")

//const sum=function sum(a,b){
   // return Math.sqrt(a)+Math.sqrt(b);
//}
//console.log(sum(16,25));

//const sum=(a,b)=>{return a+b}
//console.log(sum(3,5))

// (()=>{
//     console.log("Hey using IIFE")
// })(); 

// let a=23
// if(a<40){
//     let a=40;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block="+a)

//Callback
// function sum(a,b){
//     return a+b;
// }
// function messwithSum(clbk,msg){
//     const result=clbk(40,50);
//     console.log("Hii "+ msg +" and your result="+result)
// }
// messwithSum(sum,"Shruti");

function login(error,messg){
    if(error){
        console.log("Error is:"+error)
    }
    else{
        console.log(messg)
    }
}
function loginHandler(username,pass,clbk){
    if(username=="shreya260" && pass=="12345"){
        clbk(null,"Login Success")
    }
    else{
        clbk("Username or password is incorrect",null)
    }
}
console.log(loginHandler("shreya1420",1234,login));
