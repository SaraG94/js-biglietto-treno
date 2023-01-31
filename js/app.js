//chiedere kw
let km = prompt ('Salve viaggiatore! Quanti kilometri deve percorre col treno?');
console.log(km)
//chiedere età
let age = prompt ('Quanti anni ha il viaggiatore?');
console.log(age)
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


//stampare prezzo finale
