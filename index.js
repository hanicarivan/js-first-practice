/*
//user input window
let username;
username = window.prompt("What's your username?");
console.log(username);


//user input html
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}


//type conversion
let age = window.prompt("How old are you?");
age = Number(age);
age+=1;
console.log(age, typeof age);

let x = "pizza";
let y = "pizza";
let z = "pizza";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


//const
const pi = 3.14159;
let radius;
let circumference;
//radius = window.prompt("Enter the radius of a circle");
//radius = Number(radius);
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}


//Math
//console.log(Math.PI);
//console.log(Math.E);
let x = 3.99;
let y = 2;
let z;
//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z = Math.pow(x, y);
//z = Math.sqrt(x);
//z = Math.log(x);
//z = Math.sin(x);
//z = Math.abs(x);
//z = Math.sign(x);
//let max = Math.max(x,y);
let min = Math.max(x,y);
console.log(min);


//if
let age = 13;
if(age >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}
let age = 25;
let hasLicense = true;
if(age >= 16){
    console.log("You are old enough to drive");
    if(hasLicense){
        console.log("You have your license");
    }
    else{
        console.log("You do not have your license yet");
    }
}
else{
    console.log("You must be 16+ to have a license");
}
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 0
mySubmit.onclick = () =>{
    age = myText.value;
    age = Number(age);
    if(age > 100){
        resultElement.textContent = "You are too old";
    }
    else if(age == 0){
        resultElement.textContent = "You were just born";
    }
    else if(age >= 18){
        resultElement.textContent = "You can enter the site";
    }
    else if(age < 0){
        resultElement.textContent = "Your age cannot be below 0";
    }
    else{
        resultElement.textContent = "You must be 18+ to enter this site";
    }
}


//checked
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = () => {
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed";
    }
    else{
        subResult.textContent = "You are not subscribed";
    }
    if(visaBtn.checked){
        paymentResult.textContent = "You are paying with Visa";
    }
    else if(masterCardBtn.checked){
        paymentResult.textContent = "You are paying with MasterCard";
    }
    else if(payPalBtn.checked){
        paymentResult.textContent = "You are paying with PayPal";
    }
    else{
        paymentResult.textContent = "You must select a payment type";
    }
}


//ternary operator
let age = 21;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);
let time = 16;
let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);
let isStudent = true;
let message = isStudent ? "You're a student!" : "You're not a student!";
console.log(message);
let purchaseAmount = 1;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(discount);

//switches
let day = 2;
switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;
    case 3:
        console.log("It is Wednesday");
        break;
    case 4:
        console.log("It is Thursday");
        break;
    case 5:
        console.log("It is Friday");
        break;
    case 6:
        console.log("It is Saturday");
        break;
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`)
}

let testScore = 85;
let letterGrade;
switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break
    case testScore >= 80:
        letterGrade = "B";
        break
    case testScore >= 70:
        letterGrade = "C";
        break
    case testScore >= 60:
        letterGrade = "D";
        break
    default:
        letterGrade = "F";
}
console.log(letterGrade)


//string methods
let userName = "     Example";
console.log(userName.charAt(0));
console.log(userName.indexOf("E"));
console.log(userName.lastIndexOf("e"));
console.log(userName.length)
userName = userName.trim();
userName = userName.toUpperCase();
userName = userName.repeat(3);
let result = userName.startsWith("E");
let result = userName.endsWith(" ");
let result = userName.includes(" ");
result ? console.log("cant include ' '") : console.log(userName);
let phoneNumber = "123-456-7890";
//phoneNumber = phoneNumber.replaceAll("-", "/");
phoneNumber = phoneNumber.padStart(10, "0");
phoneNumber = phoneNumber.padEnd(15, "0");
console.log(phoneNumber);

//string slicing
const fullName = "Full Name";
//let firstName = fullName.slice(0,4);
//let lastName = fullName.slice(5);
//let firstChar = fullName.slice(0,1);
//let lastChar = fullName.slice(-1);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName)
console.log(lastName);

const email = "example@mail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(username);
console.log(extension);


//method chaining
let username = window.prompt("Enter your username");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();
let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;
console.log(username);

let username = window.prompt("Enter your username");
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);


//strict equality
//== value comparison
//=== value & datatype comparison (strict equality operator)
//!== strict inequality
const PI = 3.14;
if(PI === "3.14"){
    console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}

//while loop
let username = "";
do{
    username = window.prompt("Enter your name");
} while (username === "" || username === null)
console.log(`Hello ${username}`)

let loggedIn = false;
let username;
let password;
while(!loggedIn){
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");
    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! Please try again");
    }
}


//for loop
for(let i = 10; i > 0; i-=3){
    console.log(i);
}

for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;
    }
    else{
        console.log(i);
    }
}


//function
function happyBirthday(username, age){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log(`Happy birthday dear ${username}!`)
    console.log("Happy birthday to you!")
    console.log(`You are ${age} years old`);
}
happyBirthday("Example", 25);
happyBirthday("Spongebob", 30);

function add(x, y){
    return x + y;
}
function subtract(x , y){
    return x - y;
}
console.log(subtract(2,3));
function isEven(x){
    return x % 2 ? false : true;
}
console.log(isEven(4));
function isValidEmail(email){
    return email.includes("@") ? true : false
}
console.log(isValidEmail("examplemail.com"))


//variable scope
let x = 3;
function function1(){
    console.log(x);
}

function function2(){
    let x = 2;
    console.log(x);
}
function1();
function2();


//array
let fruits = ["apple", "orange", "banana"];
fruits[3] = "coconut";
console.log(fruits[0]);
console.log(fruits[3]);
fruits.push("dragonfruit");
console.log(fruits[4]);
fruits.pop();
fruits.unshift("mango");
console.log(fruits);
let numOfFruits = fruits.length;
let index = fruits.indexOf("dragonfruit");
console.log(index);
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}


//spread operator
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);
console.log(minimum);
let username = "Example Name";
let letters = [...username].join(" ");
console.log(letters);
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "celery", "potato"];
let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);


//rest parameters
function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods;
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
openFridge(food1, food2, food3, food4);
const foods = getFood(food1, food2, food3, food4, "ramen");
console.log(foods);
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}
const total = sum(1,2,3,4,5,6,7);
console.log(total);
const avg = getAverage(1,2,3,4,5);
console.log(avg);
function combineStrings(...strings){
    return strings.join(" ");
}
const fullName = combineStrings("Mr.", "Spongebog", "Squarepants", "III");
console.log(fullName)


//callbacks
hello(leave);
function hello(callback){
    console.log("Hello");
    callback();
}
function leave(){
    console.log("Leave!");
}
function goodbye(){
    console.log("Goodbye");
}
sum(displayConsole, 5, 10);
sum(displayDOM, 5, 3);
function sum(callback, x, y){
    let result = x + y;
    callback(result);
}
function displayConsole(result){
    console.log(result);
}
function displayDOM(result){
    document.getElementById("myH1").textContent = result;
}


//forEach()
let numbers = [1,2,3,4,5];
numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(display);
function double(element,index,array){
    array[index] = element * 2;
}
function triple(element,index,array){
    array[index] = element * 3;
}
function square(element,index,array){
    array[index] = element * element;
}
function display(element){
    console.log(element);
}
let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(capitalize);
fruits.forEach(display);
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
function display(element){
    console.log(element);
}


//map()
const numbers = [1,2,3,4,5];
function cube(element){
    return element*element*element;
}
const squares = numbers.map(cube);
console.log(squares);
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
function upperCase(element){
    return element.toUpperCase();
}
const studentsUpper = students.map(upperCase);
console.log(studentsUpper)
const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}


//filter()
let numbers = [1,2,3,4,5,6,7];
function isEven(element){
    return element % 2 === 0;
}
const evenNums = numbers.filter(isEven);
console.log(evenNums);
const ages = [16,17,18,18,19,60];
function isAdult(element){
    return element >= 18;
}
const adults = ages.filter(isAdult);
console.log(adults);
const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
function getShortWords(element){
    return element.length <= 6;
}
const shortWords = words.filter(getShortWords);
console.log(shortWords);


//reduce()
const prices = [5, 30, 10, 25, 15, 20];
const total = prices.reduce(sum);
console.log("$" + total.toFixed(2));
function sum(accumulator, element){
    return accumulator + element;
}
const grades = [75,50,90,80,65,95];
const maxValue = grades.reduce(findMax);
console.log(maxValue);
function findMax(max, element){
    if(element > max){
        max = element;
    }
    return max;
}


//function expression
setTimeout(function(){
    console.log("Hello");
}, 1000);
const numbers = [1,2,3,4,5,6];
const cubes = numbers.map(function(element){
    return element * element * element;
});
const evenNums = numbers.filter(function(element){
    return element % 2 === 0;
});
const oddNums = numbers.filter(function(element){
    return element % 2 !== 0;
});
const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});
console.log(cubes);
console.log(evenNums);
console.log(total);


//arrow functions
function hello(){
    console.log("Hello");
}
hello();
const hello = function(){
    console.log("Hello");
}
hello();
const hello = (name, age) => {console.log(`Hello ${name}`)
                         console.log(`You are ${age} years old`)};
hello("Example", 25);
setTimeout(()=>(console.log("Hello")), 1500);
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => element * element);
const evenNums = numbers.filter((element) => element % 2 === 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(squares);
console.log(evenNums);
console.log(total);


//objects
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hello")},
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => (console.log("Hi")),
}
console.log(person1.firstName);
console.log(person1.lastName);
person1.sayHello();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
person2.sayHello();


//this
const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
person1.sayHello();
person2.eat();


//constructor
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", "2024", "red");
const car2 = new Car("Chevrolet", "Camaro", "2023", "blue");
console.log(car1.make);
console.log(car2.model);
car1.drive();


//class
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.99);
product1.displayProduct();
product2.displayProduct();
const total = product1.calculateTotal(salesTax);
console.log(total.toFixed(2));


//static
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }
    static getCircumference(radius){
        return radius * 2 * this.PI;
    }
    static getArea(radius){
        return this.PI * radius * radius;
    }
}
console.log(MathUtil.PI);
console.log(MathUtil.getArea(10));
class User{
    static userCount = 0;
    constructor(username){
        this.username = username;
        User.userCount++;
    }
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
    sayHello(){
        console.log(`Hello my username is ${this.username}`);
    }
}
const user1 = new User("Example1");
const user2 = new User("Example2");
console.log(user1.username);
user1.sayHello();
User.getUserCount();


//inheritance
class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}
class Rabbit extends Animal{
    name = "rabbit";
    run(){
        console.log(`This ${this.name} is running`);
    }
}
class Fish extends Animal{
    name = "fish";
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}
const rabbit = new Rabbit();
rabbit.eat();
rabbit.run();
console.log(rabbit.alive);
const fish = new Fish();
fish.sleep();
fish.swim();


//super
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}kmh`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        this.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
console.log(rabbit.name);
rabbit.run();


//getters&setters
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set height(newheight){
        if(newheight > 0){
            this._height = newheight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }
    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
    get height(){
        return `${this._height.toFixed(1)}cm`;
    }
    get area(){
        return this._width * this._height.toFixed(1);
    }
}
const rectangle = new Rectangle(3, 4);
rectangle.width = -5;
rectangle.height = "string";
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a string")
        }
    }
    set lastName(newLastName){
        if(typeof newLastName === "string" && newLastName.length > 0){
            this._lastName = newLastName;
        }
        else{
            console.error("Last name must be a string")
        }
    }
    set age(newAge){
        if(newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non negative number")
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
}
const person = new Person("example", "name", 30);
console.log(person.fullName);
console.log(person.age);


//destructuring
let a = 1;
let b = 2;
[a,b] = [b, a];
console.log(a);
console.log(b);

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 34,
}
const{firstName, lastName, age, job="Unemployed"} = person2;
console.log(firstName);
console.log(job);
function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
}
displayPerson(person1);


//nested objects
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}
console.log(person.fullName);
console.log(person.age);
console.log(person.hobbies[1]);
console.log(person.address);
console.log(person.address.street);
for(const property in person.address){
    console.log(person.address[property]);
}
class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}
const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 37, "128 Conch St.", "Bikini Bottom", "Int. Waters");
console.log(person1.address);
console.log(person2.address.city);


//array of objects
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105},
                {name: "coconut", color: "white", calories: 159},
                {name: "pineapple", color: "yellow", calories: 37},];
console.log(fruits[4].name);
console.log(fruits[4].calories);
fruits.push({name: "grapes", color: "purple", calories: 62});
console.log(fruits[5].name);
fruits.pop();
console.log(fruits[5]);
//fruits.splice(1, 2);
fruits.forEach(fruit => console.log(fruit.name));
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalFruits);
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);

//sort()
let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
fruits.sort();
console.log(fruits);
let nums = [1,10,2,9,3,8,4,7,5,6];
nums.sort((a, b) => b - a);
console.log(nums);
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patrick", age: 37, gpa: 1.5},
                {name: "Squidward", age: 51, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];
people.sort((a, b) => a.age - b.age);
console.log(people);
people.sort((a, b) => b.gpa - a.gpa);
console.log(people);
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people);


//shuffle an array (Fisher-Yates algorithm)
const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}
shuffle(cards);
console.log(cards);


//Date objects
const date = new Date();
date.setFullYear(2025);
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
console.log(date);
const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");
if(date2 > date1){
    console.log("Happy new year");
};


//closure
function outer(){
    let message = "Hello";
    function inner(){
        console.log(message);
    }
    inner();
}
message = "Goodbye";
outer();
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }
    function getCount(){
        return count;
    }
    return {increment, getCount};
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
function createGame(){
    let score = 0;
    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }
    return {increaseScore, decreaseScore, getScore};
}
const game = createGame();
game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(5);
console.log(`The final score is ${game.getScore()}pts`);


//setTimeout()
setTimeout(function(){window.alert("Hello");}, 1500);
const timeoutId = setTimeout(()=>window.alert("Hello"), 3000);
clearTimeout(timeoutId);
let timeoutId;
function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("Started");
}
function clearTimer(){
    clearTimeout(timeoutId);
    console.log("Cleared")
}


//ES6 Module
import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';
console.log(PI);
console.log(getCircumference(2));
console.log(getArea(3));
console.log(getVolume(2));


//asynchronous code - synchronous code
function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000);
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);


//error handling
try{
    console.log(x);
}
catch(error){
    console.error(error);
}
finally{
    console.log("This always executes");
}
console.log("You have reached the end");

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));
    const result = dividend / divisor;
    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("Values must be numbers!");
    }
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("End");


//DOM
const username = "Example";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? "Guest" : username;


//element selectors
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
const fruits = document.getElementsByClassName("fruits");
for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "red";
});
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");
h4Elements[0].style.backgroundColor = "yellow";
for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "yellow";
}
Array.from(liElements).forEach(fruit =>{
    fruit.style.backgroundColor = "lightgreen";
});
const element = document.querySelector("ul");
element.style.backgroundColor = "yellow";
const foods = document.querySelectorAll("li");
foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});*/