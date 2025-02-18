const number = [56, 55, 43, 45, 67, 8, 634, 4532];

function max_Number(numbers) {

    let max = numbers[0];
    for (const num of numbers) {
        // console.log(num);
        if (num > max) {
            max = num;
        }


    }
    return max;
}
const Tallest = max_Number(number);
// console.log(Tallest);

// --------------------phone min-------------------------------
const mobile = [
    { name: 'sumsung', price: 30000, camera: '12mp', color: 'black' ,quantity:2},
    { name: 'sumsung', price: 20000, camera: '12mp', color: 'black' ,quantity:3},
    { name: 'sumsung', price: 12000, camera: '12mp', color: 'black' ,quantity:5},
    { name: 'sumsung', price: 2000, camera: '12mp', color: 'black'  ,quantity:6},
    { name: 'sumsung', price: 1900, camera: '12mp', color: 'black'  ,quantity:2},
    { name: 'sumsung', price: 200000, camera: '12mp', color: 'black',quantity:3 }


]

function phone(price) {
    // console.log(price);
    let min = price[0];
    let sum = 0;
    let total = 0;
    for (const min of price) {
        sum = sum + min.price;
        total = total +(min.price*min.quantity);
        if (price.price < min.price) {
            min = price
        }
    }
    console.log("Total sum of: ", sum);
    console.log("Total sum and quantity of: ", total);


    return min;


}
const phone1 = phone(mobile);
console.log("min price: ", phone1);



