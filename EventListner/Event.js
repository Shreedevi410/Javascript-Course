let btn = document.querySelector("#mode");
let mode = "light";

btn.addEventListener("click", () => {
    console.log("change mode");
    if(mode === "light"){
        mode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        mode = "light"
        document.querySelector("body").style.backgroundcolor = "White";
    }
    console.log (mode);

})