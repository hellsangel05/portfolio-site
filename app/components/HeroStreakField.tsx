import type { CSSProperties } from "react";

type StreakStyle = CSSProperties & {
  "--streak-x": string;
  "--streak-y": string;
  "--streak-length": string;
  "--streak-angle": string;
  "--streak-duration": string;
  "--streak-delay": string;
  "--streak-opacity": string;
};

type ParticleStyle = CSSProperties & {
  "--particle-x": string;
  "--particle-y": string;
  "--particle-size": string;
  "--particle-duration": string;
  "--particle-delay": string;
};

const streaks: StreakStyle[] = [
  { "--streak-x": "47%", "--streak-y": "10%", "--streak-length": "38vw", "--streak-angle": "-12deg", "--streak-duration": "10s", "--streak-delay": "-3s", "--streak-opacity": ".58" },
  { "--streak-x": "62%", "--streak-y": "22%", "--streak-length": "26vw", "--streak-angle": "-18deg", "--streak-duration": "8s", "--streak-delay": "-6s", "--streak-opacity": ".38" },
  { "--streak-x": "37%", "--streak-y": "36%", "--streak-length": "46vw", "--streak-angle": "-8deg", "--streak-duration": "12s", "--streak-delay": "-5s", "--streak-opacity": ".32" },
  { "--streak-x": "70%", "--streak-y": "45%", "--streak-length": "30vw", "--streak-angle": "-24deg", "--streak-duration": "9s", "--streak-delay": "-1s", "--streak-opacity": ".64" },
  { "--streak-x": "52%", "--streak-y": "58%", "--streak-length": "42vw", "--streak-angle": "-15deg", "--streak-duration": "11s", "--streak-delay": "-8s", "--streak-opacity": ".46" },
  { "--streak-x": "78%", "--streak-y": "69%", "--streak-length": "22vw", "--streak-angle": "-28deg", "--streak-duration": "7s", "--streak-delay": "-4s", "--streak-opacity": ".52" },
  { "--streak-x": "34%", "--streak-y": "76%", "--streak-length": "48vw", "--streak-angle": "-10deg", "--streak-duration": "13s", "--streak-delay": "-10s", "--streak-opacity": ".26" },
  { "--streak-x": "60%", "--streak-y": "88%", "--streak-length": "34vw", "--streak-angle": "-19deg", "--streak-duration": "9s", "--streak-delay": "-7s", "--streak-opacity": ".42" },
];

const particles: ParticleStyle[] = [
  { "--particle-x": "57%", "--particle-y": "16%", "--particle-size": "3px", "--particle-duration": "7s", "--particle-delay": "-1s" },
  { "--particle-x": "81%", "--particle-y": "12%", "--particle-size": "5px", "--particle-duration": "9s", "--particle-delay": "-5s" },
  { "--particle-x": "68%", "--particle-y": "31%", "--particle-size": "2px", "--particle-duration": "6s", "--particle-delay": "-3s" },
  { "--particle-x": "91%", "--particle-y": "38%", "--particle-size": "4px", "--particle-duration": "8s", "--particle-delay": "-7s" },
  { "--particle-x": "47%", "--particle-y": "51%", "--particle-size": "3px", "--particle-duration": "10s", "--particle-delay": "-4s" },
  { "--particle-x": "76%", "--particle-y": "57%", "--particle-size": "6px", "--particle-duration": "11s", "--particle-delay": "-9s" },
  { "--particle-x": "61%", "--particle-y": "72%", "--particle-size": "2px", "--particle-duration": "7s", "--particle-delay": "-6s" },
  { "--particle-x": "88%", "--particle-y": "79%", "--particle-size": "3px", "--particle-duration": "9s", "--particle-delay": "-2s" },
  { "--particle-x": "41%", "--particle-y": "86%", "--particle-size": "4px", "--particle-duration": "12s", "--particle-delay": "-8s" },
];

export function HeroStreakField() {
  return (
    <div className="hero-streak-field" aria-hidden="true">
      <div className="hero-streak-glow" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="hero-streak-layer">
        {streaks.map((style) => (
          <span className="hero-streak" style={style} key={`${style["--streak-x"]}-${style["--streak-y"]}`} />
        ))}
      </div>
      <div className="hero-particle-layer">
        {particles.map((style) => (
          <span className="hero-particle" style={style} key={`${style["--particle-x"]}-${style["--particle-y"]}`} />
        ))}
      </div>
    </div>
  );
}
