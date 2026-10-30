const cards = document.querySelectorAll(".flex-card-container");

cards.forEach(function(card) {

    card.addEventListener("click", function() {

        cards.forEach(function(otherCard) {
            otherCard.classList.remove("active");
        });

        card.classList.add("active");

    });

});
