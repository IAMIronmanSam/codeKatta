var superMarket = require('../index.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var offerValidity = new Date();
offerValidity.setDate(offerValidity.getDate() + 7); 
var produceData = {"price":"1.00","quantity":"10","name":"tomato","type":"produce"};
var diaryData = {"price":"2.00","quantity":"10","name":"milk"};
var offerData = {"minQuantity":"1","type":"produce","name":"tomato","Offer":"-0.50","validUpto":offerValidity};

describe('superMarket', function(){
  xdescribe('Canary Test', function(){
     it('Enviroment testing', function(){
       assert.equal(superMarket.setup(),true);
     })
  })
    describe('Super Market - Stock', function(){
    it('Add Stock', function(){
    	var produceStock = superMarket.addStock(produceData);
    	assert.equal(produceStock.name,'tomato');
    })
    it('Remove Stock', function(){
    	var produceStock = superMarket.deleteStock(produceData);
    	assert.isUndefined(produceData['produce']);
    })
  })
  describe('Super Market - Offer', function(){
    it('Add Offer', function(){
    	var newOffer = superMarket.addOffer(offerData);
      	assert.equal(newOffer[offerData.type].Offer,offerData.Offer);
    })
    it('Remove Offer', function(){
    	var newOffer = superMarket.removeOffer(offerData);
      	assert.equal(newOffer[offerData.type].Offer,offerData.Offer);
    })
    it('Offer Expiration', function(){
    	var newOffer = superMarket.removeOffer(offerData);
      	assert.equal(newOffer[offerData.type].Offer,offerData.Offer);
    })
  })
  describe('Super Market - Sale', function(){
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