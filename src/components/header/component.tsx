import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="site-header">
            <nav>
                <ul className="indicator">
                    <li><a href="#landing"><span className="sr-only">landing</span></a></li>
                    <li><a href="#about"><span className="sr-only">about</span></a></li>
                    <li><a href="#resume"><span className="sr-only">resume</span></a></li>
                    <li><a href="#projects"><span className="sr-only">projects</span></a></li>
                    <li><a href="#contact"><span className="sr-only">contact</span></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
