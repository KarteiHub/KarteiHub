Card() = function() {
	this.id;
	this.question;
	this.awnser;
	this.creationDate;
	this.box;
	this.showingAwnser = false;
}

Card.getId = function() {
	return this.id;
}

Card.getQuestion = function() {
	return this.question;
}

Card.getAwnser = function() {
	return this.awnser;
}

Card.getCreationDate = function() {
	return this.creationDate;
}

Card.isShowingAwnser = function() {
	return this.showingAwnser;
}

Card.getBox = function() {
	return this.box;
}