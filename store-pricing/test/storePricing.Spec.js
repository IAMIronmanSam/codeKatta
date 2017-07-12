var superMarket = require('../app.js');
var stub = require('./stub.js');
var util = require('../util/storePricing.util.js');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

describe('superMarket', function() {
    xdescribe('Canary Test', function() {
        it('Enviroment testing', function() {
            assert.equal(superMarket.setup(), true);
        });
    });
    describe('Stock: ', function() {
      describe('Create: ', function() {
            it('Return empty array for invalid data', function() {
                var newStock = superMarket.stock.createStock("");
                expect(newStock,"Invalid Stock data").to.be.undefined;
            });
          });
        describe('Add: ', function() {
            before(function() {
                superMarket.stock.createStock(stub.stock.catlog);
            });
            it('Add new item', function() {
                var diaryStock = superMarket.stock.addItem(stub.diary.newData);
                assert.equal(diaryStock[0].price, stub.diary.newData.price, "Invalid Stock Data");
            });
            it("Don't add duplicate item", function() {
                var diaryStock = superMarket.stock.addItem(stub.diary.newData);
                assert.equal(diaryStock.length, 1, "Duplicate stock data");
            });
        });
        describe('Edit: ', function() {
            before(function() {
                superMarket.stock.createStock(stub.stock.catlog);
                superMarket.stock.addItem(stub.diary.newData);
                superMarket.stock.addItem(stub.produce.newData);
            });
            it('Update existing stock ', function() {
                var diaryUpdateStock = superMarket.stock.editItem(stub.diary.updateData);
                assert.equal(diaryUpdateStock.price, stub.diary.updateData.price, "Edit Stock is failed, may be stock deleted/not available");
            });
        });
        describe('Delete: ', function() {
            before(function() {
                superMarket.stock.createStock(stub.stock.catlog);
                superMarket.stock.addItem(stub.diary.newData);
            });
            it('Remove existing stock ', function() {
                var diaryStock = superMarket.stock.deleteItem(stub.stock.delete);
                expect(diaryStock['diary']).to.be.empty;
            });
        });
    });
    describe('Super Market - Offer', function() {
        it('Add Offer', function() {
            var newOffer = superMarket.offer.add(stub.offer.newData);
            assert.equal(newOffer[stub.offer.newData.type][0].Offer, stub.offer.newData.Offer);
        });
        it('Update Offer', function() {
            var updatedOffer = superMarket.offer.update(stub.offer.updateData);
            assert.equal(updatedOffer[stub.offer.updateData.type][1].Offer, stub.offer.updateData.Offer);
        });
        it('Remove Offer', function() {
            var newOffer = superMarket.offer.remove(stub.offer.newData);
            assert.notEqual(newOffer[stub.offer.newData.type][0], stub.offer.newData.offerID);
        });
        it('Offer Expiration', function() {
            var newOffer = superMarket.offer.isExpired(stub.offer.expiredData);
            assert.equal(newOffer[stub.offer.expiredData.type][1].Offer, stub.offer.expiredData.Offer);
        });
    });
    xdescribe('Super Market - Sale', function() {
        it('Sale', function() {
            var newOffer = superMarket.sale(stub.offer.newData);
            assert.equal(newOffer[offerData.type].Offer, stub.offer.newData.Offer);
        });
        it('Return', function() {
            var newOffer = superMarket.return(stub.offer.newData);
            assert.equal(newOffer[offerData.type].Offer, stub.offer.newData.Offer);
        });
    });
})