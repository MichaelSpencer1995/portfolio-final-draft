import React, { Component } from 'react'
import styled from "styled-components"
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { isMobile, isSafari } from "react-device-detect"
import { GREEN, GREYACCENT, BLACK } from "../constants/"
import { UITEXT } from "../uitext/"
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
           { UITEXT.whatICanDo.main }
          </WhatICanDoH1>

          <WhatICanDoP>
            { UITEXT.whatICanDo.sub }
          </WhatICanDoP>
        
          <WhatICanDoTrifold>
            <StepContainer>
              <UiUxIcon />

              <StepSubHeader>
                { UITEXT.whatICanDo.subHeaders.sh1 }
              </StepSubHeader>

              <StepParagraph>
                { UITEXT.whatICanDo.subParagraphs.sp1 }

              </StepParagraph>
            </StepContainer>

            <StepContainer>
              <CodingIcon />


              <StepSubHeader>
                { UITEXT.whatICanDo.subHeaders.sh2 }
              </StepSubHeader>

              <StepParagraph>
                { UITEXT.whatICanDo.subParagraphs.sp2 }
              </StepParagraph>
            </StepContainer>

            <StepContainer>
              <LearningIcon />


              <StepSubHeader>
              { UITEXT.whatICanDo.subHeaders.sh3 }
              </StepSubHeader>

              <StepParagraph>
                { UITEXT.whatICanDo.subParagraphs.sp3 }
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
  background: beige;
  background: #f5f5f5;
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
  color: ${ BLACK };
  margin-top: 90px;
`

const WhatICanDoP = styled.p`
  z-index: 10;
  margin-top: 1px;
  color: ${ GREYACCENT };
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
  text-align: stretch;
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
  color: ${ BLACK };
  margin-top: 15px;
`

const StepParagraph = styled.p`
  margin-top: 6px;
  line-height: 1.8em;
  color: ${ GREYACCENT };
  font-size: 13px;
  z-index: 10;
  font-weight: 300;
`







export default WhatICanDoSection