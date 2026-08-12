import React, { useRef } from "react";
import "./Navbar.css";
import { useGSAP } from "@gsap/react";
import {gsap}from "gsap";
import { SplitText } from "gsap/SplitText";
const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
];
gsap.registerPlugin(SplitText);
const Navbar = () => {
  const tl = gsap.timeline()
const logoref = useRef()
const nameref =useRef()
const elementref = useRef()
useGSAP(()=>{
  tl.from(logoref.current,{
    y:-30,
    duration:2,
    opacity:0
  }),
  tl.from(nameref.current,{
    y:-30,
    druation:3,
    delay:0.5,
    opacity:0

  })




  const split = SplitText.create(nameref.current, {
    type: "chars",
  });

  tl.from(split.chars, {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power3.out",
  });
})

  return (
    <nav className="navbar">
      {/* 3D BACK LAYER */}
      <div className="navbar-depth" />

      {/* NAVBAR CONTENT */}
      <div className="navbar-content">

        {/* PROFILE */}
        <a  href="#home" className="navbar-profile">
          <div ref={logoref} className="profile-orb">
            <span>A</span>
          </div>

          <div className="profile-info">
            <span  ref={nameref} className="profile-name">Aman Kumar</span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">
          {navItems.map(([name, id]) => (
            <a  href={`#${id}`} key={id} className="navbar-link">
              {name}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#contact" className="navbar-cta">
          <span>Let's Talk</span>
          <span className="cta-arrow">↗</span>
        </a>

        {/* MOBILE MENU ICON */}
        <button
          type="button"
          className="mobile-menu"
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;