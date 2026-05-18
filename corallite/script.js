function goPaypal() {
  window.open("https://www.paypal.com/paypalme/YourLink", "_blank");
}
const elements = document.querySelectorAll('.fadeUp');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));
