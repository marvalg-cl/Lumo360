# Lumo360 · LUMOBRAL — ERP/CRM integral

SPA de archivo único (HTML/CSS/JS vanilla), con persistencia local, PWA
instalable y generación de PDF/Excel. Pensada para abrirse tal cual desde
GitHub Pages o cualquier hosting estático (no requiere build ni backend).

## Archivos de este repo

| Archivo                    | Rol                                                              |
|-----------------------------|-------------------------------------------------------------------|
| `index.html`                 | La aplicación completa (UI + lógica + estilos)                   |
| `manifest.webmanifest`       | Manifest PWA (nombre, ícono, colores) — **nuevo**, no existía     |
| `sw.js`                      | Service worker para caché offline del app shell — **nuevo**      |
| `icon-192.png` / `icon-512.png` | Íconos PWA, generados a partir del isotipo ya embebido en la app |
| `icon-512-maskable.png`      | Variante "maskable" para Android (safe zone)                     |

## Cómo publicar en GitHub Pages

1. Crea el repositorio y sube estos archivos a la raíz (o a `/docs`).
2. En **Settings → Pages**, elige la rama y carpeta donde quedaron los archivos.
3. Abre la URL publicada: la app debería quedar instalable ("Agregar a
   pantalla de inicio" / ícono de instalar en el navegador) y funcionar
   offline tras la primera visita.

> Los service workers solo se activan en `https://` o `http://localhost`.
> Abrir `index.html` con doble clic (`file://`) es válido para probar la UI,
> pero el service worker no se registrará — eso es una limitación del
> navegador, no un bug de la app.

## Resumen de la auditoría realizada

Se cargó la app en un navegador real (Chromium headless) y se navegó por
todos los módulos capturando errores de consola, para no limitarse a una
lectura estática del código.

**Encontrado y corregido:**

1. **Dashboard ("Inicio") sin estilos — bug visual real y verificado.**
   El HTML generado por `dashboardView()` usa las clases `.bento-row`,
   `.hero-kpi`, `.hero-kpi-top`, `.hero-num`, `.hero-spark`, `.donut-card`
   y `.mini-kpi`, pero ninguna tenía regla CSS en la hoja de estilos.
   Efecto visible: el número de venta y el texto "operaciones cerradas"
   quedaban pegados (`"$ 00 operaciones cerradas"`), sin jerarquía
   tipográfica, y los mini-KPI sin tarjeta ni ícono alineado.
   Se agregó el bloque CSS faltante (marcado como `FIX AUDITORÍA` en
   `index.html`) respetando el sistema de diseño existente (mismas
   variables de color, radios y sombras que el resto de la app).
   Capturas antes/después disponibles si las necesitas.

2. **PWA incompleta: faltaban `manifest.webmanifest`, `sw.js`,
   `icon-192.png` y `icon-512.png`.** El `<head>` ya los referenciaba y el
   `<script>` ya intentaba `navigator.serviceWorker.register('./sw.js')`,
   pero ninguno de esos archivos venía incluido, así que al subir solo
   `index.html` a GitHub la app cargaba pero **nunca era instalable ni
   funcionaba offline** (el registro del SW fallaba en silencio porque el
   propio código lo envuelve en `.catch(()=>{})`). Se crearon los cuatro
   archivos; los íconos se generaron a partir del isotipo (diamante
   azul/dorado) que ya estaba embebido en base64 dentro del propio
   `index.html`, para mantener la identidad de marca. Verificado sirviendo
   la carpeta por HTTP local: manifest válido, service worker registrado y
   activo, cero peticiones fallidas.

**Revisado sin encontrar errores:**

- Sintaxis JS de todo el archivo (`node --check`): sin errores.
- Carga completa de la app y navegación por los 17+ módulos (Pipeline,
  Empresas, Contactos, Cotizaciones, Pedidos, Proveedores, Solicitudes,
  Órdenes de compra, Documentos, Finanzas, Control, Auditoría, Reportes,
  Configuración): sin excepciones ni errores de consola.
- IDs duplicados en el HTML estático: no hay.
- Delegación de eventos (`document.addEventListener` a nivel global):
  patrón correcto, no genera listeners duplicados en cada render.

**Nota menor (no corregida, riesgo/beneficio bajo):** existe un bloque
`body.dark{...}` definido dos veces en la hoja de estilos con valores
ligeramente distintos; el segundo gana por cascada y el modo oscuro se ve
bien, pero conviene unificarlos en algún momento para evitar confusión
futura al mantener el CSS.
