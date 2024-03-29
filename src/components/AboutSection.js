import React, { Component } from 'react'
import styled from "styled-components"
import Divider from './Divider';
import { GREYACCENT, BLACK } from "../constants/"
import { UITEXT } from "../uitext/"

class AboutSection extends Component {
  render() {
    return (
      <AboutSectionView>
        <div id="about-scroll-id" style={{ position: 'relative', top: '-82px'}} />
        <AboutSectionViewContainer>
          <AboutH1>
            { UITEXT.about.main }
          </AboutH1>

          <AboutP>
            { UITEXT.about.sub }
          </AboutP>

          <AboutSkillsContainer>
            <Row>
              <ItemContainer>
                <Item>
                  <img alt="javascript" src="/assets/img/js-square.svg"/>
                </Item>
                  
                <SubHeader>
                  { UITEXT.about.techs.tech1 }
                </SubHeader>
              </ItemContainer>

              <ItemContainer>
                <Item>
                  <img alt="react.js" src="/assets/img/react.svg"/>
                </Item>
                
                <SubHeader>
                  { UITEXT.about.techs.tech2 }
                </SubHeader>
              </ItemContainer>
            </Row>

            <Row>
              <ItemContainer>
                <Item>
                  <img alt="html 5" src="/assets/img/html5.svg"/>
                </Item>
                
                <SubHeader>
                  { UITEXT.about.techs.tech3 }
                </SubHeader>
              </ItemContainer>

              <ItemContainer>
                <Item>
                  <img alt="Css 3" src="/assets/img/css3-alt.svg"/>                          
                </Item>
                
                <SubHeader>
                  { UITEXT.about.techs.tech4 }
                </SubHeader>
              </ItemContainer>
            </Row>

            <Row>
              <ItemContainerLast>
                <Item>
                  <img alt="responsive desgin" src="/assets/img/mobile-alt.svg"/>
                </Item>
                
                <SubHeader>
                  { UITEXT.about.techs.tech5 }
                </SubHeader>
              </ItemContainerLast>
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
  padding-bottom: 62px;
  @media(max-width: 1000px) {
    padding-bottom: 76px;
  }
`

const AboutSectionViewContainer = styled.div`
  margin-top: 77px
  width: 74%;
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
  color: ${ BLACK };
`

const AboutP = styled.p`
  margin-top: 5px;
  width: 70%;
  color: ${ GREYACCENT };
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

const ItemContainerLast = styled(ItemContainer)`
  margin: 0 auto;
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
  color: ${ BLACK };
`

export default AboutSection