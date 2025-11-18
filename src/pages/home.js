import { Rive } from "@rive-app/webgl2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  launchWrap();
  heroHomeWrap();
  ctaRiveWrap();
});

const heroHomeWrap = () => {
  const wrap = document.querySelector(".hero_main_wrap");
  if (!wrap) return;

  const visual = wrap.querySelector("[data-visual-hero='home']");
  if (!visual) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/691c032a363ba4eb3b98caf5_insync-nxtgen-homepage_18nov.riv";

  const artboard = "home";
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

function launchWrap() {
  const wrap = document.querySelector(".launch_wrap");
  if (!wrap) return;

  const cards = wrap.querySelectorAll(".launch_card");
  if (!cards.length) return;

  const RIVEURL =
    "https://cdn.prod.website-files.com/690b1782545546334ac44bb0/691c032a363ba4eb3b98caf5_insync-nxtgen-homepage_18nov.riv";

  const artboards = ["startup", "student", "programs"];
  const STATE_MACHINE = "State Machine 1";

  // Scope semua GSAP/ScrollTrigger ke dalam section ini
  gsap.context(() => {
    const riveInstances = [];

    function playInstance(inst) {
      if (!inst) return;

      // Coba tembak trigger "play" di State Machine (kalau ada)
      try {
        const inputs = inst.stateMachineInputs(STATE_MACHINE) || [];
        const playTrigger = inputs.find((i) => i.name === "play");
        if (playTrigger && typeof playTrigger.fire === "function") {
          playTrigger.fire();
        }
      } catch (e) {
        // aman kalau state machine atau input tidak tersedia
      }

      // Play timeline animasinya (kalau API-nya ada)
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
      const visual = card.querySelector(`[data-launch-visual='${idx + 1}']`);
      const artboard = artboards[idx];

      if (!visual || !artboard) return;

      let instance;

      try {
        instance = new Rive({
          src: RIVEURL,
          canvas: visual,
          stateMachines: STATE_MACHINE,
          artboard,
          autoplay: false, // kita kontrol manual pakai ScrollTrigger
          isTouchScrollEnabled: true,
          onLoad: () => {
            // Resize canvas ke ukuran HTML canvas
            try {
              instance.resizeDrawingSurfaceToCanvas();
            } catch (e) {}

            // Optional: kalau mau langsung jalan ketika
            // pertama kali load & sudah dalam viewport, tinggal aktifkan ini:
            // if (ScrollTrigger.isInViewport(card)) {
            //   playInstance(instance);
            // }
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

      // ScrollTrigger untuk kontrol play/pause berdasarkan posisi card
      ScrollTrigger.create({
        trigger: card,
        start: "top 90%", // mirip original
        end: "bottom top", // berhenti ketika sudah melewati atas layar
        onEnter: () => playInstance(instance),
        onEnterBack: () => playInstance(instance),
        onLeave: () => pauseInstance(instance),
        onLeaveBack: () => pauseInstance(instance),
      });
    });

    // Optional: kalau nanti kamu mau panggil context.revert(),
    // manual cleanup instance Rive-nya juga aman:
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
}

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

// ==============================
// INDEX.js
// ==============================

// Hero highlight text animation
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
