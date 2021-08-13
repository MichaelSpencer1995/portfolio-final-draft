import React, { Component } from 'react'
import styled from "styled-components"
import { GREYACCENT, BLACK } from "../constants/"

class ProjLink extends Component {
    state = {
        bool: false,
        color: 'white'
    }

    setColor(color) {
        switch(color) {
            case 'purple':
                this.state.color = '#e4c0ffd0'
                break
            case 'yellow':
                this.state.color = '#fff7c0d0'
                break
            case 'green':
                this.state.color = '#c0ffc2d0'
                break
            case 'red':
                this.state.color = '#ffc0c9d0'
                break
            case 'blue':
                this.state.color = '#c0dfffd0'
                break
            case 'orange':
                this.state.color = '#ffd7c0d0'
                break
        }
    }

    componentWillMount() {
        this.setColor(this.props.color)
    }

    render() {
        const { bool, color } = this.state

        return (
            <Work>
                <ImgWrap bool={bool}>
                    <img src={ this.props.imgSrc }></img>
                </ImgWrap>
                <HoverTarget 
                    bool={bool}
                    onMouseOver={() => this.setState({ bool: true })} onMouseOut={() => this.setState({ bool: false })}/>
                <Overlay
                    color={color}
                    bool={bool}
                    />
                <ProjName
                    bool={bool}>
                    <h3>{ this.props.projName }</h3>
                </ProjName>
            </Work>
        )
    }
}


const Work = styled.div`
    width: 15vw;
    height: 15vw;
    margin-bottom: 3.5vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
  
const ProjName = styled.div`
    width: ${({ bool }) => bool ? "110%" : "100%"};
    height: 40px;
    background: #24292e80;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in;
    h3 {
        z-index: 1;
        color: white;
        font-size: 16px;
    }
`

const ImgWrap = styled.div`
    overflow: hidden;
    width: ${({ bool }) => bool ? "110%" : "100%"};
    height: ${({ bool }) => bool ? "110%" : "100%"};
    position: absolute;
    transition: all 0.3s ease-in;
    img {
        width: ${({ bool }) => bool ? "200%" : "144%"};
        position: relative;
        transition: all 0.3s ease-in;
        left: -57px;
        top: -79px;
    }
`

const Overlay = styled.div`
    width: ${({ bool }) => bool ? "110%" : "100%"};
    height: ${({ bool }) => bool ? "110%" : "100%"};
    background: ${({ color }) => color};
    position: absolute;
    transition: all 0.3s ease-in;
`
const HoverTarget = styled.div`
    width: ${({ bool }) => bool ? "110%" : "100%"};
    height: ${({ bool }) => bool ? "110%" : "100%"};
    background: transparent;
    position: absolute;
    z-index: 10;
    &:hover {
        cursor: pointer;
    }
`


export default ProjLink