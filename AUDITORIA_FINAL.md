# Auditoría final Lumo360 · 06-10-2026

## Estructura

- Núcleo de aplicación: `index.html`.
- Bloques `<style>`: 1.
- Bloques `<script>`: 1.
- Funciones declaradas: 434.
- Funciones duplicadas por declaración: 0.
- Sintaxis JavaScript: OK con `node --check`.
- IDs estáticos HTML duplicados: 0.
- Referencias externas a CSS/JS: 0.

## UX móvil aplicada

- Cotizador: producto en ficha de ancho completo.
- Datos de línea: Cantidad → Unidad → Precio Neto → Sub Total → Eliminar en una sola fila horizontal desplazable.
- La fila inferior tiene su propio desplazamiento y no fuerza a comprimir los campos.
- El mismo principio se conserva para no romper tablas operativas que requieren más ancho.
- Solicitudes a proveedores mantienen matriz en escritorio y selección directa por producto en móvil.
- Plazo de respuesta de solicitudes: `INMEDIATA`.

## Persistencia / PWA

- Manifest PWA incluido.
- Service Worker incluido.
- Iconos 192/512 incluidos.
- El shell puede instalarse cuando se publica por HTTPS, por ejemplo GitHub Pages.
- Los datos de la aplicación continúan siendo locales al navegador.

## Seguridad de publicación

Esta compilación contiene datos comerciales reales incorporados en el seed/configuración de la aplicación. Debe utilizarse como repositorio **privado**.

No debe publicarse en un repositorio GitHub público sin separar y sanitizar primero el maestro de clientes, contactos, proveedores, correos y configuración bancaria.

## Limitación de esta auditoría

Se realizó validación estática del HTML/JS/CSS y de la estructura del paquete. No se declara una prueba visual completa en un navegador móvil físico ni una prueba funcional integral de todos los módulos, porque el entorno de ejecución disponible no completó de forma fiable el arranque headless de esta aplicación.

## Revisión adicional (auditoría 2)

- Sintaxis JS verificada nuevamente: OK. Seed JSON parseable: 68 empresas, 321 contactos, 288 productos, 81 cotizaciones, 81 negocios, 11 proveedores.
- Los 68 RUT únicos del maestro pasan el dígito verificador (módulo 11).
- Corrección aplicada: el respaldo JSON y el respaldo a Drive ya no incluyen `driveAccessToken` (antes sí; `tgToken` y PIN ya se excluían).
- Pendiente recomendado: separar el seed (590 KB en una sola línea) a un archivo de datos privado, mover tokens fuera del estado persistente y agregar una política CSP cuando se pueda probar en navegador.

## Auditoría 3 · Layout y uso en terreno (celular, tablet y PC)

Probado en Chromium headless: 390x844 y 360x740 (celular), 768 y 1024 (tablet), 1440x900 (PC), recorriendo las 20 vistas. Sin errores de JavaScript y sin desborde horizontal de página en ningún tamaño.

Correcciones aplicadas (solo CSS, sin tocar la lógica):
1. Un bloque `@media(max-width:760px)` del cotizador quedaba sin cerrar y dejaba ~64 KB de CSS (menú lateral incluido) aplicando solo en celular. En PC el menú lateral se veía como botones grises sin estilo. Se cerró el bloque.
2. En PC, la línea del cotizador mostraba duplicados los campos de celular (Cantidad, Unidad, Precio, Subtotal). Ahora se ocultan sobre 760 px.
3. La lista de resultados del buscador de producto quedaba recortada (`contain: layout paint` de la tabla). Ahora se ve completa mientras está abierta.
4. Celular: sombra del menú lateral cerrado filtrándose en el borde izquierdo; monto del KPI "Neto cotizado" cortado con "…"; botones de la barra superior de 34 px bajan del mínimo táctil (ahora 40 px de ancho).

Pendiente recomendado (no aplicado): textos de 9 a 10 px en celular (162 elementos en Cotizaciones), 223 de 288 productos sin precio de venta y 234 sin costo (cotizan en $0), dos botones de tema (sol y luna) redundantes, el campo Cliente toma foco al abrir el editor (abre el teclado de inmediato), y los botones guardar/enviar/PDF del cotizador no tienen texto.

## Pasada UX terreno (celular)

