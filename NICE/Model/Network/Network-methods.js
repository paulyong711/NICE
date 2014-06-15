

model.Network.methods.importNetwork = function() {
	var lines = loadText( ds.getModelFolder().path + "DataImport/network.csv" ).split("\n");
    var columns = [];
    lines.forEach( function(oneLine) { 
      columns = oneLine.split(",");
      
      var theQuery = ds.Network.find("ID = :1", columns[0]);
      var myBuildingID = ds.Building(columns[2]);
      if(theQuery == null && !isNaN(columns[0])) { 
           theQuery = new ds.Network({
           	
           	 ID							: columns[0],
           	 rackCode					: columns[1],
             idfID						: columns[2],
             cabinetLocationID			: columns[3],
             theBuilding				: myBuildingID,
           	 networkAddress				: columns[5],
             netMask					: columns[6],
             serviceNetwork				: columns[7],
           	 secondScope				: columns[8],
           	 vlan2						: columns[9],
             vlan2Netmask				: columns[10],
             vlan2Exclude				: columns[11],
             vlan21						: columns[12],
           	 vlan21Netmask				: columns[13],
             vlan21Exclude				: columns[14],
             monitorNetwork				: columns[15] == "1"? true : false,
          	 monitorNetChange			: columns[16] == "1"? true : false,
           	 status						: columns[17],
           	 deployedDate				: columns[18] == "1"? true : false,
           	 model						: columns[19],
             caas						: columns[20] == "1"? true : false,
             caasDate					: columns[21],
             cdn						: columns[22] == "1"? true : false,
           	 cdnDate					: columns[23],
             iptv						: columns[24] == "1"? true : false,
             iptvDate					: columns[25],
           	 ipdvs						: columns[26] == "1"? true : false,
           	 ipdvsDate					: columns[27],
             lonWorks					: columns[28] == "1"? true : false,
             lonWorksDate				: columns[29],
             pos						: columns[30] == "1"? true : false,
           	 posDate					: columns[31],
             multiAdminVlan				: columns[32] == "1"? true : false,
             vrf						: columns[33] == "1"? true : false,             
             x0							: columns[34] == "1"? true : false,
             mainFrameAccess			: columns[35] == "1"? true : false,
           	 mainFrameDate				: columns[36],
             dialbackup					: columns[37] == "1"? true : false,
             dialbackupDate				: columns[38],
             phoneNumber				: columns[39],
           	 wirelessModel				: columns[40],
             wirelessDate				: columns[41],
             ssid						: columns[42],
           	 wepKey						: columns[43],
           	 presharedKey				: columns[44],
           	 proconRsa					: columns[45] == "1"? true : false,
             deployed					: columns[46] == "1"? true : false,
             rodc						: columns[47] == "1"? true : false,
             rodcDate					: columns[48],
           	 ngwClientsWindowsXP		: columns[49] == "1"? true : false,
             ngwClientsWindowsXPDate	: columns[50],
             ngwClientsWindows7			: columns[51] == "1"? true : false,
           	 ngwClientsWindows7Date		: columns[52],
             ngwClientsMacintosh		: columns[53] == "1"? true : false,
             ngwClientsMacintoshDate	: columns[54] == "1"? true : false,
             iZone						: columns[55],
           	 iZoneDate					: columns[56],
             cle						: columns[57] == "1"? true : false,
             cleDate					: columns[58],
           	 ils						: columns[59] == "1"? true : false,
           	 ilsDate					: columns[60],
             monitorHIS					: columns[61] == "1"? true : false,
             monitorHISDate				: columns[62],
             magicDefaultSchoolID		: columns[63],
           	 defaultNetwork				: columns[64],
             serviceNetworkDeployed		: columns[65] == "1"? true : false,
             serviceNetworkDeployedDate	: columns[66],
             siteTypeID					: columns[67],
           	 wirelessRadios				: columns[68],
             wirelessMode11b			: columns[69] == "1"? true : false,
             nme						: columns[70] == "1"? true : false
             
           });
           
         theQuery.save();
      }   
    });   
};
