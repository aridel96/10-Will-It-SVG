const userInput = JSON.parse(userInput)
const {text, txtColor, shape, shapeColor} = userInput

class Shape {
    constructor(text, txtColor, shapeColor) {
        this.setText(text);
        this.setTxtColor(txtColor);
        this.setShapeColor(shapeColor);

    }

    validateColor(color) {
        if (color === undefined || color === null || color === ' ') {
            return false;
        } 
        else {
            return true;
        }
    }

    validateTxt(text) {
        if (text === undefined || text === null || text.length > 3 || text === ' ') {
            return false;
        } 
        else {
            return true;
        }
    }

    setText(text) {
        if(this.validateTxt(text)) {
            this.text = text;
        } else {return "Error: Space is not a character. Please enter a max of 3 characters"}
    }

    getText() {
        return this.text;
    }

    setTxtColor(txtColor) {
        if(this.validateColor(txtColor)) {
            this.txtColor = txtColor;
        } 
        else {return "Error: Space is not a color. Please enter a color"}
    }

    getTxtColor() {
        return this.txtColor;
    }

    setShape() {
        this.shape = 'star';
    }

    getShape() {
        return this.shape;
    }

    setShapeColor(shapeColor) {
        if(this.validateColor(shapeColor)) {
            this.shapeColor = shapeColor;
        } 
        else {return "Error: Space is not a color. Please enter a color"}
    }

    getShapeColor() {
        return this.shapeColor;
    }

    render() {                                                      // Returns a string with the details for the SVG file - Creates a star SVG
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><polygon points="100,10 40,198 190,78 10,78 160,198" fill='${this.shapeColor}' /><text x="100" y="120" text-anchor="middle" fill='${this.txtColor}'>${this.text}</text></svg>` 
    }
}



class Circle extends Shape {
    constructor(text, txtColor, shape, shapeColor){
        super(text, txtColor, shapeColor);
        this.setShape(shape);
    }

    setText(text) {
        super.setText(text)
    }
    
    getText() {
        super.getText()
    }
    
    setTxtColor(txtColor) {
        super.setTxtColor(txtColor)
    }
    
    getTxtColor() {
        super.getTxtColor()
    }

    setShape(shape) {
        this.circle = shape;
    }

    getShape() {
        return this.circle;
    }
    
    setShapeColor(shapeColor) {
        super.setShapeColor(shapeColor)
    }
    
    getShapeColor() {
        super.getShapeColor();
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><${this.circle} points="100,10 40,198 190,78 10,78 160,198" fill='${this.shapeColor}' /><text x="100" y="120" text-anchor="middle" fill='${this.txtColor}'>${this.text}</text></svg>` 
    }
}

class Square extends Shape {
    constructor(text, txtColor, shape, shapeColor){
        super(text, txtColor, shapeColor);
        this.setShape(shape);
    }

    setText(text) {
        super.setText(text)
    }
    
    getText() {
        super.getText()
    }
    
    setTxtColor(txtColor) {
        super.setTxtColor(txtColor)
    }
    
    getTxtColor() {
        super.getTxtColor()
    }

    setShape(shape) {
        this.square = shape;
    }

    getShape() {
        return this.square;
    }
    
    setShapeColor(shapeColor) {
        super.setShapeColor(shapeColor)
    }
    
    getShapeColor() {
        super.getShapeColor();
    }
    
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><rect x="50" y="50" width="100" height="100" fill='${this.shapeColor}' /><text x="100" y="120" text-anchor="middle" fill='${this.txtColor}'>${this.text}</text></svg>` 
    }
}

class Triangle extends Shape {
    constructor(text, txtColor, shape, shapeColor){

        super(text, txtColor, shapeColor);
        this.setShape(shape);
    }

    setText(text) {
        super.setText(text)
    }
    
    getText() {
        super.getText()
    }
    
    setTxtColor(txtColor) {
        super.setTxtColor(txtColor)
    }
    
    getTxtColor() {
        super.getTxtColor()
    }

    setShape(shape) {
        this.triangle = shape;
    }

    getShape() {
        return this.triangle;
    }
    
    setShapeColor(shapeColor) {
        super.setShapeColor(shapeColor)
    }
    
    getShapeColor() {
        super.getShapeColor();
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><polygon points="100,20 40,180 160,180" fill='${this.shapeColor}' /><text x="100" y="120" text-anchor="middle" fill='${this.txtColor}'>${this.text}</text></svg>` 
    }
}

if (shape == 'triangle') {
}

switch (shape) {
    case 'triangle':
        let triangle = new Triangle(text, txtColor, shape, shapeColor);
    case 'sqaure':
        let square = new Square(text, txtColor, shape, shapeColor);
    case 'circle':
        let circle = new Circle(text, txtColor, shape, shapeColor);
}



module.exports = {
    Shape,
    Circle,
    Square,
    Triangle
}