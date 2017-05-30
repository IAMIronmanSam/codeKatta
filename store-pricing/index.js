var superMarket = exports;
var grocery = [];
var offer = [];
superMarket.setup = function() {
	grocery.produce = [];
	grocery.diary = [];
 return true; 
}

superMarket.addStock = function(stock) {
	grocery[stock.type] = {
		"name" : stock.name,
		"price" : stock.price,
		"quantity" : stock.quantity
	}
	return grocery[stock.type];
}
superMarket.deleteStock = function(stock) {
	for(var v in grocery){
		if(grocery[v].name === stock.name){
			delete grocery[stock.type]; 
		}else{
			return grocery;
		}
	}
	return grocery;
}
superMarket.addOffer = function(stockOffer) {
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
	return offer;
}

