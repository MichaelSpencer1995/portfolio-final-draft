import React, { Component } from 'react'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WhatICanDoSection from './components/WhatICanDoSection'
import RecentWorkSection from './components/RecentWorkSection'
import ContactSection from './components/ContactSection'
import FooterSection from './components/FooterSection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <AboutSection />
        <WhatICanDoSection />
        {/* <RecentWorkSection /> */}
        <ContactSection />
        <FooterSection />
      </div>
    )
  }
}

export default App
