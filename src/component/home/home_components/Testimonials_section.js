import React from 'react';
import heart from '../../../images/home/testimonials_section/heart.png';

const Testimonials_section = () => {
  return (
    <section className='testimonials_section'>   
      <div className='testimonials_section_box'>
        <p className='testimonials_section_box_testi'>"it makes me happy to see an active and enriching tamil club in a national college"</p>
        <p className='testimonials_section_box_by'>- Snehan</p>
        <img src={heart} className='testimonials_section_box_one'/>
        <img src={heart} className='testimonials_section_box_two'/>
        <img src={heart} className='testimonials_section_box_three'/>
        <img src={heart} className='testimonials_section_box_four'/>
        <img src={heart} className='testimonials_section_box_five'/>
        <img src={heart} className='testimonials_section_box_six'/>
      </div>      
    </section>
  )
}

export default Testimonials_section