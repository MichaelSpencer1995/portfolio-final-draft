import React, { Component } from 'react'
import styled from "styled-components"
import validator from 'validator'

class ContactSection extends Component {
  constructor() {
    super()
    this.state = {
      nameValue: '',
      numberValue: '',
      emailValue: '',
      messageValue: '',
      errorMsg: "Invalid Email Address",
      nameInvalid: false,
      numberInvalid: false,
      emailInvalid: false,
      messageInvalid: false,
      anyInvalid: false
    }
  }


  handleChange(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
    this.validateForm(e.target.name, e.target.value)
  }

  validateForm(input, currentValue){
    let formValid = true
    console.log('validate the ' + input + ' field the current value is: ' + currentValue)
  }

  

  render() {
    const { isExpanded } = this.state
    
    return (
      <ContactSectionView>
        <ContactSectionViewContainer>
          <ContactSectionH1>
            Get in touch
          </ContactSectionH1>

          <ContactSectionP>
            I am ready to grind, excel, and push my own limits.
            If you need a competent, willing, and young Javascript developer with UI/UX
            skills, let me prove I can fill that role.
          </ContactSectionP>

          <ErrorMessage isShown={this.state.anyInvalid}>
            <p>
              {this.state.errorMsg}
            </p>
            
            <p>Please correct fields marked with *</p>
          </ErrorMessage>
          
          <FormAndMapContainer>
            <FormContainer>
              <Form id="contact-form" method="POST" action="/contact" >
                <Asteric isShown={this.state.nameInvalid}>*</Asteric>
                <Input 
                  onChange={this.handleChange.bind(this)} 
                  value={this.state.name}
                  name="nameValue"
                  placeholder="name"
                />

                <Asteric isShown={this.state.numberInvalid}>*</Asteric>
                <Input 
                  onChange={this.handleChange.bind(this)} 
                  value={this.state.name}
                  name="numberValue"
                  placeholder="number"
                />

                <Asteric isShown={this.state.emailInvalid}>*</Asteric>
                <Input 
                  onChange={this.handleChange.bind(this)} 
                  value={this.state.name}
                  name="emailValue"
                  placeholder="email"
                />

                <Asteric isShown={this.state.messageInvalid}>*</Asteric>
                <TextArea
                  onChange={this.handleChange.bind(this)} 
                  value={this.state.name}
                  name="messageValue"
                  placeholder="message"
                />

                <FormSubmitButton
                  // onClick={() => this.validateForm()}
                >
                  Contact
                </FormSubmitButton>
              </Form>
            </FormContainer>

            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.3791666800007!2d-97.65040418526884!3d30.510315781715313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d0361c2e1531%3A0x13b0645b022fbd90!2sLoquat+Ln%2C+Round+Rock%2C+TX+78664!5e0!3m2!1sen!2sus!4v1525381025642" allowfullscreen />
          </FormAndMapContainer>
        </ContactSectionViewContainer>
      </ContactSectionView>
    )
  }
}

const ContactSectionView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`

const ContactSectionViewContainer = styled.div`
  // background: blue;
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -10px;
  padding-bottom: 85px;
  @media(max-width: 1000px) {
    padding-bottom: 55px;
    margin-top: -30px;
  }
`

const ContactSectionH1 = styled.h1`
`

const ContactSectionP = styled.p`
  margin-top: 15px;
`

const FormAndMapContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
    flex-direction: column;
    justify-content: none;
    align-items: center;
  }
`

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  @media(max-width: 1000px) {
    width: 100%;
  }
`

const Form = styled.form`
  width: 94%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  @media(max-width: 1000px) {
    width: 100%;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 40px;
  padding-left: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  background: rgb(247, 247, 247);
  border: #ccc 1px solid;
  border-radius: 0;
  -webkit-appearance: none;
  font-family: 'Open Sans', sans-serif;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0;
  margin: 0;
  resize: none;
  height: 190px;
  margin-top: 10px;
  padding-left: 8px;
  padding-top: 6px;
  box-sizing: border-box;
  background: rgb(247, 247, 247);
  border: #ccc 1px solid;
  border-radius: 0;
  -webkit-appearance: none;
  font-family: 'Open Sans', sans-serif;
`

const FormSubmitButton = styled.button`
  width: 100%;
  padding: 0;
  margin: 0;
  height: 57px;
  margin-top: 8px;
  border-radius: 2px;
  font-size: 14px;
  text-shadow: none;
  background: rgb(33, 149, 147);
  border: none;
  font-weight: 500;
  font-family: 'Open Sans', sans-serif;
  color: rgba(255, 255, 255, 0.8);
`

const Iframe = styled.iframe`
  width: 50%; 
  height: 398px;
  position: relative;
  top: 7px;
  border: #ccc 1px solid;
  @media(max-width: 1000px) {
    width: 100%;
    margin-top: 50px;
  }
`

const ErrorMessage = styled.div`
  display: ${({ isShown }) => isShown ? "block" : "none" };
  margin-top: 20px;
  position: relative;
  top: 10px;
  p{
    color: #ea2525;
    font-weight: 500;
    font-size: 15px;
  }
`

const AstericsContainer = styled.div`
  width: 12vw;
  height: 190px;
  background: red;
  position: relative;
  top: 8px;
`

const Asteric = styled.p`
  width: 20px;
  height: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 0;
  margin: 0;
  color: #ea2525;
  display: ${({ isShown }) => isShown ? "block" : "none" };
  // display: none;
`

export default ContactSection