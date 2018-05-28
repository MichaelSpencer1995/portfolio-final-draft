import React, { Component } from 'react'
import styled from "styled-components"

class RecentWorkSection extends Component {
  state = {
    isExpanded: false
  }

  render() {
    const { isExpanded } = this.state

    return (
      <RecentWorkSectionView>
        <div id="recent-work-scroll-id" style={{ position: 'relative', top: '-82px'}} />      
        <RecentWorkSectionViewContainer>
          <RecentWorkH1>
            Recent Work
          </RecentWorkH1>

          <RecentWorkP>
            Below are some proof of my qualifications as a junior web developer.
            They consist mostly of apps made with the React.js library, along with
            some very logic intensive vanilla js apps. The concepts I used to complete
            them include: Closures, recursive functions, functional programming, Ui/Ux design,
            responsive design, async callbacks, design patterns, node module
            implementation, and more.
          </RecentWorkP>

          <RecentWorkTriFold>
            <WorkItemContainer1>
              <ImageWrapper>
                <img alt="photo of a website on different screen sizes" src="/assets/img/responsive-displays.svg" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  Real Estate Website
                </ProjectSubHeader>
                    
                <ProjectDescription>
                  Personal website for a local real estate agent
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  React, Styled Components, Node
                </ProjectTechsUsed>
                    
                <a style={{ marginTop: '10px' }} href="#">
                  Visit Website
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer1>

            <WorkItemContainer>
            <ImageWrapper>
                <img alt="photos of various javascript projects" src="/assets/img/codecampchallenges.svg" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  Various Javascript Projects
                </ProjectSubHeader>

                <ProjectDescription>
                  Challenges from the freecodecamp curriculum.
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  React, Sass, Node and logic-intensive vanilla JS
                </ProjectTechsUsed>
                
                <CodeCampProjectsExpander isExpanded={ isExpanded }>
                  <a href="https://calculator1995.herokuapp.com/" target="blank">
                    •Calculator
                  </a>

                  <a href="https://pomodoro-1995.herokuapp.com/" target="blank">
                    •Pomodoro Timer
                  </a>

                  <a href="https://twitch-1995.herokuapp.com/" target="blank">
                    •Twitch Viewer
                  </a>

                  <a href="https://simon1995.herokuapp.com/" target="blank">
                    •Simon Game
                  </a>
                </CodeCampProjectsExpander>

                <ExpandLinks onClick={() => {
                  this.setState({ isExpanded: ! isExpanded })
                }}>
                  Visit Website
                </ExpandLinks>
              </ProjectInfoContainer>
            </WorkItemContainer>

            <WorkItemContainer3>
              <ImageWrapper>
                <img alt="photo of my free code camp certification" src="/assets/img/certificate.png" />
              </ImageWrapper>
                
              <ProjectInfoContainer>
                <ProjectSubHeader>
                  Front End Certification
                </ProjectSubHeader>

                <ProjectDescription>
                  Given after completion of FreeCodeCamp
                </ProjectDescription>
                    
                <ProjectTechsUsed>
                  Javascript fundamentals and logic-intensive algorithms
                </ProjectTechsUsed>

                <a style={{ marginTop: '10px' }} href="https://www.freecodecamp.org/michaelspencer1995/front-end-certification" target="blank">
                  Visit Website
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer3>
          </RecentWorkTriFold>
        
          <AwardWinningUIP>
            One day this section will have multiple award winning UI's
          </AwardWinningUIP>

          <Divider>
            <img alt="vector image to seperate the contact section from the rest of the page" src="/assets/img/divider.svg" />
          </Divider>
        </RecentWorkSectionViewContainer>
      </RecentWorkSectionView>
    )
  }
}

const RecentWorkSectionView = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const RecentWorkSectionViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 110px;
  padding-bottom: 100px;
  @media(max-width: 1000px) {
    margin-top: 65px;
  }
`

const RecentWorkH1 = styled.h1`
`

const RecentWorkP = styled.p`
  margin-top: 16px;
  width: 44%;
  @media(max-width: 1000px) {
    width: 76%;
  }
`

const RecentWorkTriFold = styled.div`
  display: flex;
  justify-content: space-between;
  width: 76%;
  margin-top: 38px;

  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    height: auto;
  }
`
const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`

const WorkItemContainer = styled.div`
  width: 27%;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  border: #eee 1px solid;
  padding: 2em;
  box-sizing: border-box;

  img{
    width: 100%;
  }
  @media(max-width: 1000px) {
    width: 76%;
    height: auto;
    margin-top: 65px;
    // align-items: center;
  }
`

const WorkItemContainer3 = styled(WorkItemContainer)`
  img{
    width: 67%;
  }
  @media(max-width: 1000px) {
    // width: 100%;
  }
`

const WorkItemContainer1 = styled(WorkItemContainer)`
  margin-top: 0px;
`

const ExpandLinks = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  color: #2196f3;
  letter-spacing: 0.04rem;
  padding: 0;
`

const CodeCampProjectsExpander = styled.div`
  overflow: hidden;
  height: ${({ isExpanded }) => isExpanded ? "100px" : "0px" };
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: height .5s ease-in-out;
  margin-top: 10px;
  a{
    font-size: 11px !important;
    margin-left: 3px;
  }
`

const ProjectInfoContainer = styled.div`
  // height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  border-top: #eee 1px solid;

  a{
    width: 100px;
    height: 25px;
    font-size: 14px;
    font-weight: 400;
    color: #0c9ecc;
  }
  @media(max-width: 1000px) {
    // text-align: center;
    // align-items: center;
    height: auto;
  }
`

const ProjectSubHeader = styled.h3`
  margin-top: 30px;
`

const ProjectDescription = styled.p`
  margin-top: 7px;
  line-height: 1em;
  font-size: 13px;
`

const ProjectTechsUsed = styled.p`
  font-size: 10px;
  font-style: italic;
  margin-top: 5px;
  line-height: 1em;
`

const AwardWinningUIP = styled.p`
  width: 76%;
  margin-top: 65px;
`

const Divider = styled.div`
  width: 60%;
  margin-top: 90px;  
  img{
    width: 100%;
  }
`

export default RecentWorkSection