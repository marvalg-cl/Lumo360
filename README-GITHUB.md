# Lumo360 NEO · LUMOBRAL

Versión final preparada para publicación estática en GitHub Pages.

## Publicación
1. Descomprime el ZIP.
2. Sube `index.html`, `logo.png`, `icon-192.png`, `manifest.webmanifest`, `sw.js` y `.nojekyll` al directorio raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y carpeta `/ (root)`.
6. Guarda y espera la publicación.
7. Abre la URL de GitHub Pages.

## Importante
- Es una aplicación estática: los datos se guardan localmente en el navegador mediante localStorage/IndexedDB según las funciones existentes.
- El service worker está incluido para la experiencia PWA/offline y usa una versión de caché nueva.
- Si GitHub Pages muestra una versión anterior, realiza una recarga completa o elimina los datos/caché del sitio y vuelve a abrirlo.
- Los SKU se muestran sin el prefijo `LB-`; la normalización también limpia registros existentes al cargar/guardar.
- Los listados principales se ordenan alfabéticamente independientemente de la fecha de creación y cuentan con búsqueda por texto.
