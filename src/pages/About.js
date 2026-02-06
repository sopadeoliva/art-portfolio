import React, { useContext } from "react"
import { LangContext } from "../LangContext"
import profile from '../assets/profile.jpg';

import mailIcon from '../assets/icons/mail.svg';
import igIcon from '../assets/icons/ig.svg';
import cartIcon from '../assets/icons/shop.svg';
import kofiIcon from '../assets/icons/kofi.svg';

function IconLink({text, url, imgSrc, alt}) {
  return (
    <div className="icon-link">
      <img src={imgSrc} alt={alt}/>
      <a href={url}>{text}</a>
    </div>
  )
}

function Contact() {
  return (
    <div className="contact-info">
      <div className="contact-section">
        <h2>Contact information</h2>
        <p>You can write or DM me at:</p>
        <IconLink text="sopadeoliva@gmail.com" url="mailto:sopadeoliva@gmail.com" imgSrc={mailIcon} alt="Email"/>
        <IconLink text="@olivasoup" url="https://www.instagram.com/olivasoup" imgSrc={igIcon} alt="Instagram"/>
        {/* <IconLink text="sopadeoliva" url="https://bsky.app/profile/sopadeoliva.bsky.social" imgSrc={bsIcon} alt="Bluesky"/> */}
        {/* <p><span>Instagram:</span> <a href="https://www.instagram.com/olivasoup">@olivasoup</a></p> */}
      </div>
      <div className="contact-section">
        <h2>Support me!</h2>
        <p>You can support me by following me on social media and getting prints of my work on Inprnt. You can also buy me a coffee!</p>
        <IconLink text="INPRNT Print shop" url="https://www.inprnt.com/gallery/sopadeoliva/" imgSrc={cartIcon} alt="Inprnt"/>
        <IconLink text="Support me on Kofi!" url="https://ko-fi.com/sopadeoliva" imgSrc={kofiIcon} alt="Kofi"/>
      </div>
    </div>
  )
}

export default function About() {
  const { t } = useContext(LangContext);
  return (
  <div className="page">
    <h1>About me</h1>
    <div className="about-content">
      <div className="profile-img-container">
        <img src={profile} alt="Profile" className="profile-img"/>
      </div>
      <div className="about-text">
        <p>{t.about.text}</p>
        <Contact />
      </div>
    </div>
  </div>
  )
}