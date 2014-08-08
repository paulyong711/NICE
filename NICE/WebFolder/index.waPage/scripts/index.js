
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textSearch = {};	// @textField
	var bClearSearch = {};	// @button
	var tTextQuery = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	textSearch.keyup = function textSearch_keyup (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	bClearSearch.click = function bClearSearch_click (event)// @startlock
	{// @endlock
		var vcount = 0;
		
		$$('tTextQuery').setValue('Search for anything');
		$$('tMessage').setValue('Enter text for search');
		//waf.sources.network.query("rackCode = :1 or theBuilding.address = :1", "*");
		ds.Network.query("rackCode = '24Q*'", {
			onSuccess: function(event) {
			  vcount = event.entityCollection.length;
			  $$('tMessage').setValue("There are " + vcount + " count.");
			}
		});
		
	};// @lock

	tTextQuery.click = function tTextQuery_click (event)// @startlock
	{// @endlock
		$$('tTextQuery').setValue('');
	};// @lock

	tTextQuery.keyup = function tTextQuery_keyup (event)// @startlock
	{// @endlock
		waf.sources.network.query("rackCode = :1 or theBuilding.address = :1 and status = 'active'" , "*" + textQuery + "*");
		

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("tTextQuery", "click", tTextQuery.click, "WAF");
	WAF.addListener("tTextQuery", "keyup", tTextQuery.keyup, "WAF");
	WAF.addListener("textSearch", "keyup", textSearch.keyup, "WAF");
	WAF.addListener("bClearSearch", "click", bClearSearch.click, "WAF");
	WAF.addListener("textSearch", "keyup", tTextQuery.keyup, "WAF");
// @endregion
};// @endlock
