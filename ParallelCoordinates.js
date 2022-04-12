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
        var heart_disease_yes =[];
        for(i=0;i<heart_disease_csv.length;i++)
        {
            if(heart_disease_csv[i]["HeartDisease"] == "Yes"){
                heart_disease_yes.push(heart_disease_csv[i])
            }
        }

        var heart_disease_forPC =[];
        for(i=0;i<heart_disease_yes.length;i++)
        {
            //if(heart_disease_csv[i]["HeartDisease"] == "Yes"){
                if(heart_disease_yes[i]["Sex"]=="Male"){sex = 1} else {sex =0};
                if(heart_disease_yes[i]["AgeCategory"] == '18-24'){
                    AgeCategory = 0;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '25-29'){
                    AgeCategory = 1;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '30-34'){
                    AgeCategory = 2;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '35-39'){
                    AgeCategory = 3;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '40-44'){
                    AgeCategory = 4;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '45-49'){
                    AgeCategory = 5;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '50-54'){
                    AgeCategory = 6;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '55-59'){
                    AgeCategory = 7;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '60-64'){
                    AgeCategory = 8;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '65-69'){
                    AgeCategory = 9;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '70-74'){
                    AgeCategory = 10;
                }
                else if(heart_disease_yes[i]["AgeCategory"] == '75-79'){
                    AgeCategory = 11;
                }
                else {
                    AgeCategory = 12;
                }
                //if(heart_disease_yes[i]["sex"]=="M"){sex = 1} else {sex =0}
                heart_disease_forPC.push([heart_disease_yes[i]["BMI"],heart_disease_yes[i]["PhysicalHealth"],heart_disease_yes[i]["MentalHealth"],sex,AgeCategory])
            }
        


        console.log(heart_disease_forPC);

        var margin = {top: 30, right: 10, bottom: 10, left: 10},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        var x = d3.scale.ordinal().rangePoints([0, width], 1),
        y = {},
        dragging = {};

        var line = d3.svg.line(),
        axis = d3.svg.axis().orient("left"),
        background,
        foreground;

        var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //d3.csv("cars.csv", function(error, cars) {

        // Extract the list of dimensions and create a scale for each.
        x.domain(dimensions = d3.keys(heart_disease_forPC[0]).filter(function(d) {
        return d != "name" && (y[d] = d3.scale.linear()
            .domain(d3.extent(heart_disease_forPC, function(p) { return +p[d]; }))
            .range([height, 0]));
        }));

        // Add grey background lines for context.
        background = svg.append("g")
        .attr("class", "background")
        .selectAll("path")
        .data(heart_disease_forPC)
        .enter().append("path")
        .attr("d", path);

        // Add blue foreground lines for focus.
        foreground = svg.append("g")
        .attr("class", "foreground")
        .selectAll("path")
        .data(heart_disease_forPC)
        .enter().append("path")
        .attr("d", path);

        // Add a group element for each dimension.
        var g = svg.selectAll(".dimension")
        .data(dimensions)
        .enter().append("g")
        .attr("class", "dimension")
        .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
        .call(d3.behavior.drag()
            .origin(function(d) { return {x: x(d)}; })
            .on("dragstart", function(d) {
            dragging[d] = x(d);
            background.attr("visibility", "hidden");
            })
            .on("drag", function(d) {
            dragging[d] = Math.min(width, Math.max(0, d3.event.x));
            foreground.attr("d", path);
            dimensions.sort(function(a, b) { return position(a) - position(b); });
            x.domain(dimensions);
            g.attr("transform", function(d) { return "translate(" + position(d) + ")"; })
            })
            .on("dragend", function(d) {
            delete dragging[d];
            transition(d3.select(this)).attr("transform", "translate(" + x(d) + ")");
            transition(foreground).attr("d", path);
            background
                .attr("d", path)
                .transition()
                .delay(500)
                .duration(0)
                .attr("visibility", null);
            }));

        // Add an axis and title.
        g.append("g")
        .attr("class", "axis")
        .each(function(d) { d3.select(this).call(axis.scale(y[d])); })
        .append("text")
        .style("text-anchor", "middle")
        .attr("y", -9)
        .text(function(d) { return d; });

        // Add and store a brush for each axis.
        g.append("g")
        .attr("class", "brush")
        .each(function(d) {
            d3.select(this).call(y[d].brush = d3.svg.brush().y(y[d]).on("brushstart", brushstart).on("brush", brush));
        })
        .selectAll("rect")
        .attr("x", -8)
        .attr("width", 16);
      //  });

        function position(d) {
        var v = dragging[d];
        return v == null ? x(d) : v;
        }

        function transition(g) {
        return g.transition().duration(500);
        }

        // Returns the path for a given data point.
        function path(d) {
        return line(dimensions.map(function(p) { return [position(p), y[p](d[p])]; }));
        }

        function brushstart() {
        d3.event.sourceEvent.stopPropagation();
        }

        // Handles a brush event, toggling the display of foreground lines.
        function brush() {
        var actives = dimensions.filter(function(p) { return !y[p].brush.empty(); }),
        extents = actives.map(function(p) { return y[p].brush.extent(); });
        foreground.style("display", function(d) {
        return actives.every(function(p, i) {
        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
        }) ? null : "none";
        });
        }

       }
})

