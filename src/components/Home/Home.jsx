import React, { Component } from 'react';
import './Home.css';


export default class TodoAppComponent extends Component {
  constructor(props){
    super(props);
    this.args = {
      username: '',
      gravity: 4,
      gravityIncrementer: 0.02,
      posY: 100,
      velY: 0,
      thrust: -4.5,
      thrustIncrease: 2,
      thrustIncrementer: 0.01,
      points: 0,
      pointsIncrementer: 1,
    }

    this.gameLoop = this.gameLoop.bind(this);
    this.addThrust = this.addThrust.bind(this);
  }

  componentDidMount(){
    this.canvas3();
  }

  canvas3(){

    let board = document.getElementById('board');
    let b = board.getContext('2d');
    let w = board.width,
        h = board.height;
    
    b.fillStyle = 'rgba(0,0,0,1)';
    b.fillRect(0, 0, w, h);

    setInterval(this.gameLoop, 30);

  }

  gameLoop(){

    let board = document.getElementById('board');
    let b = board.getContext('2d');
    let w = board.width;
    let h = board.height;
        
    // Move the rocket ship
    let {gravity, posY, velY, thrust} = this.args;
    
    this.args.posY += velY;
    this.args.velY = gravity + thrust;
    
    if (this.args.thrust < 0){
      this.args.thrust += 0.1;
    }
    
    b.fillStyle = 'rgba(0,0,0,1)';
    b.fillRect(0, 0, w, h);

    // Add points
    this.args.points += this.args.pointsIncrementer;
    b.font = '18px arial';
    b.fillStyle = 'white';
    b.fillText('Score: ' + this.args.points, 5, 20);

    b.fillStyle = 'white';
    b.beginPath();
    b.moveTo(250, 350);
    b.arc(140, posY, 10, 0, Math.PI * 2, false);
    b.fill();

    // Gravity and Thrust slowly get stronger over time;
    this.args.gravity += this.args.gravityIncrementer;
    this.args.thrustIncrease += this.args.thrustIncrementer;

    // handle crashes
    if (posY < 0){
      this.args.thrust = 0;
      this.args.gravity = 0;
      this.args.posY = 0;
      this.args.pointsIncrementer = 0;
      this.args.gravityIncrementer = 0;
      this.args.thrustIncrementer = 0;
    }
    if (posY > h){
      this.args.thrust = 0;
      this.args.gravity = 0;
      this.args.posY = h;
      this.args.pointsIncrementer = 0;
      this.args.gravityIncrementer = 0;
      this.args.thrustIncrementer = 0;
    }

  }

  addThrust(){
    this.args.thrust -= this.args.thrustIncrease;
  }

  render() {
    return (
      <div className='home'>

        <div className='game_console'>
          <canvas className='canvas' id='board' width='300' height='400'>Fallback text for older browsers</canvas>
          <div className='thrust' onClick={this.addThrust}>Thrust</div>
        </div>

      </div>
    );
  }
  
}

