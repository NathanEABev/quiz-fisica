let iAtual = 0
let respondido = false
let q = false

const perguntas = [
    {
        texto: "1) O que é inércia?",
        alternativas: [
            "A tendência de um corpo acelerar continuamente",
            "A força que empurra um corpo para o centro da Terra",
            "A resistência que um corpo oferece à mudança de seu estado de movimento",
            "A capacidade de um corpo realizar trabalho"
        ],
        correta: 2
    },
    {
        texto: "2) Qual é a grandeza física relacionada à quantidade de matéria de um corpo?",
        alternativas: [
            "força",
            "massa",
            "velocidade",
            "energia"
        ],
        correta: 1
    },
    {
        texto: "3) A terceira lei de Newton afirma que:",
        alternativas: [
            "A força é igual ao produto da massa pela aceleração",
            "Um corpo em repouso tende a continuar em repouso",
            "Toda ação tem uma reação de mesma intensidade e direção, mas em sentido oposto",
            "A energia não pode ser criada nem destruída"
        ], 
        correta: 2
    },
    {
        texto: "4) O que acontece com um objeto quando ele está em queda livre?",
        alternativas: [
            "Sua massa diminui",
            "Ele para de sofrer aceleração",
            "Ele cai com velocidade constante",
            "Ele sofre apenas a ação da força da gravidade"
        ],
        correta: 3
    },
    {
        texto: "5) Qual dessas alternativas representa uma forma de energia?",
        alternativas: [
            "Pressão",
            "Temperatura",
            "Cinética",
            "Potência"
        ],
        correta: 2
    },
    {
        texto: "6) A unidade de medida do trabalho no Sistema Internacional é:",
        alternativas: [
            "Joule",
            "Watt",
            "Newton",
            "Pascal"
        ],
        correta: 0
    },
    {
        texto: "7) A velocidade escalar média de um corpo é dada por:",
        alternativas: [
            "V = m / a",
            "V = d / t",
            "V = F · d",
            "V = a · t"
        ],
        correta: 1
    },
    {
        texto: "8) Qual fenômeno ocorre quando a luz muda de direção ao passar de um meio para outro?",
        alternativas: [
            "Reflexão",
            "Refração",
            "Difração",
            "Polarização"
        ],
        correta: 1
    },
    {
        texto: "9) O que é energia potencial gravitacional?",
        alternativas: [
            "Energia relacionada à velocidade de um corpo",
            "Energia armazenada em corpos comprimidos ou esticados",
            "Energia contida nos alimentos",
            "Energia devida à posição de um corpo em relação ao solo"
        ],
        correta: 3
    },
    {
        texto: "10) A lei de conservação da energia afirma que:",
        alternativas: [
            "A energia de um sistema isolado permanece constante",
            "A energia pode ser destruída para gerar matéria",
            "A energia sempre aumenta com o tempo",
            "A energia só existe em sistemas mecânicos"
        ],
        correta: 0
    }
]

function mPergunta(index) {
  const pergunta = perguntas[index];
  document.getElementById("pergunta").textContent = pergunta.texto;

  const alternativas = document.querySelectorAll(".resposta");
  alternativas.forEach((div, i) => {
    const p = div.querySelector("p");
    p.textContent = pergunta.alternativas[i];
    div.setAttribute("data-indice", i);
    div.classList.remove("correta", "incorreta");
    div.classList.remove("desativada");
  });

  respondido = false;
  document.getElementById("btn").style.display = "none";
}

document.querySelectorAll(".resposta").forEach((div) => {
  div.addEventListener("click", function () {
    if (this.classList.contains("correta") || this.classList.contains("incorreta")) return;

    const escolha = Number(this.getAttribute("data-indice"));
    const correta = perguntas[iAtual].correta;

    if (escolha === correta) {
      document.querySelectorAll(".resposta").forEach((d, i) => {
        d.classList.add(i === correta ? "correta" : "incorreta");
        d.classList.add("desativada");
      });
      respondido = true;
      document.getElementById("btn").style.display = "block";
    } else {
      this.classList.add("incorreta");
    }
  });
});

document.getElementById("btn").addEventListener("click", () => {
  iAtual++;
  if (iAtual < perguntas.length) {
    mPergunta(iAtual);
  } else {
    finalizarQuiz();
  }
});

function finalizarQuiz() {
  document.getElementById("pergunta").textContent = "Quiz finalizado! Clique no átomo para uma surpresa!";
  document.querySelectorAll(".resposta").forEach((div) => {
    div.style.display = "none";
  });
  q = true
  cModal()
  document.getElementById("btn").style.display = "none";
}

window.onload = function () {
  mPergunta(iAtual);
  cModal();
};

function cModal() {
    if (q) {
      document.querySelector("#modal-content h1").innerHTML = "insira aqui o futuro título emocional"
      document.querySelector("#modal-content p").innerHTML = "insira aqui o futuro texto emocional"
    } else {
      document.querySelector("#modal-content h1").innerHTML = "Site criado por:"
      document.querySelector("#modal-content p").innerHTML = "vê com a sara amanhã qual vai ser a desculpa (caso queira dá para colocar um esteregg no texto alí no canto)"
    }
}

const menuIcon = document.getElementById("menuIco");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

menuIcon.addEventListener("click", function (event) {
  event.stopPropagation();
  modal.style.display = "block";
});

document.addEventListener("click", function (event) {
  const clicouFora = !modal.contains(event.target) && event.target !== menuIcon;
  if (clicouFora) {
    modal.style.display = "none";
  }
});
