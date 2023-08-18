import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  /* const formRef = useRef();

  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Validating the form fields
    if (!form.name) {
      toast.error('Vennligst skriv ditt navn');
      setLoading(false);
      return;
    }

    if (!form.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      toast.error('Vennligst skriv en valid e-postadresse');
      setLoading(false);
      return;
    }

    if (!form.message) {
      toast.error('Vennligst skriv en beskjed');
      setLoading(false);
      return;
    }

    emailjs
      .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
        from_name: form.name,
        to_name: 'Shahin',
        from_email: form.email,
        to_email: 'shahinhemat@gmail.com',
        message: form.message,
      },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        alert("Takk for e-posten din! Du hører straks tilbake fra oss.");

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert('Åh, ser ut som en teknisk feil oppstod. Mens vi fikser feilen, kan du nå oss på e-post: post@swbygg.no eller på telefon: 45486718');
      })
  }

  const handleNameKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      emailInputRef.current.focus();
    }
  }

  const handleEmailKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      messageInputRef.current.focus();
    }
  }

  const handleMessageKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  } */


  return (
    <>
      <h3 className={`${styles.sectionHeadText} mb-4`} id='contact'>Contact.</h3>
      {/* <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <ToastContainer position='bottom-right' />
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={`${styles.sectionSubText}`}>Contact</p>
          <h3 className={`${styles.sectionHeadText}`}>Dominic</h3>

          <form
            ref={formRef}
            onChange={handleChange}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Ditt navn</span>
              <input onKeyDown={handleNameKeyDown} required type='text' title='Vennligst skriv ditt fulle navn' name='name' value={form.name} placeholder="Hva heter du?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>E-post</span>
              <input ref={emailInputRef} onKeyDown={handleEmailKeyDown} required pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}' title='Vennligst skriv inn en valid epost-adresse' type='email' name='email' value={form.email} placeholder="Hva er din e-postadresse?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Din beskjed til oss</span>
              <textarea ref={messageInputRef} onKeyDown={handleMessageKeyDown} required type='text' title='Skriv gjerne så utfyllende som mulig' name='message' value={form.message} placeholder="Hvordan kan vi være til tjeneste for deg?" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' />
            </label>
            <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? 'Sender...' : 'Send'}
            </button>
          </form>
        </motion.div>
      </div> */}
    </>
  )
}

export default SectionWrapper(Contact, 'contact');