const memories = [

    {
        image:"images/roblox/roblox01.jpg",
        title:"First Meet 💖"
    },

    {
        image:"images/roblox/roblox02.jpg",
        title:"Playing Together 🌸"
    },

    {
        image:"images/roblox/roblox03.jpg",
        title:"Gunung Horror pertama kita 🏔️"
    },

    {
        image:"images/roblox/roblox04.jpg",
        title:"Main Gunung Bareng 🌄"
    },

     {
        image:"images/roblox/roblox05.jpg",
        title:"GAG Tanaman 🌱"
    },

     {
        image:"images/roblox/roblox06.jpg",
        title:"Sunset Together 🌅"
    },

     {
        image:"images/roblox/roblox07.jpg",
        title:"Fotbar🌄"
    },

     {
        image:"images/roblox/roblox08.jpg",
        title:"Selfie berdua 📸"
    },

     {
        image:"images/roblox/roblox09.jpg",
        title:"Fotbar malam hari 🌌"
    },

     {
        image:"images/roblox/roblox10.jpg",
        title:"Selfia lagi 📸"
    },
    
     {
        image:"images/roblox/roblox11.jpg",
        title:"Random Selfia 📸"
    },

     {
        image:"images/roblox/roblox12.jpg",
        title:"Random Selfia 📸"
    },

     {
        image:"images/roblox/roblox13.jpg",
        title:"So sweet 💖"
    },

     {
        image:"images/roblox/roblox14.jpg",
        title:"Selfia dipuncak gunung 🏔️"
    },

     {
        image:"images/roblox/roblox15.jpg",
        title:"Gunung Pacar aku 🏔️"
    },

     {
        image:"images/roblox/roblox16.jpg",
        title:"Sunset Together 🌅"
    },

     {
        image:"images/roblox/roblox17.jpg",
        title:"Selfie dipuncak gunung 🏔️"
    },

     {
        image:"images/roblox/roblox18.jpg",
        title:"Random Selfia 📸"
    },

     {
        image:"images/roblox/roblox19.jpg",
        title:"Random Selfia lagi 📸"
    },

     {
        image:"images/roblox/roblox20.jpg",
        title:"Selfie di air terjun 🌊"
    },

     {
        image:"images/roblox/roblox21.jpg",
        title:"Lagi Selfia di air terjun 🌊"
    },

     {
        image:"images/roblox/roblox22.jpg",
        title:"Random Selfia 📸"
    },

     {
        image:"images/roblox/roblox23.jpg",
        title:"Random lagi 📸"
    },

     {
        image:"images/roblox/roblox24.jpg",
        title:"Roomantic Selfia 📸"
    },

     {
        image:"images/roblox/roblox25.jpg",
        title:"Selfie digunung tercantik 🏔️"
    },

     {
        image:"images/roblox/roblox26.jpg",
        title:"Fotbar lagi 🌄"
    },

     {
        image:"images/roblox/roblox27.jpg",
        title:"Lagi Selfia 📸"
    },

     {
        image:"images/roblox/roblox28.jpg",
        title:"Our Favorite Place ✨"
    },

     {
        image:"images/roblox/roblox29.jpg",
        title:"kelupaan Selfia 📸"
    },

    {
        image:"images/roblox/roblox30.jpg",
        title:"Selfie random 📸"
    }

   
];

const timeline = document.getElementById("timeline");

memories.forEach((memory, index) => {

    const side = index % 2 === 0 ? "left" : "right";

    timeline.innerHTML += `
        <div class="memory ${side} hidden">

            <img src="${memory.image}" alt="${memory.title}">

            <div class="memory-title">
                ${memory.title}
            </div>

        </div>
    `;

});

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

document.querySelectorAll(".memory").forEach(el=>{

    observer.observe(el);

});

document.querySelectorAll(".locked").forEach(btn=>{

    btn.addEventListener("click",function(){

        alert("LOCKED");

    });

});