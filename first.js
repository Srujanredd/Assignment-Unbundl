let navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        let targetSection = document.querySelector(this.getAttribute('href'));

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

let viewMenuBtn = document.querySelector(".custom-button");
let orderNowBtn = document.querySelector(".custom-outline-button");

viewMenuBtn.addEventListener("click", () => {
    document.querySelector("#exploreMenuSection").scrollIntoView({
        behavior: "smooth"
    });
});

orderNowBtn.addEventListener("click", () => {
    document.querySelector("#deliveryPaymentSection").scrollIntoView({
        behavior: "smooth"
    });
});
