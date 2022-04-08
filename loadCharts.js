var margin = {top: 40, right: 40, bottom: 40, left: 40},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


	var w = 500;
	var h = 300;
	var padding = 40;

var heart_disease_csv;
var heart_disease_indicator_data;
// params = ["gender", "ageGroup", "otherDisease", "AllDiseases"]
d3.csv("http://localhost:8080/heart_2020_cleaned.csv", function(data){
   // dataset = data;
   // console.log(dataset);
   heart_disease_csv = data;
   params = ["gender", "ageGroup", "AllDiseases"];
   paramsOtherDiseasse = ["Stroke", "DiffWalking","Diabetic","Asthma", "KidneyDisease", "SkinCancer"];//All diseases
   //loadCondition = params[1];
   //dataset = getDataOnCondition(data, loadCondition);
   //loadCondition = paramsOtherDiseasse[2]; 
   // add the options to the button

   d3.select("#selectAgeGender")
     .selectAll('myOptions')
     .data(params)
     .enter()
     .append('option')
     .text(function (d) { return d; }) 
     .attr("value", function (d) { return d; }) 

   loadCondition = params[0];

   dataset = getDataOnCondition(data, loadCondition);
   heart_disease_indicator_data = dataset;
   loadPie(dataset);
  
   //console.log(dataset);
  
})

function update(selectedGroup) {

    // Create new data with the selection?
    //var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
    loadCondition = selectedGroup;
    var dataFilter = getDataOnCondition(heart_disease_csv, loadCondition);
    d3.selectAll('#pieChart')
    .remove();
    loadPie(dataFilter);   
  }

 // When the button is changed, run the updateChart function
 d3.select("#selectAgeGender").on("change", function(d) {    
    var selectedOption = d3.select(this).property("value")    
    update(selectedOption)
})

//console.log("heart_disease_indicator_data -> "+ heart_disease_indicator_data);