Cambios aplicados y probados en Chromium (390 y 360 px, tablets 768/1024, PC 1440) sobre las 20 vistas, sin errores de JavaScript ni desbordes:
- Texto mínimo de 12 px en celular (variables `--fs*` dentro del CSS; en PC se conservan los tamaños originales).
- Un solo botón de apariencia en la barra superior que alterna Claro, Oscuro y Modo sol (alto contraste para exterior). Antes eran dos botones.
- Se quitó el botón duplicado "Búsqueda global" del cotizador (queda el buscador superior).
- Botones del cotizador con texto: Guardar, Enviar, PDF, Proveedores, Aceptar, Pedido, Facturar, Contra entrega, No ganada, Imprimir.
- En pantallas táctiles el editor ya no abre el teclado solo (la búsqueda global sí enfoca su campo).
- Acciones rápidas de cada módulo: ahora todas visibles (antes se cortaban fuera de pantalla), con la acción principal a ancho completo.
- Indicadores (KPI) unificados entre Inicio y Cotizador; en el cotizador pasan a una franja compacta para ver antes la lista.
- Cotización histórica: el recuadro de totales quedaba en una columna de 18 px y los botones del pie se veían como cuadros vacíos.

Sin cambiar (decisión pendiente): unificar los puntos de quiebre `@media` (hoy 700, 760, 560, 430), y cargar precios y costos en los productos sin valor.

## Prueba final como vendedor (flujo real)
Cliente del maestro -> producto con precio -> cantidad 10: Neto $62.000, IVA 19% $11.780, Total $73.780 (correcto). Guardar crea COT-0082 y sobrevive a recargar la página. PDF se genera y descarga con membrete, RUT y detalle. Modo sin conexión verificado con Service Worker (la app abre sin red). Carga en 0,2 s. Datos en IndexedDB (cuota ~254 MB).
Los indicadores en 0 del Inicio se explican porque los 81 negocios cargados están todos en etapa "cerrar" e históricos (no es un error).
Riesgos abiertos: sin PIN activo por defecto; respaldo solo manual o a Drive (el navegador puede borrar IndexedDB); precios/costos faltantes en el catálogo; datos reales dentro del HTML (repositorio privado).

## Cotizador: líneas como tabla (celular y PC)
- Las líneas ya no aparecen como fichas una al lado de otra: ahora son filas de tabla, una sobre otra, con el orden del PDF: Descripción (con SKU debajo) | Cant. | Un. | P. unit. | Subtotal.
- La descripción se ajusta a su texto (en PC) y se parte en varias líneas en celular, para que se vean todas las columnas sin deslizar.
- Corregido un error de fondo: cada línea tenía los campos duplicados (versión celular y versión tabla) con los mismos identificadores, y los totales leían siempre el primero. Ahora hay una sola versión, que se usa en todos los tamaños.
- Probado en 360, 390, 412 px y 1440 px: totales correctos (Neto, IVA 19%, Total), eliminar línea, guardar y recargar.
- Caché de la app: v3.

## Corrección: cotizador en celular como línea horizontal desplazable
La versión anterior comprimía todo para caber en pantalla (descripción partida en varias líneas). Ahora cada producto es UNA línea horizontal: Descripción (ancho completo del texto, con SKU debajo) | Cant. | Un. | P. unit. | Subtotal | eliminar. Las filas van una sobre otra y la tabla se desplaza hacia el lado, con sombra lateral y aviso "Desliza". En PC se ve completa. Caché v4.

## Cotizador en celular: dos vistas
Selector Auto / Tarjetas / Tabla sobre la lista de productos (solo celular; en PC siempre tabla). Auto usa Tarjetas con 3 productos o menos y Tabla (línea horizontal desplazable) con más. La elección se recuerda en el equipo. Tarjeta = descripción completa + SKU, y debajo Cantidad, Unidad, Precio neto y Subtotal. Caché v5.

## Listas en celular: Solicitudes e Inicio
- Solicitudes (historial, catálogo y líneas pendientes): selector Tarjetas / Tabla (solo celular; se recuerda en el equipo). Tarjetas por defecto; Tabla = filas con la descripción en una línea y desplazamiento horizontal. Antes eran una mezcla rota de tabla y tarjeta con textos cortados.
- Estados vacíos de Solicitudes: ahora un mensaje normal a ancho completo, ya no una tabla aplastada en una columna angosta.
- Inicio, "Últimas cotizaciones": tarjetas (folio y total, cliente, fecha y estado).
- PC sin cambios. Caché v6.

