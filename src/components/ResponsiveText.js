import React from 'react';

const ResponsiveText = ({ children }) => {
    return (
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {children}
        </p>
    );
};

export default ResponsiveText;
