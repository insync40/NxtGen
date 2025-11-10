import { Rive } from "@rive-app/webgl2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  launchWrap();
  heroHomeWrap();
  heroStartupWrap();
  heroStudentWrap();
  heroTrainingWrap();
  ctaRiveWrap();
  founderStartUpWrap();
  journeyStartUpWrap();
  studentRiveWrap();
  studentProcessWrap();
});

// HERO RIVE
const heroHomeWrap = () => {
  const wrap = document.querySelector(".hero_main_wrap");
  if (!wrap) return;
  const visual = wrap.querySelector("[data-visual-hero='home']");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/690d6a99cf606d0c4cd5cb3a_insync-nxtgen-hero.riv";

  const artboard = "home";
  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  const r = new Rive({
    src: RIVEURL,
    canvas: visual,
    stateMachines: sm,
    artboard: artboard,
    autoplay: true,
    isTouchScrollEnabled: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      const inputs = r.stateMachineInputs(sm);
      const playTrigger = inputs.find((i) => i.name === "play");

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        // NEW: This property ensures the trigger only runs once.
        once: true,

        onEnter: () => {
          if (playTrigger) {
            playTrigger.fire();
          }
        },
      });
    },
    onLoadError: (err) => {
      console.error("Rive loading error:", err);
    },
  });
};

const heroStartupWrap = () => {
  const wrap = document.querySelector(".startup_main_wrap");
  if (!wrap) return;
  const visual = wrap.querySelector("[data-visual-hero='startup']");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/690d6a99cf606d0c4cd5cb3a_insync-nxtgen-hero.riv";

  const artboard = "startups";
  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  const r = new Rive({
    src: RIVEURL,
    canvas: visual,
    stateMachines: sm,
    artboard: artboard,
    autoplay: true,
    isTouchScrollEnabled: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      const inputs = r.stateMachineInputs(sm);
      const playTrigger = inputs.find((i) => i.name === "play");

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        // NEW: This property ensures the trigger only runs once.
        once: true,

        onEnter: () => {
          if (playTrigger) {
            playTrigger.fire();
          }
        },
      });
    },
    onLoadError: (err) => {
      console.error("Rive loading error:", err);
    },
  });
};

const heroStudentWrap = () => {
  const wrap = document.querySelector(".student_main_wrap");
  if (!wrap) return;
  const visual = wrap.querySelector("[data-visual-hero='students']");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/690d6a99cf606d0c4cd5cb3a_insync-nxtgen-hero.riv";

  const artboard = "students";
  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  const r = new Rive({
    src: RIVEURL,
    canvas: visual,
    stateMachines: sm,
    artboard: artboard,
    autoplay: true,
    isTouchScrollEnabled: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      const inputs = r.stateMachineInputs(sm);
      const playTrigger = inputs.find((i) => i.name === "play");

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        // NEW: This property ensures the trigger only runs once.
        once: true,

        onEnter: () => {
          if (playTrigger) {
            playTrigger.fire();
          }
        },
      });
    },
    onLoadError: (err) => {
      console.error("Rive loading error:", err);
    },
  });
};

const heroTrainingWrap = () => {
  const wrap = document.querySelector(".training_main_wrap");
  if (!wrap) return;
  const visual = wrap.querySelector("[data-visual-hero='training']");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/690d6a99cf606d0c4cd5cb3a_insync-nxtgen-hero.riv";

  const artboard = "nxtgen-training";
  const sm = "State Machine 2";

  let mm = gsap.matchMedia();

  const r = new Rive({
    src: RIVEURL,
    canvas: visual,
    stateMachines: sm,
    artboard: artboard,
    autoplay: true,
    isTouchScrollEnabled: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
      const inputs = r.stateMachineInputs(sm);
      const playTrigger = inputs.find((i) => i.name === "play");

      ScrollTrigger.create({
        trigger: wrap,
        start: "top top",
        // NEW: This property ensures the trigger only runs once.
        once: true,

        onEnter: () => {
          if (playTrigger) {
            playTrigger.fire();
          }
        },
      });
    },
    onLoadError: (err) => {
      console.error("Rive loading error:", err);
    },
  });
};

