const btn1 = document.getElementById('btn');
btn1.addEventListener("mouseover", (event) => {
    const x = event.pageX - btn1.offsetLeft;
    const y = event.pageY - btn1.offsetTop;
    btn1.style.setProperty("--xpos", x + "px");
    btn1.style.setProperty("--ypos", y + "px");

})