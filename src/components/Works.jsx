import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { styles } from '../styles';
import { github } from '../assets';
import { demo } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, headlineOne, descriptionOne, headlineTwo, descriptionTwo, headlineThree, descriptionThree, headlineFour, descriptionFour, tags, image, source_code_link, source_code_link2 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Vis Stillingsbeskrivelse')

  function handleShow() {
    setIsVisible(!isVisible);
    setButtonText((state) => (state === 'Vis Stillingsbeskrivelse' ? "Skjul Stillingsbeskrivelse" : 'Vis Stillingsbeskrivelse'));
  }

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      > */}
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>

      
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]' style={{ textAlign: 'center' }}>{name}</h3>

          <button onClick={handleShow} class="button-90" role="button">{buttonText}</button>

          {isVisible && (
            <>

              <h3 className='text-white font-bold text-[14px] mt-4'>{headlineOne}</h3>
              <p className='mt-2 text-secondary text-[14px]'>&nbsp;&nbsp;{descriptionOne}</p>


              <h3 className='text-white font-bold text-[14px] mt-4'>{headlineTwo}</h3>
              <ul className='mt-2 flex flex-col flex-wrap gap-2 list-disc ml-5'>
                {descriptionTwo?.map((description) => (
                  <li key={description.point} className='text-[14px] text-secondary'>
                    {description.point}
                  </li>
                ))}
              </ul>

              <h3 className='text-white font-bold text-[14px] mt-4'>{headlineThree}</h3>

              <ul className='mt-2 flex flex-col flex-wrap gap-2 list-disc ml-5'>
                {descriptionThree?.map((description) => (
                  <li key={description.point} className='text-[14px] text-secondary'>
                    {description.point}
                  </li>
                ))}
              </ul>

              <h3 className='text-white font-bold text-[14px] mt-4'>{headlineFour}</h3>
              <ul className='mt-2 flex flex-col flex-wrap gap-2 list-disc ml-5'>
                {descriptionFour?.map((description) => (
                  <li key={description.point} className='text-[14px] text-secondary'>
                    {description.point}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>



        {/* <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div> */}
      {/* </Tilt> */}
      </div>
    </motion.div>
  )
}

const Works = () => {
  return (
    <div style={{position: 'relative', top: '-75px' }}>
      <motion.div variants={textVariant()} id='stillinger'>
        {/* <p className={styles.sectionSubText}>My work</p> */}
        <h2 className={styles.sectionHeadText}>Ledige Stillinger</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-swBygg-dark text-[17px] max-w-3xl leading-[30px]'
        >
          &nbsp;&nbsp;Vi er alltid på utkikk etter gode mennesker. Hvis du kjenner deg igjen i en av våre stillingsbeskrivelser under, vil vi veldig gjerne høre fra deg! Ta <a href='#contact' title='Klikk for å gå til kontaktskjema' style={{textDecoration: 'underline'}}>kontakt med oss</a> for en uforpliktende prat.
        </motion.p>
      </div>

      <div className='mt-10 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Works, '');