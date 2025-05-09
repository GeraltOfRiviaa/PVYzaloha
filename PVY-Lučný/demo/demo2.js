const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function randNum(min=0, max=255) {
    let cislo = Math.round(Math.random() * (max - min) + min);
    return cislo;
}

ctx.font = "200px Calibri";
ctx.strokeStyle = `rgb(${randNum()},${randNum()},${randNum()})`;
ctx.strokeText("A", randNum(0,800),randNum(0,800));

console.log(randNum());