import React, { useEffect ,useState} from 'react';
import { AppWrap } from '../../Wrapper';
import { urlFor , client } from '../../client';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import './Skills.scss';

const Skills = () => {
  
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "skills"]';

    client.fetch(query)
      .then((data) => setSkills(data))
  }, [])
  
  
  return (
      <div className='app__skills'>
      <h2 className='head-text'>Skills</h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) =>(
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration:0.5}}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgcolor}}> 
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>

  )
}

export default AppWrap(Skills,'skills');
