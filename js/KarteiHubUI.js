
KarteiHubUI = function() {
	
}

KarteiHubUI.showAnswer = function (card) {
	if (card.isShowingAnswer()) {
		$('[cardid=' + card.getId() + '] [attr="content"]').html(card.getAnswer());
	}
}

KarteiHubUI.showQuestion = function (card) {
	if (!card.isShowingAnswer()) {
		$('[cardid=' + card.getId() + '] [attr="content"]').html(card.getQuestion());
	}
}

KarteiHubUI.showCard = function (card, position) {
	$("#cardstack").append(
	'<div class="card" cardid=card.getId()>' +
		'<span cardid=card.getId() attr="content">card.getQuestion()</span>' +
	'</div>');
}

KarteiHubUI.showNextCard = function() {
	$.('[cardid=' + KarteiHub.getActiveCard().getId() + ']').hide();
	KarteiHub.orderStack();
	KarteiHubUI.moveStack();
	KarteiHubUI.update();
}

KarteiHubUI.moveStack = function() {
	var cards = KarteiHub.getActiveCards();
	for (i = 0; i < cards.size(); i++) {
		$('[cardid=' + cards[i].getId()).animate({
			left: '-=10',
			top: '-=10'
		});
	}
}

KarteiHubUI.update = function () {
	var boxes = KarteiHub.getBoxes();
	for (i = 0; i < boxes; i++) {

    }
}

KarteiHubUI.createBox

KarteiHubUI.updateBox = function(box) {
	$('[boxid=' + box.getId() + '] [attr=name]').html(box.getName());
	$('[boxid=' + box.getId() + '] [attr=activeboxes]').html(box.getActiveBoxes());
}

KarteiHubUI.showAllCards = function() {
	var cards = KarteiHub.getActiveCards();
	for (i = 0; i < cards.size(); i++) {
		showCard(cards[i], i);
	}
}