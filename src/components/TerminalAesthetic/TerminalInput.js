import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

const TerminalInput = (props) => {
    const { dir, command, typingSpeed = 100, setFinished } = props; // Default typing speed is 100ms
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        if (currentIndex < command.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + command[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
                if (currentIndex === command.length - 1) {
                    setFinished(true);
                }
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, typingSpeed, command]);

    return (
        <div>
            <span style={{ color: '#00FF66' }}>{`${dir}`}</span>$ {currentText}
        </div>
    );
};

export default TerminalInput;
