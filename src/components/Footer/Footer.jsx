import React from 'react';
import { MdHome, MdSettingsPhone, MdAlternateEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-stone-600 text-stone-400">
  <div className='ml-48'>
    <img className='w-20' src={'/assets/image/logo.jpg'}></img>
    <p>Lé Lugano Cucine Italiana
    <br />
    We Have Been Serving Quality Since 1995</p>
  </div> 
  <div>
    <span className="footer-title">Contact Us</span> 
    <a className="link link-hover flex content-center"><MdHome className='text-xl'/> <span> Riva Vincenzo Vela 4, 6900 Lugano, Itley</span></a> 
    <a className="link link-hover flex content-center"><MdSettingsPhone className='text-xl'/> <span> +37-499-084729</span></a> 
    <a className="link link-hover flex content-center"><MdAlternateEmail className='text-xl'/> <span> lelugano@ity.ltd.com</span></a> 

    
    <a className="link link-hover"></a>
    <p className='font-semibold'>Book Your Table Today
      <br />
      <span className='font-bold'>Hot Line: </span> 02-7997
    </p>
  </div> 
  <div>
    <span className="footer-title">Pages</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Our Menu</a> 
    <a className="link link-hover">Pricing Plan</a> 
    <a className="link link-hover">How It Works</a>
    <a className="link link-hover">FAQ</a>
  </div> 
</footer>
        </div>
    );
};

export default Footer;