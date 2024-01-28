import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [color, setColor] = useState(['#00ff00', '#ff0000', '#ffffff', '#0000ff', '#ff9900', '#ffff00']);

  const [cubeSides, setCubeSides] = useState(['front', 'right', 'up', 'back', 'left', 'down']); 

  useEffect(() => {
    
    let box = document.querySelector('.box');

    for (var i of cubeSides) {
      let eachCubeSide = document.createElement('div');
      box.appendChild(eachCubeSide);
      eachCubeSide.classList.add(i);

      eachCubeSide.setAttribute('style', `--clr:${color[cubeSides.indexOf(i)]}`);

      for (let j = 0; j < 9; j++) {
        let span = document.createElement('span');
        eachCubeSide.appendChild(span);
      }
      
      eachCubeSide.querySelector('span').setAttribute('style', `--clr:${color[cubeSides.indexOf(i)]}`);
    }
        
    var isKeyDown = false;

    rotateCube(-285, -250);

    document.documentElement.addEventListener('mousedown', function (e) {
      isKeyDown = true;
      rotateCube(e.clientX, e.clientY);
    })

    document.documentElement.addEventListener('mouseup', function (e) {
      isKeyDown = false;
      rotateCube(e.clientX, e.clientY);
    })

    document.documentElement.addEventListener('mousemove', function (e) {
      isKeyDown && rotateCube(e.clientX, e.clientY)
    })
  });

  function rotateCube(x, y) {
    let box = document.querySelector('.box');
    let Xvalue = Math.floor((x / 2) + 100);
    let Yvalue = Math.floor((y / 2) + 100);
    box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`;
  }

  return (
    <div className="App">
      <h1>Rubik's Cube</h1>
      <div className="container">
        <div className="box"></div>
      </div>
    </div>
  );
}

export default App;
