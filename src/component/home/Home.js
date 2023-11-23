import React from 'react';
import Hero_page from './home_components/Hero_page';
import Achievements_page from './home_components/Achievements_page';
import Teams_section from './home_components/Teams_section';
import Events_section from './home_components/Events_section';
import Testimonials_section from './home_components/Testimonials_section';
import Contact_section from './home_components/Contact_section';

const Home = () => {
  return (
    <>
      <Hero_page />
      <Achievements_page />
      <Teams_section />
      <Events_section />
      <Testimonials_section />
      <Contact_section />
    </>      
  )
}

export default Home