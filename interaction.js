
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.canvas = canvas; 
  this.interactor = interactor; 
  this.initialX = 0;
  this.initialY = 0; 
  this.finalX = 0;   
  this.finalY = 0;   
  this.isMouseDown = false;

	// Developper les 3 fonctions gérant les événements

  //pression de la souris
  this.onMouseDown = function (evt) {
    this.isMouseDown = true;
    var mousePos = getMousePosition(canvas, evt);
    this.initialX = mousePos.x;
    this.initialY = mousePos.y;
    console.log("Pression de la souris : ", this.initialX, this.initialY);
    interactor.onInteractionStart(this);
  }.bind(this);


  //déplacement de la souris
  this.onMouseMove = function (evt) {
    if (this.isMouseDown) {
      var mousePos = getMousePosition(canvas, evt);
      this.finalX = mousePos.x;
      this.finalY = mousePos.y;
      console.log("Déplacement de la souris : ", this.finalX, this.finalY);
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  //relâchement de la souris
  this.onMouseUp = function (evt) {
    this.isMouseDown = false;
    var mousePos = getMousePosition(canvas, evt);
    this.finalX = mousePos.x;
    this.finalY = mousePos.y;
    console.log("Relâchement de la souris : ", this.finalX, this.finalY);
    interactor.onInteractionEnd(this);
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.

  canvas.addEventListener('mousedown', this.onMouseDown, false);
  canvas.addEventListener('mousemove', this.onMouseMove, false);
  canvas.addEventListener('mouseup', this.onMouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