// Homepage
const launchWrap = () => {
  const wrap = document.querySelector(".launch_wrap");
  if (!wrap) return;
  const cards = wrap.querySelectorAll(".launch_card");
  const RIVEURL =
    "https://cdn.prod.website-files.com/68fb2e0a66d0bbf01ed68cbb/69088665524f55e959598b3b_insync-nxtgen-homepage.riv";

  const artboard = ["startup", "student", "programs"];
  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  cards.forEach((el, idx) => {
    const visual = el.querySelector(`[data-launch-visual='${idx + 1}']`);
    if (!visual) return;
    const r = new Rive({
      src: RIVEURL,
      canvas: visual,
      stateMachines: sm,
      artboard: artboard[idx],
      autoplay: true,
      isTouchScrollEnabled: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs(sm);
        const playTrigger = inputs.find((i) => i.name === "play");

        ScrollTrigger.create({
          trigger: wrap,
          start: "top 90%",
          // NEW: This property ensures the trigger only runs once.
          once: true,

          onEnter: () => {
            if (playTrigger) {
              playTrigger.fire();
            }
          },
        });
      },
      onLoadError: (err) => {
        console.error("Rive loading error:", err);
      },
    });
  });
};
// Homepage END

// CTA
const ctaRiveWrap = () => {
  const wrap = document.querySelector(".step_wrap");
  if (!wrap) return;
  const cards = wrap.querySelectorAll("[data-step-item]");
  const RIVEURL =
    "https://cdn.prod.website-files.com/68fb2e0a66d0bbf01ed68cbb/69088cd510f74af40e71e37b_insyc-nextgen-footer.riv";

  const artboard = ["startup", "student", "programs"];
  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  cards.forEach((el, idx) => {
    const visual = el.querySelector(`[data-cta-visual='${idx + 1}']`);
    if (!visual) return;
    const r = new Rive({
      src: RIVEURL,
      canvas: visual,
      stateMachines: sm,
      artboard: artboard[idx],
      autoplay: true,
      isTouchScrollEnabled: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs(sm);
        const playTrigger = inputs.find((i) => i.name === "play");

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          // NEW: This property ensures the trigger only runs once.
          once: true,

          onEnter: () => {
            if (playTrigger) {
              playTrigger.fire();
            }
          },
        });
      },
      onLoadError: (err) => {
        console.error("Rive loading error:", err);
      },
    });
  });
};
// CTA END

// Startup Page
const founderStartUpWrap = () => {
  const wrap = document.querySelector(".founder_wrap");
  if (!wrap) return;
  const cards = wrap.querySelectorAll(".founder_card");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/6911b4195c69d14b33902301_insync-nxtgen-startup.riv";

  const artboard = [
    "startup-strategy",
    "admin-operation",
    "tech_ai-integration",
    "sales_crm",
    "branding_marketing",
  ];

  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  cards.forEach((el, idx) => {
    const visual = el.querySelector(`[data-visual-hub='${idx + 1}']`);
    console.log("visual ", idx + 1);
    if (!visual) return;
    const r = new Rive({
      src: RIVEURL,
      canvas: visual,
      stateMachines: sm,
      artboard: artboard[idx],
      autoplay: true,
      isTouchScrollEnabled: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs(sm);
        const playTrigger = inputs.find((i) => i.name === "play");

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          // NEW: This property ensures the trigger only runs once.
          once: true,

          onEnter: () => {
            if (playTrigger) {
              playTrigger.fire();
            }
          },
        });
      },
      onLoadError: (err) => {
        console.error("Rive loading error:", err);
      },
    });
  });
};
const journeyStartUpWrap = () => {
  const wrap = document.querySelector(".journey_wrap");
  if (!wrap) return;
  const cards = wrap.querySelectorAll(".journey_card");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/6911b4195c69d14b33902301_insync-nxtgen-startup.riv";

  const artboard = [
    "call-discovery",
    "proposal-roadmap",
    "ai_student 2",
    "routin-checkins",
  ];

  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  cards.forEach((el, idx) => {
    const visual = el.querySelector(`[data-visual-journey='${idx + 1}']`);
    if (!visual) return;
    const r = new Rive({
      src: RIVEURL,
      canvas: visual,
      stateMachines: sm,
      artboard: artboard[idx],
      autoplay: true,
      isTouchScrollEnabled: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs(sm);
        const playTrigger = inputs.find((i) => i.name === "play");

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          // NEW: This property ensures the trigger only runs once.
          once: true,

          onEnter: () => {
            if (playTrigger) {
              playTrigger.fire();
            }
          },
        });
      },
      onLoadError: (err) => {
        console.error("Rive loading error:", err);
      },
    });
  });
};
// Startup End

