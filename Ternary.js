// Ternary

// if else

// const money = 500;

// if (money> 100) {
//     console.log ("You Are rich")
    
// } else {
//     console.log("your are not rich");  
// }

// money > 100 ?  console.log ("You Are rich") : console.log("your are not rich")

//-------------------------------------------------------------------------------------------

// let price =500;
// const isLeader = true;

// if (isLeader ===true) {
//     price =0;
    
    
// } else {
//     price =price + 100;
// }
// // console.log(price);

// price = isLeader ===true ? 0 : price + 100;

///--------------------------------------------------------------------

let price =500;
const isLeader = true;

if (isLeader === true) {
    if (price > 1000) {
        price = price/2
        
    } else {
        price = 0 ;
        
    }
    
} else {
    price = price+ 100;
    
}
// console.log(price);

price = isLeader == true ? 
                        price > 1000 ?
                                     price/2 : 0  
                                                 : price +100;

