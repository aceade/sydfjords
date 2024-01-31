# Sydfjords Tourism Page

A practice project to teach myself responsive web design with Vue. The concept here is a tourism page for a fictional region inspired by Patagonia and Iceland, using [this project](https://www.frontendpractice.com/projects/monogram) as a springboard.

Suggestions on how to improve this are welcome!

## Building

This uses [pnpm](https://pnpm.io/) instead of npm. However, most of the commands should work roughly the same.

- `pnpm install` installs dependencies. Unlike npm, it adds dependencies into a global store instead of a per-project node_modules folder.
- `pnpm run dev` runs a development build.
- `pnpm run build` runs a production build. This is also used during the automated deployment.
- `pnpm run preview` deploys a local preview of the production build.
- `pnpm update` updates all outdated dependencies.

The build includes an imagemin task.

### Deploying

The build uses a GitHub Action ([view build file](.github/workflows/build.yml)) to build the app and then deploys the contents of the `dist/` folder as a static page.

## Accessibility

I manually run this through the WAVE extension for Firefox. It hasn't reported anything yet, but improvements are welcome (especially ways to automate this).

## Notes on responsiveness

The targeted screen widths for this are:

- 320 pixels
- 480
- 600
- 800
- 1080
- 1920 pixels (largest).

Some pages use different line lengths.

## Credits/Sources

All images are from [pexels.com](https://www.pexels.com/), except for the logo, which was generated using [Canva](https://canva.com).
The navbar is derived from [this W3Schools example](https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp), with some modifications to fix menus hanging open.
This uses [ml5](https://learn.ml5js.org/#/) for sentiment analysis when sending a mock email. The endpoint does nothing with the predicted score.