// Student Page
const studentRiveWrap = () => {
  const wrap = document.querySelector(".student_wrap");
  if (!wrap) return;
  const cards = wrap.querySelectorAll(".student_card");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/6911b419ae3e32d0a96a125a_insync-nxtgen-students.riv";

  const artboard = [
    "mentors-training",
    "your-career-journey",
    "ai-powered-career",
  ];

  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  cards.forEach((el, idx) => {
    const visual = el.querySelector(`[data-visual-student='${idx + 1}']`);
    if (!visual) return;
    const r = new Rive({
      src: RIVEURL,
      canvas: visual,
      stateMachines: sm,
      artboard: artboard[idx],
      autoplay: true,
      isTouchScrollEnabled: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs(sm);
        const playTrigger = inputs.find((i) => i.name === "play");

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          // NEW: This property ensures the trigger only runs once.
          once: true,

          onEnter: () => {
            if (playTrigger) {
              playTrigger.fire();
            }
          },
        });
      },
      onLoadError: (err) => {
        console.error("Rive loading error:", err);
      },
    });
  });
};

const studentProcessWrap = () => {
  const wrap = document.querySelector(".process_2_wrap");
  if (!wrap) return;
  const cards = wrap.querySelectorAll(".process_2_card");
  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/690b1782545546334ac44c9a_ff12f63de1a24df7699b13a9a2d1713e_insync-nxtgen-students.riv";

  const artboard = "complete-the-journey";

  const sm = "State Machine 1";

  let mm = gsap.matchMedia();

  cards.forEach((el, idx) => {
    const visual = el.querySelector(`[data-process]`);

    if (!visual) return;
    const r = new Rive({
      src: RIVEURL,
      canvas: visual,
      stateMachines: sm,
      artboard: artboard,
      autoplay: true,
      isTouchScrollEnabled: true,
      onLoad: () => {
        r.resizeDrawingSurfaceToCanvas();
        const inputs = r.stateMachineInputs(sm);
        const playTrigger = inputs.find((i) => i.name === "play");

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          once: true,

          onEnter: () => {
            if (playTrigger) {
              console.log(playTrigger);
              playTrigger.fire();
            }
          },
        });
      },
      onLoadError: (err) => {
        console.error("Rive loading error:", err);
      },
    });
  });
};
// Student End

