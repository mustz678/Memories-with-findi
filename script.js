const loginBtn = document.querySelector(".login-btn");

const popup = document.querySelector(".popup");

const container = document.querySelector(".container");

const enterBtn = document.querySelector(".enter-btn");

const usernameInput = document.querySelector(".username");

const passwordInput = document.querySelector(".password");

const errorText = document.querySelector(".error-text");

/* ACCOUNT */

const accounts = [

    {
        username: "findi",
        password: "09april2006"
    },

    {
        username: "mus",
        password: "06maret1996"
    }

];

/* OPEN POPUP */

loginBtn.addEventListener("click", ()=>{

    popup.classList.add("active");

    container.classList.add("blur");

});

/* CLOSE POPUP */

popup.addEventListener("click",(e)=>{

    if(e.target === popup){

        popup.classList.remove("active");

        container.classList.remove("blur");

    }

});

/* LOGIN */

enterBtn.addEventListener("click", ()=>{

    const username = usernameInput.value;

    const password = passwordInput.value;

    /* CHECK ACCOUNT */

    const validAccount = accounts.find(account =>

        account.username === username &&
        account.password === password

    );

    /* SUCCESS */

    if(validAccount){

        window.location.href = "home.html";

    }

    /* FAILED */

    else{

        errorText.innerHTML =
        "kata Ilham salah username atau passwordnya :(";

    }

});