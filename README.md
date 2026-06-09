# Música Mundial

MVP estático con Astro para explorar soundtracks del Mundial 2026 usando embeds públicos de Spotify por selección.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Cómo agregar o corregir selecciones

Los grupos y selecciones viven en `src/data/worldCupGroups.js`. Cada equipo usa:

- `name`: nombre visible del país/selección.
- `countryCode`: código usado para URLs y mapeos musicales.
- `flag`: emoji de bandera.

## Cómo agregar embeds de Spotify

Los IDs de playlists viven en `src/data/musicSources.js` dentro de `top50Playlists`.

Para agregar un país:

```js
MX: '37i9dQZEVXbO3qyFxbkOE1'
```

La app genera automáticamente:

- URL de embed: `https://open.spotify.com/embed/playlist/{playlistId}`
- URL pública para abrir la playlist en Spotify
- fallback de búsqueda cuando no hay playlist curada

## Filosofía del MVP

Esta versión evita backend, Supabase, login y Spotify API. El objetivo es validar rápido la experiencia: grupos, cards de selecciones, páginas por país y embeds que se mantienen actualizados desde Spotify cuando la playlist pública cambia.
