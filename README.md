# LUMO360 · LUMOBRAL

PWA CRM/ERP de LUMOBRAL.

## Contenido
- `index.html` — núcleo único de la aplicación.
- `sw.js` — Service Worker/PWA.
- `manifest.webmanifest` — manifiesto PWA.
- `icon-192.png` — icono de instalación.
- `LUMOBRAL_MASTER_DATOS_TRABAJO_2026-09-17.xlsx` — maestro de datos para importación/exportación.

## Datos de trabajo
- Cotizaciones históricas de clientes integradas en la aplicación y renumeradas comercialmente.
- Solicitudes/ofertas de proveedores no se cargan como datos históricos.
- Las mejoras del proceso de abastecimiento quedan incorporadas en la estructura funcional.

## Publicación
Para GitHub Pages, publicar el contenido de esta carpeta como sitio estático. La PWA requiere HTTPS para Service Worker/instalación.


## Estado de datos 2026-09-17
- Se incorporaron únicamente cotizaciones de cliente del nuevo ZIP.
- Solicitudes y ofertas de proveedores del nuevo ZIP NO se cargaron al comparador.
- Esas solicitudes solo se usaron para extraer reglas/mejoras de abastecimiento.
- Las nuevas cotizaciones fueron normalizadas a folios comerciales consecutivos posteriores al maestro existente.
- El siguiente folio queda listo para la próxima cotización nueva.


## Contactos comerciales y Google Contacts
- Se incorporan 321 contactos comerciales depurados desde la base de `lumobral@gmail.com`.
- La hoja `CONTACTOS` conserva los contactos normalizados y `MATRIZ_CONTACTOS` documenta la vinculación con el maestro de clientes cuando existe una coincidencia confiable.
- La sincronización Google usa OAuth y Google People API; no se guardan contraseñas ni tokens de Google.
- Al autorizar la cuenta se puede sincronizar en ambos sentidos: Google Contacts → LUMO360 y LUMO360 → Google Contacts.
- Google limita las operaciones de escritura de contactos; los registros que no alcancen a sincronizarse quedan en una cola local `googleContactsPending` para siguientes sincronizaciones.
- Para usar esta función, el proyecto de Google Cloud debe tener habilitada People API y el consentimiento OAuth debe permitir el alcance `https://www.googleapis.com/auth/contacts`. citeturn0search0turn1search4
