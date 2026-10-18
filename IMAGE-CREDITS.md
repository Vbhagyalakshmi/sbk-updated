# Image sources (Unsplash License: free for commercial use, attribution optional)
All photo IDs were read from the live search pages
https://unsplash.com/s/photos/software-development and https://unsplash.com/s/photos/technology.
See `lib/images.ts` for each photographer and photo page. Run a visual check in the browser
(`npm run dev`); `SafeImage` shows a branded gradient if any image fails to load.
Still needed: real Jhansi Engineering Works screenshot (portfolio) and additional photos for
cybersecurity/VLSI if you want closer matches.

The eight services carousel photos are optimized local WebP copies in
`public/images/services/`, named by their keys in `lib/images.ts`. The carousel uses
`RemoteImage` so it displays a pale-blue fallback if a local asset cannot be loaded.

The four hero background photos are optimized local WebP copies in `public/images/hero/`.
They reuse the Unsplash photos and credits recorded in `lib/images.ts`: hero, software,
VLSI/engineering, and web, respectively.
