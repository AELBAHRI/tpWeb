
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
// new DnD(canvas);
  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
// var drawing = new Drawing();
// var rec = new Rectangle(0, 0, 50, 100, 5, '#FF0000');
// var ligne = new Line(0, 0, 800, 600, 10, '#00CCC0');
// drawing.addShape(rec);
// drawing.addShape(ligne);
// drawing.paint(ctx);

// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
document.addEventListener('DOMContentLoaded', function() {

  // Création de l'objet Pencil
  var pencil = new Pencil(ctx, drawing, canvas);
});
drawing.paint(ctx, canvas);

