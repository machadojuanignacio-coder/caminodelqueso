# El camino del queso 🐭🧀

Juego de programación para nivel inicial. Se colocan flechas en los casilleros y, al tocar ▶️, el ratón sigue el camino hasta el queso. Si no llega, el juego muestra qué pasó y se puede arreglar sin empezar de cero.

- Se juega en **celular, tablet o computadora**, en vertical u horizontal.
- Se puede **ver en grande en la TV**: el celular queda como control y la TV muestra el tablero, con sonido.
- 14 niveles: 8 de práctica (3×3 a 6×6, con más de un camino posible) y 6 difíciles 🔥 (6×6 a 8×8, laberintos con un solo camino y pasillos sin salida).
- Se puede **instalar como app** ("Agregar a pantalla de inicio") y jugar sin internet.

## Publicarlo en GitHub Pages (desde la computadora)

1. En github.com tocá **New repository**, poné un nombre (por ejemplo `camino-del-queso`), dejalo **Public** y creá el repositorio.
2. Tocá **uploading an existing file** y arrastrá **todos los archivos** de esta carpeta (no la carpeta, los archivos). Confirmá con **Commit changes**.
3. Andá a **Settings → Pages**. En *Branch* elegí **main** y **/ (root)**, y tocá **Save**.
4. En uno o dos minutos queda publicado en `https://TU-USUARIO.github.io/camino-del-queso/`.

## Cómo se usa

**Jugar:** abrí el link y elegí un nivel. Las flechas se arrastran a los casilleros, o se toca una flecha y después el casillero. La goma borra una flecha y 🗑️ borra todas.

**Ver en la TV:**
1. En la TV (o en la compu conectada a la TV) abrí `https://TU-USUARIO.github.io/camino-del-queso/tv.html`. Aparece un número y un código QR.
2. En el celular tocá **📺 Ver en la TV** y escaneá el QR, o escribí el número.
3. El botón se pone verde cuando está conectado. Todo lo que se arma en el celular se ve en la TV.

La TV recuerda que es pantalla y conserva el mismo número. Si se recarga o se corta, el celular se reconecta solo. El ⚙️ de la esquina de la TV la vuelve a modo juego.

## Requisitos para ver en la TV

- Los dos aparatos con internet. Anda mejor si están en el mismo Wi-Fi.
- Navegador actualizado (Chrome, Edge, Safari o Firefox).
- La conexión usa el servidor público y gratuito de [PeerJS](https://peerjs.com). Entre los aparatos solo viaja el estado del juego (nivel, flechas y posición del ratón). No se envían datos personales.

## Archivos

| Archivo | Para qué es |
|---|---|
| `index.html` | El juego completo |
| `tv.html` | Link corto que abre directo la pantalla de la TV |
| `manifest.webmanifest`, `sw.js`, `icon-*.png` | Para instalarlo como app y que funcione sin internet |
| `peerjs.min.js` | Conexión entre el celular y la TV |
| `qrcode.js` | Dibuja el código QR |
| `baloo2-600.woff2`, `baloo2-800.woff2` | Tipografía |

**Al publicar una versión nueva** de `index.html`, cambiá el número de `VERSION` en `sw.js` (por ejemplo `camino-v2`) para que los aparatos que lo tienen instalado se actualicen.

## Créditos

- [PeerJS](https://github.com/peers/peerjs), licencia MIT.
- [qrcode-generator](https://github.com/kazuhikoarase/qrcode-generator), de Kazuhiko Arase, licencia MIT.
- Tipografía [Baloo 2](https://fonts.google.com/specimen/Baloo+2), licencia SIL Open Font License 1.1.
