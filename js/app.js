//chiedere kw
let km = prompt ('Salve viaggiatore! Quanti kilometri deve percorre col treno?');
console.log(km)

//chiedere età
let age = prompt ('Quanti anni ha il viaggiatore?');
console.log(age)

//chiedere nome 
let firstname = prompt ('Qual è il nome e il cognome del viaggiatore?');
console.log(firstname)

//calcolare prezzo kw
let fullPrice = (km*0.21);
console.log(fullPrice)

//applicare sconti
if (age < 18 ){
    let under18Price = ((km*0.21)*0.8);
    console.log(under18Price)
} else if(age > 65 || age==='65'){
    let over65Price = ((km*0.21)*0.6);
    console.log(over65Price)
} 

//prendere elemento html
let spanElement=document.getElementById('full-price');
//stampare prezzo intero
spanElement.innerHTML=fullPrice;

//prendere elementi html 
let pElement=document.getElementById('passenger');
//stampare dati viaggiatore
pElement.innerHTML= firstname + ' ' + age;
