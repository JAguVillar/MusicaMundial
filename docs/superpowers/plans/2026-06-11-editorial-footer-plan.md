# Plan de Implementación: Sección de Pie de Página Editorial e Himnos de los Mundiales

Este plan detalla los pasos técnicos y verificaciones necesarias para implementar el footer editorial, la línea de tiempo de himnos de los mundiales con modal de video, y el pie de página general.

## 1. Tareas de Implementación

### Paso 1: Crear `worldCupAnthems.js`
*   Localización: `src/data/worldCupAnthems.js`
*   Acción: Crear el archivo y exportar la constante `worldCupAnthems` conteniendo los 9 himnos mundialistas detallados en la especificación, con sus respectivos IDs de YouTube, miniaturas oficiales y colores para los badges de años.

### Paso 2: Crear el componente `Footer.astro`
*   Localización: `src/components/Footer.astro`
*   Acción:
    1. Importar `worldCupAnthems` desde `../data/worldCupAnthems.js`.
    2. Importar los iconos de Lucide necesarios (ej. `Play`, `Headphones`, `Sparkles` o similares si corresponde) o usar SVG personalizados.
    3. Maquetar la sección de "Himnos de los Mundiales" con scroll horizontal.
    4. Implementar el Modal de Video en HTML/JS interactivo (Vanilla JS) que agregue el iframe de YouTube con autoplay al hacer click en el botón de reproducir y lo elimine del DOM al cerrar.
    5. Maquetar el banner CTA final ("Explora. Escucha. Conecta.") con un botón que apunte a `#grupos`.
    6. Maquetar las 4 columnas de enlaces de pie de página y la barra de copyright inferior.

### Paso 3: Integrar en `index.astro`
*   Localización: [index.astro](file:///Z:/Code/MusicaMundial/src/pages/index.astro)
*   Acción:
    1. Importar el componente `Footer` al inicio de las dependencias.
    2. Renderizar `<Footer />` al final del documento (justo antes del cierre de `<BaseLayout>`).

---

## 2. Pruebas y Criterios de Aceptación

### Verificaciones Manuales
1.  **Carga del timeline:** El listado de 9 himnos debe mostrarse en formato horizontal. Comprobar que en pantallas Desktop el scroll horizontal sea fluido y en pantallas táctiles soporte el snap-scrolling.
2.  **Lógica del reproductor (Modal):**
    *   Hacer click en el botón de reproducción (play) de cualquier tarjeta de himno.
    *   Validar que se abra el modal oscureciendo y desenfocando la pantalla de fondo.
    *   Verificar que se cargue e inicie la reproducción del video de YouTube en el iframe.
    *   Cerrar el modal mediante el botón de cruz `[X]` o haciendo click fuera del video, y comprobar que el video y el audio de fondo se detengan completamente.
3.  **Botón Explorar Selecciones:** Hacer click en el botón de la sección de CTA final y verificar que la página realice un scroll suave de regreso al selector de grupos (`#grupos`).
4.  **Enlaces y Copyright:** Comprobar que todos los enlaces inferiores se rendericen correctamente y se muestre el aviso de copyright al fondo.
5.  **Build de Producción:** Ejecutar `npm run build` para asegurar que no hay errores de sintaxis en el componente o de tipado en Astro.
