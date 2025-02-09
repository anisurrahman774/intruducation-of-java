const includes = ['anis','robin','sagor','ashik']
console.log(includes.includes('robin'));
console.log(includes.includes('Robin'));

// 
if (includes.includes('robin')) {
    console.log('party'); 
    
} else {
    console.log('no bro we are not hungry');
    
    
}

// if (includes.includes('Robin')) {
//     console.log('party'); 
    
// } else {
//     console.log('no bro we are not hungry');
      
// }



// index
console.log(includes.indexOf('robin'));

// na thakle -1 dekabe
console.log(includes.indexOf('Robin'));

// array cheking
console.log(Array.isArray(includes));

// array na thakle
const numumner = 15;
console.log(Array.isArray(numumner));


