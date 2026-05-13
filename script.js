const text =
"CSE Student | AI Enthusiast | Cybersecurity Learner | Frontend Beginner";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.querySelector(".typing").innerHTML +=
        text.charAt(index);

        index++;

        setTimeout(typeEffect, 80);
    }
}

typeEffect();
const themeBtn =
document.getElementById("theme-btn");

themeBtn.onclick = () => {

    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }

}
const topBtn =
document.getElementById("topBtn");

window.onscroll = () => {

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";
    }
}

topBtn.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}
