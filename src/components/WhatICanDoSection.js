import React, { Component } from 'react'
import styled from "styled-components"
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { isMobile, isSafari } from "react-device-detect"
import { GREEN } from "../constants/"
import Divider from "./Divider"
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
            What I Can Do
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
                and fully functional user interfaces.
              </StepParagraph>
            </StepContainer>

            <StepContainer>
              <CodingIcon />


              <StepSubHeader>
                Coding
              </StepSubHeader>

              <StepParagraph>
                HTML(5), CSS(3), Javascript(ES6), and related tools, libraries, frameworks.
              </StepParagraph>
            </StepContainer>

            <StepContainer>
              <LearningIcon />


              <StepSubHeader>
                Learning
              </StepSubHeader>

              <StepParagraph>
                I am always trying to expand my skillset, and revaluate my 
                approach.
              </StepParagraph>
            </StepContainer>
          </WhatICanDoTrifold>

          <Divider />
        </WhatICanDoSectionViewContainer>
      </WhatICanDoSectionView>
    )
  }
}

const WhatICanDoSectionView = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: url(/assets/img/hero11.jpg) no-repeat;
  background-size: cover;
  background-position: 1% 40%;
  width: 100%;
  height: 500px;
  background-attachment: ${ 'mobileBackgroundNotFixed' };
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
`

const Overlay2 = styled.div`
  width: 100%;
  height: 500px;
  background: rgba(0, 0, 0, .86);
  position: absolute;

  @media(max-width: 1000px) {
    height: 900px;
  }
  @media(max-width: 600px) {
    height: 1040px;
  }
`

const WhatICanDoH1 = styled.h1`
  z-index: 10;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 90px;
`

const WhatICanDoP = styled.p`
  z-index: 10;
  margin-top: 1px;
  color: #929292;
  font-weight: 300;
  text-align: center;
`

const WhatICanDoTrifold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 55px;
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
    color: ${ GREEN };
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
  color: rgba(255, 255, 255, 0.8);
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