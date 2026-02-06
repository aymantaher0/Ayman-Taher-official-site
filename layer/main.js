// Number 

const counters = document.querySelectorAll(".counter");
const statsSection = document.getElementById("stats");

function easeOutQuad(t) {
  return 1 - (1 - t) * (1 - t);
  }

  function animateValue(element, target, duration = 2000) {
    element.innerText = "0%"; 
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;

      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = easeOutQuad(progress);

      element.innerText = Math.floor(eased * target) + "%";

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      counters.forEach(counter => {
        animateValue(counter, +counter.dataset.target);
      });
    }
  }, { threshold: 0.4 });

  observer.observe(statsSection);

