import React, { Component } from 'react'
import '../App.css'
import styled from "styled-components"
import { BrowserView, MobileView, isBrowser, isMobile, isSafari } from "react-device-detect";

let test = 'purple'

if(isSafari){
  test = 'green'
}

class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section-view">
        <div className="nav-items">
          {/* <button className="nav-item">
            About
          </button> */}

          <NavItem>
            Test
          </NavItem>
          
          <button className="nav-item">
            Recent Work
          </button>

          <button className="nav-item">
          Get In Touch
          </button>
        </div>

        <div className="hero-img">
        </div>
        
        <div className="hero-img-overlay">
        </div>

        <div className="hero-content-container">
          <h1 className="hero-section-h1">
            My name is <br /><span className="hero-section-h1-span">Michael Spencer</span>          
          </h1>

          <p className="hero-section-p">
            I am a full stack web developer near Austin,
            Texas with very little professional experience,
            eager to help any corporate or personal business
            do better.
          </p>

          <div className="hire-buttons-container">
            <button className="hire-buttons">
              Hire Me
            </button>

            <button className="hire-buttons semi-transparent-button">
              I need a website
            </button>
          </div>
        </div>
      </div>
    )
  }
}


const NavItem = styled.div`
  color: ${ test };
`

export default HeroSection
