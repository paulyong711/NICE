
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var gSearchQuery = {};	// @dataGrid
	var bClearSearch = {};	// @button
	var tSearchQuery = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	gSearchQuery.onRowClick = function gSearchQuery_onRowClick (event)// @startlock
	{// @endlock
		var rackCode = WAF.sources.network.rackCode;
		var networkAddress = WAF.sources.network.networkAddress;
		var networkMask = WAF.sources.network.netMask;
		var ipOctet = networkAddress.split('.');
		var ipOctet1 = ipOctet[0];
		var ipOctet2 = ipOctet[1];
		var ipOctet3 = ipOctet[2];
		
		var subnetNumber0  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 0).toString() + ".0";
		var subnetNumber1  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 1).toString() + ".0";
		var subnetNumber2  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 2).toString() + ".0";
		var subnetNumber3  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 3).toString() + ".0";
		var subnetNumber4  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 4).toString() + ".0";
		var subnetNumber5  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 5).toString() + ".0";
		var subnetNumber6  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 6).toString() + ".0";
		var subnetNumber7  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 7).toString() + ".0";
		var subnetNumber8  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 8).toString() + ".0";
		var subnetNumber9  = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 9).toString() + ".0";
		var subnetNumber10 = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 10).toString() + ".0";
		var subnetNumber11 = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 11).toString() + ".0";
		var subnetNumber12 = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 12).toString() + ".0";
		var subnetNumber13 = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 13).toString() + ".0";
		var subnetNumber14 = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 14).toString() + ".0";
		var subnetNumber15 = ipOctet1 + "." + ipOctet2 + "." + (+ipOctet3 + 15).toString() + ".0";
		
		var subnetList = 
		  "<table>" +
		  "<caption>Network VLAN Info</caption>" +
		  "<tr>" +
		  "<th scope=\"col\">" + "VLAN" + "</th>" +
		  "<th scope=\"col\">" + "Network Address" + "</th>" +
		  "<th scope=\"col\">" + "Netmask" + "</th>" +
          "</tr>" + 
		  "<tr><th scope=\"row\">Vlan 1</th> <td>" + subnetNumber0 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 2</th> <td>" + subnetNumber1 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 3</th> <td>" + subnetNumber2 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 4</th> <td>" + subnetNumber3 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 5</th> <td>" + subnetNumber4 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 6</th> <td>" + subnetNumber5 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 7</th> <td>" + subnetNumber6 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 8</th> <td>" + subnetNumber7 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 9</th> <td>" + subnetNumber8 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 10</th> <td>" + subnetNumber9 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 11</th> <td>" + subnetNumber10 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 12</th> <td>" + subnetNumber11 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 13</th> <td>" + subnetNumber12 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 14</th> <td>" + subnetNumber13 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 15</th> <td>" + subnetNumber14 + "</td><td>" + networkMask + "</td></tr>" +
		  "<tr><th scope=\"row\">Vlan 16</th> <td>" + subnetNumber15 + "</td><td>" + networkMask + "</td></tr>" +
		  "</table>"
		
		$("#networkDetail").html(subnetList);
		

	};// @lock

	bClearSearch.click = function bClearSearch_click (event)// @startlock
	{// @endlock
		$$("tSearchQuery").setValue("Search Rack Code, School Code, Building Name, Building Address, Network Address & etc");
		sources.network.query('rackCode = :1 order by rackCode', {params: ['*']});
	};// @lock

	tSearchQuery.click = function tSearchQuery_click (event)// @startlock
	{// @endlock
		$$("tSearchQuery").setValue("");
		$("#networkDetail").html("");
	};// @lock

	tSearchQuery.keyup = function tSearchQuery_keyup (event)// @startlock
	{// @endlock
		var theSearchQuery = $$("tSearchQuery").getValue();
		sources.network.query('(rackCode = :1 or theBuilding.code = :1 or theBuilding.name = :1 or theBuilding.address = :1 or theBuilding.city = :1 or networkAddress = :1) and status = "active" order by rackCode', 
		{params: ['*' + theSearchQuery + '*']});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("gSearchQuery", "onRowClick", gSearchQuery.onRowClick, "WAF");
	WAF.addListener("tSearchQuery", "click", tSearchQuery.click, "WAF");
	WAF.addListener("bClearSearch", "click", bClearSearch.click, "WAF");
	WAF.addListener("tSearchQuery", "keyup", tSearchQuery.keyup, "WAF");
// @endregion
};// @endlock
