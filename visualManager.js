var heart_disease_csv =[];
d3.csv("heart_2020_cleaned.csv", function(data) {
    
    data.map(function(d){
        heart_disease_csv.push(d);
    }
    );
    //console.log("test");
    //console.log(heart_disease_csv);
    
    
    if (heart_disease_csv!=[])
    {
    //Question 2 : a- Do the chances of heart disease increase with increasing age?
        

        var heart_disease_yes =[];
        for(i=0;i<heart_disease_csv.length;i++)
        {
            if(heart_disease_csv[i]["HeartDisease"] == "Yes"){
                heart_disease_yes.push(heart_disease_csv[i])
            }
        }
        
        const distinctAgeCat = [...new Set(heart_disease_csv.map(x =>x.AgeCategory))];
        distinctAgeCat.sort();
        var AgevsPopulation =[];

        for(i=0;i<distinctAgeCat.length;i++){
            AgevsPopulation.push([distinctAgeCat[i],0])
        }
        
        var AgevsPopulation_4all = AgevsPopulation;
        for(i=0;i<heart_disease_yes.length;i++)
        {
            if(heart_disease_yes[i]["AgeCategory"] == '18-24'){
                AgevsPopulation[0][1]= AgevsPopulation[0][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '25-29'){
                AgevsPopulation[1][1]= AgevsPopulation[1][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '30-34'){
                AgevsPopulation[2][1]= AgevsPopulation[2][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '35-39'){
                AgevsPopulation[3][1]= AgevsPopulation[3][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '40-44'){
                AgevsPopulation[4][1]= AgevsPopulation[4][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '45-49'){
                AgevsPopulation[5][1]= AgevsPopulation[5][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '50-54'){
                AgevsPopulation[6][1]= AgevsPopulation[6][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '55-59'){
                AgevsPopulation[7][1]= AgevsPopulation[7][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '60-64'){
                AgevsPopulation[8][1]= AgevsPopulation[8][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '65-69'){
                AgevsPopulation[9][1]= AgevsPopulation[9][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '70-74'){
                AgevsPopulation[10][1]= AgevsPopulation[10][1] +1;
            }
            else if(heart_disease_yes[i]["AgeCategory"] == '75-79'){
                AgevsPopulation[11][1]= AgevsPopulation[11][1] +1;
            }
            else {
                AgevsPopulation[12][1]= AgevsPopulation[12][1] +1;
            }
        }

       
        w=600;
        h=400;
        wpad =100;
        hpad =100;
        var svg_AgevsPopulation = d3.select("body").select("#barchart")
        .append("svg")
        .attr("id", "#svg_AgevsPopulation")
        .attr("width", w)
        .attr("height", h);

        createBarchart(AgevsPopulation,svg_AgevsPopulation,w,h,wpad,hpad,"Heart Disease by Age Group","Age Groups","Population");
        
        var Smoking_Yes = 0;
        var Smoking_No = 0;
        var Alcohol_Yes = 0;
        var Alcohol_No = 0;
        for(i=0;i<heart_disease_yes.length;i++)
        {
            if(heart_disease_yes[i]["Smoking"] == 'Yes'){
                Smoking_Yes = Smoking_Yes +1;                ;
            }
            else{
                Smoking_No = Smoking_No +1;
            };
            if(heart_disease_yes[i]["AlcoholDrinking"] == 'Yes'){
                Alcohol_Yes = Alcohol_Yes +1;                ;
            }
            else{
                Alcohol_No = Alcohol_No +1;
            }
        }
        var Smoking_Drinking_dataset = [
            {
                "categorie": "Smoking", 
                "values": [
                    {
                        "value": Smoking_Yes, 
                        "rate": "Yes"
                    }, 
                    {
                        "value": Smoking_No, 
                        "rate": "No"
                    }
                ]
            }, 
            {
                "categorie": "Drinking", 
                "values": [
                    {
                        "value": Alcohol_Yes, 
                        "rate": "Yes"
                    }, 
                    {
                        "value": Alcohol_No, 
                        "rate": "No"
                    }
                ]
            }]; 
        console.log(Smoking_Drinking_dataset);
        
        var svg_Smoking_Drinking = d3.select("body").select("#groupedbarchart")
        .append("svg")
        .attr("id", "#svg_Smoking_Drinking")
        .attr("width", w)
        .attr("height", h);
        createGroupedBarchart(Smoking_Drinking_dataset,svg_Smoking_Drinking)

        //Question 3.b
        paramsOtherDisease = ["Stroke", "DiffWalking","Diabetic","Asthma", "KidneyDisease", "SkinCancer"];
        d3.select("#Alldisease_selector")
        .selectAll('AllDisease')
        .data(paramsOtherDisease)
        .enter()
        .append('option')
        .text(function (d) { return d; }) 
        .attr("value", function (d) { return d; }) 

        //var selectval = document.querySelector('Alldisease_selector');

        var selectDisease = paramsOtherDisease[0];
        DiseasedatabyAgegrp = getDiseaseData(selectDisease,AgevsPopulation_4all);
        var svg_AgevsPopulation_4all = d3.select("body").select("#barchart_allDisease")
            .append("svg")
            .attr("id", "#svg_AgevsPopulation_4all")
            .attr("width", w)
            .attr("height", h)
            .attr("id","barChart");
        var title = selectDisease + " by Age Group";
        createBarchart(DiseasedatabyAgegrp,svg_AgevsPopulation_4all,w,h,wpad,hpad,title,"Age Groups","Population");

        d3.select("#Alldisease_selector").on("change", function(d) {    
            var selectDisease = d3.select(this).property("value")    
            updateBar(selectDisease,AgevsPopulation_4all)
        })
        console.log(selectDisease);
        
         //Question 5.a.2 What population of people having heart disease lie in which weight group?
         var BMI=[];
         heart_disease_yes.map(function (d) {
             BMI.push(+d["BMI"])});
         //console.log(BMI);
 
         createHistogram(BMI);
 
         
 
         
      
        //Question 2: b-Which race/ethnicity has a greater number of heart diseases?
        const distinctRaces = [...new Set(heart_disease_csv.map(x =>x.Race))];
        
        distinctRaces.sort();
        var RacevsDeaths =[];

        for(i=0;i<distinctRaces.length;i++){
            RacevsDeaths.push([distinctRaces[i],0])
        }

        for(i=0;i<heart_disease_yes.length;i++)
        {
            if(heart_disease_yes[i]["Race"] == 'American Indian/Alaskan Native'){
                RacevsDeaths[0][1]= RacevsDeaths[0][1] +1;
            }
            else if(heart_disease_yes[i]["Race"] == 'Asian'){
                RacevsDeaths[1][1]= RacevsDeaths[1][1] +1;
            }
            else if(heart_disease_yes[i]["Race"] == 'Black'){
                RacevsDeaths[2][1]= RacevsDeaths[2][1] +1;
            }
            else if(heart_disease_yes[i]["Race"] == 'Hispanic'){
                RacevsDeaths[3][1]= RacevsDeaths[3][1] +1;
            }
            else if(heart_disease_yes[i]["Race"] == 'Other'){
                RacevsDeaths[4][1]= RacevsDeaths[4][1] +1;
            }
            else if(heart_disease_yes[i]["Race"] == 'White'){
                RacevsDeaths[5][1]= RacevsDeaths[5][1] +1;
            }
        }
        console.log(RacevsDeaths);
        var svg_RacevsDeaths = d3.select("body").select("#barchartRD")
        .append("svg")
        .attr("id", "#svg_RacevsDeaths")
        .attr("width", w)
        .attr("height", h);

        createBarchart(RacevsDeaths,svg_RacevsDeaths,w,h,wpad,hpad,"Heart Disease by Race","Race","Heart Disease");
    }
});

function getDiseaseData(diseaseName,AgevsPopulation_4all){
    var Disease_yes =[];
    for(i=0;i<heart_disease_csv.length;i++)
    {
        if(heart_disease_csv[i][diseaseName] == "Yes"){
            Disease_yes.push(heart_disease_csv[i])
        }
    }

    for(i=0;i<Disease_yes.length;i++)
        {
            if(Disease_yes[i]["AgeCategory"] == '18-24'){
                AgevsPopulation_4all[0][1]= AgevsPopulation_4all[0][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '25-29'){
                AgevsPopulation_4all[1][1]= AgevsPopulation_4all[1][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '30-34'){
                AgevsPopulation_4all[2][1]= AgevsPopulation_4all[2][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '35-39'){
                AgevsPopulation_4all[3][1]= AgevsPopulation_4all[3][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '40-44'){
                AgevsPopulation_4all[4][1]= AgevsPopulation_4all[4][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '45-49'){
                AgevsPopulation_4all[5][1]= AgevsPopulation_4all[5][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '50-54'){
                AgevsPopulation_4all[6][1]= AgevsPopulation_4all[6][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '55-59'){
                AgevsPopulation_4all[7][1]= AgevsPopulation_4all[7][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '60-64'){
                AgevsPopulation_4all[8][1]= AgevsPopulation_4all[8][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '65-69'){
                AgevsPopulation_4all[9][1]= AgevsPopulation_4all[9][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '70-74'){
                AgevsPopulation_4all[10][1]= AgevsPopulation_4all[10][1] +1;
            }
            else if(Disease_yes[i]["AgeCategory"] == '75-79'){
                AgevsPopulation_4all[11][1]= AgevsPopulation_4all[11][1] +1;
            }
            else {
                AgevsPopulation_4all[12][1]= AgevsPopulation_4all[12][1] +1;
            }
        }
    return AgevsPopulation_4all;
}

function updateBar(selectDisease,AgevsPopulation_4all) {

    DiseasedatabyAgegrp = getDiseaseData(selectDisease,AgevsPopulation_4all);
    d3.selectAll('#barChart')
    .remove();
    
            var svg_AgevsPopulation_4all = d3.select("body").select("#barchart_allDisease")
            .append("svg")
            .attr("id", "#svg_AgevsPopulation_4all")
            .attr("width", w)
            .attr("height", h)
            .attr("id","barChart");
var title = selectDisease + " by Age Group";
            createBarchart(DiseasedatabyAgegrp,svg_AgevsPopulation_4all,w,h,wpad,hpad,title,"Age Groups","Population");

    }


function createBarchart(dataset,svg_var,width,height,w_padding,h_padding,title,xtitle,ytitle){	
    var xScale = d3.scale.ordinal()
        .domain(d3.range(dataset.length))
        .rangeRoundBands([w_padding, width-w_padding], 0.09);
    var yScale = d3.scale.linear()
        .domain([0, d3.max(dataset, function(d,i) { 
        return dataset[i][1]; })])
        .range([height- h_padding,h_padding ]);
    var xAxis = d3.svg.axis().scale(xScale).tickFormat(function(d,i) { return dataset[i][0]; });
        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(4);
       
        svg_var.selectAll("rect")
                .data(dataset)
                .enter()
                .append("rect")
                .attr("id", function(d, i) {
                return i;        
                })
                .attr("x", function(d, i) {
                return xScale(i);        
                })
                .attr("y",function(d,i) {
                    return  yScale(dataset[i][1]);  
                })
                .attr("width", xScale.rangeBand())
                .attr("height",function(d,i) {
                    return yScale(0)- yScale(dataset[i][1])   ;
                })
                .attr("fill", function(d) {
                    return "#525252";
                });
                
                
        svg_var.selectAll("text")
                .data(dataset)
                .enter()
                .append("text")
                .text(function(d,i) {
                    return dataset[i][1];
                })
                .attr("x", function(d, i) {
                    return xScale(i) + xScale.rangeBand() / 2;        
                })
                .attr("y", function(d,i) {
                    return  yScale(dataset[i][1]) +10;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "8px")
                .attr("fill", "white")
                .attr("text-anchor", "middle");
                        
        svg_var.append("text")
                    .attr("x", (width / 2))             
                    .attr("y", 20 )
                    .attr("text-anchor", "middle") 
                    .attr("font-family", "arial") 
                    .style("font-size", "16px") 
                    .text(title);
        svg_var.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(" + w_padding + ",0)")
                .call(yAxis);
        svg_var.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0,"+(height -h_padding)+")")
                .call(xAxis)
                .selectAll("text")	
                .style("text-anchor", "end")
                .attr("dx", "-.8em")
                .attr("dy", "-.4em")
                .attr("transform", function(d) {
                        return "rotate(-90)" 
                    });
                    
        svg_var.append("text")             
                    .attr("transform",
                        "translate(" + (width/2) + " ," + 
                                        (height-10) + ")")
                    .style("text-anchor", "middle")
                    .text(xtitle);
                    
        svg_var.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 65  )
                .attr("x",-95)
                
                .style("text-anchor", "middle")
                .text(ytitle); 
    }

    function createHistogram(dataset){
        var color = "steelblue";

        
        var formatCount = d3.format(",.0f");

        var margin = {top: 20, right: 30, bottom: 30, left: 30},
            width = 500 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;


        var max = d3.max(dataset);
        var min = d3.min(dataset);
        var x = d3.scale.linear()
            .domain([min, max])
            .range([0, width]);


        var data = d3.layout.histogram()
            .bins(x.ticks(30))
            (dataset);

        var yMax = d3.max(data, function(d){return d.length});
        var yMin = d3.min(data, function(d){return d.length});
        var colorScale = d3.scale.linear()
                    .domain([yMin, yMax])
                    .range([d3.rgb(color).brighter(), d3.rgb(color).darker()]);

        var y = d3.scale.linear()
            .domain([0, yMax])
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var svg = d3.select("body").select("#BMIhistogram").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var bar = svg.selectAll(".bar")
            .data(data)
        .enter().append("g")
            .attr("class", "bar")
            .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

        bar.append("rect")
            .attr("x", 1)
            .attr("width", (x(data[0].dx) - x(0)) - 1)
            .attr("height", function(d) { return height - y(d.y); })
            .attr("fill", function(d) { return colorScale(d.y) });

        bar.append("text")
            .attr("dy", ".75em")
            .attr("y", -12)
            .attr("x", (x(data[0].dx) - x(0)) / 2)
            .attr("text-anchor", "middle")
            .text(function(d) { return formatCount(d.y); });

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
                
    }

    function createGroupedBarchart(dataset,svg_var){	
                
        
        var margin = {top: 15, right: 25, bottom: 15, left: 40},
        width = 600 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

        var x0 = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

        var x1 = d3.scale.ordinal();

        var y = d3.scale.linear()
        .range([height, 0]);

        var xAxis = d3.svg.axis()
        .scale(x0)
        .tickSize(0)
        .orient("bottom");

        var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

        var color = d3.scale.ordinal()
        .range(["#f4a582","#92c5de"]);

        var svg = svg_var
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        

        var categoriesNames = dataset.map(function(d) { return d.categorie; });
        var ValNames = dataset[0].values.map(function(d) { return d.rate; });

        x0.domain(categoriesNames);
        x1.domain(ValNames).rangeRoundBands([0, x0.rangeBand()]);
        y.domain([0, d3.max(dataset, function(categorie) { return d3.max(categorie.values, function(d) { return d.value; }); })]);

        svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

        svg.append("g")
        .attr("class", "y axis")
        .style('opacity','0')
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .style('font-weight','bold')
        .text("Value");

        svg.select('.y').transition().duration(500).delay(1300).style('opacity','1');

        var slice = svg.selectAll(".slice")
        .data(dataset)
        .enter().append("g")
        .attr("class", "g")
        .attr("transform",function(d) { return "translate(" + x0(d.categorie) + ",0)"; });

        slice.selectAll("rect")
        .data(function(d) { return d.values; })
        .enter().append("rect")
        .attr("width", x1.rangeBand())
        .attr("x", function(d) { return x1(d.rate); })
        .style("fill", function(d) { return color(d.rate) })
        .attr("y", function(d) { return y(0); })
        .attr("height", function(d) { return height - y(0); })
        .on("mouseover", function(d) {
            d3.select(this).style("fill", d3.rgb(color(d.rate)).darker(2));
        })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", color(d.rate));
        });

        slice.selectAll("rect")
        .transition()
        .delay(function (d) {return Math.random()*1000;})
        .duration(1000)
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); });

        //Legend
        var legend = svg.selectAll(".legend")
        .data(dataset[0].values.map(function(d) { return d.rate; }).reverse())
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d,i) { return "translate(0," + i * 20 + ")"; })
        .style("opacity","0");

        legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function(d) { return color(d); });

        legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) {return d; });

        legend.transition().duration(500).delay(function(d,i){ return 1300 + 100 * i; }).style("opacity","1");

        
    }