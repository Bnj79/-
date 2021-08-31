// // // var x =3; //global variable - no lock
// // // console.log(x);
// // //let and const
// // let x = 5;
// // const y=4; initializing
// // y=4;
// // console.log(x+y);

// // let x; //declration
// // x=5;
// // console.log(x);
// // const e=4;

//  // my friend
// // console.log("Hi Ahmad");

// // //my teacher
// // console.log("Where are you from?");
// // console.log(1);

// //   primitive Data type
// // string,number,boolean,undefined,null

// // let name = "mahdi"
// const age = 21;

// // console.log(name);
// let firstName = undefined;
// let lastName = null;
// let name = "";

// let numbers = [4,5,3,2];
// //console.log(numbers[0]);
// numbers[4]=122;
// //console.log(numbers);
// //console.log(numbers.length);

// // objects

// const person = {
//     name :"Benyamin",
//     age:22,
//     gender : "Male",
//     address:{  //object inside other object
//         country:"Iran" ,
//         city:"Tehran"
//     },
//     hobbies :    ["watching movies","Learning","coding"]

// }

// console.log(person.hobbies);
// person.email = "benyamin3663@gmail.com";
// console.log(person.email);

// function sayHello(name ="Ben",age){ //arguments
//     console.log("Hello World "+name+" with "+age+" years old");
// }
// // sayHello("Mahdi",21); //pass arguments to function parameters
// // sayHello("Hoshang");sayHello();sayHello();

// function square(number){
//     return number*number;
// }

// //console.log(square(3));

// let name1 = "mahdi";
// let aName = name1 ;
// console.log(name1);
// console.log(aName);

// let person1 ={
//     name :"jafad"
// }
// let person2;;

// // let person2 = person1;
// person2 = Object.assign({},person1);
// person2.name="reza";
// console.log(person2);
// console.log(person1);
// let numbers2 = []

// let result
// let num1;
// let num2;
// name = "ahmad";
// //template string
// result = `hello my nme is ${name}`; // I'm using backwards quotes
// // console.log(result);

// let fName = "Benyamin is great man in iran";
// // let lName = new String("Khezli");
// result = fName.split(" ");
// result = fName.replace("man","person")
// result = fName.includes(" ")
// result = 30==="30";
// // console.log(fName.toUpperCase());
// // console.log(lName);
// // console.log(fName.indexOf('m','r'));
// console.log(result);
// let number4 =12;
// if(number4>3 && number4<100){
//     console.log("bia bakhoresh");
// }
// else if( ){
//     console.log("Ridi");
// }
// let number5 = 31;
// switch(number5){
//     case 1:
//         console.log(`number  is one`);
//         break;
//     case 23:
//         console.log(`number is ${number5}`);
//         break;
//     default:
//         console.log("Hi guys my name is benyamin");
// }
// try{

//     sum22 = 4+5;
//     console.log(sum211);
// }catch(error){
//     console.log(error);
// }

// let checker = 1;
// while(checker<7){
//     console.log("Hi to you");
//     checker+=1;

// }

// let numbers12 = [1, 23, 4, 5, 65];
// for (let number12 of numbers12) {
//   console.log(`d`  );
// }

// let person = {
//     name:"Ben",
//     age:21,
//     gender:"Male",
//     Degree:"BCE"
// }
// console.log(person.name);
// for (let pKey in person){
//     console.log(`${pKey}:${person[pKey]}`);
// }
// using var to declare global variable
// function myFunction(){
//   if(true)  {
//         var color = "BLue";
//     }

//     console.log(color);
// }

// myFunction();

//break & continue

// for(let counter=0;counter<10;counter++){
//     if (counter==7){
//         break;
//     }
//     if(counter==3){
//         continue;
//     }
//     console.log(counter);
// }

// let temp = [1,23,4,5,6,7];
// temp[temp.length]=32
// temp[temp.length]=32
// temp[temp.length]=323
// temp.push(2);
// temp.unshift(-32);
// temp.pop();
// // temp.pop();
// // temp.pop();
// // temp.pop();
// // temp.pop();
// // temp.pop();
// // temp.pop();

// //push,pop,splice,unshifte
// temp.slice(2,0,44);
// let numbers = new Array(1,2,3,4,5,3232,6.6)
// numbers.splice(2,3,160);
// t=numbers.splice(2,3) //remove that range (2,2+3) and return cuted part
// let result;
// result = numbers

