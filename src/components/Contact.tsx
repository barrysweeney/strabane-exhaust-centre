import React from "react";
import styled from "styled-components";
import { FaPhone, FaCalendarAlt, FaMapSigns } from "react-icons/fa";

const ContactContainer = styled.div`
  padding: 30px;
  background: #aea7a708;
  font-size: 18px;
  display: grid;
  grid-gap: 20px;
  h2 {
    font-size: 50px;
  }
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <h2>Contact</h2>
      <div>
        <FaPhone /> 028 7188 6588
      </div>
      <div>
        <FaCalendarAlt /> 9am - 6pm | Monday - Saturday
      </div>
      <div>
        <FaMapSigns /> 5 Lifford Rd, Strabane, BT82 8ER
      </div>
    </ContactContainer>
  );
}

export default Contact;
