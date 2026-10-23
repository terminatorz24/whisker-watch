# Website and offline behavior — plain-language scope
The first release is a WEBSITE. The player opens its link, loads a deck/save, plays, and downloads their save. Files stay on the player's device; static hosting does not imply accounts or server storage of study material.

Required now:
- Static production output served over HTTPS after separate release approval.
- Development and owner-review preview via a local server (future npm run dev / build / preview commands), not by installing a native app.
- Bundle game code, fonts, content and original assets. No CDN, remote images, AI or analytics calls needed DURING gameplay.
- After all required assets load, disconnect network: the current session, question import and save download must still work. Display an incomplete-load error if startup assets are missing.

Not a first-release promise:
- Closing the browser and reopening the website with absolutely no internet.
- An installable PWA/home-screen offline application.
- Double-clicking a downloaded index.html under file:// on every device.
Those require separate caching/packaging work and tests. They must not be claimed merely because a manifest file exists. Add them later only with owner approval; saves remain portable JSON either way.

Service workers used for offline reopening normally require HTTPS or localhost. This detail is a developer concern, not an extra task for the player. Source: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
