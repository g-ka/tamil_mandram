import React from 'react';
import arrow from '../../../images/home/hero_section/arrow.png';
import snail from '../../../images/home/hero_section/snail.png';
import butterfly from '../../../images/home/hero_section/butterfly.png';
import heart from '../../../images/home/hero_section/heart.png';
import number_one from '../../../images/home/hero_section/number_one.png';

const Hero_page = () => {  
  return (
    <section className='hero_section'>      
      <div className='hero_section_heading'>
        <span className='hero_section_heading_tamil'>
          tamil
          <div className='hero_section_heading_tamil_est'>
            <span className='hero_section_heading_tamil_est_since'>since</span>            
            <span className='hero_section_heading_tamil_est_year'>1969</span>            
          </div>
        </span>
        <span className='hero_section_heading_mandram'>
          mandram
          <img className='hero_section_heading_mandram_arrow' src={arrow}/>
        </span>
        <p className='hero_section_heading_desc'>
          The official tamil linguistic club of NIT Trichy
        </p>
      </div>
      <img  className='hero_section_snail' src={snail}/>
      <img  className='hero_section_butterfly' src={butterfly}/>
      <img  className='hero_section_heart' src={heart}/>
      <img  className='hero_section_number_one' src={number_one}/>
    </section>
  )
}

export default Hero_page
