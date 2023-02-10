import React from 'react';
import { BsSuitHeart } from 'react-icons/bs';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFillPlayBtnFill } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import './stylesheets/Footer.css';


export const Footer = () => {
	return (
		<>
		
			<footer className="footer-container">
				<ul className="footer-ul">
					<li>Made with love <BsSuitHeart/></li>
					<li>Made with React <FaReact /></li>
					<div className="icon-container">
						<li className="icon-item"><a href="https://www.facebook.com/"><h3><AiOutlineFacebook /></h3></a></li>
						<li className="icon-item"><a href="https://www.instagram.com/"><h3><AiOutlineInstagram /></h3></a></li>
						<li className="icon-item"><a href="https://www.youtube.com/"><h3><BsFillPlayBtnFill/></h3></a></li>
					</div>
				</ul>
			</footer>
		</>
	
	);
	
	
}