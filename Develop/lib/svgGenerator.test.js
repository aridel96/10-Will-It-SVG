const { TestScheduler } = require('rxjs/testing');
const {Shape, Triangle, Circle, Square} = require('./svgGenerator');

describe('svgGenerator', () => {
    describe('Text input', () => {
        it('should return an error for an empty string as user input for text', () =>{
            let shape = new Shape().setText(" ");

            expect(shape).toEqual('Error: Space is not a character. Please enter a max of 3 characters');
        })
    })
})

describe('svgGenerator', () => {
    describe('Text Color input', () => {
        it('should return an error for an empty string as user input for text color', () =>{
            let shape = new Shape().setTxtColor(" ");
    
            expect(shape).toEqual('Error: Space is not a color. Please enter a color');
        })
    })
})

describe('svgGenerator', () => {
    describe('Shape Color input', () => {
        it('should return an error for an empty string as user input for shape color', () =>{
            let shape = new Shape().setShapeColor(" ");
    
            expect(shape).toEqual('Error: Space is not a color. Please enter a color');
        })
    })
})



describe('svgGenerator', () => {
    describe('Text input', () => {
        it('should return an error for no user input for text', () =>{
            let shape = new Shape().setText();

            expect(shape).toEqual('Error: Space is not a character. Please enter a max of 3 characters');
        })
    })
})

describe('svgGenerator', () => {
    describe('Text Color input', () => {
        it('should return an error for no user input for text color', () =>{
            let shape = new Shape().setTxtColor();
    
            expect(shape).toEqual('Error: Space is not a color. Please enter a color');
        })
    })
})

describe('svgGenerator', () => {
    describe('Shape Color input', () => {
        it('should return an error for no user input for shape color', () =>{
            let shape = new Shape().setShapeColor();
    
            expect(shape).toEqual('Error: Space is not a color. Please enter a color');
        })
    })
})



describe('svgGenerator', () => {
    describe('Square', () => {
        it('should return square for the shape', () => {
            let square = new Square()
            square.setShape('square');

            expect(square.getShape()).toEqual('square')
        })
    })
})

describe('svgGenerator', () => {
    describe('Triangle', () => {
        it('should return triangle for the shape', () => {
            let triangle = new Triangle()
            triangle.setShape('triangle');

            expect(triangle.getShape()).toEqual('triangle')
        })
    })
})

describe('svgGenerator', () => {
    describe('Circle', () => {
        it('should return circle for the shape', () => {
            let circle = new Circle()
            circle.setShape('circle');

            expect(circle.getShape()).toEqual('circle')
        })
    })
})



describe('svgGenerator', () => {
    describe('Render Square', () => {
        it('should return the SVG file details for a Square logo', () => {
            let square = new Square()
            square.setShape('square');

            square.setShapeColor('yellow');
            square.setTxtColor('black');
            square.setText('Bee');

            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><rect x="50" y="50" width="100" height="100" fill='yellow' /><text x="100" y="100" text-anchor="middle" fill='black'>Bee</text></svg>`)
        })
    })
})

describe('svgGenerator', () => {
    describe('Render Triangle', () => {
        it('should return the SVG file details for a Triangle logo', () => {
            let triangle = new Triangle()
            triangle.setShape('triangle');

            triangle.setText('Piz');
            triangle.setTxtColor('green');
            triangle.setShapeColor('white');

            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><polygon points="100,20 40,180 160,180" fill='white' /><text x="100" y="120" text-anchor="middle" fill='green'>Piz</text></svg>`)
        })
    })
})

describe('svgGenerator', () => {
    describe('Render Circle', () => {
        it('should return circle for the shape', () => {
            let circle = new Circle()
            circle.setShape('circle');

            circle.setText('SAS');
            circle.setTxtColor('pink');
            circle.setShapeColor('blue');

            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300" height="200"><circle cx="100" cy="100" r="50" fill='blue' /><text x="100" y="100" text-anchor="middle" fill='pink'>SAS</text></svg>` )
        })
    })
})