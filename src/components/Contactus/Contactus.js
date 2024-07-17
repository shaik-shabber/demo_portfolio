import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_daep2xf', 'template_eiq0kgw', e.target, 'AuPy91NenjuKldUn8')
      .then((result) => {
        alert('Message Sent, We will get back to you shortly', result.text);
      }, (error) => {
        alert('An error occurred, Please try again', error.text);
      });
    setFormData({ name: '', email: '', message: '' }); // Reset form fields
  };

  return (
    <div id="Contactus">
      <ContactContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </div>
  );
};

export default ContactUs;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: white;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  padding: 15px 24px;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, orange, red);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 100px;
  transition: background-color 0.3s ease;
  &:hover {
    background: linear-gradient(135deg, red, orange);
  }
`;
