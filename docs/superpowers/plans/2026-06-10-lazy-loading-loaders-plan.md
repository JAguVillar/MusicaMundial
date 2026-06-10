# Plan de Implementación: Carga Progresiva y Loader Spotify (Latido) en /pais

* **Fecha**: 2026-06-10
* **Estado**: Pendiente de Ejecución
* **Especificación**: [spec](file:///Z:/Code/MusicaMundial/docs/superpowers/specs/2026-06-10-lazy-loading-loaders-design.md)
* **Rama**: `feature/loader-spotify-heartbeat`

---

## Fases del Plan

### Fase 1: Creación del Helper y Modificación del Fondo de Tarjeta Principal
* **Archivo**: [src/pages/pais/[slug].astro](file:///Z:/Code/MusicaMundial/src/pages/pais/[slug].astro)
* **Pasos**:
  1. Agregar la función utilitaria `getLowResPlaceholder` en el bloque frontmatter de Astro.
  2. Reemplazar la estructura actual del background-image por las etiquetas `<img id="bg-placeholder">` e `<img id="bg-culture">`.

---

### Fase 2: Implementación de Spotify Embed con Loader de Latido
* **Archivo**: [src/components/SpotifyEmbed.astro](file:///Z:/Code/MusicaMundial/src/components/SpotifyEmbed.astro)
* **Pasos**:
  1. Importar `SpotifyIcon` si no está importado.
  2. Modificar la plantilla cuando `source.status === 'ready'` para envolver el iframe en un contenedor relativo con altura mínima (`min-h-[444px] md:min-h-[544px]`).
  3. Crear el loader `#spotify-loader` absoluto con fondo `#121212`, que contenga el `SpotifyIcon` con una clase de animación de latido `.animate-heartbeat`.
  4. Agregar el estilo `<style>` en el componente para definir los keyframes de la animación `heartbeat`.
  5. Configurar el manejador `onload` del `iframe` para quitar la opacidad al iframe y ocultar/eliminar el loader con una transición de 500ms.

---

### Fase 3: Integración del Script de Transiciones y Caché
* **Archivo**: [src/pages/pais/[slug].astro](file:///Z:/Code/MusicaMundial/src/pages/pais/[slug].astro)
* **Pasos**:
  1. Añadir el bloque `<script>` que maneje `DOMContentLoaded` y `astro:page-load`.
  2. Añadir la lógica para ocultar los placeholders de imágenes ya cacheadas de inmediato.
  3. Añadir una lógica de recuperación/salvaguarda por si el iframe se carga de caché y el onload no dispara a tiempo en View Transitions, removiendo el loader tras un timeout breve.

---

## Verificación

1. Ejecutar `npm run build` para asegurar la compilación.
2. Probar en local con `npm run dev` y emular conexión lenta para validar el efecto del latido y de la carga progresiva.
