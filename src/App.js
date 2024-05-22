
import { useState } from 'react';
import './App.css';
import style from './App.module.css'
import Main from './Main';
import PortPolfolio from './PortPolfolio';


function App() {
  // const [isHovered, setIsHovered] = useState(false);
  // const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   setCursorPosition({ x: e.clientX, y: e.clientY });
  // };
  return (
    <div className={style.app}
    // onMouseMove={handleMouseMove}
    //   // className="hover-area"
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    >
      {/* {isHovered && (
        <div
          className="shadow"
          style={{ top: cursorPosition.y, left: cursorPosition.x }}
        />
      )} */}
     

      <PortPolfolio />
    </div>
  );
}

export default App;
