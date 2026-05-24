window.addEventListener("load", () => {

    const loader = document.getElementById("loader");
    const container = document.querySelector(".container");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

            container.style.opacity = "1";

        }, 1000);

    }, 2500);

});