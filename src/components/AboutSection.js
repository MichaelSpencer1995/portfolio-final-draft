import React, { Component } from 'react'
import styled from "styled-components"
import Divider from './Divider';

class AboutSection extends Component {
  render() {
    return (
      <AboutSectionView>
        <div id="about-scroll-id" style={{ position: 'relative', top: '-82px'}} />
        <AboutSectionViewContainer>
          <AboutH1>
            About Me
          </AboutH1>

          <AboutP>
            Below are some technologies that I am comfortable with, all were used to make this page.
          </AboutP>

          <AboutSkillsContainer>
            <Row>
              <ItemContainer>
                <Item>
                  <img alt="javascript" src="/assets/img/js-square.svg"/>
                </Item>
                  
                <SubHeader>
                    Javasript
                </SubHeader>
              </ItemContainer>

              <ItemContainer>
                <Item>
                  <img alt="react.js" src="/assets/img/react.svg"/>
                </Item>
                
                <SubHeader>
                  React.js
                </SubHeader>
              </ItemContainer>
            </Row>

            <Row>
              <ItemContainer>
                <Item>
                  <img alt="html 5" src="/assets/img/html5.svg"/>
                </Item>
                
                <SubHeader>
                  HTML5
                </SubHeader>
              </ItemContainer>

              <ItemContainer>
                <Item>
                  <img alt="Css 3" src="/assets/img/css3-alt.svg"/>                          
                </Item>
                
                <SubHeader>
                  CSS3
                </SubHeader>
              </ItemContainer>
            </Row>

            <Row>
              <ItemContainer5>
                <Item>
                  <img alt="node.js" src="/assets/img/node.svg"/>
                </Item>
                  
                <SubHeader>
                  Node.js
                </SubHeader>
              </ItemContainer5>
                
              <ItemContainer>
                <Item>
                  <img alt="responsive desgin" src="/assets/img/mobile-alt.svg"/>
                </Item>
                
                <SubHeader>
                  Responsive Design
                </SubHeader>
              </ItemContainer>
            </Row>
          </AboutSkillsContainer>
        </AboutSectionViewContainer>
      </AboutSectionView>
    )
  }
}

const AboutSectionView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 90px;
  @media(max-width: 1000px) {
    padding-bottom: 76px;
  }
`

const AboutSectionViewContainer = styled.div`
  margin-top: 90px;
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media(max-width: 1000px) {
    margin-top: 65px;
    width: 76%;
  }
`

const AboutH1 = styled.h1`
`

const AboutP = styled.p`
  margin-top: 10px;
  width: 70%;
`

const AboutSkillsContainer = styled.div`
  width: 200px;
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

const ItemContainer = styled.div`
  width: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ItemContainer5 = styled(ItemContainer)`
  width: 70px;
  position: relative;
  right: 6px;
`

const Item = styled.div`
  width: 100%;
  img{
    width: 100%;
  }
`

const SubHeader = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin-top: 0px;
`

export default AboutSection