//Question 01

var multiArray = [
  [],
  [],
  []
]

//Question 02

var matrix = [
[0, 1, 2, 3],
[1, 0, 1, 2],
[2, 1, 0, 1]
];

for(i=0; i<matrix.length; i++){
  for(j=0; j<matrix[i].length; j++){
     document.write(matrix[i][j])
  }
  document.write("<br>")
}

document.write("<br>" + "<br>")

//Question 03

for(var i=1; i<=10; i++){
  document.write(i + "<br>")
}

//Question 04

var table = +prompt("Enter a number to show its multiplication table");
var length = +prompt("Enter length multiplication table");

document.write("multiplication table of " + table + "<br>");
document.write("length " + length + "<br>" + "<br>");

for(let i=1; i<=length; i++){2
  document.write(table + " X " + i + " = " + table*i + "<br>" + "<br>")
}

//Question 05

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(var i=0; i<fruits.length; i++){
  document.write(fruits[i] + "<br>")
}


document.write("<br>")

//Question 06

document.write("Counting:" + "<br>" + "<br>")
for(var i=1; i<=15; i++){
  document.write(i + " ")
}

document.write("<br>" + "<br>")

document.write("Reverse counting:" + "<br>" + "<br>")
for(var i=15; i>=1; i--){
  document.write(i + " ")
}

document.write("<br>" + "<br>")

document.write("Even:" + "<br>" + "<br>")
for(var i=0; i<=20; i += 2){
  document.write(i + " ")
}

document.write("<br>" + "<br>")

document.write("Odd:" + "<br>" + "<br>")
for(var i=1; i<20; i += 2){
  document.write(i + " ")
}

document.write("<br>" + "<br>")

document.write("Series:" + "<br>" + "<br>")
for(var i=2; i<=20; i += 2){
  document.write(i + "k" + " ")
}


//Question 07

var bakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var userChoice = prompt("Welcome to ABC Bakery. what do you want to order?")
var matchFound = false;

for(var i=0; i<bakery.length; i++){
  if(bakery[i]===userChoice){
    matchFound = true
    alert(userChoice + " is availble in our bakery")
    break;
  }
}
if(matchFound==false){
  alert("we are sorry. " + userChoice + " is not availble in our bakery")
}


document.write("<br>" + "<br>")

//Question 08

var A = [24, 53, 78, 91, 12];
document.write("Array:" + A + "<br>" + "<br>");
var largest = A[0];
for(var i=1; i < A.length; i++){
  if (A[i] > largest){
    largest = A[i];
    
  }
}

document.write("The largest number is:" + largest);

document.write("<br>" + "<br>")

//Question 09

var A = [24, 53, 78, 91, 12];
document.write("Array:" + A + "<br>" + "<br>");
var smallest = A[0];
for(var i=1; i < A.length; i++){
  if (A[i] < smallest){
    smallest = A[i];
    
  }
}

document.write("The smallest number is:" + smallest);

document.write("<br>" + "<br>")


//Question 10

var multiples = [];

for (var i = 1; i <= 100; i++){
  if (i % 5 === 0){
    multiples.push(i);
  }
}

document.write("mulltiple of 5: " + multiples);




