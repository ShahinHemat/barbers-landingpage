import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1936', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.title}
          className="'w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold" style={{ textAlign: 'center', }}>{experience.title}</h3>
    </div>

    <img src={experience.img} style={{ width: '100%', height: '270px' }} />
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points?.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>

  </VerticalTimelineElement>
)

const Experience = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Våre Tjenester</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-swBygg-dark text-[17px] max-w-3xl leading-[30px]'
      >
        &nbsp;&nbsp;<b>Vi tilbyr et variert utvalg av tjenester, inkludert nybygg. </b>Vi utfører det meste av byggningsmessige arbeider og
        sammen med våre flinke samarbeidspartnere kan vi betjene det fleste typer prosjekter for både det private og
        profesjonelle markedet.
      </motion.p>


      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

      <motion.div style={{ position: 'relative', top: '60px' }}>
        <h2 className={styles.sectionHeadText} style={{ color: '#5a4a41' }}>Vi gleder oss til å høre fra deg!</h2>
        <p
          className='text-swBygg-dark text-[17px] max-w-3xl leading-[30px] cursor-pointer'
          style={{}}
        >
          &nbsp;&nbsp;Skal du bygge ny bolig, eller har du kanskje et prosjekt i tankene? <span style={{ textDecoration: 'underline' }}><a href='#contact' title='Klikk for å gå til kontaktskjema'>Kontakt oss</a></span> for et godt tilbud eller en hyggelig prat om prosjektet ditt.
        </p>
      </motion.div>

    </>
  )
}

export default SectionWrapper(Experience, 'work');