import React, { useState, useEffect } from 'react';
import MyComponent from '../AsciiLogos/LinkedIn';
import TerminalInput from '../TerminalAesthetic/TerminalInput';

const InputOutput = ({children, style, ...props}) => {
    const { rendered, inputText, typingSpeed, skipInput } = props;
    const [finishedTerminal, setFinishedTerminal] = useState(false);
    // if skipInput is true, immediately mark finished so children render
    useEffect(() => {
        if (skipInput && rendered) {
            setFinishedTerminal(true);
        }
    }, [skipInput, rendered]);
    return (
        <div className="" style={{fontFamily:'monospace'}}>

            {!skipInput && (
                <TerminalInput dir={"ishraq_mahid@fish:~"} command={rendered ? inputText : ""} setFinished={setFinishedTerminal} typingSpeed={typingSpeed}/>
            )}

            {(rendered && finishedTerminal) && (
                <>
                    {children}
                </>
            )}

        </div>
    );
};

export default InputOutput;