import React, { useState } from 'react';
import MyComponent from '../AsciiLogos/LinkedIn';
import TerminalInput from '../TerminalAesthetic/TerminalInput';

const InputOutput = ({children, style, ...props}) => {
    const { rendered, inputText, typingSpeed } = props;
    // console.log(rendered, inputText);
    const [finishedTerminal, setFinishedTerminal] = useState(false);
    return (
        <div className="" style={{fontFamily:'monospace'}}>

            <TerminalInput dir={"ishraq_mahid@fish:~"} command={rendered ? inputText : ""} setFinished={setFinishedTerminal} typingSpeed={typingSpeed}/>

            {(rendered && finishedTerminal) && <>            
                {children}
            </>}

        </div>
    );
};

export default InputOutput;