let btn = document.querySelector("#mode");
let mode = "light";

btn.addEventListener("click", () => {
    console.log("change mode");

    if (mode === "light") {
        mode = "dark";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        mode = "light";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }

    console.log(mode);
});