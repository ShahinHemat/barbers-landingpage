import React, { useState, useEffect, } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { reviews, reviews2 } from '../constants';
import { fadeIn, fadeInTwo, textVariant, textVariantTwo } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { dominic1, edge, edge5 } from '../assets';

import useMediaQuery from '@mui/material/useMediaQuery';

const ServiceCard = ({ index, title, icon }) => {

  const isMobile = useMediaQuery('(max-width:680px)');


  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={isMobile ? fadeInTwo('right', 'spring', 0.5 * index, 0.75) : fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-card'>

        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-50 h-50 object-contain' style={{ borderRadius: '10px' }} />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}



const About = () => {

  const isMobile = useMediaQuery('(max-width:680px)');

  const [showAllReviews, setShowAllReviews] = useState(false); // Define the showAllReviews state
  const [buttonText, setButtonText] = useState('Show All Reviews');




  const toggleReviews = () => {
    setShowAllReviews(!showAllReviews);
    setButtonText(showAllReviews ? 'Show All Reviews' : 'Show Fewer Reviews');
    setReachedFinalReview(false); // Reset reachedFinalReview when toggling
  };






  return (
    <>

      <motion.div
        animate={isMobile ? textVariantTwo() : textVariant()}
        className='moreMarginOnPhone'
      >
        {/* <p className={styles.sectionSubText}>Om Oss</p> */}
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        animate={isMobile ? fadeInTwo('', '', 0.1, 1) : fadeIn('', '', 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
        style={{color: '#5f2e00'}}
      >

        &nbsp;&nbsp; <b>Dominic is a haircut specialist with 22+ years of experience</b>, and a <a href='https://www.fresha.com/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/modal/reviews' style={{ fontStyle: 'italic' }} target='_blank'>4.9 Google Review Rating.</a> He currently works as a Master Barber at Edge Barbershop Storgata in Oslo, Norway.
        He cares deeply about all his customers <em>&#x28;as one can read in his <a style={{ textDecoration: 'underline', }} href='#reviews'><b>reviews</b></a>&#41;</em>, and he puts a strong emphasis on delivering exceptional customer service.
        <br />
        <br />
        &nbsp;&nbsp;<a href='https://www.fresha.com/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/booking?employeeId=716488' target='_blank' style={{ fontSize: '20px' }}><span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>CLICK HERE</span> to select a service and book an appointment with him today!</a>

      </motion.p>

      <motion.img
        src={edge5}
        style={{ marginTop: '70px' }}
      />




      {/* THIS TEXT AND IMAGE SHOULD BE AT THE BOTTOM ON "CONTACT ME" */}

      <motion.div animate={isMobile ? textVariantTwo() : textVariant()} style={{ marginTop: '90px', }}>
        {/* <p className={styles.sectionSubText}>Om Oss</p> */}
        <h2 style={{ color: '#5f2e00', fontWeight:'bolder' }}>Dominic Kwabena Ofori</h2>
        <h2 className={styles.sectionHeadText}>The Professional Barber.</h2>
      </motion.div>

      <motion.div className='mt-10 flex flex-wrap gap-10'>
        <div style={{ display: 'flex' }}>
          <img
            key='111111'
            src={dominic1}
            style={{ maxWidth: '66%', borderRadius: '5px' }}
          />

          <div style={{ margin: 'auto 0' }}>
            <ul>
              <li style={{ marginLeft: '10px', marginBottom: '10px', fontWeight: 'bolder' }}>💈 Professional Celebrity Barber </li>
              <li style={{ marginLeft: '10px', marginBottom: '10px', fontWeight: 'bolder' }}>💈 Professional Hairdresser </li>
              <li style={{ marginLeft: '10px', marginBottom: '10px', fontWeight: 'bolder' }}>💈 22+ Years Experience </li>
              <li style={{ marginLeft: '10px', marginBottom: '10px', fontWeight: 'bolder' }}>💈 Google 4.9 ⭐⭐⭐⭐⭐ Star Rating </li>
              <li style={{ marginLeft: '10px', marginBottom: '10px', fontWeight: 'bolder' }}>💈 Haircut Specialist & Strategist </li>
            </ul>
          </div>

        </div>
      </motion.div >

      


      <div id='reviews' style={{ padding: '50px' }}>

      </div>


      <div>

        <motion.div animate={textVariant()} style={{ marginTop: '18px' }}>
          <p style={{ color: '#5f2e00', fontWeight:'bolder' }}>What others say</p>
          <h2 className={styles.sectionHeadText}>Reviews.</h2>
          <a href="https://www.fresha.com/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/modal/reviews" style={{ fontSize: '12px' }} target='_blank'><em>Source: Google & Fresha Reviews</em></a>
        </motion.div>

        {reviews.map((review, index) => (
          <img src={review} key={index} style={{ width: '100vw', borderRadius: '25px', marginTop: '20px' }} />
        ))}

        {/* Conditionally render additional reviews */}
        {showAllReviews && reviews2.map((review, index) => (
          <img src={review} key={index} style={{ width: '100vw', borderRadius: '25px', marginTop: '20px' }} />
        ))}

        {/*  <button
          className={`button-90 ${showAllReviews ? (reachedFinalReview ? 'sticky-under-reviews' : 'fixed-bottom') : ''}`}
          role="button"
          onClick={toggleReviews}
        >
          {buttonText}
        </button>
 */}



        <button className='button-90' role="button" onClick={toggleReviews}>
          {buttonText}
        </button>
      </div>


    </>
  )
}

export default SectionWrapper(About, 'about')