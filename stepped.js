const price =3000;

if (price >= 5000) {
    // 10% discound
    const discoundPrice = price * 10/100
    const discound =price-discoundPrice
    console.log(discound);
    
    
}
else if(price >= 2500){
    // 5% discound
    const discoundPrice = price * 5/100
    const discound =price-discoundPrice
    console.log(discound);

}

else {
    console.log(price);
    
}