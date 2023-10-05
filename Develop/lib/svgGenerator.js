class Shape {
    constructor(text, txtColor, shapeColor) {
        this.text = text;
        this.txtColor = txtColor;
        this.shapeColor = shapeColor
    }

    render() {
        // Returns a string with the details for the SVG file

        if (this.text === undefined || this.text === null || this.text.length > 3) {
            return false;
        } 
        else if (this.txtColor === undefined || this.txtColor === null ) {
            return false;
        } 
        else if (this.shapeColor === undefined || this.shapeColor === null) {
            return false
        }
        else {
            return true;
        }
        
    }
}



class Circle extends Shape {
    constructor(text, txtColor, shapeColor, shape){
        super(text, txtColor, shapeColor);
        this.circle = shape;
    }
}

class Square extends Shape {
    constructor(text, txtColor, shapeColor, shape){
        super(text, txtColor, shapeColor);
        this.square = shape;
    }
}

class Triangle extends Shape {
    constructor(text, txtColor, shapeColor, shape){
        super(text, txtColor, shapeColor);
        this.triangle = shape;
    }
}


// setter and getter methods
// if circle then s, if square then h, if triangel then a

//     myLogo = `<svg width="200" height="200">
//     <polygon points="100,10 40,198 190,78" fill="blue" />
//   </svg>`