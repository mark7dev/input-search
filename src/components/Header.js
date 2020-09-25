import React from 'react';
import './styles/Header.css';

const Header = () => {
    return ( 
        <div className="header__container">
            <h1>Issues React’s repository</h1>
            <i className="fa fa-github-square githubIcon" aria-hidden="true"></i>
        </div>
    );
}
 
export default Header;