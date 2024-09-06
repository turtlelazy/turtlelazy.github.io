import React from 'react';

const Link = ({ href, children,... props }) => {
    const { text } = props;
    const [hover , setHover] = React.useState(false);
    return (
        <a href={href} style={{ cursor: 'url(cursor-open.png),auto', ...hover ? { textDecoration: "underline" } : { } }} onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
            {children}
        </a>
    );
};

export default Link;