# Programamos jugando 🧩

Juegos de programación con flechas para nivel inicial (Sala de 5). Se juegan en **celular, tablet o computadora** y se pueden **ver en grande en la TV**: el celular queda como control y la TV muestra el tablero, con sonido.

Al abrir el sitio aparece la lista de juegos para elegir.

| Juego | Qué trabaja |
|---|---|
| 🐭 **El camino del queso** | Programación con las 4 flechas. 14 niveles: 8 de práctica y 6 difíciles 🔥 (laberintos de 6×6 a 8×8 con un solo camino). |
| 💙 **¡Vamos, Azules!** | Conteo y programación. Hay que juntar exactamente los quesos que marca el dado y llevarlos a la Sala Azul. 10 niveles (del 1 al 6) y modo 🎲 con tiradas al azar. |

## Publicarlo en GitHub Pages

1. Creá un repositorio **Public** (por ejemplo `camino-del-queso`).
2. **Add file → Upload files** y arrastrá **todos los archivos** de esta carpeta (no la carpeta). **Commit changes**.
3. **Settings → Pages**: *Branch* **main** y **/ (root)**, **Save**.
4. Queda en `https://TU-USUARIO.github.io/camino-del-queso/`.

Si ya tenías una versión anterior subida, arrastrá todo igual: los archivos con el mismo nombre se reemplazan solos.

## Links

- **Jugar (lista de juegos):** `https://TU-USUARIO.github.io/camino-del-queso/`
- **TV:** `https://TU-USUARIO.github.io/camino-del-queso/tv.html`

## Ver en la TV

1. En la TV (o en la compu conectada a la TV) abrí el link de **TV**. Aparece un número y un código QR.
2. En el celular entrá a un juego, tocá **📺 Ver en la TV** y escaneá el QR o escribí el número. El botón se pone verde.
3. **Si cambiás de juego en el celular, la TV cambia sola** y conserva el mismo número. El celular se reconecta solo.

La TV recuerda que es pantalla: la próxima vez va directo al tablero. Cada vez que cambia de juego pide un toque para activar el sonido (lo exige el navegador). El ⚙️ de la esquina la vuelve a modo juego.

Requisitos: los dos aparatos con internet (mejor en el mismo Wi-Fi) y un navegador actualizado. La conexión usa el servidor público y gratuito de [PeerJS](https://peerjs.com); entre los aparatos solo viaja el estado del juego, sin datos personales.

## Sumar un juego nuevo

1. Subí el archivo del juego (por ejemplo `nuevo.html`, armado sobre la base de `camino.html`) y su ícono.
2. Dentro del juego, poné `var GAME_ID = 'nuevo';`.
3. En `juegos.js`, agregá una línea a la lista con `id`, `pagina`, `titulo`, `que`, `icono` y `color`. Aparece solo en la página de inicio, y la TV sabe cambiar a ese juego.
4. En `sw.js`, agregá los archivos nuevos a la lista y cambiá `VERSION` (por ejemplo `juegos-v5`) para que los aparatos que lo tienen instalado se actualicen.

## Archivos

| Archivo | Para qué es |
|---|---|
| `index.html` | Página de inicio con la lista de juegos |
| `juegos.js` | La lista de juegos (acá se suman juegos nuevos) |
| `camino.html` | El camino del queso |
| `azules.html` | ¡Vamos, Azules! |
| `tv.html` | Link corto para la TV (sirve para todos los juegos) |
| `azules-tv.html` | Link anterior de la TV de ¡Vamos, Azules! (se mantiene para que no se rompa) |
| `manifest.webmanifest`, `sw.js` | Para instalarlo como app y que funcione sin internet |
| `icon-*.png`, `azules-*.png` | Íconos |
| `peerjs.min.js`, `qrcode.js` | Conexión con la TV y código QR |
| `baloo2-600.woff2`, `baloo2-800.woff2` | Tipografía |

## Créditos

- [PeerJS](https://github.com/peers/peerjs), licencia MIT.
- [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), de Kazuhiko Arase, licencia MIT.
- Tipografía [Baloo 2](https://fonts.google.com/specimen/Baloo+2), licencia SIL Open Font License 1.1.
