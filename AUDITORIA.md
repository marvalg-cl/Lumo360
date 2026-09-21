# Auditoría y limpieza Lumo360

Fecha: 2026-09-21

## Resultado

- [x] Núcleo único HTML conservado.
- [x] Sin reintroducir Cotizador Técnico independiente.
- [x] Pipeline comercial separado de la ejecución operativa.
- [x] Calificación de lead antes de cotizar.
- [x] Próxima acción y seguimiento comercial.
- [x] Registro de oportunidades ganadas/perdidas y motivo de pérdida.
- [x] Conversión a pedido después del cierre comercial.
- [x] Abastecimiento, compra/fabricación, recepción y entrega vinculados a la venta.
- [x] Facturación interna con estado explícito `NO ENVIADO AL SII`.
- [x] Destinatarios de documentos configurables.
- [x] Motor PDF estándar transversal.
- [x] Formato PDF basado en el documento corporativo de referencia.
- [x] PDF multipágina para listados extensos.
- [x] Manifest PWA real incluido en el repositorio.
- [x] Service worker incluido.
- [x] Iconos 192/512 incluidos.
- [x] README de GitHub incluido.
- [x] Sintaxis JavaScript verificada con Node.js `--check` sobre los bloques script.

## Puntos deliberadamente fuera de alcance

1. Envío tributario al SII: no se implementa.
2. Envío automático de email con adjunto: el HTML puede generar el PDF y preparar `mailto`; para envío automático se requiere backend/servicio de correo.
3. Certificación tributaria: el sistema no debe interpretar una factura interna como DTE aceptado por SII.

## Criterio de reversibilidad

Los cambios se concentran en el archivo único y en activos PWA externos al núcleo. La estructura de datos existente se conserva y los campos comerciales se inicializan de forma tolerante (`ensureSalesFields`). El motor documental se centraliza en `buildStandardPdf()` para evitar variantes de PDF dispersas.
