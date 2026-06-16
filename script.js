// ======================================
// PROYECTO AURORA
// Para Melisa ❤️
// ======================================

const music = document.getElementById("music");
const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const typing = document.getElementById("typing");
const cake = document.getElementById("birthdayCake");
const blowBtn = document.getElementById("blowCandles");
const secret = document.getElementById("secret");
const heart = document.querySelector(".heart");

// Ocultar pantalla de carga
window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },1800);

});

// Música

startBtn.addEventListener("click", () => {

    music.play();

    document.getElementById("intro").style.display="none";

    document.getElementById("home").scrollIntoView({

        behavior:"smooth"

    });

});

// Carta

const mensaje = `

Hola Melisa...

Primero quiero desearte un muy feliz cumpleaños. 🎂❤️

Espero que hoy sea un día muy especial para ti.

Quiero que nunca dejes de luchar por ese sueño de convertirte en doctora.

Porque sinceramente creo que lo lograrás.

Y... bueno...

También quería recordarte que...

🍿 sigo esperando esa salida al cine, caserita. 😌

Espero que esta pequeña sorpresa te saque una sonrisa.

Con cariño...

Tu caserito ❤️

`;

let i = 0;

function escribir(){

    if(i < mensaje.length){

        typing.innerHTML += mensaje.charAt(i);

        i++;

        setTimeout(escribir,35);

    }

}

setTimeout(escribir,3000);

// Pastel

cake.addEventListener("click",()=>{

    cake.style.transform="scale(1.25)";

    setTimeout(()=>{

        cake.style.transform="scale(1)";

    },500);

});

// Soplar velitas

blowBtn.addEventListener("click",()=>{

    alert("🎉 ¡Feliz cumpleaños Melisa! Que todos tus sueños se hagan realidad ❤️");

});

// Corazón final

heart.addEventListener("click",()=>{

    secret.classList.add("active");

    secret.scrollIntoView({

        behavior:"smooth"

    });

});// ======================================
// PARTE 2
// Animaciones y efectos
// ======================================

// Todos los botones "Continuar"
const nextButtons = document.querySelectorAll(".next");

nextButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.parentElement.parentElement.nextElementSibling?.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// Animación de aparición al hacer scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.25

});

document.querySelectorAll("section").forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(60px)";
    sec.style.transition = "1s";

    observer.observe(sec);

});

// Corazones flotando

function crearCorazon() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.pointerEvents = "none";

    heart.style.opacity = ".8";

    heart.style.transition = "transform 6s linear, opacity 6s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = `translateY(-120vh) rotate(${Math.random()*360}deg)`;

        heart.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}

setInterval(crearCorazon, 1800);

// Brillo al tocar botones

document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("click", () => {

        btn.animate([

            { transform: "scale(1)" },

            { transform: "scale(0.93)" },

            { transform: "scale(1.05)" },

            { transform: "scale(1)" }

        ], {

            duration: 300

        });

    });

});

// Animación del boleto

const ticket = document.querySelector(".ticket");

if(ticket){

    ticket.addEventListener("click", () => {

        ticket.animate([

            { transform:"rotate(0deg)" },

            { transform:"rotate(-3deg)" },

            { transform:"rotate(3deg)" },

            { transform:"rotate(0deg)" }

        ],{

            duration:600

        });

    });

}

// Vibración (si el celular la soporta)

function vibrar(ms){

    if(navigator.vibrate){

        navigator.vibrate(ms);

    }

}

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        vibrar(40);

    });

});

// Mensaje secreto

let presionado = false;

document.body.addEventListener("touchstart",()=>{

    presionado = true;

    setTimeout(()=>{

        if(presionado){

            alert("🤍 Gracias por llegar hasta aquí.\n\nOjalá esta sea la primera de muchas sonrisas que pueda sacarte.\n\n❤️ Tu caserito.");

        }

    },5000);

});

document.body.addEventListener("touchend",()=>{

    presionado = false;

});// ======================================
// PARTE 3
// Efectos Premium
// ======================================

// --------- EFECTO CONFETI ---------

function lanzarConfeti(){

    for(let i=0;i<120;i++){

        const confeti=document.createElement("div");

        confeti.className="confeti";

        confeti.style.position="fixed";
        confeti.style.left=Math.random()*100+"vw";
        confeti.style.top="-20px";
        confeti.style.width="10px";
        confeti.style.height="16px";
        confeti.style.borderRadius="3px";

        const colores=[
            "#ff4d6d",
            "#ffd60a",
            "#4cc9f0",
            "#72efdd",
            "#ffffff",
            "#c77dff"
        ];

        confeti.style.background=
        colores[Math.floor(Math.random()*colores.length)];

        confeti.style.zIndex="99999";
        confeti.style.pointerEvents="none";

        document.body.appendChild(confeti);

        const duracion=3000+Math.random()*2500;

        confeti.animate([

            {
                transform:"translateY(0px) rotate(0deg)",
                opacity:1
            },

            {
                transform:`translateY(${window.innerHeight+200}px) rotate(${720+Math.random()*500}deg)`,
                opacity:0
            }

        ],{

            duration:duracion,
            easing:"ease-out"

        });

        setTimeout(()=>{

            confeti.remove();

        },duracion);

    }

}

// --------- BOTÓN SOPLAR ---------

if(blowBtn){

blowBtn.addEventListener("click",()=>{

    lanzarConfeti();

    cake.textContent="🧁";

    blowBtn.textContent="🎉 ¡Deseo Cumplido!";

});

}

// --------- ESTRELLAS FUGACES ---------

function estrellaFugaz(){

    const estrella=document.createElement("div");

    estrella.style.position="fixed";
    estrella.style.width="3px";
    estrella.style.height="3px";
    estrella.style.background="white";
    estrella.style.boxShadow="0 0 18px white";

    estrella.style.left=Math.random()*window.innerWidth+"px";
    estrella.style.top="-30px";

    estrella.style.zIndex="2";

    document.body.appendChild(estrella);

    estrella.animate([

        {

            transform:"translate(0,0)",

            opacity:1

        },

        {

            transform:"translate(-350px,450px)",

            opacity:0

        }

    ],{

        duration:1800

    });

    setTimeout(()=>{

        estrella.remove();

    },1800);

}

setInterval(estrellaFugaz,4500);

// --------- MÚSICA ---------

if(music){

music.volume=.45;

}

// --------- MENSAJE FINAL ---------

window.addEventListener("scroll",()=>{

    if(window.scrollY>

    document.body.scrollHeight-window.innerHeight-80){

        if(music){

            music.volume=.20;

        }

    }

});

// --------- DESTELLO AL TOCAR EL CORAZÓN ---------

if(heart){

heart.addEventListener("click",()=>{

    for(let i=0;i<25;i++){

        const spark=document.createElement("span");

        spark.innerHTML="✨";

        spark.style.position="fixed";

        spark.style.left=(window.innerWidth/2)+"px";

        spark.style.top=(window.innerHeight/2)+"px";

        spark.style.fontSize=(18+Math.random()*20)+"px";

        spark.style.pointerEvents="none";

        document.body.appendChild(spark);

        spark.animate([

            {

                transform:"translate(0,0) scale(1)",

                opacity:1

            },

            


console.log("❤️ Proyecto Aurora cargado correctamente.");
