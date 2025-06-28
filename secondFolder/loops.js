// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// foreach loop

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// function sumOneToTen(arr) {
//   let total = 0;
//   arr.forEach(element => total += element);
//   return total;

 
// }
// console.log(sumOneToTen(numbers)); 


// function printEvenNumbers() {
//   let i = 2;
// while (i <= 20) {
//   console.log(i);
//   i+=2;
// }
  
// }
// printEvenNumbers(); 

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
  

// console.log(factorial(5));
// console.log(factorial(7)); 

// const numbers = [-3, -7, -2];

// const max=Math.max(...numbers);
// const min=Math.min(...numbers)

// console.log('Max:' ,max)
// console.log('Min:', min);

// function findMaxMin(numbers){
//   let max = numbers[0];
//   let min = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//       max = numbers[i]; 
//     }
//     if (numbers[i] < min) {
//       min = numbers[i]; 
//     }
//   }

//   return { max, min }; 
// }
// const result = findMaxMin(numbers)
// console.log(result.max);
// console.log(result.min);

// function multiplicationTable() {

  
// }
// multiplicationTable();

// function reverseString(str){
//     let reverse = '';
//     for(let i=str.length-1;i>=0;i--){
//         reverse += str[i]
//     }
//     return reverse
// }

// console.log(reverseString("hello"));
// console.log(reverseString('987654'));

// function reverseString(){

// }


// Classic FizzBuzz: Print numbers 1-100, but for multiples of 3 print "Fizz",
// multiples of 5 print "Buzz", and multiples of both print "FizzBuzz"
// function fizzBuzz() {
//   for(let i=1;i<=100;i++){
//     if(i%15===0){
//         console.log('FizzBuzz');
//     }else if(i%3===0){
//         console.log('Fizz');
//     }else if(i%5===0){
//         console.log('Buzz');
//     }else{
//         console.log(i);
//     }
//   }
// }
// fizzBuzz();
/* Should print:
1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
11, Fizz, 13, 14, FizzBuzz, 16...
*/

// function sumEvenNumbers(even){
//     let sum = 0;
//     for(let i=0; i<=even.length; i++){
//         if(even[i]%2===0){
//             sum += even[i]
//         }        
//     }
//     return sum
// }

// console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10]));


// function reverseString(str){
//     let reverse = ''
//     for(let i=str.length-1; i>=0;i--){
//         reverse += str[i]
//     }
//     return reverse

// }
// console.log(reverseString('pooja'));

// function countVowels(str) {
//   let vowelCount = 0;
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   // Convert string to array and use forEach
//   str.toLowerCase().split('').forEach(char => {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   });
  
//   return vowelCount;
// }

// console.log(countVowels("javascript"));

// function findVowelLetter(str){
//     const vowel=[];
//     const vowelLetters=['a','e','i','o','u'];
//     for(let i=0; i<str.length; i++){
//         const char = str[i].toLowerCase();
//         if(vowelLetters.includes(char)){
//             vowel.push(char)
//         }
//     }
//     return vowel
// }
// console.log(findVowelLetter(''));

// function findUniqueVowels(str) {
//   const vowels = [];
//   const vowelLetters = ['a', 'e', 'i', 'o', 'u'];
  
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i].toLowerCase();
//     if (vowelLetters.includes(char) && !vowels.includes(char)) {
//       vowels.push(char);
//     }
//   }
  
//   return vowels;
// }

// console.log(findUniqueVowels("you are so beautiful"));

// function factorial(n){
//     let result = 1;
//     for(let i=2;i<=n;i++){
//         result*=i
//     }
//     return result
// }
// console.log(factorial(9));

// function findMax(n){
//     if (n.length === 0) return undefined;
//     let max = n[0]
//     for(let i=1; i<=n.length; i++){
//         if(n[i]>max){
//             max = n[i]
//         }
//     }
//     return max
// }

// console.log(findMax([1,2,3,4,5,6]));

// function findMax(n){
//     if(n.length == 0) return undefined;
//     let max =n[0]
//     for(let i=1; i<=n.length; i++){
//         if(n[i]>max){
//            max = n[i] 
//         }
//     }
//     return max
// }

// console.log(findMax([1,2,3,4,5,6]));

// একটি ফাংশন লিখুন যা দুইটি সংখ্যার যোগফল রিটার্ন করে (ফাংশন ডিক্লেয়ারেশন ব্যবহার করে)।

function summation(){
    let a= 20;
    let b = 30;
    return (a+b);
    
    
}
console.log(summation());

// একটি ফাংশন লিখুন যা একটি সংখ্যার বর্গ রিটার্ন করে (অ্যারো ফাংশন ব্যবহার করে)।

// classic
// const squareNumber=()=>{
//      let a=20;
//      let b = (a)**2
//      return b
// }
// console.log(squareNumber());
// reusable
// const  squareNumber=(num)=>num ** 2
// console.log(squareNumber(30));
// math.pow
const squareNumber=(num)=>Math.pow(num,2)
console.log(squareNumber(40));

// একটি ক্যালকুলেটর ফাংশন লিখুন (ফাংশন এক্সপ্রেশন ব্যবহার করে)।

const advancedCalculator = function(num1, num2) {
  return {
    add: num1 + num2,
    subtract: num1 - num2,
    multiply: num1 * num2,
    divide: num2 !== 0 ? num1 / num2 : 'Error: Division by zero',
    modulus: num1 % num2,
    power: num1 ** num2
  };
};

const result = advancedCalculator(10, 5);
console.log(result.add);      // 15
console.log(result.divide);   // 2
console.log(result.power);    // 100000









