export const worldCupGroups = [
  {
    group: 'A',
    teams: [
      { name: 'México', countryCode: 'MX', flag: '🇲🇽' },
      { name: 'Sudáfrica', countryCode: 'ZA', flag: '🇿🇦' },
      { name: 'Corea del Sur', countryCode: 'KR', flag: '🇰🇷' },
      { name: 'Chequia', countryCode: 'CZ', flag: '🇨🇿' }
    ]
  },
  {
    group: 'B',
    teams: [
      { name: 'Canadá', countryCode: 'CA', flag: '🇨🇦' },
      { name: 'Bosnia y Herzegovina', countryCode: 'BA', flag: '🇧🇦' },
      { name: 'Qatar', countryCode: 'QA', flag: '🇶🇦' },
      { name: 'Suiza', countryCode: 'CH', flag: '🇨🇭' }
    ]
  },
  {
    group: 'C',
    teams: [
      { name: 'Brasil', countryCode: 'BR', flag: '🇧🇷' },
      { name: 'Marruecos', countryCode: 'MA', flag: '🇲🇦' },
      { name: 'Haití', countryCode: 'HT', flag: '🇭🇹' },
      { name: 'Escocia', countryCode: 'GB-SCT', flag: '🏴' }
    ]
  },
  {
    group: 'D',
    teams: [
      { name: 'Estados Unidos', countryCode: 'US', flag: '🇺🇸' },
      { name: 'Paraguay', countryCode: 'PY', flag: '🇵🇾' },
      { name: 'Australia', countryCode: 'AU', flag: '🇦🇺' },
      { name: 'Turquía', countryCode: 'TR', flag: '🇹🇷' }
    ]
  },
  {
    group: 'E',
    teams: [
      { name: 'Alemania', countryCode: 'DE', flag: '🇩🇪' },
      { name: 'Curazao', countryCode: 'CW', flag: '🇨🇼' },
      { name: 'Costa de Marfil', countryCode: 'CI', flag: '🇨🇮' },
      { name: 'Ecuador', countryCode: 'EC', flag: '🇪🇨' }
    ]
  },
  {
    group: 'F',
    teams: [
      { name: 'Países Bajos', countryCode: 'NL', flag: '🇳🇱' },
      { name: 'Japón', countryCode: 'JP', flag: '🇯🇵' },
      { name: 'Suecia', countryCode: 'SE', flag: '🇸🇪' },
      { name: 'Túnez', countryCode: 'TN', flag: '🇹🇳' }
    ]
  },
  {
    group: 'G',
    teams: [
      { name: 'Bélgica', countryCode: 'BE', flag: '🇧🇪' },
      { name: 'Egipto', countryCode: 'EG', flag: '🇪🇬' },
      { name: 'Irán', countryCode: 'IR', flag: '🇮🇷' },
      { name: 'Nueva Zelanda', countryCode: 'NZ', flag: '🇳🇿' }
    ]
  },
  {
    group: 'H',
    teams: [
      { name: 'España', countryCode: 'ES', flag: '🇪🇸' },
      { name: 'Cabo Verde', countryCode: 'CV', flag: '🇨🇻' },
      { name: 'Arabia Saudita', countryCode: 'SA', flag: '🇸🇦' },
      { name: 'Uruguay', countryCode: 'UY', flag: '🇺🇾' }
    ]
  },
  {
    group: 'I',
    teams: [
      { name: 'Francia', countryCode: 'FR', flag: '🇫🇷' },
      { name: 'Senegal', countryCode: 'SN', flag: '🇸🇳' },
      { name: 'Irak', countryCode: 'IQ', flag: '🇮🇶' },
      { name: 'Noruega', countryCode: 'NO', flag: '🇳🇴' }
    ]
  },
  {
    group: 'J',
    teams: [
      { name: 'Argentina', countryCode: 'AR', flag: '🇦🇷' },
      { name: 'Argelia', countryCode: 'DZ', flag: '🇩🇿' },
      { name: 'Austria', countryCode: 'AT', flag: '🇦🇹' },
      { name: 'Jordania', countryCode: 'JO', flag: '🇯🇴' }
    ]
  },
  {
    group: 'K',
    teams: [
      { name: 'Portugal', countryCode: 'PT', flag: '🇵🇹' },
      { name: 'República Democrática del Congo', countryCode: 'CD', flag: '🇨🇩' },
      { name: 'Uzbekistán', countryCode: 'UZ', flag: '🇺🇿' },
      { name: 'Colombia', countryCode: 'CO', flag: '🇨🇴' }
    ]
  },
  {
    group: 'L',
    teams: [
      { name: 'Inglaterra', countryCode: 'GB-ENG', flag: '🏴' },
      { name: 'Croacia', countryCode: 'HR', flag: '🇭🇷' },
      { name: 'Ghana', countryCode: 'GH', flag: '🇬🇭' },
      { name: 'Panamá', countryCode: 'PA', flag: '🇵🇦' }
    ]
  }
];

export const slugifyTeam = (team) => team.countryCode.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const teams = worldCupGroups.flatMap((group) =>
  group.teams.map((team) => ({ ...team, group: group.group, slug: slugifyTeam(team) }))
);

export const findTeamBySlug = (slug) => teams.find((team) => team.slug === slug);
export const findGroup = (groupCode) => worldCupGroups.find((group) => group.group.toLowerCase() === groupCode.toLowerCase());
