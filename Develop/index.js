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
    const {text, txtColor, shape, shapeColor} = userInput

    if(shape == 'circle') {
        let myLogo = new Circle(text, txtColor, shape, shapeColor);

        fs.writeFile('circle.svg', myLogo, (err) => {              
            err ? console.log(err) : console.log('Generated circle.svg')        
        });
    }

    else if(shape == 'triangle') {
        let myLogo = new Triangle(text, txtColor, shape, shapeColor);

        fs.writeFile('triangle.svg', myLogo, (err) => {              
            err ? console.log(err) : console.log('Generated triangle.svg')        
        });
    }

    else {
        let myLogo = new Square(text, txtColor, shape, shapeColor);

        fs.writeFile('square.svg', myLogo, (err) => {              
            err ? console.log(err) : console.log('Generated square.svg')        
        });
    }
}

function createSVG() {
    let svgPrompts = inquirer.prompt(questions)                
    
    svgPrompts.then((input) => writeFile(input));          //Inquirer returns a promise
}

createSVG();