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

document.getElementById("robloxBtn").onclick = () => {
    window.location.href = "memories-roblox.html";
};

/*
document.getElementById("papBtn").onclick = () => {
    window.location.href = "pages/galeri-pap.html";
};

document.getElementById("meetBtn").onclick = () => {
    window.location.href = "pages/galeri-meet.html";
};
*/

const popup = document.getElementById("lockPopup");

const closePopup = document.getElementById("closePopup");

// Tombol yang masih dikunci
document.querySelectorAll(".locked").forEach(button=>{

    button.onclick = ()=>{

        popup.classList.add("active");

    }

});

closePopup.onclick = ()=>{

    popup.classList.remove("active");

};

// Klik area gelap juga menutup popup
popup.onclick=(e)=>{

    if(e.target===popup){

        popup.classList.remove("active");

    }

};
