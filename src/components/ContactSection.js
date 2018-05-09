import React, { Component } from 'react'
import styled from "styled-components"

class ContactSection extends Component {
  constructor() {
    super()
    this.state = {
      nameValue: '',
      numberValue: '',
      emailValue: '',
      messageValue: '',
      nameValid: true,
      numberValid: true,
      emailValid: true,
      messageValid: true,
      errorMessage: 'Please Correct the following errors:',
      formValid: true
    }
  }
  
  handleSubmit(event){
    event.preventDefault()
    
    if(!this.checkIfFormValid()){
      console.log('invalid form')
      return
    }
    
    fetch('/contact', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
       "name": this.state.nameValue,
       "number": this.state.numberValue,
       "email": this.state.emailValue,
       "message": this.state.messageValue
      })
    })
  }

  checkIfFormValid(){
    let nameIsValid = this.state.nameValue !== ''
    let messageIsValid = this.state.messageValue !== ''
    let emailIsValid = this.isEmail(this.state.emailValue)
    let numberIsValid = this.isPhoneNumber(this.state.numberValue)
    
    this.updateValidity(nameIsValid, 'nameValid')
    this.updateValidity(messageIsValid, 'messageValid')
    this.updateValidity(emailIsValid, 'emailValid')
    this.updateValidity(numberIsValid, 'numberValid')
    
    if(nameIsValid && messageIsValid && emailIsValid && numberIsValid) {
      console.log(this.state)
      this.setState({
        formValid: true
      })
      return true

    } else {
      console.log(this.state)
      this.setState({
        formValid: false
      })
      return false
    }
  }

  updateValidity(validity, correspondingState){
    let change = {}
    
    change[correspondingState] = validity
    console.log(change)
    this.setState(change)
  }

  updateInputValueInState(e) {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  
  isPhoneNumber(str){
    let valid = false
    let onlyDigits = str.replace(/\D/g,'')

    if(onlyDigits.length >= 7) {
      return true
    }

    return false
  }

  isEmail(str){
    let format = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    let passes = format.test(str)
    
    if(passes) {
      return true
    }
    
    return false
  }

  render() {
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

          <ErrorMessage isShown={this.state.formValid}>
            <p>Please correct fields marked with *</p>
          </ErrorMessage>
          
          <FormAndMapContainer>
            <FormContainer>
              <Form onSubmit={event => this.handleSubmit(event)} method="POST" action="/contact" >
                <Asteric isShown={this.state.nameValid}>*Name field cannot be blank</Asteric>
                <Input 
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="nameValue"
                  placeholder="name"
                />

                <Asteric isShown={this.state.numberValid}>*Invalid phone number</Asteric>
                <Input 
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="numberValue"
                  placeholder="number"
                />

                <Asteric isShown={this.state.emailValid}>*Invalid email address</Asteric>
                <Input 
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="emailValue"
                  placeholder="email"
                />

                <Asteric isShown={this.state.messageValid}>Message field cannot be blank</Asteric>
                <TextArea
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="messageValue"
                  placeholder="message"
                />

                <FormSubmitButton
                  type="submit"
                />
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

const FormSubmitButton = styled.input`
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
  height: 406px;
  position: relative;
  top: 7px;
  border: #ccc 1px solid;
  @media(max-width: 1000px) {
    width: 100%;
    margin-top: 50px;
  }
`

const ErrorMessage = styled.div`
  margin-top: 20px;
  position: relative;
  top: 10px;
  display: ${({ isShown }) => isShown ? "none" : "block" };
  
  p{
    color: #ea2525;
    font-weight: 700;
    font-size: 17px;
  }
`

const Asteric = styled.p`
  width: 100%;
  height: 30px;
  font-weight: 500;
  position: relative;
  top: 17px;
  font-size: 14px;
  padding: 0;
  margin: 0;
  color: #ea2525;
  display: ${({ isShown }) => isShown ? "none" : "block" };
`

export default ContactSection