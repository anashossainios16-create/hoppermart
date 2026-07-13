let count = 0;

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    count++;
    document.getElementById("cart-count").textContent = count;
  });
});