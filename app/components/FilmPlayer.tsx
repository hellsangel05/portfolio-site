import type { Film } from "../data/portfolio";

/** Native player for hosted MP4s, privacy-enhanced YouTube embed otherwise. */
export function FilmPlayer({ film, label }: { film: Film; label: string }) {
  if (film.youtube) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${film.youtube}`}
        title={label}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <video controls playsInline preload="metadata" poster={film.poster} aria-label={label}>
      <source src={film.src} type="video/mp4" />
    </video>
  );
}
