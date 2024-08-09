import React from 'react';
import { LiaAccessibleIcon } from 'react-icons/lia';
import { FaStar, FaGift, FaBolt, FaTrophy, FaNewspaper } from 'react-icons/fa';

const Icon = ({ icon }) => {
    console.log(`Rendering icon: ${icon}`); // Debugging statement

    switch (icon) {
        case 'LiaAccessibleIcon':
            return <LiaAccessibleIcon />;
        case 'FaStar':
            return <FaStar />;
        case 'FaGift':
            return <FaGift />;
        case 'FaBolt':
            return <FaBolt />;
        case 'FaTrophy':
            return <FaTrophy />;
        case 'FaNewspaper':
            return <FaNewspaper />;
        default:
            console.warn(`Icon ${icon} not found`); // Warning if icon not found
            return null;
    }
};

export default Icon;
