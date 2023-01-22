console.log('mostrar o document',document);

console.log(document.querySelector(".botao"));

const botaoTrailer = document.querySelector(".botao");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

botaoTrailer.addEventListener("click", () => {
    console.log("clicou no botão veja o trailer")
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () =>{
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});


