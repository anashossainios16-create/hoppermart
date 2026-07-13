let cart = 0;

const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cart++;
    cartCount.textContent = cart;

    button.innerText = "Added ✓";

    setTimeout(() => {
      button.innerText = "Add to Cart";
    }, 1000);
  });
});

const search = document.querySelector(".search");

search.addEventListener("keyup", () => {
  const value = search.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();

    if (title.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});