# Lumo360 · LUMOBRAL

Sistema PWA de gestión comercial y operacional de LUMOBRAL, construido como un único núcleo HTML y preparado para GitHub Pages.

## Flujo principal

**Captura → Calificación → Pipeline comercial → Necesidad → Cotización → Negociación → Cierre → Pedido → Abastecimiento → Compra/Fabricación → Recepción → Entrega → Facturación interna → Cobranza → Cliente activo → Recompra.**

El antiguo módulo independiente **Cotizador Técnico** no forma parte de esta arquitectura. La cotización es una estación del flujo comercial.

## Documentos

El motor documental utiliza un formato único inspirado en el formato corporativo entregado por LUMOBRAL (`cotz1.pdf`): encabezado limpio, identificación, línea naranja, tarjetas de información, tabla oscura, bloque de totales naranja y pie institucional. Se reutiliza para cotizaciones, solicitudes de cotización, pedidos, órdenes de compra, facturas y notas de crédito.

Las facturas y notas de crédito se **generan y archivan internamente**. Esta versión no integra envío automático al SII y muestra explícitamente `NO ENVIADO AL SII` en los documentos tributarios internos.

Los documentos pueden preparar un correo hacia los destinatarios configurados en la aplicación. El envío real depende del cliente de correo o de una futura integración backend.

## Configuración de correo

- Correo contador: editable.
- Correo LUMOBRAL: editable.
- Destinatarios usados por la acción documental: `correoContador1` y `correoContador2`.

## Diseño

- Primario: `#1E3A8A`.
- Fondo: `#F8FAFC`.
- Acento LUMOBRAL heredado: `#F45A00`.
- Tipografía de interfaz: Inter/system sans.
- Iconografía plana, geométrica y consistente.

## Ejecución

Abrir `index.html` en un navegador para uso local. Para PWA/service worker se recomienda servirlo por HTTPS, por ejemplo mediante GitHub Pages.

## Auditoría incluida

Consultar `docs/AUDITORIA.md` para el checklist de regresión aplicado a arquitectura, datos, documentos, SII, PWA, navegación y sintaxis.
