// Chap # 35-38 Functions:


// Q1:

// function dateTimeFunction(rightNow) {

//     console.log(rightNow);

// }

// dateTimeFunction(new Date());


// Q2:

// function greet(firstName,lastName) {

//     var fullName = firstName + lastName;

//     alert(`Welcome ${fullName}.`);

// }

// greet(prompt("Enter your first name.."),prompt("Enter your last name.."),);


// Q3:

// function sumFunction(num1,num2) {

//     var sum = num1 + num2;

//     console.log(`Sum of ${num1} & ${num2} is ${sum}.`);

// }

// sumFunction(+prompt("Enter 1st number.."),+prompt("Enter 2nd number.."));


// Q4:

// function calculator(firstVal,secondVal,operator) {

//     if ( operator === "+" ) {
//         return firstVal + secondVal;
//     }
//     else if ( operator === "-" ) {
//         return firstVal - secondVal;
//     }
//     else if ( operator === "*" ) {
//         return firstVal * secondVal;
//     }
//     else if ( operator === "/" ) {
//         return firstVal / secondVal;
//     }
//     else if ( operator === "%" ) {
//         return firstVal % secondVal;
//     }
//     else {
//         return "Invalid Operator";
//     }

// }

// var input = calculator(
//     +prompt("Enter 1st value"),
//     +prompt("Enter 2nd value"),
//     prompt("Enter operator")
// );

// console.log(input);


// Q5:

// function square(x) {
//     console.log( x * x );
// }

// square(+prompt("Enter a number.."));


// Q6:

// function factorial(n) {
    
//     if (n < 0) {

//         console.log("Factorial is not defined for negative numbers.");
        
//         return;

//     }

//     var factorial = 1;

//     for ( var i = 1 ; i <= n ; i++ ) {

//         factorial = factorial * i;

//     }

//     console.log(`Factorial of ${n} is ${factorial}`);

// }

// factorial(prompt("Enter a number to find factorial.."));


// Q7:

// function counting(startNum,endNum) {

//     for ( var i = startNum ; i <= endNum ; i++ ) {

//         document.write(`${i} <br>`);

//     }

// }

// counting(+prompt("Enter starting num..."),+prompt("Enter ending number..."));


// Q8:

// function calculateHypotenuse(base, perpendicular) {
    
//     function calculateSquare(value) {

//         console.log(`Square: ${value * value}`); 
    
//     }

//     var baseSquare = calculateSquare(base); 
//     var perpendicularSquare = calculateSquare(perpendicular); 
//     var hypotenuseSquare = baseSquare + perpendicularSquare; 

//     console.log(`Hypotebuse of Square: ${hypotenuseSquare}`);
     
// }

// calculateHypotenuse(
//     +prompt("Enter base of right angle triangle.."),
//     +prompt("Enter perpendicular of right angle triangle..")
// );


// Q9:

// function areaOfRectangle(width,heigth) {

//     var area = width * heigth;

//     console.log(`Area of rectangle is ${area}`);

// }

// areaOfRectangle(+prompt("Enter width of rectangle.."),+prompt("Enter heigth of rectangle.."));


// Q10:

// function palindrome(word) {
//     var reverseWord = "";

//     for ( var i = word.length - 1 ; i >= 0 ; i-- ) {
//         reverseWord += word[i];
//     }

//     if ( word === reverseWord ) {
//         console.log("Word is palindrome...")
//     }
//     else {
//         console.log("Word is not palindrome...")
//     }
// }

// palindrome(prompt("Enter a word...."));


// Q11:

// function capitalizeFirstLetter(string) {

//     capitalString = "";

//     for ( var i = 0 ; i <= string.length ; i++ ) {

//         capitalizeFirstLetter += 

//     }

// }

// capitalizeFirstLetter(prompt("Enter a string.."));


// Q12:

// function findLongestWord(string) {

//     var words = string.split(' ');
//     var longestWord = "";

//     for ( var i = 0 ; i >= words.length ; i++ ) {

//         if ( words.length > longestWord.length ) {

//             longestWord = words;

//         }

//     }

//     console.log(longestWord);

// }

// findLongestWord(prompt("Enter a string.."));


// Q13:

// function countLetterOccurrences(string, letter) {
    
//     var count = 0; 

//     for (const char of string) {
        
//         if (char === letter) {
           
//             count++; 
        
//         }
    
//     }

//     console.log(count);
     
// }

// countLetterOccurrences(prompt("Enter a string.."),+prompt("Enter a letter.."));


// Q14:

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius; 
//     console.log(`The circumference is ${circumference.toFixed(2)}`); 
// }

// calcCircumference(+prompt("Enter radius for circumference.."));

// function calcArea(radius) {
//     var area = Math.PI * radius * radius; 
//     console.log(`The area is ${area.toFixed(2)}`); 
// }

// calcArea(+prompt("Enter radius for area.."));





// Chap # 38-42 FUNCTIONS, SWITCH STATEMENTS, WHILE... DO-WHILE LOOPS:


// Q1:

// function power(a, b) {

//     if (b === 0) return 1;

//     if (b < 0) return 1 / power(a, -b); 

//     let result = 1;
    
//     for ( var i = 0 ; i < b ; i++ ) {

//         result *= a; 
    
