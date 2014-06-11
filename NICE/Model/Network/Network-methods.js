

model.Network.methods.importNetwork = function() {
	var lines = loadText( ds.getModelFolder().path + "DataImport/network.csv" ).split("\n");
    var columns = [];
    lines.forEach( function(oneLine) { 
      columns = oneLine.split(",");
      
      var theQuery = ds.Network.find("ID = :1", columns[0]);
      var myBuildingID = ds.Building(columns[2]);
      if(theQuery == null && !isNaN(columns[0])) { 
           theQuery = new ds.Network({
           	 ID				: columns[0],
           	 rackCode		: columns[1],
             address		: columns[3],
             netmask		: columns[4],
             theBuilding	: myBuildingID
           });
           
         theQuery.save();
      }   
    });   
};
