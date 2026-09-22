# Lumo360 · Núcleo Puro

Entrega limpia del núcleo operativo de LUMOBRAL.

- `index.html`: núcleo único de aplicación; HTML, CSS y JavaScript autocontenidos.
- `manifest.json`, `sw.js` e iconos: únicamente los artefactos necesarios para PWA.
- Sin versiones Vxx, capas de Reinvención 360°, Google Drive/OAuth, importadores heredados ni scripts de parche en ejecución.
- Los datos históricos ya están consolidados en el estado inicial; no se vuelven a inyectar mediante una rutina de actualización.
- Persistencia local: IndexedDB con respaldo JSON local.
- Motor PDF único y plantilla A4 con retícula fija de 20 líneas en primera página.

Para GitHub Pages, coloca estos archivos directamente en la raíz del repositorio.
