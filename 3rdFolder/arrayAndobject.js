// map() ব্যবহার করে [10, 20, 30] অ্যারের প্রতিটি সংখ্যাকে 3 দিয়ে গুণ করুন

let numbers =[10, 20, 30]
let multiplication= numbers.map(function(number){
    return number*3
})
console.log(multiplication);

// filter() ব্যবহার করে [15, 18, 22, 10, 25] থেকে ১৮-এর বেশি বয়সগুলো বের করুন।

let ages=[15, 18, 22, 10, 25]
let selectedAges = ages.filter(function(age){
    return age> 18 
})
console.log(selectedAges);

// reduce() ব্যবহার করে [2, 4, 6, 8] অ্যারের গুণফল বের করুন।

let items=[2, 4, 6, 8]
let multiply=items.reduce(function(total,item){
    return total*item
})
console.log(multiply);