// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// foreach loop

const numbers = [1,2,3,4,5,6,7,8,9,10];

function sumOneToTen(arr) {
  let total = 0;
  arr.forEach(element => total += element);
  return total;

 
}
console.log(sumOneToTen(numbers)); 