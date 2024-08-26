import React, { useEffect, useState } from 'react';

const AsciiLogoTemp = ({...props}) => {
    const { htmlContent, link, typingSpeed = 5, setFinished = ()=>{} } = props;
    const size = '5px';

    const [childrenList, setChildrenList] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
        const childrenArray = Array.from(doc.body.children);
        setChildrenList(childrenArray);
        console.log("chyildren", childrenArray);
    }, [htmlContent]);

    useEffect(() => {
        if (childrenList.length > 0 && currentIndex < childrenList.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + childrenList[currentIndex].outerHTML);
                setCurrentIndex(prevIndex => prevIndex + 1);
                if (currentIndex === childrenList.length - 1) {
                    setFinished(true);
                }
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, typingSpeed, childrenList]);

    return (
        <a href={link} style={{ cursor: 'url(cursor-open.png),auto' }} target="_blank">
            <div dangerouslySetInnerHTML={{ __html: currentText }} style={{ fontFamily: 'monospace', fontSize: "2.6px", lineHeight: "2.9px" }} />
        </a>
    );
};

export default AsciiLogoTemp;