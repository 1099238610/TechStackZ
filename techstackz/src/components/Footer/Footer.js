import React from 'react';
import './Footer.css';
import {Button} from '../Button/Button';
import {Link} from 'react-router-dom';

function Footer() {
  return (<div className='footer-container'>
    <section className='footer-subscription'>
      {/* footer title */}
      <p className='footer-subscription-heading'>
        Join the Adventure newsletter to receive our best vacation deals
      </p>
      {/* footer subtitle */}
      <p className='footer-subscription-text'>
        You can unsubscribe at any time.
      </p>
      {/* email form */}
      <div className='input-areas'>
        <form>
          <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </form>
      </div>
    </section>

    <div className='footer-links'>
      <div className='footer-link-wrapper'>
        {/* first column */}
        <div className='footer-link-items'>
          <h2>About Us</h2>
          <Link to='/sign-up'>How it works</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        {/* second column */}
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
      </div>
    </div>
  </div>);
}

export default Footer;
