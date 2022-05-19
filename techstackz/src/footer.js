/*
 *  Contain the navigation bar and footer of TechStackz
 */

import { dividerClasses } from '@mui/material';
import React from 'react'; 

const Footer = () =>{
    return(
        <div className="footer">
            <div className='upper section'>
                <div className="footer col1">
                    <h1>TechStackz</h1>
                </div>
                <div className='footer col2'>
                    <ul className="footer list1">
                        <li><a href="#">Search Tech</a></li>
                        <li><a href="#">Tech Comparison</a></li>
                        <li><a href="#">Recommendation</a></li>
                    </ul>
                </div>
                <div className='footer col3'>
                    <ul className="footer list2">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
            </div>
            <div className='bottom section'>
                <h5>Copyright © 2022 TechStackZ. All rights reserved. </h5>
            </div>
        </div>
    );
}

export default Footer;