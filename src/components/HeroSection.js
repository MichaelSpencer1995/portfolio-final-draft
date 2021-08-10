import React, { Component } from 'react'
import styled from "styled-components"
import { isMobile, isSafari, isChrome } from "react-device-detect"
import { GREEN } from "../constants/"
import { UITEXT } from "../uitext/"

let fixedBackground = 'fixed'
let safariNavBackgroundColor = 'transparent'
let safariNavBorder = 'none'
let safariButtonMargin = '62px'
let safariNavItemsColor = '#fff'
let safariNavHeight = '82px'
let buttonsZIndex = "100000000000000000000000000 !important"

if(isMobile || isChrome) {
  fixedBackground = 'none'
}

if(isMobile || isSafari) {
  safariNavBackgroundColor = '#0a0a0a'
  safariButtonMargin = '120px'
  safariNavItemsColor = 'white'
  // safariNavBorder = '#777 1px solid'
  safariNavHeight = '70px'
  buttonsZIndex = '0 !important'
}

class HeroSection extends Component {
  componentDidMount() {
    const heroImg = new Image()
    heroImg.src = '/assets/img/heroimagemain.jpg'
    heroImg.onload = () => {
      this.props.heroLoaded()
    }
  }
  handleScrollIntoView(div){
    const element = document.getElementById(div)
    
    element.scrollIntoView({behavior: "smooth", block: "start"})
  }
  
  render() {

    window.addEventListener('scroll', handleScroll)

    function handleScroll(){
      if(isMobile || isSafari) {
        return
      }


      let lessThanOrEqualTo1000 = false

      if(window.innerWidth <= 1000){
        lessThanOrEqualTo1000 = true
      }

      const heroImg = document.getElementsByClassName('hero-image')[0]
      const overlay = document.getElementsByClassName('overlay')[0]
      const hireButtons = document.getElementsByClassName('hire-buttons')[0]
      const paragraph = document.getElementsByClassName('hero-paragraph')[0]

      const y = window.scrollY

      let heroHeight = parseInt(window.getComputedStyle(heroImg).height)
      let navbarTargetHeight = heroHeight - 82
      let buttonsTargetHeight = heroHeight - 145
      let buttonsShiftAmount = 89

      //shouldnt matter
      if(window.innerWidth <= 1000) {
        buttonsTargetHeight = heroHeight - 158
        buttonsShiftAmount = 62
        navbarTargetHeight = heroHeight - 132
      }
      
      if(y >= navbarTargetHeight){
        overlay.classList.add('fixed-nav-items')
        overlay.style.bottom = navbarTargetHeight + 'px'

      } else if(y < navbarTargetHeight){
          overlay.classList.remove('fixed-nav-items')
          overlay.style.bottom = '0px'
      }

      if(y >= buttonsTargetHeight){
          if(lessThanOrEqualTo1000){
              hireButtons.classList.add('keep-width')
          }

          hireButtons.classList.add('fixed-nav-items')
          hireButtons.style.bottom = buttonsTargetHeight + buttonsShiftAmount + 'px'
          paragraph.classList.add('shift-paragraph-off-screen')

      } else if(y < buttonsTargetHeight){
          if(lessThanOrEqualTo1000){
              hireButtons.classList.remove('keep-width')
          }

          paragraph.classList.remove('shift-paragraph-off-screen')
          hireButtons.classList.remove('fixed-nav-items')
          hireButtons.style.bottom = '0px'
      }
    }

    return (
      <HeroSectionView className="hero-image">
        <NavBarContainer>
          <NavItemsContainer>
            <NavItem onClick={() => this.handleScrollIntoView('about-scroll-id')}>
              { UITEXT.nav.item1 }
            </NavItem>
            <NavItem onClick={() => this.handleScrollIntoView('recent-work-scroll-id')}>
              { UITEXT.nav.item2 }
            </NavItem>
            <NavItem onClick={() => this.handleScrollIntoView('contact-scroll-id')}>
              { UITEXT.nav.item3 }
            </NavItem>
          </NavItemsContainer>
        </NavBarContainer>

        <HeroImgOverlay className="overlay" />

        <HeroContentContainer>
          <HeroH1 id="testElement">
            <span>{ UITEXT.header.main }</span>          
          </HeroH1>

          <HeroP className="hero-paragraph">
            { UITEXT.header.sub }
          </HeroP>

          <HireButtonsContainer className="hire-buttons">
            <HireButton onClick={() => this.handleScrollIntoView('recent-work-scroll-id')}>
              { UITEXT.header.button1 }
            </HireButton>

            <HireButtonTransparent onClick={() => this.handleScrollIntoView('contact-scroll-id')}>
              { UITEXT.header.button2 }
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
  background: url(/assets/img/heroimagemain.jpg) no-repeat;
  background-size: cover;
  background-position: 20% 0%;
  background-attachment: ${ fixedBackground };
`

const NavBarContainer = styled.div`
  width: 100%;
  height: ${ safariNavHeight };
  background: ${ safariNavBackgroundColor };
  border-bottom: ${ safariNavBorder };
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2000000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1000px) {
    align-items: center;
  }
`

const NavItemsContainer = styled.div`
  padding-right: 12%;
  width: 288px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    padding: 0;
  }
  @media (max-width: 400px) {
    width: 76%;
  }
`

const NavItem = styled.button`
  transition: all 0.3s ease;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.035rem;
  text-decoration: none;
  color: ${ safariNavItemsColor };
  background: transparent;
  border: none;
  z-index: 2000000000000000;
  
  &:hover{
    color: ${ GREEN };
  }

  @media (max-width: 1000px) {
    font-size: 12px;
  }
`

const HeroImg = styled.div`
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  background: url(/assets/img/heroimagemain.jpg) no-repeat;
  background-size: cover;
  background-position: 20% 0%;
  background-attachment: ${ fixedBackground };
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  @media(max-width: 406px){
    background-size: 260%;
    background-position: 50% 0%;
  }
`

const HeroImgOverlay = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 96%);
  background: linear-gradient(rgba(0,0,0,0) -17%,rgba(0,0,0,1) 86%);
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
  margin-bottom: 90px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  @media (max-width: 1000px) {
    margin-bottom: ${ safariButtonMargin };
    width: 76%;
  }
`

const HeroH1 = styled.h1`
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 0.05rem;
  color: #fff
  span{
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.03rem;
    color: #fff;
    position: relative;
    bottom: 7px;
  }
  @media (max-width: 1000px) {
    line-height: 40px;
    poisition: relative;
    bottom: 10px;
    font-size: 20px;
    span{
      font-size: 31px;
      bottom: 12px;
    }
  }
`

const HeroP = styled.p`
  font-size: 14px;
  font-weight: 300;
  letter-spacing: -.01rem;
  line-height: 1.8em;
  color: #bbb;
  position: relative;
  top: -5px;
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`

const HireButtonsContainer = styled.div`
  width: 291px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  z-index:  ${ buttonsZIndex };
  
  @media (max-width: 1000px) {
    width: 100%;
  }
`

const HireButton = styled.button`
  transition: all 0.3s ease;
  font-family: 'Ubuntu', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  border: none;
  background: ${ GREEN };
  border-radius: 5px;
  width: 142px;
  height: 31px;

  &:hover{
    transform: scale(1.03);
  }

  @media (max-width: 1000px) {
    width: 49.5%;
  }
`

const HireButtonTransparent = styled(HireButton)`
  background: rgba(181, 181, 181, 0.14);
  color: #fff;
`

export default HeroSection
