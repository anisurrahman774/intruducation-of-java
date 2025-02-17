function lipyear (year){
    if (year%100 !==0 & year % 4===0) {
        return true  ;
    }
    else if(year %100 ===0 & year %400===0){
        return true;
    }
    else{
        return false;
    }
}
const isleap =lipyear(2000);
const isleap1 =lipyear(2003);
const isleap2 =lipyear(2004);

console.log(isleap,isleap1,isleap2);
