import React, { useEffect, useState } from 'react';
import Axios from '../../../api/Axios';
const { format } = require('date-fns');

const Visits = () => {

  const [ visitors , set_visitors ] = useState(0);
  const [ visits , set_visits ] = useState(0);
  const [ today_visitors , set_today_visitors ] = useState(0);
  const [ today_visits , set_today_visits ] = useState(0);

  const [ is_loading , set_is_loading ] = useState(false);

  useEffect(() =>
  {
    set_is_loading(true);

    const fetch_vc = async () =>
    {
      try
      {
        const response = await Axios.get(
          '/visit_count/fetch_vc',
          {
            headers: { "Content-Type": 'application/json' },
            withCredentials: true
          }
        );

        if(response.status == 200) 
        {
          const { vc_list } = response.data;
          const date = format(new Date(), 'dd/MM/yyyy');

          set_visitors(vc_list.length);
          vc_list.forEach(visitor => set_visits(prev =>  prev + visitor["visit(s)"]));
          set_today_visitors(vc_list.filter(visitor => visitor.time.includes(date)).length); 
          vc_list.forEach(visitor => {
            if(visitor.time.includes(date))
            {
              set_today_visits(prev => prev + visitor["visit(s)"]);
            }
          });
        }
      }
      catch(err)
      {
        console.log(err.message);
      }
      finally
      {
        set_is_loading(false);
      }
    };

    fetch_vc();
  }, []);

  return (
    <section className='visits_section'>
      {
        is_loading ?
          <p className='visits_section_loading'>Loading...</p> :
            <>
              <p className='visits_section_visitors'>
                Total Visitors: {visitors}
              </p>
              <p className='visits_section_visits'>
                Total Visits: {visits}
              </p>
              <p className='visits_section_today_visits'>
                Total Visitors(Today): {today_visitors}
              </p>
              <p className='visits_section_visits'>
                Total Visits(Today): {today_visits}
              </p>
            </> 
      }           
    </section>
  )
}

export default Visits