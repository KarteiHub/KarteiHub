KarteiHub = function() {
	this.cards;
	this.boxes;
}

KarteiHub.showAnswer = function(showAnswer) {
	if (showSolution) {
		KarteiHubUI.showAnswer(getActiveCard());
	} else {
		KarteiHubUI.showQuestion(getActiveCard());
	}
}

KarteiHub.answer = function(correct) {
	if (correct) {
		$.post("../action.php", { 	action: "right",
									id: KarteiHub.getActiveCard().getId() },
				function (html) {
					KarteiHubUI.showNextCard();
				});
	} else {
		$.post("../action.php", { 	action: "wrong",
									id: KarteiHub.getActiveCard().getId() },
				function (html) {
					KarteiHubUI.showNextCard();
				});
	}
}

KarteiHub.loadCards = function() {
	$.post("../action.php", { action: "getCards" },
			function (html) {
				// check for errors and diffrent response messages
				this.cards = new Array(html);
			});
}

KarteiHub.loadBoxes = function() {
	$.post("../action.php", { action: "getBoxes" },
			function (html) {
				// need to check for correct formatting later
				boxes = new Array(html);
				this.boxes = new Array();
				for (i = 0; i < boxes.size(); i++) {
					this.boxes[i] = new Box(boxes[i]);
				}
			});
}

KarteiHub.storeCard = function() {
	KarteiHubUI.storeCard(KarteiHub.getActiveCard().getId());
}

KarteiHub.getActiveCard = function() {
	return this.cards[0];
}

KarteiHub.orderStack = function() {
	for (i = 0; i < cards.size(); i++) {
		if (i == cards.size-1) {
			cards[i] = null;
			break;
		}
		cards[i] = cards[i+1];
	}
}