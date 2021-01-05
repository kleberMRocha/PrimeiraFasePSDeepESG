const input = document.querySelector('.inputText');
const button =  document.querySelector('#buttonCheck');
const response =  document.querySelector('[data-response]');



button.addEventListener("click", () => {

if(!input.value.length) return response.innerHTML = "O campo deve conter uma String";

const splitedWords =  (input.value).toLowerCase().split('');
const splitedWordsReverted =  (input.value).toLowerCase().split('').reverse();

const original = splitedWords.join('');
const reverted = splitedWordsReverted.join('');

  
reverted.replace(/[-.?,!:;\s]+/g,'').trim() === original.replace(/[-.?,!:;\s]+/g,'').trim() 
? response.innerHTML = "É um palíndromos"
:response.innerHTML =  "Não é um palíndromos";



});