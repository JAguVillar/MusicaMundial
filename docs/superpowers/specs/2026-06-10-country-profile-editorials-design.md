# Especificación de Diseño: Datos Editoriales de Países y Actualización de Tarjetas de Detalle

Este documento define la especificación para enriquecer los datos de las selecciones de la Copa Mundial de la FIFA 2026™ y actualizar las tarjetas de información en la página de detalles de cada país.

## 1. Contexto y Objetivos

El objetivo principal es enriquecer la información disponible para cada selección nacional en el archivo `worldCupGroups.js` agregando una propiedad `profile` que almacena datos de capital, confederación, clasificación y participaciones mundialistas. Posteriormente, se actualizará el componente `CountryHero.astro` para mostrar estos datos en reemplazo de las tarjetas de "Código" y "Estado musical".

## 2. Requerimientos de Datos

Para cada uno de los 48 equipos en `worldCupGroups.js`, se añadirá la siguiente estructura:

```typescript
profile: {
  capital: string,
  capitalNativeName: string,
  confederation: "AFC" | "CAF" | "CONCACAF" | "CONMEBOL" | "OFC" | "UEFA",
  qualificationRoute: string,
  fifaRanking: number | null,
  worldCupAppearances: number | null
}
```

### Reglas de Negocio para los Datos:
1. **Nombres de Capitales:** En español para `capital` y en el idioma local/nativo para `capitalNativeName`.
2. **Confederación:** Limitada a los valores exactos `"AFC" | "CAF" | "CONCACAF" | "CONMEBOL" | "OFC" | "UEFA"`.
3. **Estadísticas de la FIFA:** Datos de `fifaRanking` (CM) y `worldCupAppearances` (Particip.) obtenidos del sitio oficial de la FIFA para el Mundial 2026.
4. **Campos no alterados:** No se modificarán las propiedades existentes como `name`, `countryCode`, `flag`, `fifaCode`, `image` ni `nativeName`.
5. **Funciones de apoyo:** Se mantienen intactas las funciones exportadas (`slugifyTeam`, `teams`, `findTeamBySlug`, `findGroup`).

---

## 3. Datos Editoriales de los 48 Países

A continuación se detallan los perfiles que se integrarán en el archivo de datos:

### Grupo A
*   **México:**
    *   Capital: `Ciudad de México`, Native: `Ciudad de México`
    *   Confederación: `CONCACAF`
    *   Ruta: `Coanfitrión`
    *   Ranking: `15`, Participaciones: `17`
*   **Sudáfrica:**
    *   Capital: `Pretoria`, Native: `Pretoria`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `60`, Participaciones: `3`
*   **Corea del Sur:**
    *   Capital: `Seúl`, Native: `서울`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `25`, Participaciones: `10`
*   **Chequia:**
    *   Capital: `Praga`, Native: `Praha`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `41`, Participaciones: `1`

### Grupo B
*   **Canadá:**
    *   Capital: `Ottawa`, Native: `Ottawa`
    *   Confederación: `CONCACAF`
    *   Ruta: `Coanfitrión`
    *   Ranking: `30`, Participaciones: `2`
*   **Bosnia y Herzegovina:**
    *   Capital: `Sarajevo`, Native: `Sarajevo`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `65`, Participaciones: `1`
*   **Qatar:**
    *   Capital: `Doha`, Native: `الدوحة`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `55`, Participaciones: `1`
*   **Suiza:**
    *   Capital: `Berna`, Native: `Bern`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `19`, Participaciones: `12`

### Grupo C
*   **Brasil:**
    *   Capital: `Brasilia`, Native: `Brasília`
    *   Confederación: `CONMEBOL`
    *   Ruta: `Clasificó por CONMEBOL`
    *   Ranking: `6`, Participaciones: `22`
*   **Marruecos:**
    *   Capital: `Rabat`, Native: `الرباط`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `8`, Participaciones: `6`
*   **Haití:**
    *   Capital: `Puerto Príncipe`, Native: `Port-au-Prince`
    *   Confederación: `CONCACAF`
    *   Ruta: `Clasificó por CONCACAF`
    *   Ranking: `83`, Participaciones: `1`
*   **Escocia:**
    *   Capital: `Edimburgo`, Native: `Edinburgh`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `43`, Participaciones: `7`

### Grupo D
*   **Estados Unidos:**
    *   Capital: `Washington D.C.`, Native: `Washington, D.C.`
    *   Confederación: `CONCACAF`
    *   Ruta: `Coanfitrión`
    *   Ranking: `16`, Participaciones: `11`
*   **Paraguay:**
    *   Capital: `Asunción`, Native: `Asunción`
    *   Confederación: `CONMEBOL`
    *   Ruta: `Clasificó por CONMEBOL`
    *   Ranking: `40`, Participaciones: `8`