// console.log(numbers);

// result = temp.concat(numbers)
// console.log(result);
// console.log(result.sort( (x,y)=>x-y)) ; //it has problem !

// console.log(result.filter((number)=>number<10));
// // result = num
// // function compare(x,y){
// //     return x-y;
// // }

// // console.log(result.map(function(number){
// //     return `<li>${number}</li>`
// // }));
// t= result.join()
// console.log( `<ul>${result.join('')}</ul>`);

// // why we use function method as sort's argument ?
// // console.log(result);
// // let sum=0;
// // for(item of result){
// //     sum+=item;
// // }
// // console.log(sum);

// // function sum(a,...numbers){
// //     sum=0;
// //     for(let number of numbers)
// //         sum+=number;

// //     return sum;
// // }

// // console.log(sum());
// // // let re = function(w,b) {
// //     retur n w+b;
// // }

// // console.log(re(3,4));
// function Person(fName,lName){
//     this.firsName = fName;
//     this.lastName = lName;
//     // this.getFullName = function(){
//     //     return `${this.firsName} ${this.lastName}`
//     // }
// }
// Person.prototype.getName = function(){
//     return `${this.firsName} ${this.lastName}`;
// }
// let p1 = new Person("ben","khezli");
// let p2 = new Person("taha",'Gholami');
// console.log(p2.getName());

// class Person {
//     constructor(fName,lName,age){
//         this.firstName = fName;
//         this.lastName = lName;
//         this.age = age;
//     }
//     sayHello (){
//         return `Hi my name is ${this.firstName} ${this.lastName} and im ${this.age}`
//     }
// }

// let ben = new Person("Ben","Khezli",29);
// console.log(ben);

// class Animal{
//     constructor(fName,lName) {
//         this.fName = fName;
//         this.lName = lName;
//     }

//     eat(){
//         console.log(`im ${this.fName} ${this.lName} and eating `);
//     }
//     walk(){
//         console.log(`im ${this.fName} ${this.lName} and walking `);
//     }
// }

// class Dog extends Animal{
//     constructor(fName,lName,age,color){
//         super(fName,lName);
//         this.age = age;
//         this.color = color;
//     }
//     woof(){
//         console.log("Woofing ...");
//     }

// }

// let dog = new  Dog("sag","sagi")
// console.log(dog.eat());

// const birthday1= new Date(2000,5,2,8,30,21);
// const birthday2= new Date(2000,5,2,8,30,22);
// // console.log(birthday1.getSeconds());

// if (birthday1.getTime()==birthday2.getTime()){
//     console.log('same');
// }
// else{
//     console.log('not same');
// }
// function formatDate(dateObject){
//     const p arts = { //this is object definition
//         year :dateObject.getFullYear(),
//         month : dateObject.getMonth()+1,
//         date : dateObject.getDate()
//     }
//     return `${parts.year}/${parts.month}/${parts.date}}`
// }

// const nowDate = new Date();
// console.log(nowDate);
// const nowDateFormated = formatDate(nowDate);

// console.log(nowDateFormated.parts);

function fotmatDate(dateObject) {
  const parts = {
    year: dateObject.getFullYear(),
    month: dateObject.getMonth() + 1,
    date: dateObject.getDate(),
    hour: dateObject.getHours() % 12 || 12,
    minute: dateObject.getMinutes().toString().padStart(2, "0"),
    amOrPm: dateObject.getHours() < 12 ? "AM" : "PM",
  };
  return `${parts.year}/${parts.month}/${parts.date} ${parts.hour}:${parts.minute} ${parts.amOrPm}`;
}

// const myDate = new Date();
// const myDateFormated = fotmatDate(myDate);

// console.log(myDateFormated);

// const myDate = dayjs("");
// console.log(myDate.format("YYYY MM D h:m A"));

// console.log(window);

// window.console.log("fe")

// window.alert("Hello world")

// const input = window.prompt("Add a number")
// console.log(input);

// if (window.confirm("Are you sure ?")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// result = window.location;

// result = window.navigator;
// result = window.navigator.appVersion;
// result = window.document;
// console.log(result);

// console.log(window);
