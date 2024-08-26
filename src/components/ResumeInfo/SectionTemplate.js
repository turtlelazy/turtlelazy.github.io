import React from 'react';

const Section = ({ header, children }) => {
    return (
        <div style={styles.section}>
            <h1 style={styles.header}>{header}</h1>
            <div style={styles.cards}>
                {children}
            </div>
        </div>
    );
};

const styles = {
    section: {
        marginBottom: '32px',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#00FF66',
        marginBottom: '16px',
        borderBottom: '2px solid #00FF66',
        paddingBottom: '8px',
    },
    cards: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
};

export default Section;
