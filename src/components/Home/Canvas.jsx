import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

import './Canvas.css';

class Canvas extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentDidMount() {
        this.canvas1();
        this.canvas2();
        this.canvas3();
        this.canvas4();
    }

    canvas1() {
        let canvas = document.getElementById('canvas1');
        let c = canvas.getContext('2d');
        let w = canvas.width,
            h = canvas.height;

        //canvas background
        c.fillStyle = 'black';
        c.fillRect(0, 0, w, h);

        //rectangle filled in
        c.fillStyle = 'red';
        c.fillRect(20, 20, 50, 50);

        //rectangle outline
        c.strokeStyle = 'white';
        c.lineWidth = 10;
        c.strokeRect(30, 30, 50, 50);

        //custom shapes and drawing lines
        c.strokeStyle = '#c3f18c';
        c.lineWidth = 4;
        c.moveTo(100, 100);
        c.lineTo(200, 200);
        c.lineTo(300, 220);
        c.lineTo(320, 140);
        c.closePath();
        c.fill();
        c.stroke();

        //text
        c.font = '35px arial';
        c.fillStyle = 'white';
        c.fillText('Hello World', 200, 50);

        //circles and pie charts
        c.beginPath();
        c.moveTo(250, 350);
        c.arc(250, 350, 60, 0, Math.PI * 2, false);
        c.fill();
    }

    canvas2() {
        let canvas = document.getElementById('canvas2');
        let c = canvas.getContext('2d');
        let w = canvas.width,
            h = canvas.height;

        c.fillStyle = 'rgba(0,0,0,1)';
        c.fillRect(0, 0, w, h);

        //simple animation
        var posX = 0;
        var posY = 0;
        var velX = 2.5;
        var velY = 2.9;
        setInterval(function () {

            posX += velX;
            posY += velY;

            c.fillStyle = 'rgba(0,0,0,0.1)';
            c.fillRect(0, 0, w, h);

            c.fillStyle = 'white';
            c.beginPath();
            c.moveTo(250, 350);
            c.arc(posX, posY, 10, 0, Math.PI * 2, false);
            c.fill();

            if ( (posX > w || posX < 0) && Math.abs(velX) < 5){
                velX *= -1;
            }
            if ( (posY > h || posY < 0) && Math.abs(velX) < 5){
                velY *= -1;
            }
        }, 30)

    }

    canvas3(){
        //Particle animations

        let canvas = document.getElementById('canvas3');
        let c = canvas.getContext('2d');
        let w = canvas.width,
            h = canvas.height;
        let particles = {}, 
        particleIndex = 0,
        particleNum = 5;

        c.fillStyle = 'rgba(0,0,0,1)';
        c.fillRect(0, 0, w, h);

        c.fillStyle = '#ffd700';
        c.fillRect(220, 250, 60, 40);
        c.fillRect(240, 290, 20, 90);

        function Particle(){
            this.x = w/2;
            this.y = w/2;
            this.vx = Math.random() * 20 - 10;
            this.vy = Math.random() * 8 - 16;
            this.gravity = 0.8;

            particleIndex ++;
            particles[particleIndex] = this;
            this.id = particleIndex;

            this.life = 0;
            this.maxLife = Math.random() * 20 + 100;

            let r = Math.random();
            this.background = r < 0.6 ? true : false;
            this.midFront = (this.vx < 2.8 && this.vx > -2.8);
            this.frontAndCenter = (this.vx < 1.4 && this.vx > -1.4);
            this.red = this.background ? 100 : 0;
            this.green = this.background ? 155 : 255;
            this.blue = 185;
            this.opacity = 1;
            this.width = 3;
            this.height = 3;
        }

        Particle.prototype.draw = function(){
            this.x += this.vx;
            this.y += this.vy;
            this.life++;
            this.floor = this.background ? 350 : 400;

            if (this.midFront && !this.background){
                this.floor = 425;
            }
            
            if (this.frontAndCenter && !this.background){
                this.floor = 450;
            }
            
            if (this.y >= this.floor){
                this.vy *= -0.7;
                this.vx *= 0.8;
                if (Math.abs(this.vy) < 0.5){
                    this.gravity = 0;
                }
            }

            if (this.life >= this.maxLife){
                delete particles[this.id];
            }

            this.vy += this.gravity;
            this.blue -= 1;

            if (this.background){
                this.red += 1;
                this.green -= 1;
                this.width -= 0.06;
                this.height -= 0.06;
                this.opacity -= 0.005;
            }else if (this.frontAndCenter){
                this.width += 0.07;
                this.height += 0.07;
                this.life += 0.5;
            }else if (this.midFront){
                this.width += 0.035;
                this.height += 0.035;
            }else{
                this.width += 0.01;
                this.height += 0.01;
            }
            
            c.fillStyle = 'rgba('+this.red+', '+this.green+', '+this.blue+', '+this.opacity+')';
            c.fillRect(this.x, this.y, this.width, this.height);
        }

        setInterval(() =>{
            this.createParticles(Particle, particleNum);
        }, 25)

        setInterval(function(){
            c.fillStyle = 'black';
            c.fillRect(0, 0, w, h);

            for (var i in particles){
                particles[i].draw();
            }

            c.fillStyle = '#ffd700';
            c.fillRect(220, 250, 60, 40);
            c.fillRect(240, 290, 20, 90);
        }, 30)

    }

    canvas4(){
        <Particles
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: '#3CA9D1',
                            blur: 5
                        }
                    }
                }
            }}
            style={{
                width: '100%',
                height: '100%',
                background: '#ccc'
            }}
        />
    }

    createParticles(Particle, particleNum){
        for (let i = 0; i < particleNum; i++){
            new Particle();
        }
    }

    render() {
        return (
            <section className='canvas_page'>

                <Link to='/' id='home_link'>Home</Link>

                <canvas className='canvas' id='canvas1' width='500' height='500'>Fallback text for older browsers</canvas>
                <canvas className='canvas' id='canvas2' width='500' height='500'>Fallback text for older browsers</canvas>
                <canvas className='canvas' id='canvas3' width='500' height='500'>Fallback text for older browsers</canvas>
                <canvas className='canvas' id='canvas4' width='500' height='500'>Fallback text for older browsers</canvas>

            </section>
        );
    }
}


export default Canvas;