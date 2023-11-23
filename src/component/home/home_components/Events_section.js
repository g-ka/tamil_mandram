import React from 'react';
import tamil_classes from '../../../images/home/events_section/tamil_classes.png';
import vidhai from '../../../images/home/events_section/vidhai.png';
import pongal from '../../../images/home/events_section/pongal.png';
import tamil_new_year from '../../../images/home/events_section/tamil_new_year.png';
import contests from '../../../images/home/events_section/contests.png';
import nittilam from '../../../images/home/events_section/nittilam.png';

const Events_section = () => {
  return (
    <section className='events_section'>
      <div className='events_section_head'>
        <p className='events_section_head_heading'>events</p>        
      </div>
      <div className='events_section_box'>
        <div className='events_section_box_one'>
          <div className='events_section_box_one_tamil_classes'>
            <img className='events_section_box_one_tamil_classes_tamimg' src={tamil_classes}/>
            <p className='events_section_box_one_tamil_classes_heading'>
              tamil classes
            </p>
            <p className='events_section_box_one_tamil_classes_desc'>
              Unfamiliar with Tamil? Worry not, Tamil classes are there for rescue
            </p>
          </div>
          <div className='events_section_box_one_vidhai'>
            <img className='events_section_box_one_vidhai_vidimg' src={vidhai}/>
            <p className='events_section_box_one_vidhai_heading'>
              vidhai & kathir
            </p>
            <p className='events_section_box_one_vidhai_desc'>
              Participate in ongoing literary contests from odd to even semesters
            </p>
          </div>
          <div className='events_section_box_one_pongal'>
            <img className='events_section_box_one_pongal_ponimg' src={pongal}/>
            <p className='events_section_box_one_pongal_heading'>
              pongal
            </p>
            <p className='events_section_box_one_pongal_desc'>
              New Year joy lasts from getting new calendar to Pongal celebrations
            </p>
          </div>
        </div>
        <div className='events_section_box_two'>
          <div className='events_section_box_two_tamil_new_year'>
            <img className='events_section_box_two_tamil_new_year_newimg' src={tamil_new_year}/>
            <p className='events_section_box_two_tamil_new_year_heading'>
              tamil new year
            </p>
            <p className='events_section_box_two_tamil_classes_desc'>
              Let's revel in Tamil New Year with exuberance and positivity
            </p>
          </div>
          <div className='events_section_box_two_contests'>
            <img className='events_section_box_two_contests_conimg' src={contests}/>
            <p className='events_section_box_two_contests_heading'>
              contests & collab events
            </p>
            <p className='events_section_box_two_contests_desc'>
              Be in flow with engaging inter-contests and collab-extravaganzas
            </p>
          </div>
          <div className='events_section_box_two_nittilam'>
            <img className='events_section_box_two_nittilam_nitimg' src={nittilam}/>
            <p className='events_section_box_two_nittilam_heading'>
              nittilam
            </p>
            <p className='events_section_box_two_nittilam_desc'>
              Releasing an yearly Tamil mag with a famed scholar, packed with poems, stories, and more
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Events_section