import React, { Component } from 'react'
import styled from "styled-components"


class WhatICanDoSection extends Component {
  render() {
    return (
      <div className="what-i-can-do-section-view">
        <div className="what-i-can-do-section-view-container">
          <div className="what-i-can-do-section-overlay">
          <div class="overlay2">
          </div>
          
            <h1 class="skills-h1">
              What I can do
            </h1>

            <h3 class="what-i-can-do">
              Creating an aesthetically pleasing
              and easy user experience.
            </h3>
          
            <div class="tri-fold-section">
              <div class="step-container shift-down-slightly">
                <div class="ui-ux-icon green-blue">
                </div>
                  
                <h3 class="step-sub-header">
                  UX/UI
                </h3>

                <p class="step-paragraph">
                  Imagine, wireframe, sketch, and
                  create simple, aesthetic, user-friendly,
                  and fully functional user-interfaces.
                </p>
              </div>

              <div class="step-container shift-up-slightly">
                <div class="coding-icon green-blue">
                </div>

                <h3 class="step-sub-header">
                  Coding
                </h3>

                <p class="step-paragraph">
                  HTML(5), CSS(3), Javascript(ES6),
                  and some of the popular libraries and frameworks
                  that help make these languages easier
                  and more efficient.
                </p>
              </div>

              <div class="step-container shift-up-slightly">
                <div class="learning-icon green-blue">
                </div>

                <h3 class="step-sub-header">
                  Learning
                </h3>

                <p class="step-paragraph">
                  Learning is a skill I feel often goes overlooked,
                  or assumed to be 'good enough'.
                  I pick up things much faster than the average individual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhatICanDoSection