# Isolated Text Editor

The Pulsar text editor, isolated from all other dependencies

## Usage:

Install dependencies with `pnpm install --shamefully-hoist`

Rebuild dependencies for Electron with `npx electron-rebuild`

Then run with `pnpm start`

## Why?

So it's easier for us to test new things - performance improvements, compatibility with newer Electron versions, etc.
