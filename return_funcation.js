// return_funcation

function teenNumber(number) {
    const dabule = number * 10;
    return dabule;


}

// const Output = teenNumber(50);
// console.log(Output);

// --------------------------------------------------

// condication

function evenNumber(number) {
    if (number % 2 === 0) {
        return true;

    } else {
        return false;
    }
}

// console.log(evenNumber(6));
// console.log(evenNumber(7));
console.log('------------------------');

// ---------------------------------------------------

function string(str) {
    const size = str.length;
    console.log(str, size);

    if (size % 2 === 0) {
        console.log("Its even number");


    } else {
        console.log("its odd Number");


    }

}
// string('dhaka');
// string('faka');


// ------------------------------------------
function doubleOrtripple(number, doDubble) {
    if (doDubble == true) {
        const result = number * 2;
        return result;

    } else {
        const result = number * 3;
        return result

    }
}

// console.log(doubleOrtripple(5, true));
// console.log(doubleOrtripple(8, false));
console.log('---------------------------------');


// -----------------------------------------------------------------

function numberofelement(number) {
    const len = number.length;
    return len;
}
// console.log(numberofelement([2, 3, 4, 5, 56, 7, 88, 5]));
console.log('--------------------------------------');


// ----------------------------------------------------------

function getAge(person) {
    const age = person.age;
    return age;
}
// console.log(getAge({ name: "Anisur", age: 25 }));
console.log('--------------------------------------');

// ----------------------------------------------------------
function sumNumber(number) {
    let sum = 0;
    for (const num of number) {
        console.log(num);
        sum = sum + num;
        


    }
    return sum;


}
// const numbers = [2, 3, 4, 5]
// const sum = sumNumber(numbers);
// console.log("sum of number", sum);



// --------------------even number---------------------------------
function evenNumber(numbersss){
    let even = []; 
    for(const num of numbersss){
        if (num % 2 == 0) {
            console.log(num);
            even.push(num);  
        } 
    }
    return even;
}

// const numbers1 = [2, 3, 4, 5, 6, 7, 8]; 
// const output = evenNumber(numbers1); 
// console.log("Even number array:", output);

// -----------------------even number sum------------------------------------

function sumeven (n){

    let sum =0;
    for(const M of n){
        if(M%2==0){
            console.log("even number:",M);
            sum = sum+M;
            
        }
    }
    return sum;
}

const input =[2,3,4,5,6,7,8];
const output =sumeven(input);
console.log("sum of :",output);




