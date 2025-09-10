import React, { useState, useEffect, useRef } from 'react';
import InputOutput from '../TerminalAesthetic/InputOutput';
import BubbleWrapper from '../AsciiLogos/BubbleWrapper';
import { RxOpenInNewWindow } from "react-icons/rx";

const SectionCard = ({ title, date, description, link, skills, children, logoURL }) => {
    const [hover, setHover] = useState(false);
    const [hide, setHide] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    const textRef = useRef(null);
    const [textHeight, setTextHeight] = useState(48); // default min height

    // Detect mobile screen on mount and on resize
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 640); // Tailwind sm breakpoint ~640px
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // On desktop: measure text height to adjust logo height
    useEffect(() => {
        if (!isMobile) {
            const updateHeight = () => {
                if (textRef.current) {
                    setTextHeight(textRef.current.offsetHeight);
                }
            };
            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => window.removeEventListener('resize', updateHeight);
        } else {
            // On mobile: fix textHeight to logo height or default 48
            setTextHeight(48);
        }
    }, [title, date, isMobile]);

    // On mobile: reduce text font size to fit inside textHeight
    // You can apply different font sizes conditionally based on isMobile and maybe textHeight

    // For example:
    const titleFontSize = isMobile ? '14px' : '18px';
    const dateFontSize = isMobile ? '12px' : '14px';

    const rows = skills ? skills.map(skill => <BubbleWrapper key={skill}>{skill}</BubbleWrapper>) : null;

    return (
        <div
            style={{
                ...styles.card,
                backgroundColor: hover ? '#343D46' : '#1e1e1e',
                cursor: 'url(cursor-open.png),auto',
            }}
            onClick={() => setHide(prev => !prev)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="flex items-start mb-2">
                {logoURL && (
                    <img
                        src={logoURL}
                        alt="logo"
                        style={{
                            height: 48, // fix logo height on all devices or mobile only
                            maxHeight: '48px',
                            width: 'auto',
                            flexShrink: 0,
                            marginRight: '12px',
                            borderRadius: '8px',
                        }}
                        className="object-contain"
                    />
                )}
                <div
                    ref={textRef}
                    className="flex flex-col justify-center leading-tight text-[#00FF66]"
                    style={{ lineHeight: 1.2 }}
                >
                    <h2
                        className="font-bold"
                        style={{ fontSize: titleFontSize, marginBottom: 0 }}
                    >
                        {title}
                    </h2>
                    {date && (
                        <p
                            className="italic"
                            style={{ fontSize: dateFontSize, marginTop: 0 }}
                        >
                            {date}
                        </p>
                    )}
                </div>
            </div>

            <p style={styles.description}>{description}</p>
            <div style={styles.content}>
                <div className="flex flex-wrap">{rows}</div>
            </div>

            {hide && <div className="pt-5">{children}</div>}
            <br />
            {link && (
                <a
                    className="pt-5 flex flex-row items-center"
                    href={link}
                    style={{ color: '#00FF66' }}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                >
                    <p className="pr-1">View More</p> <RxOpenInNewWindow />
                </a>
            )}
        </div>
    );
};

const styles = {  
    card: {
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px',
    },
    title: {
        fontSize:'18px',
        fontWeight: 'bold',
        color: '#00FF66',
        marginBottom: '0',
        lineHeight: '24px',
    },
    date: {
        fontSize: '14px',
        color: '#00FF66',
        fontStyle: 'italic',
        lineHeight: '20px',
    },

    
    description: {
        fontSize: '14px',
        color: '#FFF',
        marginBottom: '12px',
    },
    content: {
        marginTop: '8px',
    },
};

export default SectionCard;
export const listStyles = {
    ul: {
        listStyleType: 'circle',
        paddingLeft: '20px',
        color: '#FFF',
    },
    li: {
        marginBottom: '8px',
    },
};