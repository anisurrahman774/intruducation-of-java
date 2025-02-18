function woodQuantity (chairQuantity, tableQuantity, bedQuantity){
    const chair =15;
    const table =30;
    const bed =130;

    const ChairTotalWood = chairQuantity*chair;
    const TableTotalWood =tableQuantity *table;
    const bedTotalWood =bedQuantity*bed;

    const TotalWood = ChairTotalWood+TableTotalWood+bedTotalWood;
    return TotalWood;
}

const wood =woodQuantity(0,2,1);
console.log("wood needed",wood);
