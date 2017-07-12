var stub = exports;
var today = new Date();
stub.offerValidity = today.setDate(today.getDate() + 7);
stub.offerExpired = today.setDate(today.getDate() - 7);

stub.produce = {
	newData : {"price":"1.00","quantity":"10","name":"tomato","type":"produce"},
	updateData : {"price":"5.00","quantity":"10","name":"tomato","type":"produce"}
};
stub.stock = {
	catlog : ["produce","diary"],
	delete : {"name":"milk","type":"diary"}
};
stub.diary = {
	newData : {"price":"2.00","quantity":"10","name":"milk","type":"diary"},
	updateData : {"price":"1.00","quantity":"10","name":"milk","type":"diary"}
};
stub.offer = {
	newData : {"minQuantity":"1","type":"produce","offerID":"2FR-tomato","Offer":"-0.50","validUpto":stub.offerValidity},
	updateData : {"minQuantity":"1","type":"produce","offerID":"2FR-onion","Offer":"-0.50","validUpto":stub.offerValidity},
	expiredData : {"minQuantity":"1","type":"produce","offerID":"2FR-onion","Offer":"-0.50","validUpto":stub.offerExpired}
};