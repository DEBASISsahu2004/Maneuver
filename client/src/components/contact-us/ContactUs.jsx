import styles from './contactus.module.css'
import Noti from '../../assets/icons/contact-us/notification.svg'
import React, { useState } from "react";
import Select from 'react-select';
import { countries as countryOptions } from '../../utils/CountryList.js';
import { projectList as projectOptions } from '../../utils/ProjectList.js';
import CountryFlag from "react-country-flag";
import { selectStyles } from '../../utils/selectStyles.js';


const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    country: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: ''
    });
  }

  // For react-select country dropdown
  const handleCountrySelect = (option) => {
    setForm({
      ...form,
      country: option ? option.value : ''
    });
    setErrors({
      ...errors,
      country: ''
    });
  }

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';

    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.projectType) newErrors.projectType = 'Project type is required';
    if (!form.country) newErrors.country = 'Country is required';
    if (!form.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can handle the form submission, e.g., send data to an API
      console.log('Form submitted:', form);
      // Reset form after submission
      setForm({
        name: '',
        company: '',
        email: '',
        projectType: '',
        country: '',
        message: ''
      });
    }
  }

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


        <form className={styles.contactus_form_container} onSubmit={handleSubmit} noValidate>
          <div className={styles.contactus_row}>
            <div className={styles.contactus_field_group}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={styles.contactus_input}
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.name && <p className={styles.contactus_error}>{errors.name}</p>}
            </div>

            <div className={styles.contactus_field_group}>
              <input
                type="text"
                name="company"
                placeholder="Company"
                className={styles.contactus_input}
                value={form.company}
                onChange={handleChange}
                autoComplete="off"
              />
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
                onChange={option => setForm({ ...form, projectType: option ? option.value : '' })}
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
                onChange={handleCountrySelect}
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