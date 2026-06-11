# Especificación de Diseño: Rediseño de Himnos en el Footer (Estilo PowerPoint)

* **Fecha:** 2026-06-11
* **Estado:** Aprobado (por el usuario)
* **Autor:** Antigravity (AI Pair Programmer)

---

## 1. Introducción y Propósito

El objetivo de este cambio es rediseñar la sección "Himnos de los Mundiales" ubicada en el footer de la aplicación. Actualmente, se muestra como una lista con desplazamiento horizontal (`Horizontal Scroll`). 

El nuevo diseño adopta un formato de **presentación de diapositivas estilo PowerPoint (Slide Deck)**, mostrando un solo himno a la vez con controles laterales de navegación ("Anterior" y "Siguiente"), y un diseño visualmente plano y moderno integrado al tema oscuro del sitio web.

---

## 2. Cambios de Interfaz (UI) y Maqueta

### Distribución de Controles y Contenedor Principal
* **Distribución Flex:** Los botones de flecha y el contenedor de la tarjeta se encuentran alineados horizontalmente en un contenedor flex (`flex items-center justify-between`) de ancho máximo `max-w-5xl mx-auto` con espaciado amplio (`gap-4 md:gap-8`), emulando un estilo "flex between" espaciado de la tarjeta.
* **Contenedor de Diapositiva (`id="anthems-slideshow-container"`):**
  * **Fondo:** Fondo sólido y plano `#0e123f/30`.
  * **Bordes:** Sin bordes (`border-none` / plain design).
  * **Forma y Esquinas:** Imitando el diseño de las tarjetas de países de la ruta `/pais`, tiene esquinas redondeadas amplias en tres extremos (`rounded-[2.5rem]`) y una esquina inferior izquierda extendida y slanteada (`rounded-bl-[80px]`).

### Navegación Flanqueante (Flechas)
* Los botones "Anterior" y "Siguiente" son elementos flex-shrink independientes ubicados a la izquierda y derecha de la tarjeta, permitiendo que queden espaciados dinámicamente.
* Estilo visual plano: Botones circulares con fondo `bg-[#0e123f]` y borde `border-white/10`, con un hover que resalta a `border-white/30` y un color de texto blanco.

### Tarjeta del Slide (`.anthem-slide`)
Se utilizará una disposición de filas (`flex-row`) en pantallas medianas/grandes y columnas (`flex-col`) en pantallas móviles.
1. **Lado Izquierdo (Multimedia):**
   * Contenedor de la portada del álbum en proporción `16:10` (aprox. `180px` a `220px` de ancho).
   * Superposición (overlay) con un botón de `Play` central para indicar interactividad. Al hacer clic, se abre el modal de reproducción de YouTube existente.
2. **Lado Derecho (Metadatos):**
   * **Badge:** Año del mundial y país anfitrión (ej. `2022 - Catar`), utilizando colores temáticos planos para cada edición.
   * **Título:** Título del himno en fuente pesada (`font-black`), color blanco y tamaño destacado.
   * **Artista:** Nombre de los artistas en color índigo/azul claro sutil (`text-indigo-200/50`).

---

## 3. Mapeo de Datos Adicionales

Para enriquecer los metadatos de los himnos sin modificar el archivo de datos original (`src/data/worldCupAnthems.js`), definiremos un mapa local en `Footer.astro` que asocie el año del mundial con su país anfitrión:

```javascript
const hostCountries = {
  1990: "Italia",
  1994: "EE.UU.",
  1998: "Francia",
  2002: "Corea / Japón",
  2006: "Alemania",
  2010: "Sudáfrica",
  2014: "Brasil",
  2018: "Rusia",
  2022: "Catar"
};
```

---

## 4. Comportamiento y Interactividad (Client-side JS)

* **Visibilidad de Diapositivas:** Astro pre-renderizará todos los slides de himnos. Solo el primer slide (índice 0) tendrá la clase `active` (visible). Los demás slides estarán ocultos con la clase `hidden`.
* **Imagen de Fondo Dinámica:**
  * Al inicio del footer, se define una capa absoluta `#slideshow-bg` con baja opacidad (`opacity-0.08` u `8%`), desenfoque (`blur-[8px]`) y una máscara de degradado vertical oscura.
  * Al cambiar de diapositiva:
    1. Se reduce la opacidad de la capa `#slideshow-bg` a `0`.
    2. Mediante un temporizador (`setTimeout` de `150ms`), se actualiza la propiedad `backgroundImage` con la URL provista en el atributo `data-bg-url` del slide activo.
    3. Se restaura la opacidad a `0.08` para realizar una transición suave de desvanecimiento (fade-out / fade-in).
* **Lógica de Cambio:** El script de cliente rastreará el `activeIndex`.
  * Al hacer clic en "Siguiente", el índice incrementa en 1. Si supera el total, vuelve a 0.
  * Al hacer clic en "Anterior", el índice decrementa en 1. Si es menor que 0, va al último índice.
  * Ocultará el slide actual y mostrará el nuevo aplicando una clase de animación de transición (`fade-in-slide`).
* **Navegación por Teclado:** Se añade un event listener global para las teclas `ArrowLeft` (Anterior) y `ArrowRight` (Siguiente). Este listener solo actuará si el usuario no está escribiendo en campos de entrada de texto y el slideshow está visible.

---

## 5. Transición Animada (CSS)

Se incluirá un efecto de animación sutil y limpio al cambiar entre diapositivas:

```css
@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.anthem-slide.active {
  animation: fadeInSlide 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

---

## 6. Pruebas y Criterios de Aceptación
1. **Navegación Circular:** Al llegar al final de la lista, hacer clic en "Siguiente" debe llevar al himno de 1990. Lo mismo a la inversa con "Anterior".
2. **Reproducción de Video:** Al hacer clic en la portada de cualquier slide activo, debe abrirse correctamente el modal de YouTube con el ID correspondiente.
3. **Responsive Design:** La tarjeta y sus flechas laterales flex-between deben verse correctamente y con tamaño de texto legible tanto en dispositivos móviles (apilado vertical, botones al lado) como en pantallas de escritorio (alineación horizontal con amplio espacio lateral).
