import React, { Component } from 'react'
import styled from "styled-components"
import FontAwesome from '../../node_modules/font-awesome/css/font-awesome.min.css'
import { isMobile, isSafari } from "react-device-detect"

let mobileBackgroundNotFixed = 'fixed'

if(isMobile) {
  mobileBackgroundNotFixed = 'none'
}

class WhatICanDoSection extends Component {
  render() {
    return (
      <WhatICanDoSectionView>
        <WhatICanDoSectionViewContainer>
          <Overlay2 />
          
          <WhatICanDoH1>
            What I can do
          </WhatICanDoH1>

          <WhatICanDoP>
            Creating an aesthetically pleasing
            and easy user experience.
          </WhatICanDoP>
        
          <WhatICanDoTrifold>
            <StepContainer>
              <UiUxIcon />

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
              <CodingIcon />


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
              <LearningIcon />


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
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-attachment: ${ mobileBackgroundNotFixed };
  @media(max-width: 1000px) {
    height: 900px;
  }
  @media(max-width: 600px) {
    height: 1040px;
  }
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
  height: 600px;
  background: rgba(0, 0, 0, .84);
  position: absolute;
  top: 0;
  @media(max-width: 1000px) {
    height: 900px;
  }
  @media(max-width: 600px) {
    height: 1040px;
  }
`

const WhatICanDoH1 = styled.h1`
  color: #ffffff;
  color: #dadada;
  z-index: 10;
`

const WhatICanDoP = styled.p`
  z-index: 10;
  margin-top: 3px;
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
  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
  }
`

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;  
  width: 29%;
  text-align: center;
  @media(max-width: 1000px) {
    width: 76%;
    margin-top: 55px;
  }
`

const UiUxIcon = styled.div`
  z-index: 200;
  ::before{
    font-family: FontAwesome;
    content: "\\f00b";
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    font-size: 3.9em;
    color: rgb(33, 149, 147);
    color: rgb(0, 162, 95);
  }
`

const CodingIcon = styled(UiUxIcon)`
  ::before{
    content: "\f126";
  }
`

const LearningIcon = styled(UiUxIcon)`
  ::before{
    content: "\f0eb";
  }
`

const StepSubHeader = styled.h3`
  font-weight: 700;
  font-size: 18px;
  z-index: 10;
  color: #c1c1c1;
  margin-top: 20px;
`

const StepParagraph = styled.p`
  margin-top: 9px;
  line-height: 1.8em;
  color: #565656;
  color: #929292;
  font-size: 13px;
  z-index: 10;
  font-weight: 400;
`







export default WhatICanDoSection