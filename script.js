document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
        alert("এই প্রোডাক্টটি খুব শীঘ্রই যোগ করা হবে।");
    });
});

});