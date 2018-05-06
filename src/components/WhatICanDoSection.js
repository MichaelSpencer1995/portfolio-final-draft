import React, { Component } from 'react'
import styled from "styled-components"


class WhatICanDoSection extends Component {
  render() {
    return (
      <WhatICanDoSectionView>
        <WhatICanDoSectionViewContainer>
          <Overlay2 />
          
          <WhatICanDoH1>
            What I can do
          </WhatICanDoH1>

          <WhatICanDoH3>
            Creating an aesthetically pleasing
            and easy user experience.
          </WhatICanDoH3>
        
          <WhatICanDoTrifold>
            <StepContainer>
              <StepIcons />

              <StepSubHeader>
                UX/UI
              </StepSubHeader>

              <StepParagraph>
                Imagine, wireframe, sketch, and
                create simple, aesthetic, user-friendly,
                and fully functional user-interfaces.
              </StepParagraph>
            </StepContainer>

            <StepContainer>
              <StepIcons />


              <StepSubHeader>
                Coding
              </StepSubHeader>

              <StepParagraph>
                HTML(5), CSS(3), Javascript(ES6),
                and some of the popular libraries and frameworks
                that help make these languages easier
                and more efficient.
              </StepParagraph>
            </StepContainer>

            <StepContainer>
              <StepIcons />


              <StepSubHeader>
                Learning
              </StepSubHeader>

              <StepParagraph>
                Learning is a skill I feel often goes overlooked,
                or assumed to be 'good enough'.
                I pick up things much faster than the average individual.
              </StepParagraph>
            </StepContainer>
          </WhatICanDoTrifold>
        </WhatICanDoSectionViewContainer>
      </WhatICanDoSectionView>
    )
  }
}

const WhatICanDoSectionView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: url(/assets/img/hero11.jpg) no-repeat;
  background-size: cover;
  background-position: 1% 40%;
  width: 100%;
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-attachment: fixed;
`

const WhatICanDoSectionViewContainer = styled.div`
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const Overlay2 = styled.div`
  width: 100%;
  height: 630px;
  background: rgba(0, 0, 0, .84);
  position: absolute;
  top: 0;
`

const WhatICanDoH1 = styled.h1`
  color: #ffffff;
  color: #dadada;
  z-index: 10;
`

const WhatICanDoH3 = styled.h3`
  z-index: 10;
  margin-top: -15px;
  color: #b5b5b5de;
  font-weight: 300;
  text-align: center;
`

const WhatICanDoTrifold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 70px;
`

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29%;
  text-align: center;
`

const StepIcons = styled.div`
  content: '\\f00b';
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  font-size: 3.9em;
  color: rgb(33, 149, 147);
`

const StepSubHeader = styled.h3`
  font-weight: 700;
  font-size: 18px;
  z-index: 10;
  color: #c1c1c1;
`

const StepParagraph = styled.p`
  margin-top: 1px;
  line-height: 1.8em;
  color: #565656;
  color: #929292;
  font-size: 13px;
  z-index: 10;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
`







export default WhatICanDoSection