# LUMO360 · CRM & ERP · LUMOBRAL

Suite de gestión comercial y técnica para LUMOBRAL (materiales de construcción y acero).
Aplicación web progresiva (PWA) de un solo archivo, sin backend — los datos viven en el
dispositivo (localStorage + respaldo en IndexedDB) con sincronización opcional a Google Drive.

## Publicar en GitHub Pages

1. Sube estos archivos a la raíz del repositorio (o a `/docs` si prefieres esa carpeta).
2. En **Settings → Pages**, elige la rama y carpeta donde quedaron estos archivos.
3. GitHub Pages servirá `index.html` automáticamente en la URL que te asigne.

## Archivos

- `index.html` — la aplicación completa (HTML + CSS + JS en un solo archivo).
- `manifest.webmanifest` — metadatos de instalación (PWA).
- `sw.js` — service worker para funcionamiento offline.
- `icon-192.png` / `icon-512.png` — íconos de instalación.

## Sincronización con Google Drive (opcional)

En **Configuración → Sincronización**, se puede conectar un Client ID de Google Cloud propio
para sincronizar los datos entre dispositivos a través de Google Drive. Instrucciones dentro
de la misma pantalla de configuración.

## Módulos incluidos

CRM (empresas, contactos, actividades, pipeline), Cotizador técnico (perfiles, Tubest, Metalcon,
PV4 con fórmula real de peso de acero), Cotizaciones y Pedidos, Abastecimiento (RFQ con comparador
y adjudicación, Órdenes de Compra), Inventario, Documentos (boletas/facturas/guías/notas de crédito),
Finanzas, Control de gestión, Auditoría / Integridad y Reportes.