*   **Australia:**
    *   Capital: `Canberra`, Native: `Canberra`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `27`, Participaciones: `6`
*   **Turquía:**
    *   Capital: `Ankara`, Native: `Ankara`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `22`, Participaciones: `2`

### Grupo E
*   **Alemania:**
    *   Capital: `Berlín`, Native: `Berlin`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `10`, Participaciones: `10`
*   **Curazao:**
    *   Capital: `Willemstad`, Native: `Willemstad`
    *   Confederación: `CONCACAF`
    *   Ruta: `Clasificó por CONCACAF`
    *   Ranking: `82`, Participaciones: `0`
*   **Costa de Marfil:**
    *   Capital: `Yamusukro`, Native: `Yamoussoukro`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `34`, Participaciones: `3`
*   **Ecuador:**
    *   Capital: `Quito`, Native: `Quito`
    *   Confederación: `CONMEBOL`
    *   Ruta: `Clasificó por CONMEBOL`
    *   Ranking: `23`, Participaciones: `4`

### Grupo F
*   **Países Bajos:**
    *   Capital: `Ámsterdam`, Native: `Amsterdam`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `7`, Participaciones: `10`
*   **Japón:**
    *   Capital: `Tokio`, Native: `東京`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `18`, Participaciones: `7`
*   **Suecia:**
    *   Capital: `Estocolmo`, Native: `Stockholm`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `38`, Participaciones: `12`
*   **Túnez:**
    *   Capital: `Túnez`, Native: `تونس`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `44`, Participaciones: `6`

### Grupo G
*   **Bélgica:**
    *   Capital: `Bruselas`, Native: `Bruxelles / Brussel`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `9`, Participaciones: `13`
*   **Egipto:**
    *   Capital: `El Cairo`, Native: `القاهرة`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `29`, Participaciones: `3`
*   **Irán:**
    *   Capital: `Teherán`, Native: `تهران`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `21`, Participaciones: `6`
*   **Nueva Zelanda:**
    *   Capital: `Wellington`, Native: `Wellington`
    *   Confederación: `OFC`
    *   Ruta: `Clasificó por OFC`
    *   Ranking: `85`, Participaciones: `2`

### Grupo H
*   **España:**
    *   Capital: `Madrid`, Native: `Madrid`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `2`, Participaciones: `16`
*   **Cabo Verde:**
    *   Capital: `Praia`, Native: `Praia`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `69`, Participaciones: `0`
*   **Arabia Saudita:**
    *   Capital: `Riad`, Native: `الرياض`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `61`, Participaciones: `6`
*   **Uruguay:**
    *   Capital: `Montevideo`, Native: `Montevideo`
    *   Confederación: `CONMEBOL`
    *   Ruta: `Clasificó por CONMEBOL`
    *   Ranking: `17`, Participaciones: `14`

### Grupo I
*   **Francia:**
    *   Capital: `París`, Native: `Paris`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `1`, Participaciones: `16`
*   **Senegal:**
    *   Capital: `Dakar`, Native: `Dakar`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `14`, Participaciones: `3`
*   **Irak:**
    *   Capital: `Bagdad`, Native: `بغداد`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `57`, Participaciones: `1`
*   **Noruega:**
    *   Capital: `Oslo`, Native: `Oslo`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `31`, Participaciones: `3`

### Grupo J
*   **Argentina:**
    *   Capital: `Buenos Aires`, Native: `Buenos Aires`
    *   Confederación: `CONMEBOL`
    *   Ruta: `Clasificó por CONMEBOL`
    *   Ranking: `3`, Participaciones: `18`
*   **Argelia:**
    *   Capital: `Argel`, Native: `الجزائر`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `28`, Participaciones: `4`
*   **Austria:**
    *   Capital: `Viena`, Native: `Wien`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `24`, Participaciones: `7`
*   **Jordania:**
    *   Capital: `Amán`, Native: `عمان`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `63`, Participaciones: `0`

### Grupo K
*   **Portugal:**
    *   Capital: `Lisboa`, Native: `Lisboa`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `5`, Participaciones: `8`
*   **República Democrática del Congo:**
    *   Capital: `Kinshasa`, Native: `Kinshasa`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `46`, Participaciones: `0`
*   **Uzbekistán:**
    *   Capital: `Taskent`, Native: `Toshkent`
    *   Confederación: `AFC`
    *   Ruta: `Clasificó por AFC`
    *   Ranking: `50`, Participaciones: `0`
*   **Colombia:**
    *   Capital: `Bogotá`, Native: `Bogotá`
    *   Confederación: `CONMEBOL`
    *   Ruta: `Clasificó por CONMEBOL`
    *   Ranking: `13`, Participaciones: `6`

