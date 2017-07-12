var util = exports;

util.isOfferExpired = function(stockOffer) {
    if (stockOffer.valid) {
        delete offer[stockOffer.type];
    }
    return offer;
};
util.uniqueArray = function(rawArray, value) {
    var isExist = false;
    if (rawArray.length != 0) {
        for (var i = 0; i < rawArray.length; i++) {
            for (var property in rawArray[i]) {
                if (rawArray[i][property] == value) {
                    isExist = true;
                }
            }
        }
    }
    return isExist;
}