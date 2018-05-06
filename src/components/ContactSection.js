import React, { Component } from 'react'
import styled from "styled-components"

class ContactSection extends Component {
  render() {
    return (
      <div className="contact-section-view">
        <div className="contact-section-view-container">
          <h1>
            Get in touch
          </h1>

          <p>
            I am ready to grind, excel, and push my own limits.
            If you need a competent, willing, and young Javascript developer with UI/UX
            skills, let me prove I can fill that role.
          </p>

          <div className="form-and-map-container">
            <div className="form-container">
              <form>
                <input placeholder="name" />
                <input placeholder="number" />
                <input placeholder="email" />
                <textarea placeholder="message" />
                <button className="submit-form-button">
                  Contact
                </button>
              </form>
            </div>

            <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.3791666800007!2d-97.65040418526884!3d30.510315781715313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d0361c2e1531%3A0x13b0645b022fbd90!2sLoquat+Ln%2C+Round+Rock%2C+TX+78664!5e0!3m2!1sen!2sus!4v1525381025642" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactSection