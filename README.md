# LUMO360 · LUMOBRAL — Producción

PWA ERP/CRM de operación comercial. Esta versión usa un único `index.html` con un único bloque JavaScript y no depende de CDNs para funcionar.

## Persistencia
- IndexedDB es la persistencia principal del navegador.
- localStorage se mantiene solo como respaldo/migración de compatibilidad.
- La aplicación funciona offline y el service worker permite abrirla como PWA en navegadores compatibles.
- La sincronización entre celular y PC se realiza mediante Google Drive cuando se conecta la cuenta.

## Google Drive — configuración única
La integración usa OAuth 2.0 + PKCE y la API de Google Drive. No se almacena un client secret en la aplicación.

1. Crea un proyecto en Google Cloud.
2. Habilita **Google Drive API**.
3. Configura la pantalla de consentimiento OAuth.
4. Crea un **OAuth Client ID → Web application**.
5. Agrega como origen JavaScript y URI de redirección la URL exacta donde publiques `index.html`.
6. Abre LUMO360 → Configuración → Sincronización y nube.
7. Introduce el Client ID y guarda.
8. Pulsa **Conectar Google Drive** y autoriza la cuenta.

La aplicación crea/usa `Mi Drive/LUMO360/LUMO360_SYNC.json`. Después de conectar la misma cuenta en el teléfono y PC, los cambios se suben automáticamente y al abrir la aplicación se comprueba si existe una versión más reciente.

### Seguridad de sincronización
- Se utiliza `drive.file`, no acceso total a todo el Drive.
- El intercambio OAuth utiliza PKCE.
- Si dos dispositivos tienen cambios incompatibles, se conserva una copia `LUMO360_CONFLICT_*.json` antes de aplicar la versión remota.

## Publicar en GitHub Pages
Sube el contenido de esta carpeta al repositorio y activa GitHub Pages para la rama/carpeta correspondiente. La URL resultante debe ser la que registres como origen/redirección de OAuth.

## Reglas de datos
- Maestros ordenados alfabéticamente, independiente de la fecha de creación.
- SKU obligatorio y automático para productos.
- Formato SKU: `XXX-XX-123`.
- El prefijo heredado `LB-` no forma parte de ningún SKU.
- El Cotizador Técnico no forma parte de esta aplicación.
- Las cotizaciones no se pueden guardar con líneas sin SKU válido, producto, cantidad y precio.
