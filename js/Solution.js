//Solve 1 task
const myCountry = "Беларусь" ;
console.log(myCountry);

//Solve 2 task
let isStudent = '' ; 
    isStudent = "denis" ;
    isStudent = "Anton" ;
if ( isStudent == "denis" ) {
    console.log('Правда');
}
    else {
        console.log('Ложь')
    }

//Solve 3 task
const OneNumber = 10;
const thoNumber = 15;
const Result = OneNumber*thoNumber ;
console.log(Result) ;  

//Solve 4 task
const Names = "Денис";
      family = "Антонов";
      proffesion = "Веб Разработчик";
const Resume2 = `Меня зовут ${Names} ${family} и я ${proffesion}`;      
const Resume = "Меня зовут" + " " + Names + " " + family + " "+ "и я" +" " + proffesion;
console.log(Resume2);


//Solve 5 task
/* const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum at excepturi. Praesentium quo, sit vitae autem quis eos est, velit, enim quia placeat soluta consequatur tempore ullam blanditiis incidunt!";
const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum at excepturi. Praesentium quo, sit vitae autem quis eos est, velit, enim quia placeat soluta consequatur tempore ullam blanditiis incidunt!";
const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum at excepturi. Praesentium quo, sit vitae autem quis eos est, velit, enim quia placeat soluta consequatur tempore ullam blanditiis incidunt!"; */


//Solve 6 task
const string = "hello";
const number = 10;
const boolean = true; 
const empty = null;
const realEmpty = undefined;
const object = {} ;
const array = [];
const symbol = Symbol();
const bigInt = 10n;

//const resultTypes = `string - ${typeof string}; number - ${typeof number}; boolean - ${typeof boolean}; empty - ${typeof empty}; realEmpty - ${typeof realEmpty}; object - ${typeof object}; array - ${typeof array}; symbol - ${typeof symbol}; bigInt - ${typeof bigInt}`;
//console.log(resultTypes);
//Solve 6.1 task

const typesArray = [string,number,boolean,empty,realEmpty,object,array,symbol,bigInt]
function View(arr){
    arr.forEach((element,i) => {
       console.log(`${++i} -${typeof element}`) ;
    });
}
View(typesArray);

//Solve 7 task
function showName(){
    console.log("denis");
}
showName();