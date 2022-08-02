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
          <Link to='/'>Testimonials</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Investors</Link>
          <Link to='/'>Terms of Service</Link>
        </div>
        {/* second column */}
        <div className='footer-link-items'>
          <h2>Contact Us</h2>
          <Link to='/'>Contact</Link>
          <Link to='/'>Support</Link>
          <Link to='/'>Destinations</Link>
          <Link to='/'>Sponsorships</Link>
        </div>
      </div>
      <div className='footer-link-wrapper'>
        {/* third column */}
        <div className='footer-link-items'>
          <h2>Videos</h2>
          <Link to='/'>Submit Video</Link>
          <Link to='/'>Ambassadors</Link>
          <Link to='/'>Agency</Link>
          <Link to='/'>Influencer</Link>
        </div>
        {/* fourth column */}
        <div className='footer-link-items'>
          <h2>Social Media</h2>
          <Link to='/'>Instagram</Link>
          <Link to='/'>Facebook</Link>
          <Link to='/'>Youtube</Link>
          <Link to='/'>Twitter</Link>
        </div>
      </div>
    </div>

    <section className='social-media'>
      <div className='social-media-wrap'>
        {/* footer logo */}
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            TechStackZ
            <i className='fab fa-typo3'/>
          </Link>
        </div>
        {/* website rights */}
        <small className='website-rights'>TechStackZ © 2022</small>
        {/* social media icons */}
        <div className='social-icons'>
          <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
            <i className='fab fa-facebook-f'/>
          </Link>
          <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
            <i className='fab fa-instagram'/>
          </Link>
          <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
            <i className='fab fa-youtube'/>
          </Link>
          <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
            <i className='fab fa-twitter'/>
          </Link>
          <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
            <i className='fab fa-linkedin'/>
          </Link>
        </div>
      </div>
    </section>
  </div>);
}

export default Footer;