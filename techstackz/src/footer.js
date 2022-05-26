/*
 *  Contain the navigation bar and footer of TechStackz
 */

import {colors, dividerClasses} from '@mui/material';
import React from 'react'; 

const Footer = () =>{
    return(
        <div className="footer" align={"center"} style={{backgroundColor:"black"}}>
            <br/>
            <div className='upper section'>
                <div className="footer col1">
                    <h2 style={{color:"white"}}>TechStackZ™</h2>
                </div>
                <div className='footer col2'>
                    <ul className="footer list1">
                        <a href="#" style={{color:"white"}}>Search Tech</a><br/>
                        <a href="#" style={{color:"white"}}>Tech Comparison</a><br/>
                        <a href="#" style={{color:"white"}}>Recommendation</a><br/>
                    </ul>
                </div>
                <div className='footer col3'>
                    <ul className="footer list2">
                        <a href="#" style={{color:"white"}}>About us</a><br/>
                        <a href="#" style={{color:"white"}}>Privacy</a><br/>
                        <a href="#" style={{color:"white"}}>Contact us</a><br/>
                    </ul>
                </div>
            </div>
            <div className='bottom section'>
                <h5 style={{color:"white"}}>Copyright © 2022 TechStackZ. All rights reserved. </h5>
            </div>
            <br/>
        </div>
    );
}

export default Footer;