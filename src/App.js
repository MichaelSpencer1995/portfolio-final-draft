import React, { Component } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WhatICanDoSection from './components/WhatICanDoSection'
import RecentWorkSection from './components/RecentWorkSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'

class App extends Component {
  state = {
    heroLoaded: false
  }
  render() {
    const { heroLoaded } = this.state
    return (
      <div className="App">
        <HeroSection heroLoaded={() => this.setState({ heroLoaded: true }) } />
        <AboutSection />
        <WhatICanDoSection />
        <RecentWorkSection />
        <ContactSection />
        <FooterSection />
        <LoadingOverlay heroLoaded={heroLoaded}>
          <Loader
              type="TailSpin"
              color="#03a9f4"
              height="100"
              width="100"
          /> 
        </LoadingOverlay>
      </div>
    )
  }
}

const LoadingOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000000000000000000000000;
  display: ${({ heroLoaded }) => heroLoaded ? 'none' : 'flex'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App
