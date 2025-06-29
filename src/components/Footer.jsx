import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#8697C4] text-black py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

     
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Grow My Therapy</h1>
          <p className="text-sm text-black">Connecting you to trusted doctors, easily.</p>
        </div>

       
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#service" className="hover:text-white">Services</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

      
        <div className="flex gap-4 text-xl">
          <a href="#"><FaFacebook className="hover:text-white" /></a>
          <a href="#"><FaTwitter className="hover:text-white" /></a>
          <a href="#"><FaInstagram className="hover:text-white" /></a>
          <a href="#"><FaLinkedin className="hover:text-white" /></a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-black">
        © {new Date().getFullYear()}Grow My Therapy . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
