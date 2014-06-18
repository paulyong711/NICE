

model.Location.methods.importLocation = function() {
	// Add your code here;
	var lines = loadText( ds.getModelFolder().path + "DataImport/location.csv" ).split("\n");
    var columns = [];
    lines.forEach( function(oneLine) { 
      columns = oneLine.split(",");
      
      var theQuery = ds.Location.find("ID = :1", columns[0]);
      var myBuildingID = ds.Building(columns[1]);
      var mySchoolID = ds.School(columns[2]);
      if(theQuery == null && !isNaN(columns[0])) { 
           theQuery = new ds.Location({
           	 ID					: columns[0],
           	 theBuilding		: myBuildingID,
             theSchool			: mySchoolID,
             primaryLocation	: columns[3] == "1"? true : false
           });
           
         theQuery.save();
      }   
    });   
};
