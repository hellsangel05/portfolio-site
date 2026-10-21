#!/usr/bin/env python3
"""Record a real Aurora Pool & Spa website walkthrough for the portfolio.

No contact forms are submitted and no customer data is collected.
Requires Playwright Chromium; FFmpeg is optional (for MP4 conversion).
"""
from __future__ import annotations

import os
import shutil
import subprocess
from pathlib import Path
from urllib.parse import urlsplit

from playwright.sync_api import sync_playwright

BASE_URL = os.environ.get(
    "AURORA_RECORDING_URL",
    "https://aurora-pool-spa.adgostudios.workers.dev",
).rstrip("/")
OUTPUT_DIR = Path(os.environ.get("AURORA_RECORDING_OUTPUT", "recordings/aurora"))
WIDTH, HEIGHT = 1440, 810


def pause(page, seconds=2.0):
    page.wait_for_timeout(int(seconds * 1000))


def reveal(page, selector, seconds=2.5):
    target = page.locator(selector).first
    if target.count() == 0:
        raise RuntimeError(f"Expected Aurora section is missing: {selector}")
    # Real scrolling (rather than fabricated screenshots).
    target.evaluate(
        "(el) => el.scrollIntoView({behavior:'smooth', block:'center'})"
    )
    pause(page, seconds)


def navigate(page, path):
    url = BASE_URL + path
    response = page.goto(url, wait_until="domcontentloaded", timeout=30000)
    if not response or response.status >= 400:
        raise RuntimeError(f"Cannot record {url}: HTTP {response.status if response else 'no response'}")
    pause(page, 1.8)


def main():
    host = urlsplit(BASE_URL)
    if host.scheme not in {"https", "http"} or not host.hostname:
        raise ValueError("AURORA_RECORDING_URL must be an HTTP(S) site")
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": WIDTH, "height": HEIGHT},
            device_scale_factor=1,
            reduced_motion="no-preference",
            record_video_dir=str(OUTPUT_DIR),
            record_video_size={"width": WIDTH, "height": HEIGHT},
            locale="en-US",
        )
        page = context.new_page()
        page.set_default_timeout(12000)

        # 1 — Hero, service breadth, real results, field footage, coverage.
        navigate(page, "/")
        pause(page, 1.5)
        reveal(page, "#services", 3)
        reveal(page, ".work-section", 3)
        slider = page.locator('.ba-slider[role="slider"]').first
        if slider.count():
            slider.focus()
            for key in ["ArrowRight"] * 7 + ["ArrowLeft"] * 10 + ["ArrowRight"] * 3:
                slider.press(key)
                pause(page, 0.13)
            pause(page, 1)
        reveal(page, ".field-film", 6)
        reveal(page, ".area-section", 3.5)

        # 2 — Owner-provided imagery and case studies.
        navigate(page, "/projects/")
        reveal(page, ".ba-rows", 3.5)
        slider = page.locator('.ba-slider[role="slider"]').first
        if slider.count():
            slider.focus()
            for key in ["ArrowRight"] * 10 + ["ArrowLeft"] * 10:
                slider.press(key)
                pause(page, 0.12)
        reveal(page, ".pool-gallery", 4)

        # 3 — Actual quote path, no lead submission or calendar booking.
        navigate(page, "/contact/")
        reveal(page, ".contact-layout", 4)
        # Never submit GHL/quote forms during promotional recordings.
        pause(page, 2)

        video = page.video
        context.close()
        browser.close()
        raw_path = Path(video.path()) if video else None

    if not raw_path or not raw_path.exists():
        raise RuntimeError("Playwright did not save the video")
    webm_path = OUTPUT_DIR / "aurora-real-site-walkthrough.webm"
    if raw_path != webm_path:
        shutil.move(str(raw_path), str(webm_path))

    print(f"Recorded: {webm_path.resolve()}")
    if shutil.which("ffmpeg"):
        mp4_path = OUTPUT_DIR / "aurora-real-site-walkthrough.mp4"
        subprocess.run(
            ["ffmpeg", "-y", "-i", str(webm_path), "-c:v", "libx264",
             "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p",
             "-movflags", "+faststart", "-an", str(mp4_path)],
            check=True,
        )
        print(f"Portfolio-ready MP4: {mp4_path.resolve()}")
    else:
        print("FFmpeg not found: keep the .webm or convert it to H.264 MP4 separately.")


if __name__ == "__main__":
    main()
