import React from 'react';

const BubbleWrapper = ({ children }) => {
    // Convert children to string (assuming it is a string or can be converted)
    const text = React.Children.toArray(children).join('');

    // Create the bubble components
    const topBorder = ` ${'_'.repeat(text.length)} `;
    const middle = `|${text}|`;
    const bottomBorder = ` ${'‾'.repeat(text.length)} `;

    return (
        <pre style={{ fontFamily: 'monospace' }}>
            {topBorder}
            <br />
            /{' '.repeat(text.length)}\_
            <br />
            <span style={{ color:"#00FFFF"}}>{middle}</span>
            <br />
            \{'_'.repeat(text.length)}/‾
        </pre>
    );
};

export default BubbleWrapper;
