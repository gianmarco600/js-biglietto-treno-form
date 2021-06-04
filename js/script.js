var nome;
var km;
var age;
var count = 0;



document.getElementById('genera').addEventListener('click' , function(){
    if (count == 0){
        nome = document.getElementById('nome').value;
        km = parseInt(document.getElementById('km').value);
        age = parseFloat(document.getElementById('age').value);

        if (isNaN(km) || isNaN(age)){
            count = 0;
             
            if(isNaN(km)){
                alert("Insarire input distanza valido");
                document.getElementById("kmBox").classList.add("_bg2"); 
                document.getElementById("km").value="";
            }
            if(isNaN(age)){
                alert("Insarire input età valido");
                document.getElementById("ageBox").classList.add("_bg2"); 
                document.getElementById("age").value="";
            }
        }
        else{
            document.getElementById("ageBox").classList.remove("_bg2"); 
            document.getElementById("kmBox").classList.remove("_bg2");
            document.getElementById("biglietto").classList.remove("_hidden"); 
            var sconto = 0;
            var prezzo = 0;
            // stampa nome
            document.getElementById("nomeOut").innerHTML = nome;
            prezzo = 0.21 * km;
            sconto = 0;

            // tipo offerta
            if (age <= 18){
                prezzo = prezzo * 0.8;
                sconto = 1;
                document.getElementById("offertaOut").innerHTML = "Offerta minorenni";
            }

            if (age >= 65){
                prezzo -= prezzo * 0.6;
                sconto = 2;
                document.getElementById("offertaOut").innerHTML = "Offerta over 65";
            }
            else{
                document.getElementById("offertaOut").innerHTML = "Nessuna offerta attiva";
            }
            // genera carrozza
            var carrozza = Math.floor(Math.random()*9) + 1;
            document.getElementById("carrozzaOut").innerHTML = carrozza;

            // genera codice treno
            var codiceT = (Math.floor(Math.random()*10000)) + 90000;
            document.getElementById("cpcOut").innerHTML = codiceT;

            // prezzo finale
            prezzo = (Math.round(prezzo * 100)) / 100;
            document.getElementById("totaleOut").innerHTML = prezzo + '€';

            document.getElementById("nomeOut").innerHTML = nome;
            count = 1;
        }
        
    }
});

document.getElementById('annulla').addEventListener('click' , function(){
    document.getElementById("nome").value="";
    document.getElementById("km").value="";
    document.getElementById("age").value="";
    document.getElementById("kmBox").classList.remove("_bg2");
    document.getElementById("ageBox").classList.remove("_bg2");
    count=0;
    document.getElementById("biglietto").classList.add("_hidden"); 
});