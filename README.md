# Couper.io Website

Source code for [couper.io](https://couper.io/) — the marketing and documentation site for the [Couper](https://github.com/coupergateway/couper) open source API gateway.

Built with [Hugo](https://gohugo.io/) and [Tailwind CSS v4](https://tailwindcss.com/).

## Prerequisites

- [Hugo](https://gohugo.io/installation/) (extended edition)
- [Node.js](https://nodejs.org/) 22+
- [pnpm](https://pnpm.io/) 10+

## Development

Install dependencies:

```shell
pnpm install
```

Start the development server:

```shell
pnpm dev
```

The site is now running at http://localhost:1313

## Production Build

```shell
pnpm build
```

The output is generated in the `public/` directory.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site with Hugo and deploys it to GitHub Pages.

## Project Structure

```
content/          # Page content (Markdown front matter)
layouts/
  _default/       # Base templates
  page/           # Page-specific layouts (home, docs, features, etc.)
  partials/       # Reusable template fragments (header, footer, SVGs)
assets/css/       # Tailwind CSS and custom styles
static/           # Static assets (images, fonts, CNAME)
data/examples/    # HCL code examples used on the docs page
```
