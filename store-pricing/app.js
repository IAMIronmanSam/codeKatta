var superMarket = exports;
//var _ = require('underscore');
var grocery = [];
var offer = [];
superMarket.setup = function() {
	grocery.produce = [];
	grocery.diary = [];
 return true; 
}

superMarket.stock = { 
	create : function(stock) {
		if(!!stock){
			grocery[stock.type] = [];
			grocery[stock.type].push({
				"name" : stock.name,
				"price" : stock.price,
				"quantity" : stock.quantity,
				"type": stock.type
			});
			return grocery[stock.type];
		}
	},
	add : function(stock) {
		if(!!stock){
			var groceryType = grocery[stock.type];
				groceryType.push({
					"name" : stock.name,
					"price" : stock.price,
					"quantity" : stock.quantity
				});
			return grocery;
		}else{
			return grocery;
		}	
	},
	edit : function(stock) {
		if(!!stock){
			var groceryType = grocery[stock.type];
					for(var stockItem in groceryType){
					if(groceryType[stockItem].name == stock.name){
						groceryType[stockItem] = {
							"name" : stock.name,
							"price" : stock.price,
							"quantity" : stock.quantity
						};
					}
				}
			return grocery;
		}else{
			return grocery;
		}	
	},
	delete : function(stock) {
		if(!!stock){
			for(var v in grocery){
				if(grocery[v].name === stock.name){
					delete grocery[stock.type]; 
				}
			}
		}
	return grocery;
	}
};
superMarket.offer = {
	add : function(stockOffer) {
	if(!!stockOffer){
		offer.push(stockOffer.type);
		offer[stockOffer.type] = [];
		offer[stockOffer.type].push({
			"offerID" : stockOffer.offerID,
			"Offer" : stockOffer.Offer,
			"quantity" : stockOffer.minQuantity,
			"validUpto" : stockOffer.validUpto
		});
	}else{
		console.log('No Offers')
	}
	return offer;
},
update : function(stockOffer) {
	if(!!stockOffer){
		offer[stockOffer.type].push({
			"offerID" : stockOffer.offerID,
			"Offer" : stockOffer.Offer,
			"quantity" : stockOffer.minQuantity,
			"validUpto" : stockOffer.validUpto
		});
	}
	return offer;
},
remove : function(stockOffer) {
	if(!!stockOffer){
		for(var type in offer){
			for(var offerItem in offer[type]){
				if(offerItem.offerID === stockOffer.offerID){
					delete offer[stockOffer.type].offerItem; 
				}
			}
		}
	}
	return offer;
},
isExpired : function(stockOffer) {
	if(!!stockOffer){
		if(stockOffer.valid){
			delete offer[stockOffer.type]; 
		}
	}
	return offer;
}
};
