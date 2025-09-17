console.log("hi");

let car={

name :"volvo",model :"25snjh",

}

console.log(car.name);

function doSomething(x,y){ //
return x+y;
}

let result=doSomething(5,8)
console.log(result);

let firstValue =parseInt(document.getElementById('firstValue').value); // "10"  10
let secondValue =parseInt(document.getElementById("2ndvalue").value); //25
  console.log(secondValue);
  
let sum =doSomething(firstValue,secondValue);
document.getElementById("sum").value = sum;
console.log(sum);
