# Design Spec: Footer Spotify CTA Button

## Context
Add a Spotify Call To Action (CTA) button in the footer that links to the official playlist containing all World Cup anthems:
`https://open.spotify.com/playlist/2D2SpKF7DNpPEf2sBGCV7S?si=649511fb0af54e2f`

## Placement
- Located in [Footer.astro](file:///Z:/Code/MusicaMundial/src/components/Footer.astro) within the header area of the "Himnos de los Mundiales" section.
- Arranged horizontally next to the title on desktop (`md:flex-row md:items-end justify-between`) and stacked below on mobile.

## Aesthetics and Styling
- Uses the custom `PillButton` component.
- Visual style matches the Spotify button on `/pais` (`CountryHero.astro`):
  - Background: White
  - Border: 2px White
  - Text: Dark blue `#04061e`
  - Icon: `SpotifyIcon` with green fill color `#1db954`.
  - Hover: transparent background, white text, white border.

## References
- Target URL: `https://open.spotify.com/playlist/2D2SpKF7DNpPEf2sBGCV7S?si=649511fb0af54e2f`
