# Lumo360 · Núcleo final auditado

Paquete PWA plano para LUMOBRAL.

## Núcleo
- Una sola base de estado inicial: los datos históricos consolidados quedan materializados en `SEED`.
- Sin `MASTER_20260917`, sin `mergeMaster20260917()` y sin `seedMigration()` al iniciar.
- Sin etiquetas de versiones acumulativas en la interfaz/código.
- Se conservan las capacidades existentes: clientes, contactos, obras, productos, proveedores, cotización, pedidos, abastecimiento, comparador, compras/fabricación, recepción, entrega, finanzas, auditoría, importación histórica, Google Drive/OAuth y PWA.
- La auditoría regresiva elimina duplicación, código muerto y capas de actualización, sin retirar funcionalidades.

## PDF documental transversal
Un único motor A4 (`buildDocumentPdf`) alimenta cotizaciones, pedidos, solicitudes de cotización, abastecimiento documental, órdenes de compra, facturas, notas de crédito, boletas y guías de despacho.

La geometría es común:
- Primera página: reserva siempre 20 líneas de detalle.
- Páginas siguientes: conservan la misma grilla.
- La descripción dispone de mayor ancho útil; Cantidad y Unidad se desplazaron hacia la derecha.
- Las bandas alternadas de filas quedan centradas exactamente sobre cada fila, con la primera en blanco y la segunda en celeste, repitiéndose de forma uniforme.
- Totales, condiciones, transferencia y firmas permanecen en zonas estables.

## Mensajería
Los documentos disponen de salida por correo y WhatsApp con mensajes generados según el medio y el tipo documental:
- Correo: formal, profesional y con llamado explícito a la acción/confirmación.
- WhatsApp: cercano, breve, profesional y con llamado visible a confirmar, responder o coordinar el siguiente paso.
- El PDF se genera y descarga antes de abrir el canal para facilitar su adjunto.

## PWA
Abrir `index.html` directamente o publicar los archivos en GitHub Pages u otro hosting estático. El paquete no contiene carpetas: todos los archivos están en la raíz.
