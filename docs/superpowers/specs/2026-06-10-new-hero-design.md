# Diseño Técnico: Rediseño del Hero (Header) de Música Mundial 26

* **Fecha**: 2026-06-10
* **Estado**: Completado e Implementado
* **Rama**: `feature/new-hero-design`
* **Tema**: Réplica del nuevo diseño del Hero basado en `docs/images/heronew.png`.

---

## 1. Motivación y Cambios de Diseño

El objetivo es rediseñar el Header de la página principal (`index.astro`) para lograr una apariencia de alta gama que mejore el impacto visual. Se implementan los siguientes cambios de diseño:

1.  **Esquema de Color**: Fondo azul muy oscuro/marino (`#06092b`) con atmósfera nocturna.
2.  **Líneas de Guía Vectoriales (Grid)**: Curvas y cuadrículas abstractas SVG añadidas como fondo para dar profundidad y sensación de "radio orbital".
3.  **Borde Inferior Elíptico**: Utilización de la propiedad CSS `clip-path: ellipse(95% 100% at 50% 0%)` para crear una curva de fondo simétrica de arco suave.
4.  **Badges de Características**: Una fila de 5 badges con bordes finos e iconos vectoriales representando características del portal:
    *   *48 Selecciones* (Icono de usuario)
    *   *12 Grupos* (Icono de cuadrícula)
    *   *Spotify integrado* (Icono oficial verde de Spotify)
    *   *Playlists públicas* (Icono de onda/latido)
    *   *Actualizado en vivo* (Icono de refrescar/sync)
5.  **Fila de Banderas**: Una tira horizontal centrada con las banderas de 12 países clave del torneo (ARG, BRA, ESP, FRA, MEX, JPN, KOR, GER, POR, ENG, URU, COL) utilizando esquinas redondeadas.
6.  **Botón de Acción CTA**: Un botón de color cyan brillante (`bg-[#3ddcff]`) con un icono de auriculares y una transición interactiva de desplazamiento suave hacia la sección `#grupos`.

---

## 2. Estructura de Componentes

*   **`src/components/HeroBanner.astro`**:
    *   Componente autocontenido que define el layout elíptico, las curvas vectoriales, la fila de badges, la tira de banderas y el botón de acción con scroll al selector.
*   **`src/pages/index.astro`**:
    *   Limpia la estructura inline e importa/renderiza el nuevo componente `<HeroBanner />`.
