import React from 'react';
import './css/Button.css';
import {Link} from 'react-router-dom';

const STYLES = ['btn--primary', 'btn-outline']
const SIZES = ['btn--medium', 'btn-large']
export const Button = ({
    children,
    type,
    onclick,
    buttonStyle,
    buttonSize
}) =>{
    const chekButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const chekButtonSize  = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return(
        <Link to='/connexion' className='btn-mobile'>
            <button
             className={`btn ${chekButtonStyle} ${chekButtonSize}`}
             onClick={onclick}
             type={type}
            
            >
                {children}
            </button>

        </Link>
    );
}
