import React from 'react';

const Icon = ({cls,src, alt, onClick}) => {
    return (
        <img
        className={cls} 
        src={src}
        alt={alt}
        onClick={onClick}
        />
    );
};

export default Icon;