function discount (price){
    if(price <= 100){
        const total =price*100;
        return total;
    }
    else if(price <=200){
        const prices =price*90;
        const priceTotal =100*price -prices
        const total = price+priceTotal;
        console.log(total);
        
        // return total;
    }
    else{
        const total =price*70;
        return total;
    }
}
const discountTotal =discount(146);
console.log(discountTotal);
