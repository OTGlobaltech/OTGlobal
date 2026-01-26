# Video Background Setup Guide

## Option 1: Local Video (RECOMMENDED) ✅

### Steps:
1. **Create the videos folder:**
   ```bash
   mkdir -p public/videos
   ```

2. **Add your video file:**
   - Place your video file in: `public/videos/hero-video.mp4`
   - Supported formats: MP4, WebM, MOV
   - Recommended: MP4 (H.264 codec) for best compatibility

3. **Update the code:**
   The code is already configured to use `/videos/hero-video.mp4`
   - Just make sure `useYouTube = false` (default)
   - The path `/videos/hero-video.mp4` will automatically resolve to `public/videos/hero-video.mp4`

### Video Recommendations:
- **Format:** MP4 (H.264 codec)
- **Resolution:** 1920x1080 (Full HD) or higher
- **Aspect Ratio:** 16:9
- **File Size:** Try to keep under 10MB for faster loading
- **Duration:** 30-60 seconds (will loop)
- **Content:** Supply chain operations, manufacturing, logistics, warehousing, freight

### Video Optimization Tips:
1. **Compress your video:**
   - Use tools like HandBrake, FFmpeg, or online compressors
   - Target: 2-5MB for web

2. **Example FFmpeg command:**
   ```bash
   ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -b:a 128k -movflags +faststart hero-video.mp4
   ```

---

## Option 2: YouTube Video

### Steps:
1. **Get your YouTube video ID:**
   - From URL: `https://www.youtube.com/watch?v=VIDEO_ID`
   - Example: If URL is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID is: `dQw4w9WgXcQ`

2. **Update the code in HomePage.jsx:**
   ```javascript
   const useYouTube = true; // Change to true
   const youtubeVideoId = "YOUR_VIDEO_ID_HERE"; // Add your video ID
   ```

3. **Note:** YouTube videos may have limitations:
   - Some videos don't allow embedding
   - Autoplay might not work on all browsers
   - Less control over playback

---

## Current Configuration

In `components/pages/HomePage.jsx`, you'll find:

```javascript
// Option 1: Local video (RECOMMENDED)
const videoSource = "/videos/hero-video.mp4";

// Option 2: YouTube video
const useYouTube = false; // Set to true to use YouTube
const youtubeVideoId = ""; // Your YouTube video ID
```

---

## Quick Start (Local Video)

1. **Add your video:**
   ```bash
   # Copy your video to the public folder
   cp /path/to/your/video.mp4 public/videos/hero-video.mp4
   ```

2. **That's it!** The video will automatically load.

---

## Testing

After adding your video:
1. Run `npm run dev`
2. Check the hero section
3. If video doesn't load, check browser console for errors
4. Ensure video file path is correct

---

## Troubleshooting

### Video not playing?
- Check file path: Should be `public/videos/hero-video.mp4`
- Check file format: Use MP4 (H.264)
- Check browser console for errors
- Try a different video file to test

### Video too large/slow?
- Compress the video (see optimization tips above)
- Consider using a CDN for hosting
- Use WebM format for better compression

### YouTube video not working?
- Ensure video allows embedding
- Check video ID is correct
- Some videos may not autoplay due to YouTube policies
