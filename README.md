# Lumo360 · LUMOBRAL

Sistema Comercial Continuo para LUMOBRAL SpA.

## Estructura

- `index.html` — aplicación completa, núcleo único HTML/CSS/JS.
- `manifest.json` — configuración PWA.
- `sw.js` — Service Worker para funcionamiento instalable/offline del shell.
- `icon-192.png` y `icon-512.png` — iconos PWA en la raíz.

## GitHub Pages

1. Crear un repositorio **privado**.
2. Subir el contenido de esta carpeta a la raíz del repositorio.
3. En GitHub: **Settings → Pages → Deploy from a branch**.
4. Seleccionar la rama principal y `/ (root)`.
5. Abrir la URL publicada. El Service Worker se activa sobre HTTPS.

## Datos y privacidad

Esta versión conserva el maestro y la configuración operativa incorporados en la aplicación. Incluye datos comerciales reales y campos sensibles de configuración. **No publicar este paquete en un repositorio público.**

Si se necesita un repositorio público, primero debe separarse el maestro operativo de clientes/proveedores y la configuración privada del código de la aplicación.

## Persistencia

Lumo360 trabaja con almacenamiento local del navegador. Antes de cambiar de equipo o limpiar los datos del navegador, utilizar la función de respaldo/restauración disponible dentro de la aplicación.

## Alcance

La aplicación es una herramienta comercial/operativa local. La emisión de documentos tributarios y la integración automática con SII no se ejecutan desde este archivo.