// INDEX.JS
// Timeline Animation
// Wait for the entire page to load before running animations
window.addEventListener("load", () => {
  // Use GSAP Context for proper cleanup
  let ctx = gsap.context(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. SELECTORS ---
    const section = document.querySelector(".process_2_wrap");
    const mainProgressLine = document.querySelector(".process_2_line_progress");
    const cards = gsap.utils.toArray("[data-step-item]");
    const dots = gsap.utils.toArray(".process_2_dots");
    const connectorLines = gsap.utils.toArray(".process_2_line_card_progress");

    // --- 2. MAIN SCROLLTRIGGER FOR VERTICAL LINE ---
    gsap.fromTo(
      mainProgressLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    // --- 3. INDIVIDUAL STEP ACTIVATION WITH REVERSE & DOT COLOR ANIMATION ---
    cards.forEach((card) => {
      const stepNumber = parseInt(card.dataset.stepItem);
      const index = stepNumber - 1;

      if (index < 0 || !dots[index] || !connectorLines[index]) return;

      const dot = dots[index];
      const connectorLine = connectorLines[index];
      // Select the small dot on the connector line robustly
      const connectorDot = connectorLine.parentElement.querySelector(
        ".process_2_line_card_dot"
      );

      // Define colors for clarity
      const inactiveColor = "rgb(234, 236, 240)";
      const activeColor = "#7af5ff";

      // Create a forward animation timeline for this step
      const forwardAnimation = () => {
        dot.classList.add("is-active");

        let tl = gsap.timeline();
        // Animate the line
        tl.to(connectorLine, {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        })
          // At 90% of the line animation's duration, start animating the dot's color
          .to(
            connectorDot,
            {
              backgroundColor: activeColor,
              duration: 0.2, // a short fade for the color
              ease: "none",
            },
            // 0.8 * 0.9
            "<"
          ); // The position parameter: duration * percentage
      };

      // Create a reverse animation timeline for this step
      const reverseAnimation = () => {
        dot.classList.remove("is-active");

        let tl = gsap.timeline();
        // Animate the line back to 0
        tl.to(connectorLine, {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.in",
        })
          // Instantly start changing the dot's color back to its inactive state
          .to(
            connectorDot,
            {
              backgroundColor: inactiveColor,
              duration: 0.3,
              ease: "none",
            },
            0
          ); // Position at the start of the reverse timeline
      };

      // Create the ScrollTrigger
      ScrollTrigger.create({
        trigger: card,
        start: "top 45%",
        onEnter: forwardAnimation,
        onLeaveBack: reverseAnimation, // This now triggers the reverse animation
      });
    });
  }); // end of GSAP Context

  // Cleanup function
  return () => ctx.revert();
});

document.addEventListener("DOMContentLoaded", function () {
  // Config: match the longest CSS transition for clip-path (in ms)
  const CLIP_TRANS_MS = 600; // <-- keep this in sync with your CSS transition duration
  const EXTRA_MS = 80; // small buffer to ensure transition completed
  let switchTimer = null;

  // Collect visuals on the right
  const visualItems = Array.from(
    document.querySelectorAll(".mission_visual .mission_visual_wrap")
  );

  // Set numeric z-index initially from data-step-item
  visualItems.forEach((v) => {
    const idx = parseInt(v.getAttribute("data-step-item"), 10);
    if (!Number.isNaN(idx)) v.style.zIndex = idx;
  });

  // Collect details
  const allDetails = Array.from(
    document.querySelectorAll(
      "details.mission_items[data-step-item], details[data-step-item]"
    )
  ).filter(
    (d) =>
      d.closest(".mission_content_list_wrap") ||
      d.classList.contains("mission_items")
  );
  if (!allDetails.length) return;

  // Determine initial active
  let currentActiveId =
    allDetails
      .find((d) => d.hasAttribute("open"))
      ?.getAttribute("data-step-item") ||
    allDetails[0].getAttribute("data-step-item");

  // Helper to get visual element by id
  const getVisual = (id) =>
    document.querySelector(
      `.mission_visual .mission_visual_wrap[data-step-item="${id}"]`
    );

  // Ensure initial visual is visible
  visualItems.forEach((v) => v.classList.remove("is-active"));
  const initialVisual = getVisual(currentActiveId);
  if (initialVisual) initialVisual.classList.add("is-active");

  // Ensure only initial details open
  allDetails.forEach((d) => {
    if (d.getAttribute("data-step-item") === currentActiveId)
      d.setAttribute("open", "");
    else d.removeAttribute("open");
  });

  // Utility: compute current max z-index amongst visuals (numbers)
  function computeMaxZ() {
    let max = -Infinity;
    visualItems.forEach((v) => {
      const z = parseInt(
        v.style.zIndex || window.getComputedStyle(v).zIndex,
        10
      );
      if (!Number.isNaN(z)) max = Math.max(max, z);
    });
    if (max === -Infinity) max = visualItems.length;
    return max;
  }

  function activateVisualNoBlank(targetId) {
    if (!targetId || targetId === currentActiveId) return;

    const oldId = currentActiveId;
    const oldVisual = getVisual(oldId);
    const newVisual = getVisual(targetId);
    if (!newVisual) return;

    // Clear pending timer if user navigates quickly
    if (switchTimer) {
      clearTimeout(switchTimer);
      switchTimer = null;
    }

    // 1) Determine a top z-index and apply it to the new visual
    const maxZ = computeMaxZ();
    // store previous z to restore later
    const prevZ = newVisual.style.zIndex;
    newVisual.dataset._prevZ = prevZ === undefined ? "" : prevZ;
    newVisual.style.zIndex = (maxZ + 2).toString(); // put it on top

    // 2) Add is-active to the new visual first so its reveal begins immediately
    // Use rAF to make sure layout is updated and transition will run
    requestAnimationFrame(() => {
      newVisual.classList.add("is-active");
    });

    // 3) After the transition duration, remove is-active from the old visual
    //    and restore z-index ordering (keep new visual at its original z if desired)
    switchTimer = setTimeout(() => {
      // Remove active from all other visuals except the new one
      visualItems.forEach((v) => {
        if (v !== newVisual) v.classList.remove("is-active");
      });

      // Restore z-index values in case you want the numeric stacking back.
      // If you want new visual to keep top stacking, skip restoring for it.
      visualItems.forEach((v) => {
        // If we stored a previous z-index on any visual, restore it.
        if (v.dataset && v.dataset._prevZ !== undefined) {
          v.style.zIndex = v.dataset._prevZ || "";
          delete v.dataset._prevZ;
        }
      });

      // Set current active id
      currentActiveId = targetId;
      switchTimer = null;
    }, CLIP_TRANS_MS + EXTRA_MS);
  }

  // Toggle handler for details (native 'toggle' event)
  allDetails.forEach((detail) => {
    detail.addEventListener("toggle", function () {
      if (this.open) {
        // close others
        allDetails.forEach((other) => {
          if (other !== this && other.open) other.removeAttribute("open");
        });

        const id = this.getAttribute("data-step-item");
        activateVisualNoBlank(id);
      } else {
        // if closed and no other open, keep last visual visible (do nothing)
      }
    });

    // Summary click handler to be defensive across browsers
    const summary = detail.querySelector("summary");
    if (summary) {
      summary.addEventListener("click", () => {
        setTimeout(() => {
          if (detail.open) {
            allDetails.forEach((other) => {
              if (other !== detail && other.open) other.removeAttribute("open");
            });
            const id = detail.getAttribute("data-step-item");
            activateVisualNoBlank(id);
          }
        }, 0);
      });
    }
  });

  // Optional: expose a function globally for programmatic activation if needed
  window.activateMissionVisual = activateVisualNoBlank;
});

