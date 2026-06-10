# Diseño Técnico: Arquitectura y Componentización Limpia en /pais

* **Fecha**: 2026-06-10
* **Estado**: Completado e Implementado
* **Rama**: `feature/frontend-architecture`
* **Tema**: Auditoría e implementación de buenas prácticas de componentización, accesibilidad y rendimiento.

---

## 1. Cambios de Helpers y Utilidades

*   **`src/utils/image.js`**:
    - Centraliza la lógica de generación de URLs ligeras (`getLowResPlaceholder`) para efectos de carga Blur-up.
    - Centraliza la lógica de fallback de imágenes utilizando Unsplash (`getCultureImage`).
*   **Generación de Slugs**:
    - Centralizado el mapeo mediante el helper `slugifyTeam` importado desde `worldCupGroups.js`.

---

## 2. Nuevos Componentes Visuales (ui/)

*   **`src/components/ui/ProgressiveImage.astro`**:
    - Encapsula la visualización de imágenes con carga asíncrona blur-up progresiva.
    - Resuelve el ciclo de vida de la imagen (`onload`, `.complete` para caché) utilizando un script de selección local (`querySelector`) que evita colisiones con View Transitions al no depender de IDs estáticos del DOM.
*   **`src/components/ui/PillButton.astro`**:
    - Unifica los estilos Tailwind del botón asimétrico con bordes redondeados invertidos, previniendo duplicación innecesaria en 5 componentes diferentes.
*   **`src/components/ui/Equalizer.astro`**:
    - Aísla la visualización animada y estática del ecualizador del componente `TeamCard.astro`.

---

## 3. Desacoplamiento de Páginas y Maquetación

*   **`src/components/CountryHero.astro`**:
    - Encapsula la tarjeta principal del país y consume `ProgressiveImage` y `PillButton`, independizando la maquetación visual de `/pais/[slug].astro`.
*   **`src/components/SpotifyEmbed.astro`**:
    - Removidos los IDs estáticos (`#spotify-loader`, `#spotify-iframe`) y reemplazados por selectores relativos de hermanos en línea (`this.previousElementSibling`) dentro del script de carga, garantizando robustez ante cargas rápidas.
*   **`src/pages/pais/[slug].astro`**:
    - Simplificado su código a únicamente orquestar la vista, reduciendo drásticamente su tamaño y legibilidad.

---

## 4. Mejoras de Accesibilidad y Responsividad

*   **Icono de Spotify**: Integrado `aria-hidden="true"` en la definición por defecto en `icons/spotify.astro`.
*   **Banderas destacadas**: Agregado `alt` descriptivo a la bandera de país destacado en `[group].astro`.
*   **Responsive**: Reemplazado `100vh` por `100dvh` para un correcto cálculo de altura de viewport dinámica en navegadores móviles.
