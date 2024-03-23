// ----------- sidebar for small screen --------
function toggleMenu() {
  var body = document.body;
  var sidebar = document.getElementById("sidebar");

  body.classList.toggle("mobile-menu-visible");
  sidebar.classList.toggle("mobile-menu-visible");
  sidebar.classList.toggle("show-sidebar");
}

// dropdown menu
function toggleDropdown() {
  var dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("active");
}

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
  const accItems = document.querySelectorAll(".accordion.block");
  const accBtns = document.querySelectorAll(".acc-btn");

  // Initially open the first accordion item
  accItems[0].classList.add("active");
  accItems[0].querySelector(".acc-content").classList.add("active");
  accItems[0].querySelector(".icon-plus").style.display = "none";
  accItems[0].querySelector(".icon-minus").style.display = "inline-block";

  accItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (!this.classList.contains("active")) {
        // Close all accordion items
        accItems.forEach((item) => {
          item.classList.remove("active");
          item.querySelector(".acc-content").classList.remove("active");
          item.querySelector(".icon-plus").style.display = "inline-block";
          item.querySelector(".icon-minus").style.display = "none";
        });
        // Open the clicked accordion item
        this.classList.add("active");
        this.querySelector(".acc-content").classList.add("active");
        this.querySelector(".icon-plus").style.display = "none";
        this.querySelector(".icon-minus").style.display = "inline-block";
      } else {
        // Close the clicked accordion item
        this.classList.remove("active");
        this.querySelector(".acc-content").classList.remove("active");
        this.querySelector(".icon-plus").style.display = "inline-block";
        this.querySelector(".icon-minus").style.display = "none";
      }
    });
  });
});
