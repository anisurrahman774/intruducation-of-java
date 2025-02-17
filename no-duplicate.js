// no-duplicate.js

function no_duplicate (array){
    // console.log(array);
    let no_du_array =[];
    for (const items of array){
        // console.log(items);
        if(no_du_array.includes(items) === false){
            no_du_array.push(items);
        }    
    }
    console.log('duplicate array= ',array1);
    
    return no_du_array;
    

}
const array1=[2,2,2,3,33,4,3,33,5,6,6,6,65,443,35,5,6];
const uniqe = no_duplicate(array1)
console.log('no duplicate arrray =',uniqe);
