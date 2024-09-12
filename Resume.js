var button = document.querySelector("button");
var changecolour = function () {
    var hexVal = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = "#".concat(hexVal);
};
button.addEventListener("click", changecolour);
