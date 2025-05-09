//konstanty pro objektové stránky
const vyska = document.getElementById("vyska");
const vaha = document.getElementById("vaha");
const vek = document.getElementById("vek");
const jmeno = document.getElementById("jmeno");
const result = document.getElementById("vysledek");
const button = document.querySelector("[type='button']");
//obsahuje typ objekt
let osoba = {   
    //atributy objektu
    vaha: 100,
    vyska: 170,
    vek:17,
    jmeno:"",
    pohlavi: "muž",

    //metody objektu
    cmNaMetry: function(cm){
        return Number.isInteger(cm) ? cm / 100: false;
    },
    bmi: function(w = this.vaha, h = this.vyska){
        return (w / Math.pow(this.cmNaMetry(h), 2)).toFixed(2)
    },
    state: function(){
        if(this.bmi() >= 18 && this.bmi() < 25){
            return "V pohodě brácho";
        }
        else if (this.bmi() >= 25 && this.bmi() < 30){
            return "Kámo zhubni";
        }
        else if (this.bmi() >= 30){
            return "Vašík Pašík, tlustá guma Moh bys jít do suma, s titulem yokozuna";
        }
        else if (this.bmi() <= 18){
            return "Bro have some food";
    }
    }
};

console.log(osoba.bmi());
console.log(osoba.state());

button.addEventListener("click", function(){
    osoba.vyska = parseInt(vyska.value);
    osoba.vaha = parseInt(vaha.value);
    result.textContent = `Tvoje BMI je: ${osoba.bmi()} a tvůj stav je: ${osoba.state()}`;
    
});