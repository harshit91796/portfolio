import React, { useEffect, useState } from 'react';
import { Sidebar } from "./Sidebar";
import Explorer from './Explorer';
import MiddleNav from './MiddleNav';
import MiddleTerminal from './MiddleTerminal';
import MiddleBox from './MiddleBox';

function MiddleBlock({ field }) {
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      // Check if the key combination is Ctrl + F
      if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
    };

    // Add event listener for key press
    document.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [terminalOpen]);

  return (
    <>
      <div className='middleBlock'>
        <Sidebar />
        { (field.type.name === 'Home')?<div/>:<Explorer/>}
        <div className='middleContainer'>
          <MiddleNav />
          <MiddleBox sectionField={field} />
          {terminalOpen && <MiddleTerminal />}
        </div>
      </div>
    </>
  );
}

export default MiddleBlock;
