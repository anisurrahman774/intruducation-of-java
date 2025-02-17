function oddsum (numbers){
    // console.log(numbers);

    let array1 =[];
    for(const number of numbers){
        // console.log(number);
        if (number%2==1) {
            // console.log(number);
            array1.push(number);     
        } 
    }
    console.log("odd number is: ",array1);
    let sum =0;
    for(const number of array1){
        sum =sum+number;
    }
    const length =array1.length;
    console.log('Sum of number: ',sum);
    console.log('length of number: ',length);
    const avg = sum/length;
    return avg;
    
    
    

}
const array =[2,3,5,6,7,8,9];
const avg =oddsum(array);
console.log('Total number of avg: ',avg);
