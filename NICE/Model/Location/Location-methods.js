

model.Location.methods.importLocation = function() {
	// Add your code here;
	var lines = loadText( ds.getModelFolder().path + "DataImport/location.csv" ).split("\n");
    var columns = [];
    lines.forEach( function(oneLine) { 
      columns = oneLine.split(",");
      
      var theQuery = ds.Location.find("ID = :1", columns[0]);
      var myBuildingID = ds.Building(columns[1]);
      var mySchoolID = ds.Building(columns[1]);
      if(theQuery == null) { 
           theQuery = new ds.Network({
           	 ID					: columns[0],
           	 theBuilding		: columns[1],
             theNetwork			: columns[2],
             primaryLocation	: columns[3]
           });
           
         theQuery.save();
      }   
    });   
};
