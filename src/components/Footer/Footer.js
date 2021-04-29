import React from "react";
import './Footer.css';
import { FOOTER_TEXT } from '../../Util/data';

const Footer = () => {
    return (
        <footer>
            <p>{FOOTER_TEXT}</p>
        </footer>
    );
};

export default Footer;
