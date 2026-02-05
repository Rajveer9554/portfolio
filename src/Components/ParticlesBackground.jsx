import React, { useEffect, useRef } from 'react'






const colors=['rgba(255,255,255,0.5)', 'rgba(255,0,0,0.5)', 'rgba(0,255,0,0.5)', 'rgba(0,0,255,0.5)'];
  
    class Particle{
      constructor(canvas,ctx){
        this.ctx=ctx;
        this.canvas=canvas;
        this.x=Math.random()*canvas.width; // particles can randomly appear in the width of canvas
        this.y=Math.random()*canvas.height; // particles can randomly appear in the height of canvas
        this.radius=Math.random()*2+1; // radius of particles will be between 1px to 3px
        this.color=colors[Math.floor(Math.random()*colors.length)]; // it will randomly select color from colors array
        this.speedX=Math.random()*1-0.5; // it will move in x direction
        this.speedY=Math.random()*1-0.5; // it will move in y direction
      }
      draw(){
        const ctx=this.ctx;
        ctx.beginPath(); //it will start draw  shape
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false); // it will draw circle
        ctx.shadowBlur =10;
        ctx.shadowColor = this.color;
        ctx.fillStyle=this.color; // it will fill color
        ctx.fill(); // it will fill the shape

    }
      update(canvas,ctx){
        this.x+=this.speedX;// it will moves particles in x direction
        this.y+=this.speedY;// it will moves particles in y direction

        if (this.x - this.radius > canvas.width) {
  this.x = -this.radius;
} else if (this.x + this.radius < 0) {
  this.x = canvas.width + this.radius;
}

if (this.y - this.radius > canvas.height) {
  this.y = -this.radius;
} else if (this.y + this.radius < 0) {
  this.y = canvas.height + this.radius;
}
        this.draw(ctx);
      }
    }

    

export default function ParticlesBackground() {

  const  canvasRef= useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current; // it will access the current canvas dom element
    const ctx = canvas.getContext('2d'); // it will gives 2d context of the canvas
    
    const particlesArray=[];
    const numberofParticles=100;
    
    function createParticles(){
      for(let i=0; i<numberofParticles; i++){
        particlesArray.push(new Particle(canvas,ctx));// Particle class ka constructor run hota hai
      }
    }
    function handleResize(){
      canvas.width= window.innerWidth;
      canvas.height= window.innerHeight;
      particlesArray.length=0; // it will clear the particles array on resize
      createParticles();
    }
    handleResize(); // it will set the canvas size to window size initially

    window.addEventListener('resize', handleResize); // it will resize the canvas when window size changes

    let animationId;

    function animate(){
      ctx.clearRect(0, 0, canvas.width, canvas.height); // it will clear the canvas
      particlesArray.forEach(particle => {
        particle.update(canvas,ctx); // it will update each particle
      });
      animationId=requestAnimationFrame(animate); // it will call animate function recursively
    }
    animate(); // it will start the animation

    return () => {
      cancelAnimationFrame(animationId); // it will cancel the animation frame
      window.removeEventListener('resize', handleResize); // it will remove the resize event listener
    }

  },[]);

   
  
  
    

  



    
  return (
    <canvas
    ref ={canvasRef}
    className='absolute top-0 w-full h-full pointer-events-none z-0'>
     
    </canvas>
  )
  


};