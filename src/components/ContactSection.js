import React, { Component } from 'react'
import styled from "styled-components"
import { GREEN, GREYACCENT } from "../constants/"
import { UITEXT } from "../uitext/"

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
      formValid: true,
      formSending: false
    }
  }
  
  handleSubmit(event){
    event.preventDefault()
    
    if(!this.checkIfFormValid() || this.state.formSending){
      console.log('invalid form')
      return
    }
    
    this.setState({
      formSending: true
    })

    fetch('https://cors-anywhere.herokuapp.com/emailer1995.herokuapp.com', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "name": this.state.nameValue,
        "number": this.state.numberValue,
        "email": this.state.emailValue,
        "message": this.state.messageValue
      })
    })
    .then(res => {
      if(res.status === 200){
        alert('your message was sent', res.status)
        
        this.setState({
          nameValue: '',
          numberValue: '',
          emailValue: '',
          messageValue: '',
          nameValid: true,
          numberValid: true,
          emailValid: true,
          messageValid: true,
          errorMessage: 'Please Correct the following errors:',
          formValid: true,
          formSending: false
        })
        document.forms['FORM'].reset()
        return
      } 
      alert('There is a problems with the server, please call me at 512 825 2241, or email me obsessedwiththeprocess@gmail.com', res.status)
      
      this.setState({
        formSending: false
      })
    })
    .catch(res => {
      alert('There is a problems with the server, please call me at 512 825 2241, or email me obsessedwiththeprocess@gmail.com', res)

      this.setState({
        formSending: false
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
      this.setState({
        formValid: true
      })
      return true

    } else {
      alert('Please correct the marked entries')
      this.setState({
        formValid: false
      })
      return false
    }
  }

  updateValidity(validity, correspondingState){
    let change = {}
    
    change[correspondingState] = validity
    this.setState(change)
  }

  updateInputValueInState(e) {
    let change = {}

    change[e.target.name] = e.target.value
    this.setState(change)
  }
  
  isPhoneNumber(str){
    let valid = false
    let digits = str.replace(/\D/g,'')

    if(digits.length >= 7) {
      return true
    }

    return false
  }

  isEmail(str){
    let format = /.+\@.+\..+/
    let passes = format.test(str)
    
    if(passes) {
      return true
    }
    
    return false
  }

  render() {
    return (
      <ContactSectionView>
        <div id="contact-scroll-id" style={{ position: 'relative', top: '-185px'}} />      
        <ContactSectionViewContainer>
          <ContactSectionH1>
            { UITEXT.contact.main }
          </ContactSectionH1>

          <ContactSectionP>
            { UITEXT.contact.sub }
          </ContactSectionP>
          
          <FormAndMapContainer>
            <FormContainer>
              <Form
                id="FORM"
                onSubmit={event => this.handleSubmit(event)}
                method="POST">
                <LabelAstericContainer>
                  <FormLabel>
                    { UITEXT.contact.form.labels.l1 }
                  </FormLabel>

                  <Asteric
                    isShown={this.state.nameValid}>
                    { UITEXT.contact.form.errorMessages.m1 }
                  </Asteric>
                </LabelAstericContainer>
                
                <Input 
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="nameValue"
                  placeholder={ UITEXT.contact.form.placeholders.p1 }
                />
                
                <LabelAstericContainer>
                  <FormLabel>
                    { UITEXT.contact.form.labels.l2 }
                  </FormLabel>
                
                  <Asteric
                    isShown={this.state.numberValid}>
                    { UITEXT.contact.form.errorMessages.m2 }
                  </Asteric>
                </LabelAstericContainer>
                
                
                <Input 
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="numberValue"
                  placeholder={ UITEXT.contact.form.placeholders.p2 }
                />

                <LabelAstericContainer>
                  <FormLabel>
                    { UITEXT.contact.form.labels.l3 }
                  </FormLabel>
                
                  <Asteric
                    isShown={this.state.emailValid}>
                    { UITEXT.contact.form.errorMessages.m3 }
                  </Asteric>
                </LabelAstericContainer>

                <Input 
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="emailValue"
                  placeholder={ UITEXT.contact.form.placeholders.p3 }
                />

                <LabelAstericContainer>
                  <FormLabel>
                    { UITEXT.contact.form.labels.l4 }
                  </FormLabel>
                
                  <Asteric
                    isShown={this.state.messageValid}>
                    { UITEXT.contact.form.errorMessages.m4 }
                  </Asteric>
                </LabelAstericContainer>
                
                <TextArea
                  onChange={(this.updateInputValueInState.bind(this))} 
                  value={this.state.name}
                  name="messageValue"
                  placeholder={ UITEXT.contact.form.placeholders.p4 }
                />

                <FormSubmitButton
                  value={ UITEXT.contact.form.submit }
                  isShown={this.state.formSending}
                  type="submit" />
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
  width: 76%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -14px;
  padding-bottom: 85px;
  @media(max-width: 1000px) {
    // padding-bottom: 55px;
    margin-top: -30px;
  }
`

const ContactSectionH1 = styled.h1`
`

const ContactSectionP = styled.p`
  margin-top: 15px;
  color: ${ GREYACCENT };
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
  height: 36px;
  padding-left: 10px;
  box-sizing: border-box;
  background: #fbfbfb;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;

  &::placeholder{
    color: #bbb;
    font-size: 12px;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0;
  margin: 0;
  resize: none;
  height: 100px;
  padding-left: 9px;
  padding-top: 6px;
  box-sizing: border-box;
  background: #fbfbfb;
  border: none;
  border-radius: 0;
  -webkit-appearance: none;
  
  &::placeholder{
    color: #bbb;
    font-size: 12px;
  }
`

const FormSubmitButton = styled.input`
  transition: all 0.3s ease;
  width: 100px;
  height: 41px;
  align-self: flex-start;
  padding: 0;
  -webkit-appearance: none;  
  margin: 0;
  margin-top: 17px;
  border-radius: 2px;
  font-size: 13px;
  text-shadow: none;
  background: ;
  background: ${({ isShown }) => isShown ? "#637970" : GREEN };
  border: none;
  font-weight: 500;
  color: white;

  &:hover{
    transform: scale(1.01);
  }

  &:hover{
    cursor: pointer;
  }
`

const Iframe = styled.iframe`
  width: 50%; 
  height: 406px;
  position: relative;
  top: 38px;
  border: #ccc 1px solid;
  @media(max-width: 1000px) {
    width: 100%;
    margin-top: 20px;
  }
`

const Asteric = styled.p`
  font-weight: 400;
  font-size: 12px;
  height: 37px;
  position: relative;
  top: 18px;
  padding: 0;
  margin: 0;
  color: #ff4b4b;
  display: ${({ isShown }) => isShown ? "none" : "block" };
`

const LabelAstericContainer = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  padding-left: 11px;
  padding-bottom: 3px;
`

const FormLabel = styled.label`
  padding: 0;
  margin: 0;
  color: ${ GREYACCENT };
  font-size: 12px;
  font-weight: 400;
`

export default ContactSection