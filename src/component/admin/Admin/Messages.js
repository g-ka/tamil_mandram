import React, { useEffect, useState } from 'react';
import Axios from '../../../api/Axios';

const Messages = () => {

  const [ messages , set_messages ] = useState([]);
  const [ is_loading , set_is_loading ] = useState(true);
  const [ err_msg , set_err_msg ] = useState('');
  const [ del_err_msg , set_del_err_msg ] = useState('');  

  useEffect(() =>
  {  
    const fetch_messages = async () =>
    {
      try
      {
        const response = await Axios.get(
          '/contact_form',
          {
            headers: { "Content-Type": 'application/json' },
            withCredentials: true
          }
        );

        if(response.status == 200)
        {
          const { message_list } = response.data;          
          set_messages(message_list);
        }        
      }
      catch(err)
      {
        if(err.response?.status == 401) set_err_msg('Unauthorized');
        else set_err_msg(err.message);
      }
      finally
      {
        set_is_loading(false);
      }
    };

    fetch_messages();
  }, []);

  const delete_message = async (id) =>
  {
    try
    {
      const response = await Axios.delete(`/contact_form/${id}`);

      if(response.status == 204)
      {
        const updated_message_list = messages.filter(message => message.id != id);
        set_messages(updated_message_list);
      }
    }
    catch(err)
    {
      if(err.response?.status == 422) set_del_err_msg('Deletion message not specified');
      else if(err.response?.status == 500) set_del_err_msg('Server/Network error');
      else set_del_err_msg(err.message);
    }
  };

  return (
    <section className='messages_section'>
      {
        is_loading ?
          <p className='messages_section_loading'>Loading...</p> :
            messages.length || err_msg || del_err_msg ? 
              <>
                <p className='messages_section_fetch_error'>{err_msg}</p>
                <p className='messages_section_delete_error'>{del_err_msg}</p>
                <ul className='messages_section_list'>
                  {
                    messages.map((message, index) =>
                    {
                      return(
                        <li className={`messages_section_list_${index} list`}>
                          <div className={`messages_section_list_${index}_box box`}>
                            <p>name: {message.name}</p>
                            <p>email: {message.email}</p>
                            <p>subject: {message.subject}</p>
                            <p>message: {message.message}</p>
                            <p>{message.time}</p>
                            <button onClick={() => delete_message(message.id)}>Delete</button>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </> :
                <p className='messages_section_none'>No new messages</p>
      }
      
    </section>
  )
}

export default Messages