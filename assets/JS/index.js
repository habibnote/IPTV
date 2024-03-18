// ----------- scroll to top -----------
const scrollButton = document.querySelector(".scroll_top");
const toggleScrollButton = () =>
  scrollButton.classList.toggle("hidden", window.scrollY <= 100);
window.addEventListener("scroll", toggleScrollButton);
scrollButton.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

// ---------- pricing monthly and yearly section -----------
function togglePricing(option) {
  if (option === 1) {
    document.getElementById("pricing1").classList.remove("hidden");
    document.getElementById("pricing2").classList.add("hidden");
  } else {
    document.getElementById("pricing1").classList.add("hidden");
    document.getElementById("pricing2").classList.remove("hidden");
  }
}

// ----------- faq accordian section -------------
document.addEventListener("DOMContentLoaded", function () {
  const accBtns = document.querySelectorAll(".acc-btn");

  accBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("active");
      const plusIcon = this.querySelector(".icon-plus");
      const minusIcon = this.querySelector(".icon-minus");
      if (this.classList.contains("active")) {
        plusIcon.style.display = "none";
        minusIcon.style.display = "inline-block";
      } else {
        plusIcon.style.display = "inline-block";
        minusIcon.style.display = "none";
      }
    });
  });
});
