const imgKostka = document.getElementsByTagName("img")[0];
const capKostka = document.querySelector("figcaption");
const stats = document.getElementById("stats");
const btnHrej = document.querySelector(".btn.btn-danger");

let hod;
let hody = [];

let interval;
let stav = false;

btnHrej.addEventListener("click", function (){
    if(!stav){
        btnHrej.textContent = "STOP"
        stav = true;
        interval = setInterval (() =>{
            hod = Math.ceil(Math.random() * 6);
            capKostka.innerHTML = `<h1 class = "badge rounded-pill bg-danger">${hod}</h1>`;
            imgKostka.src = `img/kostka${hod}.webp`;
        }, 40
    );
    }
    else {
        btnHrej.textContent = "HREJ"
        stav = false;
        clearInterval(interval);
        console.log(hod);
        hody.push(hod);
        stats.innerHTML = stat();
    }
    
    
    hody.push(hod);
    //console.log(suma());
    //console.log(minHody());
    //console.log(maxHody());
    stats.innerHTML = stat();

}
)

function suma(){
    let suma = 0;
    for (let i = 0;i < hody.length; i++){
        suma += hody[i];
    }
    return suma;
}
function minHody(){
    let minCislo = 6;
    for(let i = 0; i < hod[i];i++){
        if(hod[i]< minCislo){
            minCislo = hod[i];
        }
    }
    return minCislo;
}
function maxHody(){
    let maxCislo = 1;
    hody.forEach(function(h){
        if (maxCislo <h) max = h;
    }

);
    return maxCislo;
}
//sumam, průměr, minimum, maximum
function stat(){
    let vystup = "<h3>Statistika</h3>";
    vystup += `<p>Počet bodů: ${hody.length}</p>`
    vystup += `<p>Suma: ${suma()}</p>`
    vystup += `<p>Minimální hod: ${minHody()}</p>`
    vystup += `<p>Maximální hod: ${maxHody()}</p>`
    vystup += `<p>Průměr: ${(suma()/hody.length).toFixed(2)}</p>`
    return vystup;
}

