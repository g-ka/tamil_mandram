import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../../api/Axios';
import useData from '../../../hooks/useData';

const Admin = () => {  

  const { auth, set_auth } = useData();

  const [ title , set_title ] = useState('');
  const [ desc , set_desc ] = useState('');
  const [ one , set_one ] = useState('');
  const [ two , set_two ] = useState('');
  const [ three , set_three ] = useState('');
  const [ four , set_four ] = useState('');
  const [ five , set_five ] = useState('');
  const [ six , set_six ] = useState('');
  const [ seven , set_seven ] = useState('');
  const [ eight , set_eight ] = useState('');
  const [ nine , set_nine ] = useState('');
  const [ ten , set_ten ] = useState('');

  const [ is_prev_result_loading , set_is_prev_result_loading ] = useState(true);
  const [ prev_input_result , set_prev_input_result ] = useState('');

  const [ is_loading , set_is_loading ] = useState(false);
  const [ button , set_button ] = useState('Save');  

  const navigate = useNavigate();

  useEffect(() =>
  {
    const previous_inputs = async () =>
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
        const details = announcement_details[0];        
        set_title(details.title);
        set_desc(details.desc);
        set_one(details.points[0]);
        set_two(details.points[1]);
        set_three(details.points[2]);
        set_four(details.points[3]);
        set_five(details.points[4]);
        set_six(details.points[5]);
        set_seven(details.points[6]);
        set_eight(details.points[7]);
        set_nine(details.points[8]);
        set_ten(details.points[9]);
        set_prev_input_result('positive');
      }
      catch(err)
      {
        set_prev_input_result(err.message);
      }
      finally
      {
        set_is_prev_result_loading(false);
      }
    };

    previous_inputs();
  }, []);

  const submit_handler = async (e) =>
  {
    e.preventDefault();

    set_is_loading(true);
    set_button('Saving');

    try
    {
      const response = await Axios.post(
        '/announcement_details/update',
        JSON.stringify({
          title,
          desc,
          one,
          two,
          three,
          four,
          five,
          six,
          seven,
          eight,
          nine,
          ten
        }),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true
        }
      );      

      if(response.status == 201) set_button('Saved');      
    }
    catch(err)
    {
      set_button('Failed');
      if(err.response.status == 401) 
      {
        set_auth({});
        navigate('/admin_log');      
      }
    }
    finally
    {
      set_is_loading(false);
      setTimeout(() =>
      {
        set_button('Save');
      }, 3000);
    }
  };

  const logout_handler = async () =>
  {
    try
    {
      await Axios.get(
        '/admin_logout',
        {
          withCredentials: true
        }
      );
    }
    catch(err)
    {
      console.log(err.message);
    }
    finally
    {
      set_auth({});
      navigate('/admin_log');
    }
  };

  return (
    <section className='admin_section'>
      {
        is_prev_result_loading ?
        <p>Loading...</p> :           
          prev_input_result == 'positive' ?
            <>
              <p className='admin_section_welcome'>welcome {auth.username}</p>
              <form className='admin_section_form' onSubmit={submit_handler}>
                <div className='admin_section_form_title'>
                  <label 
                    htmlFor='title_input'
                    className='admin_section_form_title_label'
                  >
                    Title:
                  </label>
                  <input 
                    type='text'
                    id='title_input'
                    className='admin_section_form_title_input'      
                    value={title}
                    onChange={e => set_title(e.target.value)}
                  />
                </div>
                <div className='admin_section_form_desc'>
                  <label 
                    htmlFor='desc_input'
                    className='admin_section_form_desc_label'
                  >
                    Description:
                  </label>
                  <textarea
                    type='text'
                    id='desc_input'
                    className='admin_section_form_desc_input'      
                    value={desc}
                    onChange={e => set_desc(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_one point'>
                  <label 
                    htmlFor='one_input'
                    className='admin_section_form_one_label'
                  >
                    Point-1:
                  </label>
                  <textarea
                    type='text'
                    id='one_input'
                    className='admin_section_form_one_input'      
                    value={one}
                    onChange={e => set_one(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_two point'>
                  <label 
                    htmlFor='two_input'
                    className='admin_section_form_two_label'
                  >
                    Point-2:
                  </label>
                  <textarea
                    type='text'
                    id='two_input'
                    className='admin_section_form_two_input'      
                    value={two}
                    onChange={e => set_two(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_three point'>
                  <label 
                    htmlFor='three_input'
                    className='admin_section_form_three_label'
                  >
                    Point-3:
                  </label>
                  <textarea
                    type='text'
                    id='three_input'
                    className='admin_section_form_three_input'      
                    value={three}
                    onChange={e => set_three(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_four point'>
                  <label 
                    htmlFor='four_input'
                    className='admin_section_form_four_label'
                  >
                    Point-4:
                  </label>
                  <textarea
                    type='text'
                    id='four_input'
                    className='admin_section_form_four_input'      
                    value={four}
                    onChange={e => set_four(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_five point'>
                  <label 
                    htmlFor='five_input'
                    className='admin_section_form_five_label'
                  >
                    Point-5:
                  </label>
                  <textarea
                    type='text'
                    id='five_input'
                    className='admin_section_form_five_input'      
                    value={five}
                    onChange={e => set_five(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_six point'>
                  <label 
                    htmlFor='six_input'
                    className='admin_section_form_six_label'
                  >
                    Point-6:
                  </label>
                  <textarea
                    type='text'
                    id='six_input'
                    className='admin_section_form_six_input'      
                    value={six}
                    onChange={e => set_six(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_seven point'>
                  <label 
                    htmlFor='seven_input'
                    className='admin_section_form_seven_label'
                  >
                    Point-7:
                  </label>
                  <textarea
                    type='text'
                    id='seven_input'
                    className='admin_section_form_seven_input'      
                    value={seven}
                    onChange={e => set_seven(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_eight point'>
                  <label 
                    htmlFor='eight_input'
                    className='admin_section_form_eight_label'
                  >
                    Point-8:
                  </label>
                  <textarea
                    type='text'
                    id='eight_input'
                    className='admin_section_form_eight_input'      
                    value={eight}
                    onChange={e => set_eight(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_nine point'>
                  <label 
                    htmlFor='nine_input'
                    className='admin_section_form_nine_label'
                  >
                    Point-9:
                  </label>
                  <textarea
                    type='text'
                    id='nine_input'
                    className='admin_section_form_nine_input'      
                    value={nine}
                    onChange={e => set_nine(e.target.value)}
                  />
                </div>       
                <div className='admin_section_form_ten point'>
                  <label 
                    htmlFor='ten_input'
                    className='admin_section_form_ten_label'
                  >
                    Point-10:
                  </label>
                  <textarea
                    type='text'
                    id='ten_input'
                    className='admin_section_form_ten_input'      
                    value={ten}
                    onChange={e => set_ten(e.target.value)}
                  />
                </div>       
                <button 
                  type='submit'
                  className='admin_section_form_button'
                  style={{
                    cursor: is_loading || button != 'Save' ? 'not-allowed' : 'pointer',
                    pointerEvents: is_loading || button != 'Save' ? 'none' : 'auto',
                    backgroundColor: button == 'Save' || button == 'Saving' ? '#ffeb13' : button == 'Saved' ? 'green' : 'red',
                    color: button == 'Saved' || button == 'Failed' ? 'white' : 'black'
                  }}
                >
                  {button}
                </button>             
              </form>
              <button className='admin_section_logout' onClick={logout_handler}>
                Log Out
              </button>
            </>
             :
              <p>{prev_input_result}</p>
      }       
    </section> 
  )
}

export default Admin