// Uppgift 1 
function greet() {
    console.log("Hello world");
}

greet();

// Uppgift 2 

function favoriteNumber() {
    const favNumber = 42; 
    console.log(favNumber);


}
favoriteNumber();

// Uppgift 3 

function magicEightBall(){
    const svar = ["Yes", "No", "Maybe", "Ask again later"]
    const randomSvar = svar[Math.floor(Math.random()*svar.length)]
    console.log(randomSvar, svar[randomSvar]);

}
magicEightBall();

// Uppgift 4 

function whatYear(){
    const year = new Date().getFullYear(); 
    console.log(year); 
} 
whatYear(); 

// Uppgift 5 

function tellJoke(){
    const jokes = ["joke 1", "joke 2", "joke 3", "joke 4"]
    const randomJoke = jokes[Math.floor(Math.random()*jokes.length)]
    console.log(randomJoke, jokes[randomJoke]);
}
tellJoke();

// Uppgift 6 

function personalGreeting(name){
    
    console.log("Hello " + name + "!");

}
personalGreeting("Oscar");

// Uppgift 7 

function add(num1, num2){
    console.log(num1 + num2); 
}
add(10, 20);

// Uppgift 8 

function ageInMonths(age){
    let months = age * 12; 
    console.log("You are " + months + " months old!");
}
ageInMonths(22);

// Uppgift 9 

function celciusToFahrenheit(celcius){
    let fahrenheit  = (celcius*1.8) + 32; 

    console.log("result: " + fahrenheit + " degrees fahrenheit!");

}
celciusToFahrenheit(30);

// uppgift 10 

function getFullName(firstName, lastName){
    console.log(firstName + " " + lastName);


}
getFullName("John", "Doe")

// uppgift 11 

function calculateArea(length, width){
    let area = length * width 
    console.log("Result: " + area + " square X");

}

calculateArea(20, 10); 

// Uppgift 12 

function Findmax(num1, num2){
    if (num1>num2){
        console.log(num1 + " Är större än " + num2); 
    }
    console.log(num2 + " Är större än " + num1)

}
Findmax(20, 21);

// Uppgift 13 
function countVowels (str){

    let count = 0; 
const vowels = ["a", "e", "i", "o", "u"];

for (const letter of str.toLowerCase()){
    if(vowels.includes(letter)) {
        count++
    }
}
countVowels("Oscar");
console.log(count);

}

//uppgift 20
// const numbers = [5, 8, 12, 20, 3];
// let index;
// let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
//        sum += numbers[index]
        
        
//     }
//     console.log(sum);

// uppgift 21 

// const numbers = [5, 8, 12, 20, 3];
// let maxNum = numbers[0];
// for (let index = 1; index < numbers.length; index++) {
   
//     if (numbers[index] > maxNum) {
//         maxNum = numbers[index] 
//     }
    
// }
// console.log(maxNum + " Is the biggest number in the array");

// Uppgift 22 
// let doubleNumbers = [];
// const numbers = [5, 8, 12, 20, 3];
// for (let i = 0; i < numbers.length; i++) {
//    doubleNumbers.push(numbers[i]*2);
   
    
// }
// console.log(doubleNumbers);

// uppgift 23 
// const numbers = [5, 8, 12, 20, 3];
// let index;
// let sum = 0;
//     for (let index = 0; index < numbers.length; index++) {
//        sum += numbers[index]/numbers.length; 
//     }
//     console.log(sum);

    // Uppgift 24 

// const numbers = [5, 8, 12, 20, 3];
// let minNum = numbers[0];
// for (let index = 1; index < numbers.length; index++) {
   
//     if (numbers[index] < minNum) {
//         minNum = numbers[index] 
//     }
    
// }
// console.log(minNum + " Is the smallest number in the array");

// Uppgift 25 

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let positiveNumbers = []; 

// for (let i = 0; i < mixedNumbers.length; i++) {
//    if (mixedNumbers[i] > 0){
//     positiveNumbers.push(mixedNumbers[i]);
  
//    }
// }
// console.log(positiveNumbers);

// Uppgift 26 

// const mixedNumbers = [3, -5, 12, -1, 8, -6];

// for (const positiveNumber of mixedNumbers){
//     if (positiveNumber > 0) {
//          console.log(positiveNumber);
//     }   
   
    
// }

// Uppgift 27 Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.

// const numbers = [5, 8, 12, 20, 3];
// let i = 0;
// while (i<numbers.length) {
//    if(numbers[i]> 10) {
//     break;
//    }
//    console.log(numbers[i]);
//    i++
// }

// Uppgift 28 Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.


// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let negativeNumbers = [];
// let i = 0; 

// while (i<mixedNumbers.length){
//     if (mixedNumbers[i] < 0) {
//         negativeNumbers.push(i);
//     }
    
//     i++;

// }

// let numberOfItems = negativeNumbers.length;
// console.log(numberOfItems);

// Uppgift 29  Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).
 
const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

for(const word of words){
    console.log(word + ", it is a " + words.length + " letter word");
}

// Uppgift 30 Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.

// const words = ["banana", "apple", "kiwi", "strawberry", "peach"]; 
// for (const str of words)

// uppgift #31 Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.

// const numbers = [5, 8, 12, 20, 3];
// let index = 0; 
// let sum = 0; 
// while(index<numbers.length) {
//     if(sum + numbers[index]> 25) {
//       break;
//     }
//     console.log(numbers[index]);
//     sum += numbers[index];
// index++
// }

// #32 Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.

// const mixedNumbers = [3, -5, 12, -1, 8, -6];
// let sum = 0;
// for(let num of mixedNumbers) {
//     sum += num;
  
// }
// console.log(sum);

// #33 Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.

const temperatures = [15, 22, 19, 30, 28, 18, 25];

let highestTemp = temperatures[0];  
let highestIndex = 0;  

for (let i = 1; i < temperatures.length; i++) { 
    if (temperatures[i] > highestTemp) {
        highestTemp = temperatures[i];  
        highestIndex = i;  
    }
}

console.log("Högsta temperaturen är: " + highestTemp); 
console.log("Index för högsta temperaturen är: " + highestIndex);  
