var superMarket = require('../app.js');
var util = require('../util/storePricing.util.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var offerValidity = new Date();
offerValidity.setDate(offerValidity.getDate() + 7);
var offerExpired = new Date();
offerExpired.setDate(offerExpired.getDate() - 7);
var produceData = {"price":"1.00","quantity":"10","name":"tomato","type":"produce"};
var produceUpdateData = {"price":"5.00","quantity":"10","name":"tomato","type":"produce"};
var diaryData = {"price":"2.00","quantity":"10","name":"milk","type":"diary"};
var diaryUpdateData = {"price":"1.00","quantity":"10","name":"milk","type":"diary"};
var offerData = {"minQuantity":"1","type":"produce","offerID":"2FR-tomato","Offer":"-0.50","validUpto":offerValidity};
var offerUpdateData = {"minQuantity":"1","type":"produce","offerID":"2FR-onion","Offer":"-0.50","validUpto":offerValidity};
var expiredOfferData = {"minQuantity":"1","type":"produce","offerID":"2FR-onion","Offer":"-0.50","validUpto":offerExpired};

describe('superMarket', function(){
  xdescribe('Canary Test', function(){
     it('Enviroment testing', function(){
       assert.equal(superMarket.setup(),true);
     })
  })
    describe('Super Market - Stock', function(){
    before(function(){
    	var produceStock = superMarket.stock.create(diaryData);
    	assert.equal(produceStock[0].name,'milk');
    });
    it('Add Stock', function(){
      var diaryStock = superMarket.stock.add(diaryData);
      assert.equal(diaryStock[diaryData.type][0].price,diaryData.price);
    })
    it('Edit Stock', function(){
      var diaryUpdateStock = superMarket.stock.edit(diaryUpdateData);
      assert.equal(diaryUpdateStock[diaryUpdateData.type][0].price,diaryUpdateData.price);
    })
    it('Remove Stock', function(){
    	var produceStock = superMarket.stock.delete(produceData);
    	assert.isUndefined(produceData['produce']);
    })
  })
  describe('Super Market - Offer', function(){
    it('Add Offer', function(){
    	var newOffer = superMarket.offer.add(offerData);
      	assert.equal(newOffer[offerData.type][0].Offer,offerData.Offer);
    })
    it('Update Offer', function(){
      var updatedOffer = superMarket.offer.update(offerUpdateData);
        assert.equal(updatedOffer[offerData.type][1].Offer,offerUpdateData.Offer);
    })
    it('Remove Offer', function(){
    	var newOffer = superMarket.offer.remove(offerData);
      	assert.notEqual(newOffer[offerData.type][0].offerID,offerData.offerID);
    })
    it('Offer Expiration', function(){
    	var newOffer = superMarket.offer.isExpired(expiredOfferData);
      	assert.equal(newOffer[expiredOfferData.type][0].Offer,expiredOfferData.Offer);
    })
  })
  xdescribe('Super Market - Sale', function(){
    it('Sale', function(){
    	var newOffer = superMarket.addOffer(offerData);
      	assert.equal(newOffer[offerData.type].Offer,offerData.Offer);
    })
    it('Return', function(){
    	var newOffer = superMarket.removeOffer(offerData);
      	assert.equal(newOffer[offerData.type].Offer,offerData.Offer);
    })
  })
})