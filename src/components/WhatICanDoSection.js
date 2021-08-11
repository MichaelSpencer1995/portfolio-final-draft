import React, { Component } from 'react'
import styled from "styled-components"
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import { GREEN, GREYACCENT, BLACK } from "../constants/"
import { UITEXT } from "../uitext/"

class WhatICanDoSection extends Component {
  render() {
    return (
      <WhatICanDoSectionView>
        <WhatICanDoSectionViewContainer>
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
  background: #f5f5f5;
  background-size: cover;
  background-position: 1% 40%;
  width: 100%;
  box-sizing: border-box;
  padding: 51px 0;
  @media(max-width: 1000px) {
    height: 900px;
  }
  @media(max-width: 600px) {
    height: 1040px;
  }
`

const WhatICanDoSectionViewContainer = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WhatICanDoH1 = styled.h1`
  z-index: 10;
  color: ${ BLACK };
`

const WhatICanDoP = styled.p`
  z-index: 10;
  margin-top: 4px;
  color: ${ GREYACCENT };
  font-weight: 300;
  text-align: center;
`

const WhatICanDoTrifold = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 49px;
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