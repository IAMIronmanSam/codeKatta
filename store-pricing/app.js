var superMarket = exports;
var _ = require('underscore');
var grocery = [];
var offer = [];
superMarket.setup = function() {
	grocery.produce = [];
	grocery.diary = [];
 return true; 
}

superMarket.addStock = function(stock) {
	if(!!stock){
	grocery[stock.type] = {
		"name" : stock.name,
		"price" : stock.price,
		"quantity" : stock.quantity
	}
	return grocery[stock.type];
	}else{
		return grocery;
	}
}
superMarket.deleteStock = function(stock) {
	if(!!stock){
		for(var v in grocery){
			if(grocery[v].name === stock.name){
				delete grocery[stock.type]; 
			}else{
				return grocery;
			}
		}
	}
	return grocery;
}
superMarket.addOffer = function(stockOffer) {
	if(!!stockOffer){
		if(offer[stockOffer.type]){
			offer[stockOffer.type].push({
				"name" : stockOffer.name,
				"Offer" : stockOffer.Offer,
				"quantity" : stockOffer.minQuantity,
				"validUpto" : stockOffer.validUpto
			});
		}else{
			offer[stockOffer.type] = {
				"name" : stockOffer.name,
				"Offer" : stockOffer.Offer,
				"quantity" : stockOffer.minQuantity,
				"validUpto" : stockOffer.validUpto
			}
		}
	}
	return offer;
};
superMarket.removeOffer = function(stockOffer) {
	if(!!stockOffer){
		for(var v in offer){
			if(offer[v].offerID === stockOffer.offerID){
				delete offer[stockOffer.type]; 
			}
		}
	}
	return offer;
};
superMarket.isOfferExpired = function(stockOffer) {
	if(!!stockOffer){
		if(stockOffer.valid){
			delete offer[stockOffer.type]; 
		}
	}
	return offer;
};

