import React from 'react';
import dckap from '../../../images/home/events_section/dckap.png';
import bharathi from '../../../images/home/achievement_section/bharathi.png';
import management from '../../../images/home/achievement_section/management.png';
import tech_tamil from '../../../images/home/achievement_section/tech_tamil.png';

const Achievements_page = () => {

  return (
    <section className='achievements_section'>
      <div className='achievements_section_sponsor'>
        <div className='achievements_section_sponsor_slide'>
          <p>thanks to our events' major sponsor</p>
          <p>-</p>
          <img src={dckap} />
          <p className='hyphen'>-</p>
        </div>
        <div className='achievements_section_sponsor_slide'>
          <p>thanks to our events' major sponsor</p>
          <p>-</p>
          <img src={dckap} />
          <p className='hyphen'>-</p>
        </div>
      </div>
      <div className='achievements_section_box'>
        <div className='achievements_section_box_bharathi'>
          <img className='achievements_section_box_bharathi_bharimg' src={bharathi}/>
          <p className='achievements_section_box_bharathi_heading'>
            Bharathi 100
          </p>
          <p className='achievements_section_box_bharathi_desc'>
            Reminiscing Mahakavi Bharathiyar on his centennial death anniversary
          </p>
        </div>
        <div className='achievements_section_box_management'>
          <img className='achievements_section_box_management_managimg' src={management}/>
          <p className='achievements_section_box_management_heading'>
            valluvan kural
          </p>
          <p className='achievements_section_box_management_desc'>
            A concise discussion on Thirukkural's business and management principles
          </p>
        </div>
        <div className='achievements_section_box_tech_tamil'>
          <img className='achievements_section_box_tech_tamil_techimg' src={tech_tamil}/>
          <p className='achievements_section_box_tech_tamil_heading'>
            tech & tamil
          </p>
          <p className='achievements_section_box_tech_tamil_desc'>
           A seminar spotlighting the pivotal role of Tamil in the realm of technology
          </p>
        </div>
      </div>
    </section>
  )
}

export default Achievements_page