/*caiu na prova do oranje juice
let a = [1,2,3]
a [120] = 200
console.log(a.length)*/

let divBiscoito = document.querySelector("#imgBiscoito")
let resetPlay = document.querySelector("#playReset")
let biscoito = document.querySelector("#biscoito")

let play = document.querySelector("#btnPlay");

let selecionar = document.querySelector("#selecionar").value
let pacoteBiscoito = document.querySelector("#package");

const myArray = [
  "Seu ano será de muita sorte",
  "Hoje é o seu dia de sorte. Você ganhou um milhão!",
  "Você vai conseguir, tenha fé!",
  "Já deu um beijo na sua mãe hoje?",
  "Sabia que quem estuda mais tem mais chance de conseguir?",
  "Você é muito precioso(a)",
  "Agradeça sempre",
  "Diga sempre: eu sou feliz",
  'Você vai ter um filho',
  "Você é perfeito e muito precioso"
];




console.log(selecionar)



function biscoitoDaSorte() {
  let divBiscoito = document.querySelector("#imgBiscoito")
  let resetPlay = document.querySelector("#playReset")
  let biscoito = document.querySelector("#biscoito")
  let play = document.querySelector("#btnPlay");
  let pacoteBiscoito = document.querySelector("#package");
  let selecionar = document.querySelector("#selecionar").value
  console.log(selecionar)

  const myArray = [
    "Seu ano será de muita sorte",
    "Hoje é o seu dia de sorte.",
    "Você ganhou um milhão!",
    "Você vai conseguir, tenha fé!",
    "Já deu um beijo na sua mãe hoje?",
    "Quem estuda tem mais chance de conseguir?",
    "Você é muito precioso(a)",
    "Agradeça sempre",
    "Diga sempre: eu sou feliz",
    'Você vai ter um filho',
    "Você é perfeito e muito precioso"
  ];

  document.querySelector("#imgBiscoito").innerHTML = myArray[Math.floor(11 * Math.random())];

  let sorte = document.querySelector("#imgBiscoito").innerHTML = myArray[Math.floor(11 * Math.random())];



  if (sorte == selecionar) {
    divBiscoito.setAttribute('style', 'display: block')

    biscoito.setAttribute('style', 'display: block')

    resetPlay.setAttribute('style', 'display: block')
    errou.setAttribute('style', 'display: none')
    play.setAttribute('style', 'display: none')
    pacoteBiscoito.setAttribute('style', 'display: none')
  }
  else {
    errou.setAttribute('style', 'display: block')
    setTimeout(() => {
      errou.setAttribute('style', 'display: none')
  }, 2000)
   
  }


}

play.addEventListener('click', function () {
  biscoitoDaSorte()

})

resetPlay.addEventListener('click', function () {
  play.setAttribute('style', 'display: block')
  pacoteBiscoito.setAttribute('style', 'display: block')
  resetPlay.setAttribute('style', 'display: none')
  divBiscoito.setAttribute('style', 'display: none')
  biscoito.setAttribute('style', 'display: none')


})