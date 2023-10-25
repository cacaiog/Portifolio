
var typingEffect = new Typed(".multiText", {
    strings: ["Caio Guilherme", "Estudante", "Estagiário",],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
});


const navItens = document.querySelector(".navItens");


const navItensSobre = document.querySelector("#navItens");

if (navItens && navItensSobre) {
    navItensSobre.innerHTML = navItens.innerHTML;
}

