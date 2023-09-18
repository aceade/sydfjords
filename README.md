# Sydfjords Tourism Page
A practice project to teach myself responsive web design with Vue. The concept here is a tourism page for a fictional region inspired by Patagonia and Iceland, using [this project](https://www.frontendpractice.com/projects/monogram) as a springboard.

## Building

This uses [pnpm](https://pnpm.io/) instead of npm. However, most of the commands should work roughly the same.

- `pnpm install` installs dependencies. Unlike npm, it adds dependencies into a global store instead of a per-project node_modules folder.
- `pnpm run dev` runs a development build.
- `pnpm run build` runs a production build. This is also used during the automated deployment.
- `pnpm run preview` deploys a local preview of the production build.
- `pnpm update` updates all outdated dependencies.

## Credits/Sources

All images are from [pexels.com](https://www.pexels.com/), except for the logo, which was generated using [Canva](https://canva.com).
The navbar is derived from [this W3Schools example](https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp), with some modifications to fix menus hanging open.