"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { scrollScenes } from "../data/scroll-scenes";

type SceneStyle = CSSProperties & {
  "--scene-tint": string;
  "--scene-glow": string;
  "--scene-focal-point": string;
};

export function ScrollSceneStage() {
  const [activeScene, setActiveScene] = useState(scrollScenes[0].id);
  const [videoAllowed, setVideoAllowed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const readingLine = window.innerHeight * 0.45;
      let closest = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const distance = Math.abs(bounds.top - readingLine);
        if (bounds.top <= readingLine && bounds.bottom >= readingLine) {
          closest = section;
          closestDistance = 0;
        } else if (distance < closestDistance) {
          closest = section;
          closestDistance = distance;
        }
      });

      const nextScene = closest?.dataset.scene;
      if (nextScene) setActiveScene(nextScene);

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      document.documentElement.style.setProperty("--page-scroll", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    const syncMotionPreference = () => setVideoAllowed(!reducedMotion.matches);
    syncMotionPreference();
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", syncMotionPreference);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", syncMotionPreference);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--page-scroll");
    };
  }, []);

  return (
    <div className="scene-stage" aria-hidden="true" data-active-scene={activeScene}>
      {scrollScenes.map((scene) => {
        const style: SceneStyle = {
          "--scene-tint": scene.tint,
          "--scene-glow": scene.glow,
          "--scene-focal-point": scene.media?.focalPoint ?? "50% 50%",
        };

        return (
          <div
            className={`scene-layer ${activeScene === scene.id ? "is-active" : ""}`}
            data-scene-layer={scene.id}
            key={scene.id}
            style={style}
          >
            {scene.media?.poster ? (
              <Image
                src={scene.media.poster}
                alt=""
                fill
                priority={scene.id === "hero"}
                sizes="100vw"
              />
            ) : null}
            {videoAllowed && (scene.media?.videoWebm || scene.media?.videoMp4) ? (
              <video autoPlay loop muted playsInline poster={scene.media.poster}>
                {scene.media.videoWebm ? <source src={scene.media.videoWebm} type="video/webm" /> : null}
                {scene.media.videoMp4 ? <source src={scene.media.videoMp4} type="video/mp4" /> : null}
              </video>
            ) : null}
            <div className="scene-texture" />
            <div className="scene-vignette" />
          </div>
        );
      })}
    </div>
  );
}
