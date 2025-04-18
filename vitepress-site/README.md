# Finsoccerz VitePress Site

This is the VitePress version of the Finsoccerz site. It's designed to run in parallel with the Hugo version until the migration is complete.

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Structure

- `.vitepress/` - VitePress configuration and theme
- `public/` - Static assets
- `players/` - Player profiles
- `posts/` - Match reports organized by year and month

## Migration Status

This site is currently in the process of being migrated from Hugo to VitePress. Once the migration is complete and verified, the Hugo version will be deprecated.
