// Fade-in effect on scroll
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll("section, .project");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(el => {
    el.classList.add("fade-in");
    appearOnScroll.observe(el);
  });
});
