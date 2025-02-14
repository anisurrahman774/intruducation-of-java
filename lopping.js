const subjects =['pysices','bology','chimestry'];

for (let i=0; i<subjects.length; i++){
    console.log(i,":",subjects[i]);
    
}

const numbers =[1,2,3,4,5,6,7];
let rev_num =[];
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    rev_num.unshift(i)  
}
console.log(rev_num);


for(let i=numbers.length-1; i>=0; i--){
    console.log(numbers[i]);
    
}