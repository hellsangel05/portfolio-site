# Portfolio video production: working Aurora recipe

This documents the process that delivered the 43.83-second **Aurora Pool & Spa** motion-design portfolio video with working narration on October 22, 2026. Reuse this method for future portfolio case-study videos (Raidio, PSYCH!, Aurora, etc.). **Do not require the user to re-upload media if the existing video/voice file or a connected app can provide it.**

## Proven workflow

1. **Build visuals with HyperFrames** (HTML/CSS/GSAP based motion graphics), deriving colors, typography, and copy from the actual source website or repository. Use real project photos/screens where available; never represent mockups as footage of the live app. Save the reusable HyperFrames project and a visual-only/silent MP4. For site promos use the installed `website-to-hyperframes`, `hyperframes`, and `hyperframes-cli` skills. Validate scene timing/visuals before rendering.
2. **Narration:** Use ElevenLabs *speech generation only* if the voice quality calls for it. Explicit user preference: do **not** use ElevenLabs video generation. Free alternative: **Kokoro-82M**, supported by HyperFrames' `npx hyperframes tts "Narration text" --voice af_nova --output narration.wav`. Kokoro model weights are Apache 2.0; local execution uses compute but has no ElevenLabs voice subscription or per-generation charges. Pick whichever makes sense for the project.
3. **Retrieve media without user uploads:** Existing conversation-generated MP4s may be transferred to Adobe Creative Cloud using `asset_openai_file_upload` with the verified ChatGPT file ID. Then resolve its actual asset/download URL via `asset_get_presigned_urls`; **use downloadUrl, not renditionUrl** for the full MP4 (rendition may be a JPEG preview). Existing ElevenLabs audio can be fetched from `creative_get_flow_run_status` on its flow/session; its signed `media[].url` has a short expiry. Download it immediately. If it has expired and cannot be refreshed, produce a fresh speech-only take and fetch it immediately, or use Kokoro directly to avoid expiring URLs.
4. **Merge locally or in a temporary environment** (the Aurora success used Vercel Sandbox with network access, and the Python `imageio-ffmpeg` package for a bundled FFmpeg binary). Avoid slow OS package installation. Example:
   ```bash
   python3 -m pip install imageio-ffmpeg
   FFMPEG=$(python3 -c 'import imageio_ffmpeg;print(imageio_ffmpeg.get_ffmpeg_exe())')
   "$FFMPEG" -y -i visuals-silent.mp4 -i narration.mp3 \
      -map 0:v:0 -map 1:a:0 -c:v copy -c:a aac -b:a 192k \
      -af apad -t 43.833 -movflags +faststart promo-with-voice.mp4
   ```
   Set `-t` to the *actual* visual duration, or redesign scene timing to follow the voiceover. Adjust start offset if speech timing requires it. For polished ads consider a licensed royalty-free music bed at low volume; no music is required.
5. **Verify both streams** before declaring success: `ffmpeg -i promo-with-voice.mp4` must show H.264 video **and** AAC audio; check duration and listen if possible. Preview multiple frames and verify text sync. Merely generating audio separately does not make the video have sound.
6. **Deliver a stable playable file:** For Aurora, the 5.5 MB result was sent from sandbox via Adobe's block-upload session, finalized in Creative Cloud, and its short share/download URL was verified against the original file by identical SHA-256 checksums. **Presigned asset URLs expire**; retain the durable Adobe asset ID and re-resolve links when needed. Stop temporary sandboxes afterward to avoid charges.

## Aurora finished asset references (2026-10-22)

- Adobe Creative Cloud finished video asset: `urn:aaid:sc:US:4600f9ea-de1f-4c6f-b6d5-0fac47291a35`
- 1280 × 720, 24 fps, ~43.83 seconds, MP4/H.264 + AAC mono narration; verified SHA-256: `60471a5eddcad1e1126d79ec599733066fdec84a65aaaffc0569a351aee36fb4`.
- ElevenLabs Kyle voice, `eleven_v4` speech-only. Flow ID of final voice take: `ZePx0GOILegzs1PmqUeg`. Signed URLs in old chat/tool output should **not** be reused after expiry.
- Initial silent visual clip: `aurora-motion-preview-silent.mp4`; Adobe asset `urn:aaid:sc:US:a0c5c44b-1fe9-4671-9df5-fea315671e0d`.  
- Note: Aurora visuals were a stylized portfolio motion-design treatment, not a literal browser screen recording.

## Pitfalls we learned to avoid

- Don't give the user a silent MP4 and separate audio links when they asked for a video with narration.
- Don't require an attachment after the user hits attachment limits: reuse connected project assets, sandbox-accessible media, or media URLs.
- Don't assume an Adobe `asset_openai_file_upload` action accepts arbitrary signed audio URLs in its file-ref parameter; media download via a real execution environment succeeded.
- Don't assume an old signed ElevenLabs asset link will still work. Fetch a fresh generation URL while it is valid.
- For large sandbox files, reading raw bytes through a connector may hit output-size limits (4 MiB in the prior attempt). Use provider-native upload APIs/presigned block transfers from inside the sandbox instead.
- Avoid restarting short-lived sandboxes during long dependency installation; configure adequate timeout and use small binary packages.