// Timeline Animation
// Wait for the entire page to load before running animations
window.addEventListener("load", () => {
  // Use GSAP Context for proper cleanup
  let ctx = gsap.context(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. SELECTORS ---
    const section = document.querySelector(".process_2_wrap");
    const mainProgressLine = document.querySelector(".process_2_line_progress");
    const cards = gsap.utils.toArray("[data-step-item]");
    const dots = gsap.utils.toArray(".process_2_dots");
    const connectorLines = gsap.utils.toArray(".process_2_line_card_progress");

    // --- 2. MAIN SCROLLTRIGGER FOR VERTICAL LINE ---
    gsap.fromTo(
      mainProgressLine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      }
    );

    // --- 3. INDIVIDUAL STEP ACTIVATION WITH REVERSE & DOT COLOR ANIMATION ---
    cards.forEach((card) => {
      const stepNumber = parseInt(card.dataset.stepItem);
      const index = stepNumber - 1;

      if (index < 0 || !dots[index] || !connectorLines[index]) return;

      const dot = dots[index];
      const connectorLine = connectorLines[index];
      // Select the small dot on the connector line robustly
      const connectorDot = connectorLine.parentElement.querySelector(
        ".process_2_line_card_dot"
      );

      // Define colors for clarity
      const inactiveColor = "rgb(234, 236, 240)";
      const activeColor = "#7af5ff";

      // Create a forward animation timeline for this step
      const forwardAnimation = () => {
        dot.classList.add("is-active");

        let tl = gsap.timeline();
        // Animate the line
        tl.to(connectorLine, {
          scaleX: 1,
          duration: 0.8,
          ease: "power2.out",
        })
          // At 90% of the line animation's duration, start animating the dot's color
          .to(
            connectorDot,
            {
              backgroundColor: activeColor,
              duration: 0.2, // a short fade for the color
              ease: "none",
            },
            // 0.8 * 0.9
            "<"
          ); // The position parameter: duration * percentage
      };

      // Create a reverse animation timeline for this step
      const reverseAnimation = () => {
        dot.classList.remove("is-active");

        let tl = gsap.timeline();
        // Animate the line back to 0
        tl.to(connectorLine, {
          scaleX: 0,
          duration: 0.6,
          ease: "power2.in",
        })
          // Instantly start changing the dot's color back to its inactive state
          .to(
            connectorDot,
            {
              backgroundColor: inactiveColor,
              duration: 0.3,
              ease: "none",
            },
            0
          ); // Position at the start of the reverse timeline
      };

      // Create the ScrollTrigger
      ScrollTrigger.create({
        trigger: card,
        start: "top 45%",
        onEnter: forwardAnimation,
        onLeaveBack: reverseAnimation, // This now triggers the reverse animation
      });
    });
  }); // end of GSAP Context

  // Cleanup function
  return () => ctx.revert();
});

