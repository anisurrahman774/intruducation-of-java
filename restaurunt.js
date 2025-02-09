const age = 120;
const price =500;

if (age <= 12 || age >= 70) {
    console.log("full discound");
    
    
} 
else if (age <= 50 && age >= 40) {
    // 50% discound
    const disPrice = price* 50/100;
    const discound = price-disPrice;
    console.log("Your discound is 50% so your amount is:",discound);
    
    
}
else if (age <= 35 && age >= 25) {
    // 10% discound
    const disPrice1 = price* 10/100;
    const discound1 = price-disPrice1;
    console.log("Your discound is 50% so your amount is:", discound1 );
    
}


else {
    console.log(price);
}