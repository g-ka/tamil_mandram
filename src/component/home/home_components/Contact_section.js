import React, { useState } from 'react';
import Axios from '../../../api/Axios';
import contact from '../../../images/home/contact_section/contact.png';

const Contact_section = () => {

  const [ name , set_name ] = useState('');
  const [ email , set_email ] = useState('');
  const [ subject , set_subject ] = useState('');
  const [ message , set_message ] = useState('');

  const [ is_loading , set_is_loading ] = useState(false);
  const [ button , set_button ] = useState('Send');

  const submit_form = async (e) =>
  {
    e.preventDefault();

    set_is_loading(true);
    set_button('Sending');

    if(!subject || !message)
    {
      console.log('Subject and Message fileds are mandatory to fill');
      return
    } 

    try
    {
      const response = await Axios.post(
        '/contact_form',
        JSON.stringify({
          name,
          email,
          subject,
          message
        }),
        {
          headers: { "Content-Type": 'application/json' },
          withCredentials: true
        }
      );

      if(response.status == 201)
      {
        set_button('Sent');
        set_name('');
        set_email('');
        set_subject('');
        set_message('');
      } 
    }
    catch(err)
    {
      set_button('Failed');
    }
    finally
    {
      set_is_loading(false);
      setTimeout(() =>
      {
        set_button('Send');
      }, 3000);
    }
  };

  return (
    <section className="contact_section">
      <form className="contact_section_card" onSubmit={submit_form}>
        <div className="contact_section_card_desc">
          <h3>
            Drop Us a Line
          </h3>
          <input 
            type="text" 
            className="common" 
            placeholder="Name (Opt)"
            value={name}
            onChange={e => set_name(e.target.value)}
          />
          <input
           type="email"
           className="common" 
           placeholder="E-mail (opt)" 
           value={email}
           onChange={e => set_email(e.target.value)}
          />
          <input 
            type="text" 
            className="common" 
            placeholder="Subject (Req)" 
            required 
            value={subject}
            onChange={e => set_subject(e.target.value)}
          />
          <textarea 
            className="message" 
            placeholder="Message (Req)" 
            rows="8" 
            required 
            value={message}
            onChange={e => set_message(e.target.value)}
          />
        </div>
        <div className="contact_section_card_img">
          <img src={contact} />
          <button 
            type='submit' 
            style={{
              cursor: is_loading || button != 'Send' ? 'not-allowed' : 'pointer',
              pointerEvents: is_loading || button != 'Send' ? 'none' : 'auto',
              backgroundColor: button == 'Send' || button == 'Sending' ? '#ffeb13' : button == 'Sent' ? 'green' : 'red',
              color: button == 'Sent' || button == 'Failed' ? 'white' : 'black'
            }}
          >              
            <p className='top'>{button}</p>
            <p className='bottom'>{button}</p>               
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact_section