const fs = require('fs');
const inquirer = require('inquirer');
const {Shape, Triangle, Circle, Square} = require('./lib/svgGenerator');

const questions = [{
        type: 'input',
        name: 'text',
        message: 'Please enter up to 3 characters:'
    },
    {
        type: 'input',
        name: 'txtColor',
        message: 'What color is the text?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please select a shape',
        choices: ['triangle', 'square', 'circle']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color is the shape?'
    }
];



function writeFile(userInput) {
    const {text, txtColor, shape, shapeColor} = userInput;

    if(userInput.shape == 'triangle') {
        const triangle = new Triangle()

        triangle.setText(text);
        triangle.setTxtColor(txtColor);
        triangle.setShape(shape)
        triangle.setShapeColor(shapeColor);
        
        fs.writeFile('triangle.svg', triangle.render(), (err) => {              
            err ? console.log(err) : console.log('Generated triangle.svg')        
        });
    }
    else if(userInput.shape == 'square') {
        const square = new Square()

        square.setText(text);
        square.setTxtColor(txtColor);
        square.setShape(shape)
        square.setShapeColor(shapeColor);

        fs.writeFile('square.svg', square.render(), (err) => {              
            err ? console.log(err) : console.log('Generated square.svg')        
        });
    }
    else if(userInput.shape == 'circle') {
        const circle = new Circle()

        circle.setText(text);
        circle.setTxtColor(txtColor);
        circle.setShape(shape)
        circle.setShapeColor(shapeColor);

        fs.writeFile('circle.svg', circle.render(), (err) => {              
            err ? console.log(err) : console.log('Generated circle.svg')        
        });
    }
}

function createSVG() {
    let svgPrompts = inquirer.prompt(questions)                
    
    svgPrompts.then((input) => writeFile(input));          //Inquirer returns a promise
}

createSVG();