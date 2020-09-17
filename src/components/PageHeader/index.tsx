import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/IBR_LOGO.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeaderProps {
    title: String;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <img src={logoImg} alt="" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.children}
            </div>
        </header>
    );
}
export default PageHeader;