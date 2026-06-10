/**
 * Genera la URL de la imagen de fondo cultural para una selección.
 * Si no está definida en los datos, genera un fallback dinámico usando Unsplash.
 * @param {Object} team Objeto del país/selección.
 * @returns {string} URL de la imagen.
 */
export function getCultureImage(team) {
  if (!team) return "";
  return (
    team.image ||
    `https://images.unsplash.com/featured/800x600/?${encodeURIComponent(team.name)},culture,landscape`
  );
}

/**
 * Transforma una URL de imagen de alta resolución (Unsplash o Pexels) en una miniatura
 * de baja resolución y muy ligera para efectos de carga Blur-up.
 * @param {string} url URL de la imagen de alta resolución.
 * @returns {string} URL de la miniatura de baja resolución.
 */
export function getLowResPlaceholder(url) {
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
  } catch (e) {
    // Retornar la URL original si no es válida o no es soportada
  }
  return url;
}
