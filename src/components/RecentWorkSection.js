import React, { Component } from 'react'
import styled from "styled-components"

class RecentWorkSection extends Component {
  render() {
    return (
      <RecentWorkSectionView>
        <RecentWorkSectionViewContainer>
          <RecentWorkH1>
            Recent Work
          </RecentWorkH1>

          <RecentWorkP>
            Lorem ipsum dolor sit amet vero?
            Alias minus deserunt qui provident
            ipsa fuga a eos suscipit, repudiandae
            quod consequuntur similique! Delectus id
            veritatis distinctio eligendi expedita odit eius
            facilis rem nulla.
          </RecentWorkP>

          <RecentWorkTriFold>
            <WorkItemContainer1>
              <img alt="photo of a website on different screen sizes" src="/assets/img/responsive-displays.svg" />
                
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
                    
                <a href="#">
                  Visit Website
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer1>

            <WorkItemContainer>
              <img alt="photos of various javascript projects" src="/assets/img/codecampchallenges.svg" />
                
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
                
                <a href="#">
                  Visit Website
                </a>
              </ProjectInfoContainer>
            </WorkItemContainer>

            <WorkItemContainer3>
              <img alt="photo of my free code camp certification" src="/assets/img/certificate.png" />
                
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
                    
                <a href="#">
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
  margin-top: 150px;
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
  margin-top: 70px;
  height: 300px;
  @media(max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    height: auto;
  }
`

const WorkItemContainer = styled.div`
  width: 27%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  img{
    width: 100%;
  }
  @media(max-width: 1000px) {
    width: 76%;
    height: auto;
    margin-top: 65px;
    align-items: center;
  }
`

const WorkItemContainer3 = styled(WorkItemContainer)`
  img{
    width: 67%;
  }
  @media(max-width: 1000px) {
    width: 100%;
  }
`

const WorkItemContainer1 = styled(WorkItemContainer)`
  margin-top: 0px;
`


const ProjectInfoContainer = styled.div`
  height: 184px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  a{
    width: 100px;
    height: 25px;
    text-decoration: none;
    color: #6eaabd;
  }
  @media(max-width: 1000px) {
    text-align: center;
    align-items: center;
    height: auto;
  }
`

const ProjectSubHeader = styled.h3`
  margin-top: 30px;
`

const ProjectDescription = styled.p`
  margin-top: 7px;
`

const ProjectTechsUsed = styled.p`
  font-size: 13px;
  font-style: italic;
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