//     }

//     console.log(result);

// }

// power(+prompt("Enter value of a.."),+prompt("Enter value of b.."));


// Q2:




// Q3:

// function areaOfTriangle(a,b,c) {

//     var s = ( a + b + c ) / 2;

//     var area = s * ( s - a ) * ( s - b ) * ( s - c );

//     console.log(`Area of triangle is: ${area}`);

// }

// areaOfTriangle(+prompt("Enter length of side a.."),+prompt("Enter length of side b.."),+prompt("Enter length of side c.."));


// Q4:

// function mainFunction(subject1,subject2,subject3) {

//     var total = subject1 + subject2 + subject3;
//     var average = total / 3; 
//     var percentage = ( total * 100 ) / 300;

//     console.log(`Average of 3 subjects is: ${average}`);
//     console.log(`Percentage: ${percentage}%`);

// }

// mainFunction(+prompt("Enter marks of subject 1.."),+prompt("Enter marks of subject 2.."),+prompt("Enter marks of subject 3.."));


// Q5:

// function customIndexOf(str, char) {
    
//     if (typeof str !== 'string' || typeof char !== 'string' || char.length !== 1) {
    
//         return -1;
    
//     }

//     for (let i = 0; i < str.length; i++) {
    
//         if (str[i] === char) {
    
//             return i; 
    
//         }
    
//     }

//     return -1; 

// }

// customIndexOf(prompt("Enter string.."),prompt("Enter char.."));


// Q6:

// function removeVowels(sentence) {
    
//     if (typeof sentence !== 'string' || sentence.length > 25) {
    
//         console.log("Invalid input. Please provide a sentence up to 25 characters long.");
    
//     }

//     var vowels = /[aeiouAEIOU]/g;
//     var result = sentence.replace(vowels, '');

//     console.log(result); 
// }

// removeVowels(prompt("Enter sentence.."));


// Q7:

// function countDoubleVowels(text) {
    
//     var vowelPairs = /([aeiou]{2})/gi;
//     var matches = text.match(vowelPairs);

//     if (!matches) {
    
//         return 0;
    
//     }

//     let count = {};

//     for (let match of matches) {

//         switch (match.toLowerCase()) {

//             case 'ae':
//                 count['ae'] = (count['ae'] || 0) + 1;
//                 break;

//                 case 'ea':
//                 count['ea'] = (count['ea'] || 0) + 1;
//                 break;

//                 case 'ai':
//                 count['ai'] = (count['ai'] || 0) + 1;
//                 break;

//                 case 'ia':
//                 count['ia'] = (count['ia'] || 0) + 1;
//                 break;

//                 case 'ao':
//                 count['ao'] = (count['ao'] || 0) + 1;
//                 break;

//                 case 'oa':
//                 count['oa'] = (count['oa'] || 0) + 1;
//                 break;
 
//                 case 'ue':
//                 count['ue'] = (count['ue'] || 0) + 1;
//                 break;
 
//                 case 'eu':
//                 count['eu'] = (count['eu'] || 0) + 1;
//                 break;
 
//                 case 'ui':
//                 count['ui'] = (count['ui'] || 0) + 1;
//                 break;
 
//                 case 'iu':
//                 count['iu'] = (count['iu'] || 0) + 1;
//                 break;
 
//                 default:
                
//                 break;
        
//             }
    
//         }

//     console.log(count);

// }

// countDoubleVowels(prompt("Enter sentence.."));


// Q8:

// function distanceCalculate(disInkm) {

//     var disInMeter = disInkm * 1000;
//     var disInFeet = disInkm * 3280.84;
//     var disInInch = disInkm * 39370.1;
//     var disInCentiMeter = disInkm * 100000;

//     document.write(`Distance btw two cities: <br> <br> In meters: ${disInMeter} <br>In feets: ${disInFeet} <br>In inches: ${disInInch} <br>In centimeters; ${disInCentiMeter}`)

// }

// distanceCalculate(+prompt("Enter distance between two cities in km.."));


// Q9:

// function calculateOvertimePay(hoursWorked) {
    
//     var regularHours = 40;
//     var overtimeRate = 12.00; 
//     var overtimePay = 0;

//     if (hoursWorked > regularHours) {
        
//         var overtimeHours = hoursWorked - regularHours;
    
//         overtimePay = overtimeHours * overtimeRate;
    
//     }

//     console.log(overtimePay);
    
// }

// calculateOvertimePay(+prompt("Enter hours you worked.."));


// Q10:

// function calculateNotes(amount) {

//     var totalAmount = amount * 100;

//     var notes100 = Math.floor(totalAmount / 100);
//     totalAmount %= 100;

//     var notes50 = Math.floor(totalAmount / 50);
//     totalAmount %= 50;

//     var notes10 = Math.floor(totalAmount / 10);
//     totalAmount %= 10;

//     console.log(notes100 , notes50 , notes10);
    
// }

// calculateNotes(+prompt("Enter amount to withdraw.."));





// Chap # 43-48 EVENTS:


// Q1:

// function alertFunction() {

//     alert("Thanks User..");

// }


// Q2:

// function messageFunction() {

//     alert("Thanks for purchasing a phone from us!");

// }








// ------------------------------------------------------------------------------------------------





//                                               -END- 