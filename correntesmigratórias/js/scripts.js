/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "(UNIFOR) – A região que forneceu o maior contingente de colos-imigrantes para a ocupação da fronteira agrícola, no Mato Grosso, Rondônia e Acre, durante os anos 70 e 80, foi a:",
    alternativaA : "Norte.",
    alternativaB : "Sul.",
    alternativaC : "Sudeste.",
    alternativaD : "Nordeste.",
    correta      : "Sul.",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "A presença de uma corrente migratória por si só não explica a condição de vida dos imigrantes. Esta será somente a aparência de um fenômeno mais profundo, estruturado em relações socioeconômicas muitas vezes perversas. É o que podemos dizer dos indivíduos que são deslocados do campo para as cidades e obrigados a viver em condições de vida culturalmente diferentes das que vivenciaram em seu lugar de origem. O texto faz referência a um movimento migratório que reflete o(a):",
    alternativaA : "dinâmica experimentada por grande quantidade de pessoas, que resultou no inchaço das grandes cidades.",
    alternativaB : "permuta de locais específicos, obedecendo a fatores cíclicos naturais.",
    alternativaC : "cultura de localização itinerante no espaço.",
    alternativaD : "circulação de pessoas diariamente em função do emprego.",
    correta      : "dinâmica experimentada por grande quantidade de pessoas, que resultou no inchaço das grandes cidades.",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Migrações pendulares são: ",
    alternativaA : "movimentos ligados a atividades pastoris;",
    alternativaB : "deslocamento maciço de populações urbanas em direção ao campo;",
    alternativaC : "movimentos diários de trabalhadores entre o local de residência e o local de trabalho.",
    alternativaD : "troca de imigrantes entre as grandes regiões;",
    correta      : "movimentos diários de trabalhadores entre o local de residência e o local de trabalho.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "(UFPE) As migrações internacionais vêm ganhando um certo destaque no cenário mundial, já há alguns anos, ou seja, desde a década de 80 do século passado. Contribuíram para esse importante fato, estudado pela Geografia Humana: ",
    alternativaA : "as desigualdades econômicas regionais, os conflitos bélicos e a nova onda de epidemias.",
    alternativaB : "a destruição do bloco soviético, a formação de blocos econômicos e o fim das divergências étnicas.",
    alternativaC : "as desigualdades econômicas regionais, a nova onda de epidemias e o fim das divergências étnicas.",
    alternativaD : "as desigualdades econômicas regionais, os conflitos bélicos, a destruição do bloco soviético. e a formação de blocos econômicos.",
    correta      : "as desigualdades econômicas regionais, os conflitos bélicos, a destruição do bloco soviético. e a formação de blocos econômicos.",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o principal fator que impulsiona as correntes migratórias?",
    alternativaA : "Mudanças climáticas",
    alternativaB : "Busca por melhores condições econômicas",
    alternativaC : "Conflitos políticos e guerras",
    alternativaD : "Busca por oportunidades educacionais",
    correta      : "Busca por melhores condições econômicas",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Sobre a o termo POPULAÇÃO, a alternativa verdadeira é:",
    alternativaA : "A população relativa é o número total de habitantes de um local.",
    alternativaB : "Densidade demográfica é a divisão da população relativa pela área do local.",
    alternativaC : "Pode-se chamar uma área ou região de muito povoada quando ela possui uma grande população absoluta.",
    alternativaD : "As áreas onde a população absoluta é grande são chamadas de áreas de grande concentração populacional.",
    correta      : "As áreas onde a população absoluta é grande são chamadas de áreas de grande concentração populacional.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Quais são os principais impactos das correntes migratórias nos países de destino?",
    alternativaA : "Aumento da diversidade cultural e enriquecimento social.",
    alternativaB : "Aumento da competição por empregos e recursos.",
    alternativaC : "Envelhecimento da população e diminuição da mão de obra local.",
    alternativaD : "Integração multicultural e fortalecimento da economia local.",
    correta      : "Aumento da diversidade cultural e enriquecimento social.",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Quais são os principais impactos das correntes migratórias nos países de origem?",
    alternativaA : "Melhoria das condições de vida e desenvolvimento social",
    alternativaB : "Aumento da diversidade cultural e troca de conhecimentos",
    alternativaC : "Fuga de cérebros e perda de mão de obra qualificada.",
    alternativaD : "Redução da taxa de desemprego e estabilidade econômica.",
    correta      : "Fuga de cérebros e perda de mão de obra qualificada.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Quais são os principais desafios enfrentados pelos migrantes durante o processo de migração?",
    alternativaA : "Barreiras linguísticas e culturais",
    alternativaB : "Discriminação e xenofobia",
    alternativaC : "Dificuldades na obtenção de documentos legais",
    alternativaD : "Todas as alternativas anteriores estão corretas",
    correta      : "Todas as alternativas anteriores estão corretas",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Israel possui 22.000 Km2 e uma população de 5.500.000 habitantes e uma renda per capita de 13.220 dólares. Calcule a densidade demográfica.",
    alternativaA : "25hab/Km2",
    alternativaB : "150 hab/Km2",
    alternativaC : "250hab/Km2",
    alternativaD : "2.500 hab/Km2",
    correta      : "250hab/Km2",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}
