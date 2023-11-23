import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from '../../api/Axios';

const Admin_reg = () => {

  const [ username , set_username ] = useState('');  
  const [ seckey , set_seckey ] = useState('');
  const [ password , set_password ] = useState('');

  const [ is_loading , set_is_loading ] = useState(false);
  const [ button , set_button ] = useState('Register');
  const [ err_message , set_err_message ] = useState('');

  const navigate = useNavigate();

  const err_display = () =>
  {
    set_err_message('');
  };
  
  const submit_handler = async (e) =>
  {
    e.preventDefault();

    set_is_loading(true);
    set_button('Registering');

    try
    {
      const response = await Axios.post(
        '/admin_reg',
        JSON.stringify({
          username,
          seckey,
          password
        }),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true        
        }
      );

      if(response.status == 201) 
      {
        set_button('Registered');
        set_username('')
        set_seckey('')
        set_password('');
        setTimeout(() => {
          navigate('/admin_log');
        }, 1000);
      }
    }
    catch(err)
    {
      set_button('Failed');
      if(err.response?.status == 400) set_err_message('All fields are mandatory to fill');
      else if(err.response.status == 408) set_err_message('Username already taken');
      else if(err.response?.status == 409) set_err_message('Incorrect secret key');
      else if(err.response?.status == 403) set_err_message('Already an admin exist with this secret key');
      else set_err_message('Server/Network error');
    }    
    finally
    {
      set_is_loading(false);
      setTimeout(() =>
      {
        set_button('Register');
      }, 3000);
    }
  };

  return (
    <section className='admin_reg_section'>
      <p className='admin_reg_section_err'>{err_message}</p>
      <form className='admin_reg_section_form' onSubmit={submit_handler}>        
        <div className='admin_reg_section_form_username'>
          <label
            htmlFor='username_input'
            className='admin_reg_section_form_username_label'
          >
            Username:
          </label>
          <input 
            type='text'
            id='username_input'
            required
            className='admin_reg_section_form_username_input'
            value={username}
            onChange={e => set_username(e.target.value)}
            onFocus={err_display}
          />
        </div>        
        <div className='admin_reg_section_form_seckey'>
          <label
            htmlFor='seckey_input'
            className='admin_reg_section_form_seckey_label'
          >
            Secret Key:
          </label>
          <input 
            type='password'
            id='seckey_input'
            required
            className='admin_reg_section_form_seckey_input'
            value={seckey}
            onChange={e => set_seckey(e.target.value)}
            onFocus={err_display}
          />
        </div>        
        <div className='admin_reg_section_form_password'>
          <label
            htmlFor='password_input'
            className='admin_reg_section_form_password_label'
          >
            Password:
          </label>
          <input 
            type='password'
            id='password_input'
            required
            className='admin_reg_section_form_password_input'
            value={password}
            onChange={e => set_password(e.target.value)}
            onFocus={err_display}
          />
        </div>     
        <button
          type='submit'
          className='admin_reg_section_form_button'
          style={{
            cursor: is_loading || button != 'Register' ? 'not-allowed' : 'pointer',
            pointerEvents: is_loading || button != 'Register' ? 'none' : 'auto',
            backgroundColor: button == 'Register' || button == 'Registering' ? '#ffeb13' : button == 'Registered' ? 'green' : 'red',
            color: button == 'Registered' || button == 'Failed' ? 'white' : 'black'
          }}
        >
          {button}
        </button>   
      </form>
    </section>
  )
}

export default Admin_reg