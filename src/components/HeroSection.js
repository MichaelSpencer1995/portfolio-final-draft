import React, { Component } from 'react'
import '../App.css'
import styled from "styled-components"
import { isSafari } from "react-device-detect";

let test = 'purple'

if(isSafari){
  test = 'green'
}

class HeroSection extends Component {
  render() {
    return (
      <HeroSectionView>
        <NavItemsContainer>
          <NavItem>
            About
          </NavItem>
          
          <NavItem>
            Recent Work
          </NavItem>

          <NavItem>
          Get In Touch
          </NavItem>
        </NavItemsContainer>

        <HeroImg />
        
        <HeroImgOverlay />

        <HeroContentContainer>
          <HeroH1>
            My name is <br /><span>Michael Spencer</span>          
          </HeroH1>

          <HeroP>
            I am a full stack web developer near Austin,
            Texas with very little professional experience,
            eager to help any corporate or personal business
            do better.
          </HeroP>

          <HireButtonsContainer>
            <HireButton>
              Hire Me
            </HireButton>

            <HireButtonTransparent>
              I need a website
            </HireButtonTransparent>
          </HireButtonsContainer>
        </HeroContentContainer>
      </HeroSectionView>
    )
  }
}

const HeroSectionView = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
`

const NavItemsContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  padding: 40px 12% 0px 0px;
  width: 288px;
  display: flex;
  justify-content: space-between;
  z-index: 100000;
`

const NavItem = styled.button`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.035rem;
  text-decoration: none;
  color: rgba(230, 230, 230, .9);
  background: transparent;
  border: none;
`

const HeroImg = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  background: url(/assets/img/hero1.png) no-repeat;;
  background-size: cover;
  background-position: 20% 0%;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`

const HeroImgOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1));
  border-bottom: rgb(28, 28, 28)1px solid;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 0;
`

const HeroContentContainer = styled.div`
  font-size: 18px;
  letter-spacing: 0.2rem;
  color: white;
  margin-left: 12%;
  margin-bottom: 100px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
`

const HeroH1 = styled.h1`
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 0.05rem;
  color: rgba(255, 255, 255, 0.75);
  span{
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 0.04rem;
    color: rgba(255, 255, 255, 0.9);
    position: relative;
    bottom: 7px;
  }
`

const HeroP = styled.p`
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -.01rem;
  line-height: 1.8em;
  color: #dededef0;
  margin-top: -18px;
`

const HireButtonsContainer = styled.div`
  width: 291px;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
`

const HireButton = styled.button`
  transition: all 0.3s ease;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgb(15, 142, 113);
  background: rgb(33, 149, 147);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 4px;
  width: 142px;
  height: 31px;
`

const HireButtonTransparent = styled(HireButton)`
  background: rgba(181, 181, 181, 0.14);
`

export default HeroSection
