import styles from './contactus.module.css'
import Noti from '../../assets/icons/contact-us/notification.svg'
import React, { useState } from "react";
import Select from 'react-select';
import { countries as countryOptions } from '../../utils/CountryList.js';
import { projectList as projectOptions } from '../../utils/ProjectList.js';
import CountryFlag from "react-country-flag";
import { selectStyles } from '../../utils/selectStyles.js';

const VITE_APP_API_URL = import.meta.env.VITE_APP_API_URL;

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  projectType: '',
  country: '',
  message: ''
};

const ContactUs = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSelectChange = (field) => (option) => {
    setForm((prev) => ({
      ...prev,
      [field]: option ? option.value : ''
    }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName) newErrors.firstName = 'First name is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.projectType) newErrors.projectType = 'Project type is required';
    if (!form.country) newErrors.country = 'Country is required';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch(`${VITE_APP_API_URL}/contactus`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        if (response.ok) {
          setForm(initialForm);
          alert("Thank you! Your message has been sent.");
        } else {
          const data = await response.json();
          alert(data.error || "Failed to send message. Please try again later.");
        }
      } catch (err) {
        alert("Network error. Please try again later.");
        console.error("Error submitting form:", err);
      }
    } else {
      console.info('Form validation failed:', validationErrors);
    }
  };

  return (
    <section id="contactus" className={styles.contactus_container}>
      <div className={styles.contactus_header_container}>
        <h2 className={styles.contactus_title}>Contact Us</h2>
        <p className={styles.contactus_header_subtitle}>Let's Talk Ideas</p>
        <p className={styles.contactus_header_description}>Whether you've got a brief or just a bold idea, we're all ears. Let's explore how we can help.</p>
      </div>

      <div className={styles.contactus_content_wrapper}>
        <div className={styles.contactus_animation_container}>
          <img className={styles.notification} src={Noti} alt="notification" />

          <div className={styles.circle_group}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>

          <div className={styles.animation_content}>
            <h2>Let's Build Something Great</h2>
            <p>maneuver</p>
          </div>
        </div>


        <form className={styles.contactus_form_container} onSubmit={handleSubmit}>
          <div className={styles.contactus_row}>
            <div className={styles.contactus_field_group}>
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className={styles.contactus_input}
                value={form.firstName}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.firstName && <p className={styles.contactus_error}>{errors.firstName}</p>}
            </div>

            <div className={styles.contactus_field_group}>
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className={styles.contactus_input}
                value={form.lastName}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.lastName && <p className={styles.contactus_error}>{errors.lastName}</p>}
            </div>
          </div>

          <div className={styles.contactus_row}>
            <div className={styles.contactus_field_group}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.contactus_input}
                value={form.email}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.email && <p className={styles.contactus_error}>{errors.email}</p>}
            </div>
          </div>

          <div className={styles.contactus_row}>
            <div className={styles.contactus_field_group}>
              <Select
                name="projectType"
                classNamePrefix="contactus_select"
                options={projectOptions}
                value={projectOptions.find(option => option.value === form.projectType) || null}
                onChange={handleSelectChange('projectType')}
                placeholder="Project Type"
                isClearable
                formatOptionLabel={option => (
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <span className={styles.project_icon}></span>
                    {option.label}
                  </span>
                )}
                styles={selectStyles}
              />
              {errors.projectType && <p className={styles.contactus_error}>{errors.projectType}</p>}
            </div>

            <div className={styles.contactus_field_group}>
              <Select
                name="country"
                classNamePrefix="contactus_select"
                options={countryOptions}
                value={countryOptions.find(option => option.value === form.country) || null}
                onChange={handleSelectChange('country')}
                placeholder="Select Country"
                isClearable
                formatOptionLabel={option => (
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <CountryFlag countryCode={option.value} svg style={{ width: 20, marginRight: 8 }} />
                    {option.label}
                  </span>
                )}
                styles={selectStyles}
              />
              {errors.country && <p className={styles.contactus_error}>{errors.country}</p>}
            </div>
          </div>

          <div className={styles.contactus_row}>
            <div className={styles.contactus_field_group}>
              <textarea
                name="message"
                placeholder="Message"
                className={styles.contactus_textarea}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <p className={styles.contactus_error}>{errors.message}</p>}
            </div>
          </div>

          <button type="submit" className={styles.contactus_submit}>Submit</button>
          <p className={styles.contactus_hint}>Still overthinking it? Just type 'hi' - we'll take it from there.</p>
        </form>
      </div>
    </section>
  )
}

export default ContactUs