// Tel Input Validation
document.addEventListener("DOMContentLoaded", function () {
  // Select all input fields with type="tel"
  const telInputs = document.querySelectorAll('input[type="tel"]');

  telInputs.forEach((telInput) => {
    const errorMsgElement = telInput.nextElementSibling;

    if (
      !errorMsgElement ||
      errorMsgElement.getAttribute("data-input-form") !== "error-msg"
    ) {
      console.error(
        "Could not find the error message element for a telephone input.",
        telInput
      );
      return;
    }

    telInput.addEventListener("input", function (event) {
      const originalValue = this.value;
      // Remove any character that is not a digit, except for a leading '+'
      let sanitizedValue = originalValue.replace(/[^\d+]/g, "");

      // Ensure '+' only appears at the beginning
      if (sanitizedValue.lastIndexOf("+") > 0) {
        sanitizedValue = "+" + sanitizedValue.replace(/\+/g, "");
      }

      // If the first character is not a digit or a plus, remove it
      if (sanitizedValue.length > 0 && !/^[+\d]/.test(sanitizedValue)) {
        sanitizedValue = sanitizedValue.substring(1);
      }

      // Update the input's value only if it changed
      if (originalValue !== sanitizedValue) {
        this.value = sanitizedValue;
      }

      // Simple validation check for the error message
      // (Can be customized, e.g., to check for minimum length)
      if (originalValue.length > 0 && !/^\+?\d+$/.test(originalValue)) {
        showError("Only numbers and a leading + are allowed.", errorMsgElement);
      } else {
        hideError(errorMsgElement);
      }
    });

    // Helper functions to show/hide errors (if not already present)
    function showError(message, element) {
      element.textContent = message;
      element.style.display = "block";
    }

    function hideError(element) {
      element.style.display = "none";
    }
  });
});

