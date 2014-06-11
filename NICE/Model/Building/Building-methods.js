

model.Building.methods.importBuildings = function() {
	
	var lines = loadText( ds.getModelFolder().path + "DataImport/building.csv" ).split("\n");
    var columns = [];
    lines.forEach( function(oneLine) { 
      columns = oneLine.split(",");
      
      var theQuery = ds.Building.find("ID = :1", columns[0]);
      if(theQuery == null) { 
           theQuery = new ds.Building({
           	 ID			: columns[0],
           	 code		: columns[1],
             address	: columns[2],
             city		: columns[3],
             state		: columns[4],
             zip		: columns[5],
             borough	: columns[6],
             name		: columns[7]
           });
           
         theQuery.save();
      }   
    });   

};
