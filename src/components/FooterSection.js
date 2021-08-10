import React, { Component } from 'react'
import styled from "styled-components"
import { GREYACCENT } from "../constants/"
import { UITEXT } from "../uitext/"

class FooterSection extends Component {
  render() {
    return (
      <FooterView>
        <p>
          { UITEXT.footer.main }
        </p>
      </FooterView>
    )
  }
}

const FooterView = styled.div`
  height: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f5f5f5;
  p{
    width: 76%;
    text-align: center;
    line-height: 20px;
    font-size: 13px;
    color: #aaa;
    color: ${ GREYACCENT };
  }
`

export default FooterSection