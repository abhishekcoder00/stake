import React from 'react';

export default function Container({ children, className = '' }) {
    return (
        <div className={`container mt-[60px] px-4 pl-7 mx-auto ${className}`}>
            {children}
        </div>
    );
}
