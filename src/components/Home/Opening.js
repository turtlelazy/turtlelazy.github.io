import React, { useState, useEffect } from 'react';
import Mp4FrameViewer from './FrameViewer';

const Opening = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [botScroll, setBotScroll] = useState(0);
    const [topScroll, setTopScroll] = useState(0);
    const [maxBot, setMaxBot] = useState(1);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };
    const [height, setHeight] = useState(1);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ width: '100%', fontFamily: 'monospace' }}>
            <div style={{ width: '100%' }} className='flex-auto p-0'>
                <p style={{ textAlign: 'center', fontSize: '5vw' }}>./Hello\ World\!/ish.out</p>
            </div>
            {/* <div style={{ width: '100%' }}
                ref={el => {
                    // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
                    if (!el) return;

                    setBotScroll(el.getBoundingClientRect().bottom);
                    setTopScroll(el.getBoundingClientRect().top);
                    setHeight(el.getBoundingClientRect().height);
                    if(maxBot < el.getBoundingClientRect().bottom){
                        setMaxBot(el.getBoundingClientRect().bottom);
                    }
                }}
            >
                <Mp4FrameViewer videoSrc="/bannana_crop.mp4" runningTime={3.6} framePercent={((maxBot - botScroll) * 0.5 / maxBot) % 1} topScroll={topScroll} height={height}/>
            </div> */}
        </div>
    );
};

export default Opening;