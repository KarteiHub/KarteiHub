
KarteiHubUI = function() {
	
}

KarteiHubUI.showAwnser = function (var card) {
	if (card.isShowingAwnser()) {
		$('[cardid=' + card.getId() + '] [attr="content"]').html(card.getAwnser());
	}
}

KarteiHubUI.showQuestion = function (var card) {
	if (!card.isShowingAwnser()) {
		$('[cardid=' + card.getId() + '] [attr="content"]').html(card.getQuestion());
	}
}

KarteiHubUI.showCard = function (var card, var position) {
	$("#cardstack").append(
	'<div class="card" cardid=card.getId()>
		<span cardid=card.getId() attr="content">card.getQuestion()</span>
	</div>'
	);
}

KarteiHubUI.showNextCard() {
	$.('[cardid='KarteiHub.getActiveCard().getId()']').hide();
	KarteiHub.orderStack();
	KarteiHubUI.moveStack();
	KarteiHubUI.update();
}

KarteiHubUI.moveStack() {
	var cards = KarteiHub.getActiveCards();
	for (int i = 0; i < cards.size(); i++) {
		$('[cardid=' + cards[i].getId()).animate({
			left: '-=10',
			top: '-=10'
		});
	}
}

KarteiHubUI.update = function () {
	var boxes = KarteiHub.getBoxes();
	for (int i = 0; i < boxes
}

KarteiHubUI.createBox

KarteiHubUI.updateBox = function(var box) {
	$('[boxid='box.getId()'] [attr=name]').html(box.getName());
	$('[boxid='box.getId()'] [attr=activeboxes]').html(box.getActiveBoxes());
}

KarteiHubUI.showAllCards = function() {
	var cards = KarteiHub.getActiveCards();
	for (int i = 0; i < cards.size(); i++) {
		showCard(cards[i], i);
	}
}