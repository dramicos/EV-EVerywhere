
    
    console.log("hello");

    const rangeData = "data/EV-Ranges.json";

    function init() {
        
        // Initializes the page with a default bar plot
        rangePlot();
          
    }
    
    // Call the initialization
    init();
     
    // Use plotly maps with JSON data to make a horizontal bar graph of top 10 cultures
    function rangePlot(yearMin = 2002, yearMax = 2021) {
        d3.json(rangeData).then(function(data) {
            // Setting the initial plot parameters
            console.log("rangePlot: ", data);
            

        });
    }
