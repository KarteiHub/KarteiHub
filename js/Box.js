Box = function(id) {
	this.id = id;
	// number of all active cards
	this.activeCards;
	// all cards in this box
	this.cards;
	KarteiHub.getBoxInfo(getId());
}

Box.getId = function() {
	return this.id;
}

Box.getActiveCards = function() {
	return this.activeCards;
}

Box.getCards = function() {
	return this.cards;
}