import React, { Component } from 'react'
import styled from "styled-components"

class ContactSection extends Component {
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

          <FormAndMapContainer>
            <FormContainer>
              <Form>
                <Input placeholder="name" />
                <Input placeholder="number" />
                <Input placeholder="email" />
                <TextArea placeholder="message" />
                <FormSubmitButton>
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
`

const ContactSectionViewContainer = styled.div`
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
  flex-direction: column;
  align-items: flex-start;
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
  margin-top: 8px;
  padding-left: 10px;
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
  width: 54%;
  height: 398px;
  position: relative;
  top: 7px;
  border: #ccc 1px solid;
  @media(max-width: 1000px) {
    width: 100%;
    margin-top: 50px;
  }
`

export default ContactSection