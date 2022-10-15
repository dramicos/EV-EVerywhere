
    
    console.log("hello");

    const rangeData = "ev-ranges";


    function init() {
        
        // Initializes the page with a default bar plot
        rangePlot();
          
    }
    
    // Call the initialization
    init();
    
    // Creates call to slider
    $("#years").slider({});
    
    // Create action event listener
    $("#years").on('slide', function (range) {
    let timeString = $('#years').val();
    let timeArray = timeString.split(',');
    let yMin = timeArray[0];
    let yMax = timeArray[1];
    rangePlot(yMin,yMax);
    });

    // Use plotly maps with JSON data to make a horizontal bar graph of top 10 cultures
    function rangePlot(yearMin = 2010, yearMax = 2021) {
        d3.json(rangeData).then(function(data) {
            // Setting the initial plot parameters
            console.log("rangePlot: ", data);

            // some error proofing -- Add more later
            if (yearMin < 2010){
                yearMin = 2010
            }



            // Setting the initial plot parameters
            let ranges = data.data

            // Create indexes for slicing from the years
            let minYearIndex = yearMin - 2010;
            let maxYearIndex = yearMax - 2010;
       
            let plotSample = ranges.slice(minYearIndex,maxYearIndex+1);
            console.log("yearsPlot: ", plotSample);

            // splitting the data into separate plotting variables
            let  plotYears = [];
            let  plotAvgRange = [];
            let  plotMaxRange = [];
            for (let i =0; i < plotSample.length; i++){
                plotYears.push(plotSample[i][0]);
                plotAvgRange.push(plotSample[i][1]);
                plotMaxRange.push(plotSample[i][2]);
            }

            let plot1 = {
            type : 'bar',
            name : 'Average Ranges',
            x: plotYears,
            y: plotAvgRange,     
            };

            let plot2 = {
                type : 'bar',
                name : 'Max Ranges',
                x: plotYears,
                y: plotMaxRange,     
            };

            let trace = [plot1, plot2];

            let layout = {
                title : "Average and Maximum Ranges for EVs over the years",
                margin: {t: 50, l: 140},
                barmode: 'group'
            };

            let config = {responsive: true};
      
            Plotly.newPlot("bar-plot", trace, layout, config);

        });
    }
   
    
