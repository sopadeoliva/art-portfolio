import React, { useContext } from "react"
import { LangContext } from "../LangContext"
import profile from '../assets/profile.webp';

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
        <p>Send me an email at:</p>
        <IconLink text="sopadeoliva@gmail.com" url="mailto:sopadeoliva@gmail.com" imgSrc={mailIcon} alt="Email"/>
        {/* <IconLink text="sopadeoliva" url="https://bsky.app/profile/sopadeoliva.bsky.social" imgSrc={bsIcon} alt="Bluesky"/> */}
      </div>
      <div className="contact-section">
        <h2>Support me!</h2>
        <p>You can support me by following me on social media, sharing my work, and buying my prints on Inprnt. You can also buy me a coffee!</p>
        <IconLink text="@olivasoup" url="https://www.instagram.com/olivasoup" imgSrc={igIcon} alt="Instagram"/>
        <IconLink text="INPRNT Print shop" url="https://www.inprnt.com/gallery/sopadeoliva/" imgSrc={cartIcon} alt="Inprnt"/>
        <IconLink text="Support me on Kofi!" url="https://ko-fi.com/sopadeoliva" imgSrc={kofiIcon} alt="Kofi"/>
      </div>
    </div>
  )
}

export default function About() {
  // const { t } = useContext(LangContext);
  return (
  <div className="page">
    <h1>About me</h1>
    <div className="about-content">
      <div className="profile-img-container">
        <img src={profile} alt="Profile" className="profile-img"/>
      </div>
      <div className="about-text">
        <p>Hey! I'm Sol Olivia, a self-taught artist and illustrator based in Santiago, Chile.
            I studied astronomy and computer science, while independently learning traditional and digital illustration.
            I usually enjoy working on character-focused art, letting myself be inspired by visual novels, comicbooks, animation, videogames and role-playing games.
        </p>
        <p>If you're looking to illustrate your stories, create assets for your videogames/boardgames, or bring your characters and creatures to life, feel free to contact me!</p>
        <Contact />
      </div>
    </div>
  </div>
  )
}