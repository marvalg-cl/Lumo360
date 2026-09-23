# Lumo360 · Núcleo final consolidado · Máster LUMOBRAL 2026-09-17

Paquete PWA plano para LUMOBRAL. El `index.html` parte de una única base `SEED` y el catálogo de productos se toma exclusivamente del último máster entregado.

## Máster aplicado
Fuente de verdad: `LUMO360_LUMOBRAL_MASTER_CONTACTOS_2026-09-17.xlsx`.

- Productos: **288**.
- SKU de productos: **288 únicos**, sin SKU vacío ni duplicado.
- Clientes: **68**.
- Contactos: **321**.
- Proveedores: **11**.
- Cotizaciones históricas: **81**.
- Ítems históricos de cotización: **249**.
- Próximo folio: **COT-0082**.
- La clasificación de productos usa los campos del máster `PRODUCTOS`.
- La estructura de clasificación adjunta aporta **11 familias**; 10 están representadas actualmente por productos.
- Los 67 ítems históricos que no tienen correspondencia confiable quedan como `HIST-REVISAR`; no se crean productos ni SKU ficticios para resolverlos.
- Los SKU históricos anteriores fueron retirados de la base de productos y de los metadatos de líneas históricas; las líneas históricas conservan su descripción, cantidad, precio y documento de origen.

## Núcleo y persistencia
- No hay `MASTER_20260917`, `mergeMaster20260917`, `seedMigration` ni cadenas de migración automática.
- Se usa un espacio de persistencia nuevo para que una base local anterior no pueda sobrescribir el máster actual.
- IndexedDB es la persistencia principal; `localStorage` queda solo como contingencia cuando IndexedDB no está disponible. Esto evita serializar el estado completo dos veces en cada guardado y reduce carga/memoria.
- El Service Worker usa un caché nuevo y elimina cachés anteriores de Lumo360 al activarse.

## COBRAR / CERRAR
Solo aparecen operaciones que tengan:
1. Pedido confirmado.
2. Todas las líneas cumplidas/listas/recibidas/fabricadas/completas.
3. Ninguna factura existente.
4. Pedido no anulado/cancelado.

Las cotizaciones por sí solas no ocupan esta estación.

## PDF y mensajería
- Motor documental único en A4.
- Primera página reserva 20 líneas; las siguientes conservan la misma geometría.
- SKU separado de producto en el maestro.
- Mensajería diferenciada para correo y WhatsApp, con llamada a la acción.

## Integridad revisada
- JavaScript: sintaxis válida.
- Funciones: 249 definiciones / 249 nombres únicos.
- SKU maestros: 288 / 288 únicos.
- Sin restos de scripts de migración/versionado retirados.
- Sin referencias `historicalSku` / `skuHistorico`.
- Sin IDs HTML estáticos duplicados.
- ZIP plano, sin carpetas.
