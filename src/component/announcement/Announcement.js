import React, { useEffect, useState } from 'react';
import Axios from '../../api/Axios';

const Announcement = () => {

  const domain = 'https://tamil-mandram-server.onrender.com';

  const [ details , set_details ] = useState([]);
  const [ is_loading , set_is_loading ] = useState(true);
  const [ result , set_result ] = useState('');

  useEffect(() =>
  {
    const announcement_details = async () =>
    {
      try
      {
        const response = await Axios.get(
          '/announcement_details',
          {
            withCredentials: true
          }
        );
        const { announcement_details } = response.data;
        set_details(announcement_details[0]);
        set_result('positive');
      }
      catch(err)
      {
        set_result(err.message);
      }
      finally
      {
        set_is_loading(false);
      }
    }

    announcement_details();    
  },[]);

  return (
    <>
      <section className='announcement_section'>
        {
          is_loading ?
            <p className='announcement_section_loading'>Loading...</p> :
              result == 'positive' ?
                <>
                  <img className='announcement_section_img' src={`${domain}/img/${details.image}`} />
                  <p className='announcement_section_title'>{details.title}</p>
                  <p className='announcement_section_desc'>{details.desc}</p>
                  <ul className='announcement_section_points'>
                    {
                      details.points?.map(point =>
                        {
                          return(
                            point ?
                              <>
                                <li key={point}>
                                  {point}
                                </li>
                                <hr/>
                              </> :
                                null
                          )                          
                        })
                    }
                  </ul>   
                  <p className='announcement_section_update_date'>Last updated on: {details.date}</p>             
                </> :
                  <p className='announcement_section_error'>{result}</p>             
        }        
      </section>
    </>
  )
}

export default Announcement