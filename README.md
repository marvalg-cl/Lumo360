# Lumo360 · PWA

Núcleo único y autocontenido de Lumo360 para LUMOBRAL. No requiere CDN ni librerías externas para ejecutar la interfaz.

## Publicación en GitHub Pages

1. Sube todo el contenido de esta carpeta al repositorio.
2. En GitHub: **Settings → Pages → Deploy from a branch**.
3. Selecciona la rama y la carpeta raíz (`/`).
4. Abre la URL HTTPS publicada.

El `manifest.json`, los iconos y `sw.js` están preparados para instalación PWA. El Service Worker se activa sobre HTTPS (GitHub Pages) y conserva el núcleo para uso offline.

## Estructura

- `index.html` — aplicación completa.
- `manifest.json` — definición PWA.
- `sw.js` — caché y continuidad offline.
- `icons/` — iconos SVG/PNG.
- `.nojekyll` — evita procesamiento innecesario de Jekyll.

## Nota de datos

La aplicación conserva su almacenamiento local en el navegador. Antes de limpiar datos del navegador, usa la exportación de respaldo disponible en Configuración.
