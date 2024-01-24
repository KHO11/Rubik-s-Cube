import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [color, setColor] = useState(['#00ff00', '#0000ff', '#ff9900', '#ff0000', '#ffff00', '#ffffff']);

  const [sides, setSides] = useState(['front', 'back', 'left', 'right', 'bottom', 'top']);

  useEffect(() => {
    
    let box = document.querySelector('.box');

    for (var i of sides) {
      let side = document.createElement('div');
      box.appendChild(side);
      side.classList.add(i);

      side.setAttribute('style', `--clr:${color[sides.indexOf(i)]}`);

    for (let j = 0; j < 9; j++) {
      let span = document.createElement('span');
      side.appendChild(span);
    }
      
    side.querySelector('span').setAttribute('style', `--clr:${color[sides.indexOf(i)]}`);
    }
        
    var isKeyDown = false;

    rotateCube(-285, -250);

    document.documentElement.addEventListener('mousedown', function (e) {
      isKeyDown = true;
      rotateCube(e.clientX, e.clientY) ;
    })


    document.documentElement.addEventListener('mouseup', function (e) {
      isKeyDown = false;
      rotateCube(-285, -250);
    })

    document.documentElement.addEventListener('mousemove', function (e) {
      isKeyDown && rotateCube(e.clientX, e.clientY)
    })
    
    function rotateCube(x, y) {
      let box = document.querySelector('.box');
      let Xvalue = Math.floor((x / 2) + 100);
      let Yvalue = Math.floor((y / 2) + 100);
      box.style.transform = `rotateX(${Yvalue}deg) rotateY(${Xvalue}deg)`;
    }
  });

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
