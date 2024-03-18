document.addEventListener("DOMContentLoaded", function () {
  const accBtns = document.querySelectorAll(".acc-btn");

  accBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Toggle active class on the clicked button
      this.classList.toggle("active");
      // Toggle active class on the clicked button's content
      this.nextElementSibling.classList.toggle("active");
      // Toggle visibility of plus and minus icons
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
