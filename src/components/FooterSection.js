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
  height: 79px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ececec;
  border-top: #d0d0d0 1px solid;
`

export default FooterSection