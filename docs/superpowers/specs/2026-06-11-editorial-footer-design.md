# Especificación de Diseño: Sección de Pie de Página Editorial e Himnos de los Mundiales

Este documento define la especificación técnica y de diseño para implementar la sección final editorial, la línea de tiempo de himnos de los mundiales con modal de video integrado, y el pie de página corporativo-cultural en la página de inicio.

## 1. Contexto y Objetivos

Añadir una sección final en la página de inicio (`index.astro`) que sirva como cierre editorial y de descubrimiento de la historia musical de las Copas del Mundo de la FIFA. El diseño debe ser premium, utilizar colores oscuros y cyan alineados con la identidad visual del proyecto, y ofrecer interactividad fluida sin salir de la página principal.

## 2. Definición del Modelo de Datos (`worldCupAnthems.js`)

Crearemos un nuevo archivo de datos en `src/data/worldCupAnthems.js` con el listado oficial de himnos mundialistas:

```javascript
export const worldCupAnthems = [
  {
    year: 1990,
    title: "Un'estate Italiana",
    artist: "Edoardo Bennato & Gianna Nannini",
    youtubeId: "9C5mR2uIok8",
    cover: "https://i.ytimg.com/vi/9C5mR2uIok8/hqdefault.jpg",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  {
    year: 1994,
    title: "Gloryland",
    artist: "Daryl Hall",
    youtubeId: "KMuLePslBs4",
    cover: "https://i.ytimg.com/vi/KMuLePslBs4/hqdefault.jpg",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    year: 1998,
    title: "La Copa de la Vida",
    artist: "Ricky Martin",
    youtubeId: "8455KPRITQc",
    cover: "https://i.ytimg.com/vi/8455KPRITQc/hqdefault.jpg",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20"
  },
  {
    year: 2002,
    title: "Boom",
    artist: "Anastacia",
    youtubeId: "kYJ_f-uH_6g",
    cover: "https://i.ytimg.com/vi/kYJ_f-uH_6g/hqdefault.jpg",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  },
  {
    year: 2006,
    title: "The Time of Our Lives",
    artist: "Il Divo & Toni Braxton",
    youtubeId: "4aOxDHqWyK0",
    cover: "https://i.ytimg.com/vi/4aOxDHqWyK0/hqdefault.jpg",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
  },
  {
    year: 2010,
    title: "Waka Waka (This Time for Africa)",
    artist: "Shakira",
    youtubeId: "pRpeEdMmmQ0",
    cover: "https://i.ytimg.com/vi/pRpeEdMmmQ0/hqdefault.jpg",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
  },
  {
    year: 2014,
    title: "We Are One (Ole Ola)",
    artist: "Pitbull ft. Jennifer Lopez & Claudia Leitte",
    youtubeId: "TGtWWb9emYI",
    cover: "https://i.ytimg.com/vi/TGtWWb9emYI/hqdefault.jpg",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
  },
  {
    year: 2018,
    title: "Live It Up",
    artist: "Nicky Jam ft. Will Smith & Era Istrefi",
    youtubeId: "V15BYnSr0P8",
    cover: "https://i.ytimg.com/vi/V15BYnSr0P8/hqdefault.jpg",
    badgeColor: "bg-pink-500/10 text-pink-400 border-pink-500/20"
  },
  {
    year: 2022,
    title: "Hayya Hayya (Better Together)",
    artist: "Trinidad Cardona, Davido & AISHA",
    youtubeId: "91W-I2R9-iQ",
    cover: "https://i.ytimg.com/vi/91W-I2R9-iQ/hqdefault.jpg",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20"
  }
];
```

## 3. Componente `Footer.astro`

El archivo `src/components/Footer.astro` contendrá los siguientes elementos:

### A. Estructura de la Timeline de Himnos
*   Contenedor principal con fondo azul oscuro (`bg-[#050720]`) y bordes superiores redondeados.
*   Grilla horizontal scrollable con clases Tailwind: `flex overflow-x-auto gap-4 pb-6 snap-x scrollbar-hide`.
*   Cada tarjeta tendrá:
    *   Un contenedor interno para la miniatura con hover de play y play button overlay.
    *   Título de canción en blanco destacado.
    *   Artista en gris/indigo suave.
    *   Badge de año correspondiente con su color diferenciador.

### B. Modal de Reproducción (Dynamic YouTube Embed)
*   Integración de un modal que se activa mediante JavaScript en el cliente:
    ```html
    <div id="video-modal" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md transition-all duration-300">
      <div class="relative w-full max-w-4xl mx-4 aspect-video bg-[#0c1033] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        <!-- Close Button -->
        <button id="close-modal" class="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition z-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Iframe container -->
        <div id="video-iframe-container" class="w-full h-full"></div>
      </div>
    </div>
    ```
*   **Comportamiento de JS:**
    *   Al hacer click en reproducir (`data-youtube-id`), se inyecta un iframe apuntando a `https://www.youtube.com/embed/${youtubeId}?autoplay=1`. Se remueve la clase `hidden`.
    *   Al hacer click en cerrar o fuera del cuadro del video, el iframe se remueve (se vacía el contenedor HTML) y se añade `hidden` para evitar que la música continúe reproduciéndose.

### C. Banner CTA Final
*   Ubicado debajo de la timeline de himnos.
*   Diseño con fondo degradado y el botón "Explorar selecciones" con enlace a `#grupos` para scroll suave hacia el inicio de la navegación de grupos.

### D. Links de Pie de Página Corporativos
*   Implementación de las 4 columnas de navegación tal como se ilustra en el mockup y el plan original.

## 4. Integración en `index.astro`

Añadir el componente `<Footer />` al final del archivo `src/pages/index.astro`, después de la sección `#grupos`.

## 5. Plan de Pruebas

1.  **Interactividad del Timeline:** Verificar que en Desktop se pueda scrollear lateralmente mediante trackpad/mouse horizontal, y que en Mobile funcione el snap scrolling con gestos touch.
2.  **Verificación del Modal de Video:**
    *   Hacer click en "Un'estate Italiana" y confirmar que el modal se abre y comienza la reproducción con sonido.
    *   Hacer click en el botón de cerrar y verificar que el modal desaparece y el audio se detiene completamente.
    *   Hacer click en la zona gris exterior (backdrop) y confirmar que el modal también se cierra y detiene la reproducción.
3.  **Scroll de Regreso:** Comprobar que al presionar el botón "Explorar selecciones" se realice un scroll suave hacia el selector de grupos en la home.
