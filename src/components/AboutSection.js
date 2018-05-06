import React, { Component } from 'react'
import '../App.css'


class AboutSection extends Component {
  render() {
    return (
      <div className="about-section-view">
        <div className="about-section-view-container">
          <h1 className="about-section-h1">
            About Me
          </h1>

          <p className="about-section-p">
            When it comes to web design, I am a jack of all trades
            and a master of none. My fundamental and conceptual
            understanding of the following technologies is strong,
            however I am a still little shy of 10,000 hours.
          </p>

          <div className="about-section-skills-container">
            <div class="row1">
              <div class="item-container">
                <div class="item1">
                  <img class="img" alt="javascript" src="/assets/img/js-square.svg"/>
                </div>
                  
                <h3 class="item-sub-header">
                    Javasript
                </h3>
              </div>

              <div class="item-container">
                <div class="item2">
                  <img class="img" alt="react.js" src="/assets/img/react.svg"/>
                </div>
                
                <h3 class="item-sub-header">
                  React.js
                </h3>
              </div>
            </div>

            <div class="row2">
              <div class="item-container">
                <div class="item3">
                  <img class="img" alt="html 5" src="/assets/img/html5.svg"/>
                </div>
                
                <h3 class="item-sub-header">
                  HTML5
                </h3>
              </div>

              <div class="item-container">
                <div class="item4">
                  <img class="img" alt="Css 3" src="/assets/img/css3-alt.svg"/>                          
                </div>
                
                <h3 class="item-sub-header">
                  CSS3
                </h3>
              </div>
            </div>

            <div class="row3">
              <div class="item-container">
                <i class="item5">
                  <img class="img" alt="node.js" src="/assets/img/node.svg"/>
                </i>
                  
                <h3 class="item-sub-header">
                  Node.js
                </h3>
              </div>
                
              <div class="item-container item6-container">
                <div class="item6">
                  <img class="img" alt="responsive desgin" src="/assets/img/mobile-alt.svg"/>
                </div>
                
                <h3 class="item-sub-header">
                  Responsive Design
                </h3>
              </div>
            </div>

          </div>
          
          <p class="about-me-reassurance">
            Put simply I am young and so is my career, however 
            I am more than capable of using all of these
            technolgies, and more importantly I am capable of
            excelling in any or all of them.
            A nudge in any particular direction
            is the only thing I require.
          </p>
        </div>
      </div>
    )
  }
}

export default AboutSection