import { Rive } from "@rive-app/webgl2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  heroStudentWrap();
  studentRiveWrap();
  studentProcessWrap();
  ctaRiveWrap();
});

const heroStudentWrap = () => {
  const wrap = document.querySelector(".student_main_wrap");
  if (!wrap) return;

  const visual = wrap.querySelector("[data-visual-hero='students']");
  if (!visual) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/691d22bae284c14edec56949_insync-nxtgen-students_final.riv";

  const artboard = "hero";
  const STATE_MACHINE = "State Machine 1";

  gsap.context(() => {
    let instance;

    function playInstance(inst) {
      if (!inst) return;
      try {
        const inputs = inst.stateMachineInputs(STATE_MACHINE) || [];
        const playTrigger = inputs.find((i) => i.name === "play");
        if (playTrigger && typeof playTrigger.fire === "function") {
          playTrigger.fire();
        }
      } catch (e) {}
      try {
        if (typeof inst.play === "function") inst.play();
      } catch (e) {}
    }

    function pauseInstance(inst) {
      if (!inst) return;
      try {
        if (typeof inst.pause === "function") inst.pause();
        else if (typeof inst.stop === "function") inst.stop();
      } catch (e) {}
    }

    try {
      instance = new Rive({
        src: RIVEURL,
        canvas: visual,
        stateMachines: STATE_MACHINE,
        artboard: artboard,
        autoplay: false,
        isTouchScrollEnabled: true,
        onLoad: () => {
          try {
            instance.resizeDrawingSurfaceToCanvas();
          } catch (e) {}
        },
        onLoadError: (err) => {
          console.error("Rive loading error:", err);
        },
      });
    } catch (err) {
      console.error("Failed to create Rive instance:", err);
      return;
    }

    ScrollTrigger.create({
      trigger: wrap,
      start: "top 90%",
      end: "bottom top",
      onEnter: () => playInstance(instance),
      onEnterBack: () => playInstance(instance),
      onLeave: () => pauseInstance(instance),
      onLeaveBack: () => pauseInstance(instance),
    });

    return () => {
      if (!instance) return;
      try {
        if (typeof instance.destroy === "function") instance.destroy();
        else if (typeof instance.cleanup === "function") instance.cleanup();
        else if (typeof instance.stop === "function") instance.stop();
      } catch (e) {}
      instance = null;
    };
  }, wrap);
};

const studentRiveWrap = () => {
  const wrap = document.querySelector(".student_wrap");
  if (!wrap) return;

  const cards = wrap.querySelectorAll(".student_card");
  if (!cards.length) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/691c032a5b68b3c1d8d2aa8d_insync-nxtgen-students_18nov.riv";

  const artboards = [
    "mentors-training",
    "your-career-journey",
    "ai-powered-career",
  ];

  const STATE_MACHINE = "State Machine 1";

  gsap.context(() => {
    const riveInstances = [];

    function playInstance(inst) {
      if (!inst) return;
      try {
        const inputs = inst.stateMachineInputs(STATE_MACHINE) || [];
        const playTrigger = inputs.find((i) => i.name === "play");
        if (playTrigger && typeof playTrigger.fire === "function") {
          playTrigger.fire();
        }
      } catch (e) {}
      try {
        if (typeof inst.play === "function") inst.play();
      } catch (e) {}
    }

    function pauseInstance(inst) {
      if (!inst) return;
      try {
        if (typeof inst.pause === "function") inst.pause();
        else if (typeof inst.stop === "function") inst.stop();
      } catch (e) {}
    }

    cards.forEach((card, idx) => {
      const visual = card.querySelector(`[data-visual-student='${idx + 1}']`);
      const artboard = artboards[idx];
      if (!visual || !artboard) return;

      let instance;

      try {
        instance = new Rive({
          src: RIVEURL,
          canvas: visual,
          stateMachines: STATE_MACHINE,
          artboard,
          autoplay: false,
          isTouchScrollEnabled: true,
          onLoad: () => {
            try {
              instance.resizeDrawingSurfaceToCanvas();
            } catch (e) {}
          },
          onLoadError: (err) => {
            console.error("Rive loading error:", err);
          },
        });
      } catch (err) {
        console.error("Failed to create Rive instance:", err);
        return;
      }

      riveInstances.push(instance);

      ScrollTrigger.create({
        trigger: wrap,
        start: "top 90%",
        end: "bottom top",
        onEnter: () => playInstance(instance),
        onEnterBack: () => playInstance(instance),
        onLeave: () => pauseInstance(instance),
        onLeaveBack: () => pauseInstance(instance),
      });
    });

    return () => {
      riveInstances.forEach((inst, i) => {
        if (!inst) return;
        try {
          if (typeof inst.destroy === "function") inst.destroy();
          else if (typeof inst.cleanup === "function") inst.cleanup();
          else if (typeof inst.stop === "function") inst.stop();
        } catch (e) {}
        riveInstances[i] = null;
      });
    };
  }, wrap);
};

