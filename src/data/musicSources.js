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
  US: '37i9dQZEVXbLRQDuF5jeBp'
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
      ? 'Playlist pública de Spotify. El contenido se actualiza desde Spotify y puede variar por región.'
      : 'Pendiente de curación manual. Mientras tanto, enlazamos una búsqueda en Spotify para encontrar playlists del país.'
  };
};
