class Zombie{
    constructor(canvas,size,speed,img){
        
        this.width = 100 + size * 20; // Rozmiar na canvasie
        this.height =this.width * (312 / 200);
        this.speed = speed;
        this.image = img;
        this.x = canvas.width-this.width; // Pozycja na canvasie
        this.y =canvas.height-Math.random()*40-this.height;

        this.frameX = 0; // Indeks bieżącej klatki
        this.maxFrames = 10; // Liczba klatek w sprite'ach (od 0 do 8)
        this.frameTimer = 0; // Licznik czasu
        this.frameInterval = 100; // Czas między klatkami (w ms)
    }
    updateAnimation(deltaTime) {
        this.frameTimer += deltaTime;
        if (this.frameTimer > this.frameInterval) {
            this.frameX = (this.frameX + 1) % this.maxFrames; // Przełącz na następną klatkę
            this.frameTimer = 0; // Zresetuj licznik
        }
    }

}

class Game{


    constructor(){
        this.maxLives=3;    
        this.init();
    }

    init = ( )=>{
        this.canvas = document.getElementById('gameCanvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.lives=this.maxLives;
        this.score=0;
        this.music=document.getElementById('music');
        this.playButton=document.getElementById('playButton');
        this.playButton.addEventListener('click',this.startGame);
        this.playButton.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.startGame();
            }
        }); 
        this.full_heart=document.getElementById('fullHeart');
        this.empty_heart=document.getElementById('emptyHeart');
        this.zombies=[];
        this.zombieImg=document.getElementById('zombie');
    } 

 

    drawHearts=()=>{
        for(let i=0;i<this.lives;i++){
            this.ctx.drawImage(this.full_heart,10+i*60,10,45,45);
        }
        for(let i=0; i < this.maxLives-this.lives; i++){
            this.ctx.drawImage(this.empty_heart,10+(this.lives+i)*60,10,45,45);
        }
    }

    printScore=()=>{
        let strScore = new String(this.score);
        let result = '';
        for(let i=0; i<5-strScore.length; i++){
            result+= '0'
        }
        result += strScore;
        return result;
    }

    drawScore=()=>{
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.font="64px Arial";
        this.ctx.fillText(this.printScore(), this.canvas.width-200, 64);
    }

    drawZombie = (zombie) => {
        this.ctx.drawImage(
            zombie.image,               // Obraz sprite'ów
            zombie.frameX * 200, 0,     // Wycięcie klatki (X = klatka * 200, Y = 0)
            200, 312,                   // Rozmiar jednej klatki w sprite sheet
            zombie.x, zombie.y,         // Pozycja na canvasie
            zombie.width, zombie.height // Rozmiar zombie na canvasie
        );
    };

    shoot=(event)=>{
        let x=(event.clientX-this.canvas.getBoundingClientRect().left)/this.canvas.getBoundingClientRect().width*this.canvas.width;
        let y=(event.clientY-this.canvas.getBoundingClientRect().top)/this.canvas.getBoundingClientRect().height*this.canvas.height;
        
        let hitAny=false;
        let zombiesReversed=this.zombies.slice().reverse();
        for(let i=0;i<zombiesReversed.length;i++){
            if(x>zombiesReversed[i].x && x<zombiesReversed[i].x+zombiesReversed[i].width && y>zombiesReversed[i].y && y<zombiesReversed[i].y+zombiesReversed[i].height){
                zombiesReversed.splice(i,1);
                this.score+=20;
                hitAny=true;
                break;
            }
        }
        this.zombies=zombiesReversed.reverse();
      
        if(!hitAny){
            this.score-=5;
            this.score=Math.max(0,this.score);
          
        }
       
    }


    startGame=()=>{
        this.canvas.addEventListener('click', (event) => this.shoot(event));
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.music.play();
        this.playButton.style.display='none';
        this.zombies=[];
        this.lives=this.maxLives;
        this.score=0;
        this.zombies.push(new Zombie(this.canvas,2,3, this.zombieImg));
        this.gameRunning=true;
        this.start=null;
        this.spawnLoop=setInterval(this.spawnZombie,2000);
        this.gameLoop=(timestamp)=>{
            if(!this.start) this.start=timestamp;
            let progress=timestamp-this.start;
            if(progress>1000/60){
                this.updateGameArea();
                this.start=timestamp;
            }

            if(this.gameRunning)
            {
                this.animationFrameId= window.requestAnimationFrame(this.gameLoop);
            }
       

        }
        this.animationFrameId=window.requestAnimationFrame(this.gameLoop);
       
       
       

    }
    spawnZombie=()=>{  
        if(Math.random()<0.8){
            let size=Math.floor(Math.random()*4);
            let speed=Math.floor(Math.random()*4)+2;
            this.zombies.push(new Zombie(this.canvas,size,speed, this.zombieImg));
        } 


    }

    endGame=()=>{
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.canvas.removeEventListener('click', (event) => this.shoot(event));
        window.cancelAnimationFrame( this.animationFrameId);
        clearInterval(this.spawnLoop);
        this.gameRunning=false;
        this.music.pause();
        this.playButton.style.display='block';
        this.ctx.font = "64px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText("Game Over", this.canvas.width/2-150, 100);
        this.ctx.fillText("Score: "+this.printScore(), this.canvas.width/2-150, 200);
    }

    updateGameArea=()=>{
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.drawHearts();
        this.drawScore();
        const deltaTime = 16;
        this.zombies = this.zombies.filter(zombie => {
            zombie.updateAnimation(deltaTime); 
            zombie.x -= 0.8* zombie.speed;
            this.drawZombie(zombie);
            if (zombie.x <= 0) {
                this.lives--;
                return false;
            }
            return true; 
        });
        if(this.lives==0){
            this.endGame(); 
        }
      
    }
}


document.addEventListener('DOMContentLoaded',()=>{ 
    const game=new Game();
});

