document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const foodCards = document.querySelectorAll(".card");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const category = this.textContent.toLowerCase();

      foodCards.forEach((card) => {
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
