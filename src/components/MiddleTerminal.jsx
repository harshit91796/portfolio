import React, { useState } from 'react'


const MiddleTerminal = () => {
    const [command, setCommand] = useState('');
    const [output, setOutput] = useState('');
  
    const handleCommandChange = (event) => {
      setCommand(event.target.value);
      
    };
  
    const executeCommand = () => {
      switch (command.toLowerCase()) {
        case 'npm go to github':
          setOutput('Redirecting to GitHub...');
          setTimeout(() => {
            window.location.href = 'https://github.com/harshit91796';
          }, 1000);
          break;
        case 'npm go to linkedin':
          setOutput('Redirecting to LinkedIn...');
          setTimeout(() => {
            window.location.href = 'https://www.linkedin.com/in/harshit-rajput-b03a0b265/';
          }, 1000);
          break;
        case 'npm go to shayraana':
            setOutput('Redirecting to LinkedIn...');
            setTimeout(() => {
              window.location.href = 'https://github.com/harshit91796/shayrana_SocialMedia_app';
            }, 1000);
            break;
            case 'npm go to transcript':
              setOutput('Redirecting to LinkedIn...');
              setTimeout(() => {
                window.location.href = 'https://github.com/harshit91796/Video_to_transcripy';
              }, 1000);
              break;
              case 'npm go to vaccine':
                setOutput('Redirecting to LinkedIn...');
                setTimeout(() => {
                  window.location.href = 'https://github.com/harshit91796/vaccine_slot_booking';
                }, 1000);
                break;
                case 'npm go to tuffy':
                setOutput('Redirecting to LinkedIn...');
                setTimeout(() => {
                  window.location.href = 'https://harshit91796.github.io/tuffy-game/';
                }, 1000);
                break;
                case 'npm go to shoppingApp':
                  setOutput('Redirecting to LinkedIn...');
                  setTimeout(() => {
                    window.location.href = 'https://github.com/harshit91796/shoping_app';
                  }, 1000);
                  break;
                case 'npm go to bookish':
                  setOutput('Redirecting to LinkedIn...');
                  setTimeout(() => {
                    window.location.href = 'https://github.com/harshit91796/Book_Management';
                  }, 1000);
                  break;
        case 'clear':
          setOutput('');
          setCommand('');
          break;
        default:
          setOutput(`Error: Unknown command "${command}". Type 'clear' to clear the terminal.`);
      }
    };
  
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        executeCommand();
      }
    };

    const generateColoredLetters = (text) => {
      const lowerCaseText = text.toLowerCase();
      const npmIndex = lowerCaseText.indexOf('npm' || 'clear');
      const beforeNpm = text.slice(0, npmIndex);
      const npmPart = text.slice(npmIndex, npmIndex + 3);
      const afterNpm = text.slice(npmIndex + 3);
  
      return (
        <span>
          <span style={{ color: 'white' }}>{beforeNpm}</span>
          <span style={{ color: 'yellow' }}>{npmPart}</span>
          <span style={{ color: 'white' }}>{afterNpm}</span>
        </span>
      );
    };


  return (
    <div className="terminal">
      <div className="terminalImgContainer">
        <img className="ter1" src="image/ter.jpg" />
      </div>
      
      <div className="terminalInputContainer">
      <div className="terminalText">PS D:\main\portfolio\vite-project</div>
      <span style={{ color: 'white' }}>{'>'}</span>
          {generateColoredLetters(command)}
          <span className='cursor' />

      <input
        type="text"
        placeholder="ex : npm go to linkedin..."
        value={command}
        onChange={handleCommandChange}
        onKeyDown={handleKeyPress}
        spellCheck="false" 
        style={{ color: 'transparent' }}
      />
    </div>
      
      <div className="terminalOutputContainer">
        {output && <pre>{output}</pre>}
      </div>
    </div>
  );
}

export default MiddleTerminal