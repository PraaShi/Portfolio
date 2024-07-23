import React from 'react'
import {BsTwitter,BsInstagram,BsGithub} from 'react-icons/bs'
// import {FaFacebook} from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div  className='app__flex'>
          <a  className='app__flex' style={{width:"100%" ,height:"100%"}}href='https://github.com/PraaShi' target='_blank'>
            <BsGithub style={{width:"22px" , height:"22px"}}/>
          </a>
        </div>
        {/* <div>
            <FaFacebook />
        </div> */}
        <div  className='app__flex'>
            <a  className='app__flex' href='https://www.instagram.com/_shivaani07__/' target='_blank'>
              <BsInstagram style={{width:"20px" , height:"20px"}}/>
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
