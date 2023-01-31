


//chiedere kw
let kilometri = prompt ('Salve viaggiatore! Quanti kilometri deve percorre col treno?');
console.log(kilometri)

//chiedere età
let age = prompt ('Quanti anni ha il viaggiatore?');
console.log(age)

//chiedere nome 
let firstname = prompt ('Qual è il nome e il cognome del viaggiatore?');
console.log(firstname)

//calcolare prezzo kw
let fullPrice = (kilometri*0.21);
console.log(fullPrice)

//prendere elemento 
let divElement=document.getElementById('discount-price');

//applicare sconti e stamparli
if (age < 18 ){
    let under18Price = ((kilometri*0.21)*0.8);
    divElement.innerHTML= under18Price +' '+'importo da pagare scontato del 20%';
    console.log(under18Price)
} else if(age > 65 || age==='65'){
    let over65Price = ((kilometri*0.21)*0.6);
    divElement.innerHTML= over65Price +' '+'importo da pagare scontato del 40%';
    console.log(over65Price)
} 

//prendere elementi html 
const strongElement=document.getElementById('kw');
//stampare dati viaggiatore
strongElement.innerHTML= kilometri;

//prendere elementi html 
let pElement=document.getElementById('passenger');
//stampare dati viaggiatore
pElement.innerHTML= firstname + ' ' + age;

//prendere elemento html
let spanElement=document.getElementById('full-price');
//stampare prezzo intero
spanElement.innerHTML=fullPrice;

