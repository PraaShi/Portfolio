import React , {useState} from 'react'
import './NavBarr.scss'
import {HiMenuAlt4,HiX} from 'react-icons/hi';


export default function NavBarr() {

  const [toggle, settoggle] = useState(false)

  return (
    <div className='menubar'>
      <div>
        {toggle ? (
          <span onClick={() => settoggle(false)}>
            <HiX /> 
        </span>
        ):(
          <span onClick={() => settoggle(true)}>
            <HiMenuAlt4 /> 
        </span>
        )}
        
      </div>
      <div className={`menu ${toggle ? 'open' : 'close'}`}>
      <ul className='names'>
              {['header','about','work','skills','Testimonials','Footer'].map((item)=> (
                <li className='innerdiv app__flex p-text' key={item} onClick={() => settoggle(false)}>
                  {
              item === 'Testimonials' ? <a href={`#${item}`}>Education</a> : item === "Footer" ? <a href={`#${item}`}>Contact</a> :<a href={`#${item}`}>{item}</a>
                  }
                </li>
          ))}
      </ul>
      </div>
    </div>
  )
}
