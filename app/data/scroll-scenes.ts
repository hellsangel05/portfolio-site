export type ScrollScene = {
  id: string;
  tint: string;
  glow: string;
  effect?: "streaks";
  media?: {
    poster?: string;
    videoMp4?: string;
    videoWebm?: string;
    focalPoint?: string;
  };
};

// Future Higgsfield exports plug in here. Add optimized WebM/MP4 files under
// public/motion, set an optional poster, and the stage will crossfade them as
// each matching data-scene section enters the reading position.
export const scrollScenes: ScrollScene[] = [
  { id: "hero", tint: "#130f12", glow: "#ff6846", effect: "streaks" },
  { id: "work", tint: "#121316", glow: "#b7462f" },
  { id: "story", tint: "#18130f", glow: "#ff6846" },
  { id: "ventures", tint: "#101115", glow: "#d94f34" },
  { id: "contact", tint: "#1b100d", glow: "#ff6846" },
];
