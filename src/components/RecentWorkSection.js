import React, { Component } from 'react'
import styled from "styled-components"

class RecentWorkSection extends Component {
  render() {
    return (
      <div className="recent-work-section-view">
        <div className="recent-work-section-view-container">
          <h1>
            Recent Work
          </h1>

          <p>
            Lorem ipsum dolor sit amet vero?
            Alias minus deserunt qui provident
            ipsa fuga a eos suscipit, repudiandae
            quod consequuntur similique! Delectus id
            veritatis distinctio eligendi expedita odit eius
            facilis rem nulla.
          </p>

          <div class="work-tri-fold">
            <div class="work-item-container no-margin-responsive">
              <img class="work-img-1" alt="photo of a website on different screen sizes" src="/assets/img/responsive-displays.svg" />
                
              <div class="project-info-containers">
                <h3 class="project-name">
                  Real Estate Website
                </h3>
                    
                <p class="work-description">
                  Personal website for a local real estate agent
                </p>
                    
                <p class="technologies-used">
                  React, Styled Components, Node
                </p>
                    
                <a href="#" class="visit-website">
                  Visit Website
                </a>
              </div>
            </div>

            <div class="work-item-container work-item-container-1">
              <img class="work-img-2" alt="photos of various javascript projects" src="/assets/img/codecampchallenges.svg" />
                
              <div class="project-info-containers">
                <h3 class="project-name">
                  Various Javascript Projects
                </h3>

                <p class="work-description">
                  Challenges from the freecodecamp curriculum.
                </p>
                    
                <p class="technologies-used">
                  React, Sass, Node and logic-intensive vanilla JS
                </p>
                
                <a href="#" className="visit-website">
                  Visit Website
                </a>
              </div>
            </div>

            <div class="work-item-container">
              <img class="work-img-3" alt="photo of my free code camp certification" src="/assets/img/certificate.png" />
                
              <div class="project-info-containers">
                <h3 class="project-name">
                  Front End Certification
                </h3>

                <p class="work-description">
                  Given after completion of FreeCodeCamp
                </p>
                    
                <p class="technologies-used">
                  Javascript fundamentals and logic-intensive algorithms
                </p>
                    
                <a href="#" class="visit-website-3">
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        
          <p class="award-winning-ui">
            One day this section will have multiple award winning UI's
          </p>

          <div class="divider">
            <img alt="vector image to seperate the contact section from the rest of the page" src="/assets/img/divider.svg" />
          </div>
        </div>
      </div>
    )
  }
}

export default RecentWorkSection