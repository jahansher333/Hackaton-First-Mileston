const button = document.querySelector("button");

const changecolour = () => {
    const click = Math.floor(Math.random()* 16777215).toString(16);
    document.body.style.backgroundColor= `#${click}`
};
button?.addEventListener("click" , changecolour)