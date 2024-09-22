function randomColorGenerator(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
    const hexColor = `#${randomColor}`;
    document.getElementById("text").textContent = hexColor;
    document.getElementsByTagName("body")[0].style.backgroundColor = hexColor;
}