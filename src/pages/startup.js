import { Rive } from "@rive-app/webgl2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  founderStartUpWrap();
  journeyStartUpWrap();
  heroStartupWrap();
  ctaRiveWrap();
});

const heroStartupWrap = () => {
  const wrap = document.querySelector(".startup_main_wrap");
  if (!wrap) return;

  const visual = wrap.querySelector("[data-visual-hero='startup']");
  if (!visual) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/690d6a99cf606d0c4cd5cb3a_insync-nxtgen-hero.riv";

  const artboard = "startups";
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

const founderStartUpWrap = () => {
  const wrap = document.querySelector(".founder_wrap");
  if (!wrap) return;

  const cards = wrap.querySelectorAll(".founder_card");
  if (!cards.length) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/6911b4195c69d14b33902301_e31c854ffaa8b884019149be16f68cd8_insync-nxtgen-startup.riv";

  const artboards = [
    "startup-strategy",
    "admin-operation",
    "tech_ai-integration",
    "sales_crm",
    "branding_marketing",
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
      const visual = card.querySelector(`[data-visual-hub='${idx + 1}']`);
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

const journeyStartUpWrap = () => {
  const wrap = document.querySelector(".journey_wrap");
  if (!wrap) return;

  const cards = wrap.querySelectorAll(".journey_card");
  if (!cards.length) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/6911b4195c69d14b33902301_e31c854ffaa8b884019149be16f68cd8_insync-nxtgen-startup.riv";

  const artboards = [
    "call-discovery",
    "proposal-roadmap",
    "ai_student",
    "routin-checkins",
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
      const visual = card.querySelector(`[data-visual-journey='${idx + 1}']`);
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