## Solicitudes: acciones unificadas
La pantalla tenía dos filas de acciones casi iguales (barra del módulo y cabecera de la página). Ahora hay una sola, la barra del módulo, con: Nueva solicitud | Comparador | Proveedores | Abastecimiento. Se quitó la cabecera duplicada en PC, tablet y celular. Caché v7.

## Botón central "+" contextual (celular)
Antes siempre abría "nueva cotización". Ahora cambia según la pantalla y muestra su texto: Clientes -> + Cliente; Contactos -> + Contacto; Obras -> + Obra; Productos -> + Producto; Proveedores -> + Proveedor; Solicitudes y Abastecimiento -> + Solicitud; Pedidos -> + Pedido; Cotizar y el resto de pantallas -> + Cotización.
"+ Pedido" abre una lista de cotizaciones: "Aceptadas · listas para pedido" (confirma el pedido) y "Enviadas · por aceptar" (la acepta y continúa). Si no hay ninguna, ofrece ir a Cotizar. Probado el flujo completo hasta crear PED-0001. Caché v8.

## Auditoría final (2026-10-09)
Probado en Chromium sobre el contenido del zip: 20 pantallas a 360, 390, 820 y 1440 px (sin errores JS, sin desbordes, sin ids duplicados, texto >= 12 px en celular) y 20 verificaciones funcionales, todas OK: totales de cotización (Neto/IVA/Total), eliminar línea, guardar y recargar, botón "+" y lista de Pedidos hasta crear PED-0001, PDF (folio, IVA, RUT), altas de cliente/contacto/obra/producto/proveedor con persistencia, edición de proveedor, PIN (bloquea, rechaza incorrecto, abre con el correcto) y solicitud a proveedor (SOL-0001).
Corregido en esta pasada:
1. Proveedores: guardar fallaba con un error de JavaScript (el formulario no tiene el campo "Banco otro" que el guardado leía). Ya existía en el original.
2. Configuración: había dos campos con el mismo id "cfgPin" (el PIN real y un campo "PIN local" heredado que se ignoraba). Se quitó el heredado.
3. Solicitud a proveedores: los botones "Crear y preparar correos / WhatsApp" quedaban sin texto en celular (la app los convertía en íconos). Ahora muestran su texto.
Caché v9.
Pendiente recomendado: cargar precios y costos de productos, activar el PIN, respaldos periódicos, repositorio privado en GitHub.

## v10 · Estilo premium
- Paleta: azul marino #0B1F3A, azul #1F5BFF, acento naranja #F28C28, paneles azul claro.
- Iconos en círculos azules (menú lateral, accesos rápidos, KPIs, barra inferior), botón principal naranja.
- Títulos más grandes y en negrita, tarjetas con radio 20px y sombra azulada, números de sección en círculos.
- Modo oscuro y alto contraste (Sol) revisados con la nueva paleta.
- Re-auditoría funcional: 20/20 OK (20 pantallas × 360/390/820/1440, cotización, pedido, PDF, altas, PIN, solicitudes).

- v10.1: naranja solo en "+" y guardar/enviar; "Nuevo..." en azul; barritas de KPI azules (rojo solo negativos); iconos de botones secundarios en circulo azul; texto secundario con mas contraste.
- v10.2: azul de marca = #0E274A (franja inferior de la referencia); degradado #1B3F73; modo oscuro conserva azul claro #5B8CFF por legibilidad. RUT en una sola linea en tabla de clientes.
- v11: encabezado marino en pantallas principales y en el PDF (logo sobre recuadro blanco si se carga), jerarquia de azules (#0E274A / #2A4F8F / #DCE8F8).
- v11b: iconos de la app nuevos (L + anillo 360, marino y naranja): icon-192/512, maskable, apple-touch, SVG; theme-color #0E274A.

## v12 · Respaldo automático en Google Drive
- Un solo archivo `Lumo360_respaldo.json` que se actualiza ~15 s después de cada cambio (solo si hay cambios reales).
- Botón de nube con estado en el encabezado; administración en Configuración.
- Si Drive tiene una versión distinta (otro dispositivo) no se sobrescribe: se pregunta cuál conservar.
- Restaurar conserva el PIN y la configuración de seguridad locales y guarda una copia previa.
- PDF archivados: se suben una sola vez a la carpeta "Lumo360 PDF".
- El respaldo no incluye PIN, tokens ni el token de Drive.
- Prueba con Drive simulado: 13/13 OK. Auditoría funcional: 20/20.
