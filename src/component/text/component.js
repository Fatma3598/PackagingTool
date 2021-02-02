import './style-component.css';
function component() {
    const element = document.createElement("div");
  
    element.innerHTML = "Hello Webpack";
    element.classList.add('myDiv')
    return element;
};

document.body.appendChild(component());