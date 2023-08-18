import { color, motion } from 'framer-motion';
import { styles } from '../styles';
import { dominic, edge, edge2 } from '../assets';
import ImageSlider from './ImageSlider';
import { sliderImages, sliderImagesOne } from '../constants';

const Hero = () => {
  return (
    <section id='hero' className='relative w-full h-screen mx-auto flex' style={{
      backgroundImage: `url(${edge2})`,
      backgroundSize: 'cover', // Set the background image to cover the element
      backgroundRepeat: 'no-repeat', // Prevent image from repeating
      backgroundPosition: 'center center', // Center the image
    }}> {/* added flex */}

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 justify-center`}> {/* added justify-center */}

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#fff]' /> {/* Changed hex code */}
          <div className='w-1 sm:h-80 h-40 swBygg-gradient' style={{height:'700px'}} /> {/* Changed violet-gradient to swBygg-gradient*/}
        </div>


        <div className="flex flex-col items-center">

          <div>

            <div className='flex items-center flex-wrap'>
              <img
                src={dominic}
                alt='Dominic Header'
                style={{ borderRadius: '50%', maxHeight: '300px', margin: '0 auto' }}
              />
              <h1 className={`${styles.heroHeadText} mt-2 hero-h1`} style={{ color: '#fff', marginLeft: '10px', textShadow: '1px 1px 0.5px #000' }}>
                <span style={{ fontWeight: 'bolder'}}>Dominic</span>
                <br />
                The Professional Barber 
                <br />
                <a href='https://www.fresha.com/nb/a/edge-barbershop-oslo-storgata-10-a-1vbz9v2p/booking?employeeId=716488' target='_blank'><button id='bookButton'>Book Appointment</button></a>
              </h1>

            </div>

          </div>

          <div style={{display: 'flex', gap: '120px',}}>

            <div style={{ marginTop: '15px' }}>
              <ImageSlider images={sliderImages} />
            </div>
            <div className='removeOnPhone' style={{ marginTop: '15px' }}>
              <ImageSlider images={sliderImagesOne} />
            </div>

          </div>

        </div>

      </div>

      {/* Animation indicating "scroll for more" */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center hero-bottom-div'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-swBygg-light flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-swBygg-lighter mb-1'
            />
          </div>
        </a>

      </div>

    </section>
  )
}

export default Hero