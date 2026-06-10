# Diseño Técnico: Carga Progresiva y Loader Spotify (Latido) en /pais

* **Fecha**: 2026-06-10
* **Estado**: Aprobado
* **Rama**: `feature/loader-spotify-heartbeat`
* **Tema**: Implementación de Carga Progresiva (Blur-up) para imágenes de fondo y un Loader de Latido (Heartbeat) con el icono de Spotify.

---

## 1. Contexto y Requerimientos

En las páginas de detalle de cada país (`/pais/[slug]`), optimizaremos la experiencia de carga de dos elementos:
1. **Imagen de fondo de la tarjeta principal**: Cambiar de `background-image` en CSS a etiquetas `<img>` nativas con lazy-loading y transición progresiva (Blur-up) utilizando una miniatura muy ligera.
2. **Embed de Spotify**: En lugar de un esqueleto de pistas, mostraremos una pantalla de carga simplificada y elegante que contenga el icono oficial de Spotify (`src/components/icons/spotify.astro`) con un efecto de latido (heartbeat) continuo (pulsación en escala), acompañado del texto "Cargando playlist...".

---

## 2. Detalles del Diseño

### 2.1. Carga Progresiva Blur-Up para la Imagen de Fondo

Modificaremos [src/pages/pais/[slug].astro](file:///Z:/Code/MusicaMundial/src/pages/pais/[slug].astro).

#### Generación de Placeholder
```javascript
function getLowResPlaceholder(url) {
  if (!url) return "";
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("unsplash.com")) {
      urlObj.searchParams.set("w", "40");
      urlObj.searchParams.set("q", "20");
      return urlObj.toString();
    } else if (urlObj.hostname.includes("pexels.com")) {
      urlObj.searchParams.set("auto", "compress");
      urlObj.searchParams.set("cs", "tinysrgb");
      urlObj.searchParams.set("w", "40");
      return urlObj.toString();
    }
  } catch (e) {}
  return url;
}
```

#### Estructura HTML
```html
<div class="absolute inset-0 z-0 overflow-hidden bg-[#12135a]">
  <!-- Miniatura de baja resolución -->
  <img
    src={lowResImg}
    alt=""
    aria-hidden="true"
    class="absolute inset-0 h-full w-full object-cover object-center blur-2xl transition-opacity duration-500 scale-105"
    id="bg-placeholder"
  />
  <!-- Imagen de alta resolución -->
  <img
    src={cultureImg}
    alt={`Cultura de ${team.name}`}
    loading="eager"
    decoding="async"
    class="absolute inset-0 h-full w-full object-cover object-center opacity-0 transition-opacity duration-700 ease-out"
    onload="this.classList.remove('opacity-0'); document.getElementById('bg-placeholder')?.classList.add('opacity-0');"
  />
</div>
```

---

### 2.2. Loader Latido para Spotify Embed

Modificaremos [src/components/SpotifyEmbed.astro](file:///Z:/Code/MusicaMundial/src/components/SpotifyEmbed.astro).

#### Estructura HTML del Loader
```html
<div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-3 shadow-2xl shadow-black/30 backdrop-blur min-h-[444px] md:min-h-[544px]">
  {source.status === 'ready' ? (
    <>
      <!-- Loader Spotify Latiente -->
      <div
        id="spotify-loader"
        class="absolute inset-3 z-10 flex flex-col items-center justify-center gap-4 rounded-[1.5rem] bg-[#121212] transition-opacity duration-500"
      >
        <div class="animate-heartbeat">
          <SpotifyIcon class="h-20 w-20 text-[#1ED760]" />
        </div>
        <p class="text-xs font-bold text-zinc-400 tracking-wider uppercase animate-pulse">
          Cargando playlist...
        </p>
      </div>

      <iframe
        id="spotify-iframe"
        class="opacity-0 transition-opacity duration-500 h-[420px] w-full rounded-[1.5rem] md:h-[520px]"
        src={source.embedUrl}
        title={title}
        width="100%"
        height="520"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onload="this.classList.remove('opacity-0'); document.getElementById('spotify-loader')?.classList.add('pointer-events-none', 'opacity-0'); setTimeout(() => document.getElementById('spotify-loader')?.remove(), 500);"
      ></iframe>
    </>
  ) : (
    ...
  )}
</div>
```

#### Animación Heartbeat (Estilo CSS Scoped)
Agregaremos los estilos CSS específicos en `SpotifyEmbed.astro`:
```css
<style>
  @keyframes heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.15); }
    28% { transform: scale(1); }
    42% { transform: scale(1.15); }
    70% { transform: scale(1); }
  }
  .animate-heartbeat {
    animation: heartbeat 1.5s infinite ease-in-out;
  }
</style>
```

---

### 2.3. Resiliencia para Transiciones de Página (View Transitions)

Para evitar que los loaders queden estancados si el recurso ya fue cacheado por el navegador o se carga antes del registro de listeners:
```html
<script>
  function handleLoaders() {
    // 1. Imagen de fondo
    const images = document.querySelectorAll('img[onload]');
    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.complete) {
        htmlImg.classList.remove('opacity-0');
        const placeholder = htmlImg.previousElementSibling;
        if (placeholder && placeholder.id === 'bg-placeholder') {
          placeholder.classList.add('opacity-0');
        }
      }
    });

    // 2. Iframe Spotify
    const iframes = document.querySelectorAll('iframe[onload]');
    iframes.forEach((iframe) => {
      const htmlIframe = iframe as HTMLIFrameElement;
      // Si el iframe ya cargó y está visible
      if (htmlIframe.classList.contains('opacity-0') && htmlIframe.getBoundingClientRect().height > 0) {
        // Ejecutar un check asíncrono
        setTimeout(() => {
          // Si el loader sigue ahí pero el iframe tiene contenido
          const loader = document.getElementById('spotify-loader');
          if (loader) {
            htmlIframe.classList.remove('opacity-0');
            loader.classList.add('pointer-events-none', 'opacity-0');
            setTimeout(() => loader.remove(), 500);
          }
        }, 1500); // Umbral de seguridad para asegurar que no quede colgado
      }
    });
  }

  document.addEventListener('DOMContentLoaded', handleLoaders);
  document.addEventListener('astro:page-load', handleLoaders);
</script>
```
