import React from 'react';
import './styles.scss';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            {/* TODO: add github icon with link to github profile */}
            {/* TODO: add linkedin icon with link to linkedin profile */}
            <code>peace and love. ib &copy; { currentYear }</code>
        </footer>
    );
};

export default Footer;
