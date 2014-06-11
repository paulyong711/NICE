

model.School.methods.importSchools = function() {
	var lines = loadText( ds.getModelFolder().path + "DataImport/school.csv" ).split("\n");
    var columns = [];
    lines.forEach( function(oneLine) { 
      columns = oneLine.split(",");
      
      var theQuery = ds.School.find("ID = :1", columns[0]);
     
      if(theQuery == null && !isNaN(columns[0])) { 
        theQuery = new ds.School({
           	 ID				: columns[0],
           	 code			: columns[1],
             name			: columns[2],
             atsCode		: columns[3],
             bedsCode		: columns[4],
           	 category		: columns[5],
           	 studentCount	: columns[6],
             faxNumber		: columns[7],
             phoneNumber	: columns[8],
             principalName	: columns[9],
             principalsPhone: columns[10]
        });
           
        theQuery.save();
      }   
    });   
};
