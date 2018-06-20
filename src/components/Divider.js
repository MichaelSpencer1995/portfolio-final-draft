import React, { Component } from 'react'
import styled from "styled-components"

const Divider = () => {
    return (
        <DividerContainer>
            <img alt="" src="/assets/img/divider.svg" />
        </DividerContainer>
    )
}

const DividerContainer = styled.div`
  width: 63%;
  margin-top: 55px;  
  img{
    width: 100%;
  }
`

export default Divider