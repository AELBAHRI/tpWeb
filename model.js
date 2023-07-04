
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.shapes = [];

    this.addShape = function(shape){
        this.shapes.push(shape);
    }

    this.removeShape = function(shape){
        const index = this.shapes.indexOf(shape);
        if (index !== -1) {
            this.shapes.splice(index, 1);
        }
    }
};
    function Forme (thickness, color) {
        this.color = color; 
        this.thickness = thickness;
    };

    function Rectangle (x, y, width, height, thickness, color) {
        Forme.call(this, thickness, color);
        this.x = x; 
        this.y = y; 
        this.width = width; 
        this.height = height;
    };
    Rectangle.prototype = new Forme();

    function Line (x1, y1, x2, y2, thickness, color){
        Forme.call(this, thickness, color);
        this.x1 = x1; 
        this.y1 = y1;
        this.x2 = x2; 
        this.y2 = y2;
    };
    Line.prototype = new Forme();



