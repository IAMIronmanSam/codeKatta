var superMarket = exports;
var util = require('./util/storePricing.util.js');
var grocery = [];
var offer = [];
superMarket.setup = function() {
    grocery.produce = [];
    grocery.diary = [];
    return true;
}

superMarket.stock = {
    createStock: function(stock) {
        if (!!stock) {
            for (var item in stock) {
                grocery[stock[item]] = [];
            }
            return grocery;
        }
    },
    addItem: function(stock) {
        if (!!stock) {
            var groceryType = grocery[stock.type];
            if (!util.uniqueArray(groceryType, stock.name)) {
                groceryType.push({
                    "name": stock.name,
                    "price": stock.price,
                    "quantity": stock.quantity
                });
            }
            return grocery[stock.type];
        }
    },
    editItem: function(stock) {
        if (!!stock) {
            var groceryType = grocery[stock.type];
            for (var stockItem in groceryType) {
                if (groceryType[stockItem].name == stock.name) {
                    groceryType[stockItem] = {
                        "name": stock.name,
                        "price": stock.price,
                        "quantity": stock.quantity
                    };
                    return grocery[stock.type][stockItem];
                }
            }
        }
    },
    deleteItem: function(stockToDelete) {
        var groceryType = grocery[stockToDelete.type];
        if (!!stockToDelete) {
            for (var stockItem in groceryType) {
                if (groceryType[stockItem].name === stockToDelete.name) {
                    grocery[stockToDelete.type].splice(stockItem, 1);
                }
            }
        }
        return grocery;
    }
};
superMarket.offer = {
    add: function(stockOffer) {
        if (!!stockOffer) {
            offer.push(stockOffer.type);
            offer[stockOffer.type] = [];
            offer[stockOffer.type].push({
                "offerID": stockOffer.offerID,
                "Offer": stockOffer.Offer,
                "quantity": stockOffer.minQuantity,
                "validUpto": stockOffer.validUpto
            });
        } else {
            console.log('No Offers')
        }
        return offer;
    },
    update: function(stockOffer) {
        if (!!stockOffer) {
            offer[stockOffer.type].push({
                "offerID": stockOffer.offerID,
                "Offer": stockOffer.Offer,
                "quantity": stockOffer.minQuantity,
                "validUpto": stockOffer.validUpto
            });
        }
        return offer;
    },
    remove: function(stockOffer) {
        if (!!stockOffer) {
            for (var type in offer) {
                for (var offerItem in offer[type]) {
                    if (offer[type][offerItem].offerID === stockOffer.offerID) {
                        delete offer[type][offerItem]; //TODO: Use Splice
                    }
                }
            }
        }
        return offer;
    },
    isExpired: function(stockOffer) {
        if (!!stockOffer) {
            if (stockOffer.valid) {
                delete offer[stockOffer.type];
            }
        }
        return offer;
    }
};