// Create Canvas Element
const canvas = document.createElement('canvas');
canvas.id = 'canvas1';
document.body.prepend(canvas);
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

//Create Paragraph Element

const p = document.createElement('p');
p.id = 'studioP';
p.textContent = 'Pirate Byte Studio';
canvas.after(p);

const playerImage = new Image();
playerImage.src = './assets/shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 3;
let gameFrame = 0;
const staggerFrames = 6;


function animateCanvas(){
    ctx?.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames)%6;
    frameX = spriteWidth*position;
    ctx?.drawImage(playerImage,frameX,frameY*spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight);
    gameFrame++
    requestAnimationFrame(animateCanvas);
}

function fadeIn(elem:HTMLParagraphElement,time:number){
    let ease = Math.cbrt;
    let start = (new Date()).getTime();
    animate();
    function animate(){
        let elapsed = (new Date()).getTime()-start;
        let fraction = elapsed/time;
        if (fraction < 1) {
            let opacity = 0 + Math.cos(Math.acos(fraction));
            elem.style.opacity = String(opacity);
            setTimeout(animate,Math.min(25,time - elapsed))
        }
        else {
            elem.style.opacity = '1'
        }
    }
}

animateCanvas();
fadeIn(p,4500);


