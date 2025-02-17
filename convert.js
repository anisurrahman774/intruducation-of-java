// feet

function feet (inc){
    const incToFeet = inc/12;
    return incToFeet;
}
const hight = feet(75);
// console.log(hight);

// inc to feet

function feet2 (inc){
    const feet =inc/12;
    const incToFeet = parseInt(feet);
    const incToinc = inc%12;
    const result = incToFeet+' Feet '+ incToinc+' inc';
    return result;
}
const output =feet2(75);
// console.log(output);

// killo 

function distance (killo){
    killometer = 'Distance is : '+ killo*1.6096;
    return killometer;
}
const dis =distance(12);
console.log(dis);