// Email Validation
document.addEventListener("DOMContentLoaded", function () {
  // Select all input fields with type="email"
  const emailInputs = document.querySelectorAll('input[type="email"]');

  // Loop through each email input field found
  emailInputs.forEach((emailInput) => {
    // Find the sibling element for the error message
    const errorMsgElement = emailInput.nextElementSibling;

    if (
      !errorMsgElement ||
      errorMsgElement.getAttribute("data-input-form") !== "error-msg"
    ) {
      console.error(
        "Could not find the error message element for an email input.",
        emailInput
      );
      return; // Skip this field if no error message element is found
    }

    emailInput.addEventListener("blur", function () {
      const email = this.value.trim();
      const emailParts = email.split("@");

      if (emailParts.length === 2 && emailParts[1].length > 0) {
        const domain = emailParts[1];
        validateDomain(domain, errorMsgElement);
      } else if (email.length > 0) {
        showError("Please enter a valid email address.", errorMsgElement);
      } else {
        hideError(errorMsgElement); // Hide error if the field is empty
      }
    });
  });

  async function validateDomain(domain, errorElement) {
    try {
      // Show a loading/checking message for better UX
      showError("Verifying domain...", errorElement);

      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=MX`
      );
      const data = await response.json();

      // Check for a valid response and if an "Answer" section with records exists
      if (response.ok && data.Answer && data.Answer.length > 0) {
        hideError(errorElement); // Domain is valid
      } else {
        showError(
          "The email domain appears to be invalid or non-existent.",
          errorElement
        );
      }
    } catch (error) {
      console.error("Error during domain validation:", error);
      // Optional: Show an error if the API is unreachable
      showError(
        "Validation failed. Please check your connection.",
        errorElement
      );
    }
  }

  function showError(message, element) {
    element.textContent = message;
    element.style.display = "block";
  }

  function hideError(element) {
    element.style.display = "none";
  }
});

// Rotating Text
// document.addEventListener("DOMContentLoaded", function () {
//   // Pilih elemen yang akan dianimasikan
//   const rotatingTextInner = document.querySelector(".rotating-text-inner");
//   const texts = gsap.utils.toArray(".rotating-text-inner span");

//   // Durasi setiap teks ditampilkan (dalam detik)
//   const displayTime = 2;
//   // Durasi animasi transisi (dalam detik)
//   const animationTime = 0.5;

//   // Membuat timeline GSAP
//   let tl = gsap.timeline({
//     repeat: -1, // -1 berarti loop selamanya
//     defaults: {
//       duration: animationTime,
//       ease: "power2.inOut", // Efek easing untuk transisi yang lebih halus
//     },
//   });

//   // Loop melalui setiap teks (kecuali yang terakhir, karena itu hanya duplikat)
//   // Kita ingin bergerak sebanyak (jumlah teks asli) kali.
//   for (let i = 0; i < texts.length - 1; i++) {
//     tl.to(rotatingTextInner, {
//       // Gunakan yPercent agar pergerakan responsif terhadap tinggi elemen
//       yPercent: `-${(100 / texts.length) * (i + 1)}`,
//       // Tambahkan jeda agar setiap teks sempat terbaca
//       delay: displayTime,
//     });
//   }

//   // Setelah animasi terakhir selesai, kita perlu langsung reset posisi ke awal
//   // tanpa animasi. Kita tambahkan fungsi ini di akhir timeline.
//   tl.to(rotatingTextInner, {
//     duration: 0, // Tidak ada durasi untuk reset
//     yPercent: 0, // Kembali ke posisi awal
//     delay: displayTime, // Beri waktu untuk menampilkan teks terakhir sebelum reset
//   });
// });

const words = document.querySelectorAll("#hero-highlight > span");

const ACTIVE_TIME = 2; // seconds each word stays active before the next starts
const IN_DUR = 1; // entrance animation duration (s)
const OUT_DUR = 1; // exit animation duration (s)
// new slot: time between the start of consecutive transitions (active + exit)
const SLOT = ACTIVE_TIME + OUT_DUR;

let main = gsap.timeline({ repeat: -1 });

for (let i = 0; i < words.length; i++) {
  // schedule each word so the next word's entrance overlaps the current word's exit
  // entrance start = i * SLOT - OUT_DUR  (special-case i === 0)
  let delay = i === 0 ? 0 : i * SLOT - OUT_DUR;
  let wordTL = gsap.timeline();

  if (i !== 0) {
    // entrance animation starts at the timeline start (global delay places it)
    wordTL.from(words[i], {
      duration: IN_DUR,
      yPercent: -100,
      opacity: 0,
      color: "rgba(38, 44, 60, 0.20)",
      ease: "power2.out",
    });
  } else {
    // first word: make it visible immediately (no entrance)
    gsap.set(words[0], { opacity: 1, yPercent: 0 });
  }

  // after the entrance (if any) hold the word for ACTIVE_TIME, then animate out
  // using `+=${ACTIVE_TIME}` ensures exit starts ACTIVE_TIME after entrance end (or after t=0 for first word)
  wordTL.to(
    words[i],
    {
      duration: OUT_DUR,
      yPercent: 100,
      color: "rgba(38, 44, 60, 0.20)",
      opacity: 0,
      ease: "power2.out",
    },
    `+=${ACTIVE_TIME}`
  );

  main.add(wordTL, delay);
}

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
