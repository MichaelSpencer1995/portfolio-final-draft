import React, { Component } from 'react'
import styled from "styled-components"

class FooterSection extends Component {
  render() {
    return (
      <FooterView>
        <p>
          Website designed and created by Michael Spencer 2018
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
  border-top: #ddd 1px solid;
  p{
    width: 76%;
    text-align: center;
    line-height: 20px;
    font-size: 13px;
    color: #aaa;
  }
`

export default FooterSection