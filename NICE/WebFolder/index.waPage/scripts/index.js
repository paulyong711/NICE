
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textClear = {};	// @button
	var textSearch = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	textClear.click = function textClear_click (event)// @startlock
	{// @endlock
		$$('textSearch').setValue('');
		waf.sources.network.query("rackCode = :1 or theBuilding.address = :1", "*");
		
	};// @lock

	textSearch.click = function textSearch_click (event)// @startlock
	{// @endlock
		$$('textSearch').setValue('');
	};// @lock

	textSearch.keyup = function textSearch_keyup (event)// @startlock
	{// @endlock
		waf.sources.network.query("rackCode = :1 or theBuilding.address = :1 and status = 'active'" , "*" + $$('textSearch').getValue() + "*");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textSearch", "click", textSearch.click, "WAF");
	WAF.addListener("textClear", "click", textClear.click, "WAF");
	WAF.addListener("textSearch", "keyup", textSearch.keyup, "WAF");
// @endregion
};// @endlock
