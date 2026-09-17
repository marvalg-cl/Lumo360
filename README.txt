LUMO360 · LUMOBRAL — NÚCLEO ÚNICO FINAL

Arquitectura consolidada:
- Un solo index.html como núcleo de aplicación, estado, vistas, eventos, datos e importación/exportación.
- Sin scripts de parches, sin capas de actualización y sin funciones duplicadas.
- Librerías externas (Excel, PDF, OCR y Google Drive) se cargan únicamente cuando la función las necesita; no son núcleos alternativos.
- Un solo Service Worker y un solo identificador de caché final.

Datos:
- Importación Excel transversal: clientes/empresas, contactos, obras, productos, proveedores, cotizaciones, ítems, actividades, solicitudes, pedidos, órdenes de compra, necesidades de compra, oportunidades, documentos fiscales, bandeja, usuarios, cuentas, tesorería, adjudicaciones, archivos, auditoría, configuración y contadores.
- Hojas vacías o ausentes no borran datos existentes.
- PRODUCTOS se valida antes de reemplazar: SKU XXX-XXX-0000, familia/categoría coherentes y unicidad.
- Exportación Excel es de ida y vuelta e incluye las mismas entidades y configuración/contadores.

Búsqueda:
- Transversal y tolerante a mayúsculas/acentos.
- Wildcards con *: COST*100, PANEL*100, 761234*, CONSTR*, 100*50.

PWA:
- Usar HTTPS o localhost para Service Worker/PWA. Abrir index.html como file:// o content:// no permite el funcionamiento completo del Service Worker.
