import React from 'react';
import network from '../../../images/home/teams_section/network.gif';
import tamilukkaga from '../../../images/home/teams_section/tamilukkaga.gif';
import ravusu from '../../../images/home/teams_section/ravusu.gif';
import thiranazhi from '../../../images/home/teams_section/thiranazhi.gif';
import cinema from '../../../images/home/teams_section/cinema.gif';
import design from '../../../images/home/teams_section/design.gif';
import video_editing from '../../../images/home/teams_section/video_editing.gif';

const Teams_section = () => {
  return (
    <section className='teams_section'>
      <div className='teams_section_intro'>
        <img src={network} className='teams_section_intro_img1'/>
        <p className='teams_section_intro_heading'>scroll to stack the 6 teams of tamil mandram</p>
      </div>
      <div className='teams_section_tamilukkaga'>
        <img src={tamilukkaga} className='teams_section_tamilukkaga_img2'/>
        <p className='teams_section_tamilukkaga_heading'>tamilukkaga</p>
        <p className='teams_section_tamilukkaga_desc'>Generate authentic Tamil content and perform proofreading tasks</p>
      </div>
      <div className='teams_section_ravusu'>
        <img src={ravusu} className='teams_section_ravusu_img3'/>
        <p className='teams_section_ravusu_heading'>ravusu</p>
        <p className='teams_section_ravusu_desc'>Letting the inner child roll to craft cool and fun content</p>
      </div>
      <div className='teams_section_thiranazhi'>
        <img src={thiranazhi} className='teams_section_thiranazhi_img4'/>
        <p className='teams_section_thiranazhi_heading'>thiranazhi</p>
        <p className='teams_section_thiranazhi_desc'>Bagging all sort of talents like a bowl of potpourri</p>
      </div>
      <div className='teams_section_cinema'>
        <img src={cinema} className='teams_section_cinema_img5'/>
        <p className='teams_section_cinema_heading'>cinema</p>
        <p className='teams_section_cinema_desc'>Movie buffs and film aficionados crafting cinema-related content</p>
      </div>
      <div className='teams_section_design'>
        <img src={design} className='teams_section_design_img6'/>
        <p className='teams_section_design_heading'>design</p>
        <p className='teams_section_design_desc'>Unlocking visual appeal with their mastery in crafting awesome designs</p>
      </div>
      <div className='teams_section_video_editing'>
        <img src={video_editing} className='teams_section_video_editing_img7'/>
        <p className='teams_section_video_editing_heading'>video editing</p>
        <p className='teams_section_video_editing_desc'>Produce impactful videos and elevate the quality of content creation to new heights</p>
      </div>
    </section>
  )
}

export default Teams_section
