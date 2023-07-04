
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Forme.prototype.paint = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.thickness;
}

Rectangle.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
}


Line.prototype.paint = function(ctx) {
    Forme.prototype.paint.call(this, ctx);  
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.closePath();
    ctx.stroke();
}

Drawing.prototype.paint = function (ctx){
    ctx.fillStyle = '#F0F0F0';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (const shape of this.shapes) {
        shape.paint(ctx);
    }
}

function updateShapeList (drawing)
{
    var shapeList = document.getElementById('shapeList');
  shapeList.innerHTML = '';

  drawing.shapes.forEach(function(shape) {
    var listItem = document.createElement('li');

    if (shape instanceof Rectangle) {
      listItem.innerHTML = 'Rectangle (width: ' + shape.width + ', height: ' + shape.height + ')';
    } else if (shape instanceof Line) {
      listItem.innerHTML = 'Line (x1: ' + shape.x1 + ', y1: ' + shape.y1 + ', x2: ' + shape.x2 + ', y2: ' + shape.y2 + ')';
    }

    var deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('class', 'btn btn-default');
    deleteButton.addEventListener('click', function() {
      drawing.removeShape(shape);
      updateShapeList(drawing);
      drawing.paint(ctx, canvas);
    });

    var deleteIcon = document.createElement('span');
    deleteIcon.setAttribute('class', 'glyphicon glyphicon-remove-sign');

    deleteButton.appendChild(deleteIcon);
    listItem.appendChild(deleteButton);
    shapeList.appendChild(listItem);
  });
}