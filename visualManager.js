var heart_disease_csv =[]
d3.csv("heart_2020_cleaned.csv", function(data) {
    dataset = data;
    for(i=0;i<dataset.length;i++)
    {
        heart_disease_csv.push(dataset[i]);
    }
    

});
//console.log(heart_disease_csv);