const studentProcessWrap = () => {
  const wrap = document.querySelector(".process_2_wrap");
  if (!wrap) return;

  const cards = wrap.querySelectorAll(".process_2_card");
  if (!cards.length) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/691c032a5b68b3c1d8d2aa8d_insync-nxtgen-students_18nov.riv";

  const artboard = "complete-the-journey";
  const STATE_MACHINE = "State Machine 1";

  gsap.context(() => {
    const riveInstances = [];

    function playInstance(inst) {
      if (!inst) return;
      try {
        const inputs = inst.stateMachineInputs(STATE_MACHINE) || [];
        const playTrigger = inputs.find((i) => i.name === "play");
        if (playTrigger && typeof playTrigger.fire === "function") {
          playTrigger.fire();
        }
      } catch (e) {}
      try {
        if (typeof inst.play === "function") inst.play();
      } catch (e) {}
    }

    function pauseInstance(inst) {
      if (!inst) return;
      try {
        if (typeof inst.pause === "function") inst.pause();
        else if (typeof inst.stop === "function") inst.stop();
      } catch (e) {}
    }

    cards.forEach((card) => {
      const visual = card.querySelector(`[data-process]`);
      if (!visual) return;

      let instance;

      try {
        instance = new Rive({
          src: RIVEURL,
          canvas: visual,
          stateMachines: STATE_MACHINE,
          artboard: artboard,
          autoplay: false,
          isTouchScrollEnabled: true,
          onLoad: () => {
            try {
              instance.resizeDrawingSurfaceToCanvas();
            } catch (e) {}
          },
          onLoadError: (err) => {
            console.error("Rive loading error:", err);
          },
        });
      } catch (err) {
        console.error("Failed to create Rive instance:", err);
        return;
      }

      riveInstances.push(instance);

      ScrollTrigger.create({
        trigger: wrap,
        start: "top 90%",
        end: "bottom top",
        onEnter: () => playInstance(instance),
        onEnterBack: () => playInstance(instance),
        onLeave: () => pauseInstance(instance),
        onLeaveBack: () => pauseInstance(instance),
      });
    });

    return () => {
      riveInstances.forEach((inst, i) => {
        if (!inst) return;
        try {
          if (typeof inst.destroy === "function") inst.destroy();
          else if (typeof inst.cleanup === "function") inst.cleanup();
          else if (typeof inst.stop === "function") inst.stop();
        } catch (e) {}
        riveInstances[i] = null;
      });
    };
  }, wrap);
};

// CTA
const ctaRiveWrap = () => {
  const wrap = document.querySelector(".step_wrap");
  if (!wrap) return;

  const cards = wrap.querySelectorAll("[data-step-item]");
  if (!cards.length) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/68fb2e0a66d0bbf01ed68cbb/69088cd510f74af40e71e37b_insyc-nextgen-footer.riv";

  const artboards = ["startup", "student", "programs"];
  const STATE_MACHINE = "State Machine 1";

  gsap.context(() => {
    const riveInstances = [];

    function playInstance(inst) {
      if (!inst) return;
      try {
        const inputs = inst.stateMachineInputs(STATE_MACHINE) || [];
        const playTrigger = inputs.find((i) => i.name === "play");
        if (playTrigger && typeof playTrigger.fire === "function") {
          playTrigger.fire();
        }
      } catch (e) {}
      try {
        if (typeof inst.play === "function") inst.play();
      } catch (e) {}
    }

    function pauseInstance(inst) {
      if (!inst) return;
      try {
        if (typeof inst.pause === "function") inst.pause();
        else if (typeof inst.stop === "function") inst.stop();
      } catch (e) {}
    }

    cards.forEach((card, idx) => {
      const visual = card.querySelector(`[data-cta-visual='${idx + 1}']`);
      const artboard = artboards[idx];
      if (!visual || !artboard) return;

      let instance;

      try {
        instance = new Rive({
          src: RIVEURL,
          canvas: visual,
          stateMachines: STATE_MACHINE,
          artboard,
          autoplay: false,
          isTouchScrollEnabled: true,
          onLoad: () => {
            try {
              instance.resizeDrawingSurfaceToCanvas();
            } catch (e) {}
          },
          onLoadError: (err) => {
            console.error("Rive loading error:", err);
          },
        });
      } catch (err) {
        console.error("Failed to create Rive instance:", err);
        return;
      }

      riveInstances.push(instance);

      ScrollTrigger.create({
        trigger: wrap,
        start: "top 90%",
        end: "bottom top",
        onEnter: () => playInstance(instance),
        onEnterBack: () => playInstance(instance),
        onLeave: () => pauseInstance(instance),
        onLeaveBack: () => pauseInstance(instance),
      });
    });

    return () => {
      riveInstances.forEach((inst, i) => {
        if (!inst) return;
        try {
          if (typeof inst.destroy === "function") inst.destroy();
          else if (typeof inst.cleanup === "function") inst.cleanup();
          else if (typeof inst.stop === "function") inst.stop();
        } catch (e) {}
        riveInstances[i] = null;
      });
    };
  }, wrap);
};
// CTA END

// ===============================
// INDEX.js
// ===============================

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
