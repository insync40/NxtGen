import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

function animateScalingIcons() {
  const items = document.querySelectorAll("[data-scroll-animation='icon']");

  items.forEach((item) => {
    const animationType = item.dataset.scrollAnimation;
    const rotationValue = animationType === "icon right" ? 10 : -10;

    gsap.set(item, {
      scale: 0,
      rotate: 0,
    });

    const tl = gsap.timeline({
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });

    tl.to(item, {
      scale: 1,
      duration: 1,
    }).to(
      item,
      {
        rotate: rotationValue,
        duration: 0.5,
      },
      "<0.5"
    );
  });
}

function revealConnectImage() {
  const wrapper = document.querySelector("[data-connect='wrap']");

  if (!wrapper) return;

  const items = wrapper.querySelectorAll("[data-connect='card']");

  gsap.set(items, {
    scale: 0,
    autoAlpha: 0,
  });

  gsap.to(items, {
    scale: 1,
    autoAlpha: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: wrapper,
      start: "top 50%",
      toggleActions: "play none none none",
    },
  });
}

document.addEventListener("DOMContentLoaded", () => {
  animateScalingIcons();
  revealConnectImage();
});

let lenis;
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = "1";

  // Initialize Lenis
  lenis = new Lenis({
    autoRaf: true,
  });

  lenis.scrollTo(0, 0);
});

function countUp() {
  const countUpObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = parseInt(el.textContent, 10);
        const duration = 1500;
        let start = null;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);

          el.textContent = Math.floor(progress * (2 - progress) * target) + "+";

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            el.textContent = target + "+";
          }
        };

        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-number="count"]').forEach((item) => {
    countUpObserver.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  countUp();
});
