let names =['anis','robin','ashik','Ashik']
let number_sort = names.sort();
console.log(number_sort);


// 
let number = [1,5,11,34,56,2,3,5];
let number_ac = [...number].sort(function(a,b) {return a - b});
let number_dec = [...number].sort(function(a,b) {return b - a});
console.log(number_ac);
console.log(number_dec);

