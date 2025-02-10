// non primitive

const bottle ={
    brand: 'mam',
    price: '15 taka',
    color: 'white',
    isClean: true
};

const subject ={
    name:'Bangla',
    teacher:'anis',
    exame_date:'12 fev',

    chapter:['first','second'],

    exam:{
        name:['mid tram','final']
    },
    'fev plase': ['dhaka','tangail']

};

// change of value---------------
bottle.color ='black'
bottle['teacher'] = 'robin'
console.log(bottle.color);
// console.log(subject.teacher);


// -----dot and []-----------------------
console.log(subject);
// console.log(bottle.color);
// console.log(subject['fev plase']);

// keys---------------------------------
const keys = Object.keys(subject);
console.log(keys);

// values-------------------------------
const values = Object.values(subject);
console.log(values);

// nested-------------------------------
// subject.exam.name ='final'
console.log(subject.exam.name);

// index---------------------------
// subject.exam.name[1]='hello'
// console.log(subject.exam.name[0]);

// deleted========================

// delete subject.name;


//loop--------------------------------------------
const mobile ={
    brand : 'sumsung',
    price: 2500,
    color: 'black',
    cemera: '12mp'
}

// for of :array
// fir in:object
for(const pop in mobile){
    console.log(pop);
    console.log(mobile[pop]);
    
    
}


// object declare------------------------
const pen ={
    brend:'pan',
    price:10,
    color: 'black'

}
// -----------------------------
const pencil =new Object()
console.log(pencil);

// ------------------------------------
const rubber = Object.create({somthing:"somting"})
console.log(rubber);






