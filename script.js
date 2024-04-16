const color = document.querySelector("button:first-of-type");
const shape = document.querySelector("#sh");
const shapeColor = document.querySelector("input");
const shapeColorBtn = document.querySelector("#custom");


const colorDiv = document.querySelector(".outer"); 
const shapeDiv = document.querySelector("#inner");

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'cyan', 'brown', 'gray',];

const shapes=[
   'square','circle','triangle','rectangle','diamond'
];


const source = ()=>{
    return Math.floor(Math.random() * shapes.length );
}

const randomColor = ()=>{
    return Math.floor(Math.random() * colors.length);
}

color.addEventListener("click",()=>{
    colorDiv.style.backgroundColor= colors[randomColor()]; 
})

shape.addEventListener("click",()=>{
    const prevCLass  = shapeDiv.classList;
    shapeDiv.classList.remove(prevCLass);
    shapeDiv.classList.add(shapes[source()]);
})

shapeColorBtn.addEventListener("click",()=>{
    const shapeColorVal = shapeColor.value;
    shapeDiv.style.backgroundColor= shapeColorVal;
})

