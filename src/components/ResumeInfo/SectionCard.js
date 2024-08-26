import React from 'react';
import InputOutput from '../TerminalAesthetic/InputOutput';
import BubbleWrapper from '../AsciiLogos/BubbleWrapper';
const SectionCard = ({ title, date, description, link, skills, children }) => {

    const [hover, setHover] = React.useState(false);
    const rows = skills ? skills.map((skill) => {
        return (
            <BubbleWrapper key={skill}>{skill}</BubbleWrapper>
        );
    }) : null;
    
    console.log("hov",hover);
    return (
        <a href={link} style={{ cursor: 'url(cursor-open.png),auto' }} target="_blank">
        <div style={{ ...styles.card, ...hover ? { backgroundColor: "#343D46" } : { backgroundColor: "black" }}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div style={styles.header}>
                <h2 style={styles.title}>{title}</h2>
                {date && <p style={styles.date}>{date}</p>}
            </div>
            <p style={styles.description}>{description}</p>
            <div style={styles.content}>
                    <div className='flex flex-wrap'>
                        {rows}
                    </div>
            </div>
        </div>
        </a>
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
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#00FF66',
        marginBottom: '0', // Remove the margin to align with date
    },
    date: {
        fontSize: '14px',
        color: '#00FF66', // Grey color for the date
        fontStyle: 'italic',
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