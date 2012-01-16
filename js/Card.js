Card() = function() {
	this.id;
	this.question;
	this.answer;
	this.creationDate;
	this.box;
	this.showingAnswer = false;
}

Card.getId = function() {
	return this.id;
}

Card.getQuestion = function() {
	return this.question;
}

Card.getAnswer = function() {
	return this.answer;
}

Card.getCreationDate = function() {
	return this.creationDate;
}

Card.isShowingAnswer = function() {
	return this.showingAnswer;
}

Card.getBox = function() {
	return this.box;
}