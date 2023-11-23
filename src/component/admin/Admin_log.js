import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../api/Axios';
import useData from '../../hooks/useData';

const Admin_log = () => {

  const { set_auth } = useData();

  const [ username , set_username ] = useState('');
  const [ password , set_password ] = useState('');

  const [ err_message , set_err_message ] = useState('');

  const navigate = useNavigate();

  const err_display = () =>
  {
    set_err_message('');
  };

  const submit_handler = async (e) =>
  {
    e.preventDefault();

    try
    {
      const response = await Axios.post(
        '/admin_log',
        JSON.stringify({
          username,
          password
        }),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true
        }
      );

      if(response.status == 200) 
      {
        set_auth({ username });
        navigate('/admin/');
      }
    }
    catch(err)
    {
      if(err.response?.status == 400) set_err_message('All fields are mandatory to fill');
      else if(err.response?.status == 401) set_err_message('No such username found! Please Register and then Log In');
      else if(err.response?.status == 409) set_err_message('Incorrect Password');
      else set_err_message('Server/Network error');
    }
  };

  return (
    <section className='admin_log_section'>
      <p className='admin_log_section_err'>{err_message}</p>
      <form className='admin_log_section_form' onSubmit={submit_handler}>
        <div className='admin_log_section_form_username'>
          <label
            htmlFor='username_input'
            className='admin_log_section_form_username_label'
          >
            Username:              
          </label>
          <input 
            type='text'
            id='username_input'
            className='admin_log_section_form_username_input'
            required
            value={username}
            onChange={e => set_username(e.target.value)}
            onFocus={err_display}
          />
        </div>        
        <div className='admin_log_section_form_password'>
          <label
            htmlFor='password_input'
            className='admin_log_section_form_password_label'
          >
            Password:              
          </label>
          <input 
            type='password'
            id='password_input'
            className='admin_log_section_form_password_input'
            required
            value={password}
            onChange={e => set_password(e.target.value)}
            onFocus={err_display}
          />
        </div>    
        <button
          type='submit'
          className='admin_log_section_form_button'
        >
          Log In
        </button>    
      </form>
    </section>
  )
}

export default Admin_log