const top50Playlists = {
  AR: '37i9dQZEVXbMMy2roB9myp',
  AT: '37i9dQZEVXbKNHh6NIXu36',
  AU: '37i9dQZEVXbJPcfkRz0wJ0',
  BE: '37i9dQZEVXbJNSeeHswcKB',
  BR: '37i9dQZEVXbMXbN3EUUhlg',
  CA: '37i9dQZEVXbKj23U1GF4IR',
  CH: '37i9dQZEVXbJiyhoAPEfMK',
  DE: '37i9dQZEVXbJiZcmkrIHGU',
  ES: '37i9dQZEVXbNFJfN1Vw8d9',
  FR: '37i9dQZEVXbIPWwFssbupI',
  'GB-ENG': '37i9dQZEVXbLnolsZ8PSNw',
  'GB-SCT': '37i9dQZEVXbLnolsZ8PSNw',
  JP: '37i9dQZEVXbKXQ4mDTEBXq',
  KR: '37i9dQZEVXbNxXF4SkHj9F',
  MX: '37i9dQZEVXbO3qyFxbkOE1',
  NL: '37i9dQZEVXbKCF6dqVpDkS',
  NO: '37i9dQZEVXbJvfa0Yxg7E7',
  PT: '37i9dQZEVXbKyJS56d1pgi',
  SE: '37i9dQZEVXbLoATJ81JYXz',
  TR: '37i9dQZEVXbIVYVBNw9D5K',
  US: '37i9dQZEVXbLRQDuF5jeBp',
  SA: '37i9dQZEVXbO839WGRmpu1',
  CO: '37i9dQZEVXbOa2lmxNORXQ',
  CZ: '37i9dQZEVXbIP3c3fqVrJY',
  CL: '37i9dQZEVXbJk3M3tS019h',
  EC: '37i9dQZEVXbJlM6nvL1nD1',
  EG: '37i9dQZEVXbLn7RQmT5Xv2',
  MA: '37i9dQZEVXbJU9eQpX8gPT',
  NZ: '37i9dQZEVXbM8SIrkERIYl',
  PA: '37i9dQZEVXbKypXHVwk1f0',
  PY: '37i9dQZEVXbNOUPGj7tW6T',
  ZA: '37i9dQZEVXbMH2jvi6jvjk',
  UY: '37i9dQZEVXbMJJi3wgRbAy',
};

export const getSpotifySource = (team) => {
  const playlistId = top50Playlists[team.countryCode];
  const searchQuery = encodeURIComponent(`Top 50 ${team.name}`);

  return {
    playlistId,
    embedUrl: playlistId ? `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0` : '',
    openUrl: playlistId ? `https://open.spotify.com/playlist/${playlistId}` : `https://open.spotify.com/search/${searchQuery}`,
    status: playlistId ? 'ready' : 'pending',
    label: playlistId ? 'Top 50 Spotify' : 'Playlist pendiente',
    sourceNote: playlistId
      ? `Descubrí qué escucha ${team.name} durante el camino al Mundial 2026.`
      : 'Pendiente de curación manual. Mientras tanto, enlazamos una búsqueda en Spotify para encontrar playlists del país.'
  };
};
