import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import './Testimonials.scss';
import { HiChevronLeft , HiChevronRight } from 'react-icons/hi';

import { AppWrap } from '../../Wrapper';
import {urlFor,client} from '../../client'

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);
  // const [currentIndex, setcurrentIndex] = useState(0);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query)
    .then((data) => setTestimonials(data))
  }, [])
  
  return (
    <div className='outer'>
      <h2>Education</h2>
      <div className='app__profil'>
        {testimonials.map((testimonial,index) => (
          <motion.div
          whileInView={{opacity:1}}
          whileHover={{scale:1.04}}
          transition={{duration:0.3,type:'tween'}}
          className='app__testimonial-item'
          key={testimonial.title+index}>
            <div className='desc'>
              <h2 className='bold-text year' style={{marginTop:20}}>{testimonial.name}</h2>
              <p className='p-text name' style={{marginTop:10}}>{testimonial.company}</p>
              <p className='p-text percent' style={{marginTop:10}}>{testimonial.feedback}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(Testimonials,'Testimonials');
