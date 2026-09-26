// Lista de juegos que aparecen en la página de inicio.
// Para sumar un juego nuevo: subí su archivo .html y agregá una línea acá.
//   id:     nombre corto sin espacios (tiene que coincidir con GAME_ID dentro del juego)
//   pagina: archivo del juego
//   titulo, que: lo que se ve en la tarjeta
//   icono:  imagen cuadrada de la tarjeta
//   color:  color de la tarjeta
window.JUEGOS = [
  { id:'camino', pagina:'camino.html', titulo:'El camino del queso', que:'Programación con flechas',     icono:'icon-192.png',   color:'#4FAF77' },
  { id:'azules', pagina:'azules.html', titulo:'¡Vamos, Azules!',     que:'Conteo y programación con dado', icono:'azules-192.png', color:'#2F63B5' }
];
