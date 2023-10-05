const { TestScheduler } = require('rxjs/testing');
const Shape = require('./svgGenerator');

describe('svgGenerator', () => {
    describe('render', () => {
        it('should return false for no user input', () =>{
            let text = " "
            let shapeColor = " "
            let txtColor = " "
            const shape = new Shape(text, shapeColor, txtColor);

            // shape.setText(' ');
            // shape.setShapeColor(' ');
            // shape.setTxtColor(' ');
            
            expect(shape.render()).toEqual(false);
        })
    })


    //To Do: Test Triangle class
    //Add a Get and Set method for the color and text?

    //To Do: Test Square class

    //To Do: Test circle class

    //To Do: Test Render() method for each class - Render() should return a string with the shape color
})


// Test
// if more than 3 characters entered
// if exmpy text or color entered

//Goal 1: Get a failing test ex. expect(...).toEqual('false')
//Goal 2: Get a passing test