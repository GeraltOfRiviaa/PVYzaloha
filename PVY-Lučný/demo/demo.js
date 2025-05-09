/* Konstanta canvas odkazuje na element s id myCanvas na webové stránce */
const canvas = document.getElementById("myCanvas");
/* Grafický kontext canvasu, který umožní používat různé nástroje pro kreslení */
const ctx = canvas.getContext("2d");
/* Nastavení barvy výplně */
//ctx.fillStyle = "red";
/* Vykreslí vyplněný obdélník */
//ctx.fillRect(100, 100, 150, 75);

function drawPattern() {
    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = "red";
        ctx.fillRect(100 * i, 100 * i, 100, 100);
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(100 * i + 50, 100 * i + 50, 50, 0, Math.PI * 2);
        ctx.fill();
    }
}

let x = 0;

function animation() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPattern();
    ctx.fillStyle = "red";
    ctx.fillRect(x, 100, 100, 100);

    if (x > canvas.width + 100) x = -100;
    x += 2;

    requestAnimationFrame(animation);
}
animation();
