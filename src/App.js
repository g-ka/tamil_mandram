import { useEffect } from 'react';
import { Routes , Route , useNavigate } from 'react-router-dom';
import Axios from './api/Axios';
import useData from './hooks/useData';
import Layout from './Layout';
import Auth_layout from './Auth_layout';
import Home from './component/home/Home';
import Announcement from './component/announcement/Announcement';
import Edits from './component/admin/Admin/Edits';
import Messages from './component/admin/Admin/Messages';
import Visits from './component/admin/Admin/Visits';
import Admin_reg from './component/admin/Admin_reg';
import Admin_log from './component/admin/Admin_log';

function App() {  

  const { set_auth } = useData();

  const navigate = useNavigate();

  useEffect(() =>
  { 
    const visit_register = async () =>
    {
      try
      {
        const response = await Axios.get(
          '/visit_count',
          {
            withCredentials: true
          }
        );

        if(response.status == 202)
        {
          const { username } = response.data;
          set_auth({ username });
          navigate('/admin/');
        } 
      }
      catch(err)
      {
        console.log(err.message);
      }
    };

    visit_register();
  }, []);

  return (
      <Routes>
        <Route path='/' element={<Layout />}>

          {/* Public Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/announcement' element={<Announcement />} />
          <Route path='/admin_reg' element={<Admin_reg />}/>
          <Route path='/admin_log' element={<Admin_log />}/>

          {/* Protected Routes */}
          <Route path='/admin' element={<Auth_layout />}>
            <Route path='/admin/' element={<Edits />} />
            <Route path='/admin/messages' element={<Messages />} />
            <Route path='/admin/visits' element={<Visits />} />            
          </Route>          
          
        </Route>
      </Routes>
  );
}

export default App;