### Grupo L
*   **Inglaterra:**
    *   Capital: `Londres`, Native: `London`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `4`, Participaciones: `16`
*   **Croacia:**
    *   Capital: `Zagreb`, Native: `Zagreb`
    *   Confederación: `UEFA`
    *   Ruta: `Clasificó por UEFA`
    *   Ranking: `11`, Participaciones: `6`
*   **Ghana:**
    *   Capital: `Accra`, Native: `Accra`
    *   Confederación: `CAF`
    *   Ruta: `Clasificó por CAF`
    *   Ranking: `74`, Participaciones: `4`
*   **Panamá:**
    *   Capital: `Ciudad de Panamá`, Native: `Ciudad de Panamá`
    *   Confederación: `CONCACAF`
    *   Ruta: `Clasificó por CONCACAF`
    *   Ranking: `33`, Participaciones: `1`

---

## 4. Cambios en la Interfaz de Usuario (`CountryHero.astro`)

### Reemplazo de Tarjetas
Las actuales tarjetas de "Código" y "Estado musical" se reemplazarán por completo.

Estructura HTML/Tailwind resultante en `CountryHero.astro` para las cards:
```astro
<div class="mt-8 grid gap-3 grid-cols-2">
  <!-- Tarjeta 1: Confederación -->
  <div class="rounded-2xl border border-white/10 bg-white/10 p-4 flex flex-col justify-between">
    <div>
      <p class="text-sm text-indigo-200">Confederación</p>
      <p class="mt-1 text-2xl font-black text-white">
        {team.profile.confederation}
      </p>
    </div>
    <p class="mt-2 text-xs text-indigo-300 font-medium leading-tight">
      {team.profile.qualificationRoute}
    </p>
  </div>

  <!-- Tarjeta 2: Capital -->
  <div class="rounded-2xl border border-white/10 bg-white/10 p-4 flex flex-col justify-between">
    <div>
      <p class="text-sm text-indigo-200">Capital</p>
      <p class="mt-1 text-2xl font-black text-white leading-tight">
        {team.profile.capital}
      </p>
    </div>
    {team.profile.capitalNativeName && team.profile.capitalNativeName !== team.profile.capital && (
      <p class="mt-2 text-xs text-indigo-300 font-semibold tracking-wide">
        {team.profile.capitalNativeName}
      </p>
    )}
  </div>

  <!-- Tarjeta 3: Participaciones -->
  <div class="rounded-2xl border border-white/10 bg-white/10 p-4 flex flex-col justify-between">
    <div>
      <p class="text-sm text-indigo-200">Mundiales</p>
      <p class={`mt-1 font-black text-white leading-tight ${team.profile.worldCupAppearances === 0 ? 'text-lg md:text-xl' : 'text-2xl'}`}>
        {team.profile.worldCupAppearances === 0 ? "Debut mundialista" : team.profile.worldCupAppearances}
      </p>
    </div>
    {team.profile.worldCupAppearances > 0 && (
      <p class="mt-2 text-xs text-indigo-300 font-medium">
        {team.profile.worldCupAppearances === 1 ? "participación" : "participaciones"}
      </p>
    )}
  </div>

  <!-- Tarjeta 4: Ranking FIFA (Condicional) -->
  {team.profile.fifaRanking !== null && (
    <div class="rounded-2xl border border-white/10 bg-white/10 p-4 flex flex-col justify-between">
      <div>
        <p class="text-sm text-indigo-200">Ranking FIFA</p>
        <p class="mt-1 text-2xl font-black text-white">
          #{team.profile.fifaRanking}
        </p>
      </div>
      <p class="mt-2 text-xs text-indigo-300 font-medium">
        posición oficial
      </p>
    </div>
  )}
</div>
```

---

## 5. Plan de Pruebas

1.  **Validación de sintaxis:** Confirmar que `worldCupGroups.js` sigue siendo un módulo JS válido mediante la ejecución del compilador de Astro / build local.
2.  **Verificación de páginas de países:**
    *   Ingresar a la página de Japón (`/pais/jp/` o similar) y comprobar que muestre "Tokio" y "東京" en la tarjeta de Capital.
    *   Ingresar a un país debutante (como Curazao, Cabo Verde o Jordania) y corroborar que en la tarjeta de Mundiales muestre "Debut mundialista" en un tamaño de letra adecuado.
    *   Probar con un país con ranking FIFA no nulo y asegurar que renderice la cuarta tarjeta correctamente.
    *   Validar que si algún país tuviera ranking `null`, la interfaz no se rompa y se ordene correctamente (grilla limpia).
