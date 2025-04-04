const shape = 
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ]
var fs=require('fs')
fs.writeFileSync('shape.txt',JSON.stringify(shape))
var sp=(shape[1].side)*4;
var cp=(shape[0].diameter/2)*3.14*2;
fs.appendFileSync('shape.txt','Perimeter of square is'+sp+"perimeter of circle is"+cp)
console.log('square perimeter :'+sp+"circle perimeter"+cp)