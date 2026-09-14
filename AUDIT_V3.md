# LUMO360 V3 — Auditoría integral de UX y búsqueda

## Alcance
Revisión transversal de maestros, documentos, operación, abastecimiento, inventario, finanzas y búsqueda global.

## Correcciones aplicadas
- Búsqueda de página sin reconstruir la pantalla en cada tecla; filtra los registros ya renderizados y conserva foco/cursor.
- Buscadores maestros mantienen búsqueda inmediata, A–Z y filtros de stock.
- Buscadores de Cliente/Obra en cotización muestran resultados completos, desplazables y posicionados respecto del campo, incluso cerca del borde inferior del móvil.
- Selector universal de Producto/Proveedor/Cliente/Obra usa lista desplazable propia.
- Búsqueda global ampliada a Clientes, Contactos, Obras, Productos, Proveedores, Cotizaciones, Pedidos, Órdenes de compra, Solicitudes y Facturas.
- Se agregaron buscadores a Documentos y Cobranza.
- Se evitó que el pie de cotización tape subtotal, IVA, total o notas mediante espacio de desplazamiento y ownership de scroll.
- Se incrementó el caché PWA a V3.

## Integridad técnica
- 1 bloque `<script>` en el HTML final.
- JavaScript validado con `node --check`.
- IndexedDB, BroadcastChannel, Service Worker y sincronización Google Drive presentes.
- Formato SKU canónico `XXX-XX-123` presente en el motor de validación/generación.
- Cotizador Técnico separado no presente.
- Paquete ZIP validado con `unzip -t`.

## Limitación
La prueba de interacción visual completa en un navegador móvil físico no puede ejecutarse en este entorno. La validación realizada aquí es estática, sintáctica y de estructura; la prueba final de tacto/scroll debe hacerse en el dispositivo donde se instala la PWA.
