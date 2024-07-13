import React ,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import './Work.scss';

import { AppWrap } from '../../Wrapper';
import {urlFor,client} from '../../client'


const Work = () => {
  const [works, setworks] = useState([])

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
    .then((data) => setworks(data))
  }, [])
  
  return (
    <div className='app__work'>
      <h1>My Works</h1>
      <div className='app__profile'>
        {works.map((work,index) => (
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.1}}
          transition={{duration:0.3,type:'tween'}}
          className='app__work-item'
          key={work.title+index}>
            <div className='img'>
              <img src={urlFor(work.imgUrl)} alt={work.title}/>
            </div>
            <div className='des'>
              <h2 className='bold-text' style={{marginTop:20}}> {work.title}</h2>
              {/* <p className='p-text' style={{marginTop:10}}>Description : {work.description}</p> */}
              <a href={work.projectLink} target='_blank'>Project Link </a><br></br>
              {/* <a href={work.codeLink} className=''>Code Link</a> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(Work,'work');