# Plan de Implementación: Datos Editoriales de Países y Actualización de Tarjetas de Detalle

Este plan detalla los pasos técnicos y verificaciones necesarias para implementar los cambios aprobados en la especificación de diseño.

## 1. Tareas de Implementación

### Paso 1: Enriquecer `worldCupGroups.js`
*   Localización: [worldCupGroups.js](file:///Z:/Code/MusicaMundial/src/data/worldCupGroups.js)
*   Acción: Actualizar la propiedad `profile` para cada uno de los 48 equipos distribuidos en los 12 grupos (A a L) con la estructura definida:
    ```javascript
    profile: {
      capital: "...",
      capitalNativeName: "...",
      confederation: "...",
      qualificationRoute: "...",
      fifaRanking: ...,
      worldCupAppearances: ...
    }
    ```
*   Verificar que no haya errores de sintaxis en el archivo JS modificado.

### Paso 2: Actualizar `CountryHero.astro`
*   Localización: [CountryHero.astro](file:///Z:/Code/MusicaMundial/src/components/CountryHero.astro)
*   Acción:
    1. Reemplazar la sección de cards (líneas 60 a 71 en la versión original).
    2. Colocar el nuevo grid de 2 columnas (`grid grid-cols-2 gap-3 mt-8`).
    3. Implementar las 4 nuevas cards (Confederación, Capital, Mundiales y Ranking FIFA) con el comportamiento condicional para `fifaRanking` y la lógica para "Debut mundialista" si las participaciones son `0`.
    4. Garantizar que la tipografía del nombre nativo de la capital sea más pequeña e independiente del nombre en español.

---

## 2. Pruebas y Criterios de Aceptación

### Verificaciones Manuales
1.  **Levantar servidor de desarrollo:**
    *   Ejecutar `npm run dev` para corroborar que el proyecto compila y funciona localmente.
2.  **Verificar país con ranking y apariciones normales:**
    *   Ir a `/pais/ar/` (Argentina) o `/pais/es/` (España).
    *   Asegurar que se muestren las 4 tarjetas (Capital, Confederación, Mundiales, Ranking FIFA).
    *   Verificar que aparezca el nombre nativo de la capital.
3.  **Verificar país debutante (Participaciones = 0):**
    *   Ir a `/pais/cw/` (Curazao) o `/pais/cv/` (Cabo Verde).
    *   Asegurar que la tarjeta de "Mundiales" diga "Debut mundialista".
4.  **Verificar país con ranking nulo (si hubiese):**
    *   Asegurar que la tarjeta de Ranking se oculte por completo si el valor es `null` y la grilla se distribuya de forma limpia.
5.  **Build de producción:**
    *   Ejecutar `npm run build` para asegurar que todo compila para producción sin warnings ni errores de TypeScript/Astro.
