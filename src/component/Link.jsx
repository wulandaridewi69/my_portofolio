import React from 'react'
import { useNavigate } from 'react-router-dom';

import CallIcon from '@mui/icons-material/Call';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Link = () => {

  const navigate = useNavigate()

  return (
    <div className=' container'>
      <div className='row bg-gradient-to-r flex from-cyan-500 to-cyan-700 rounded text-white opacity-75 pt-2 pb-2'>
        <div className='col-md-3 pr-4' alt='' onClick={() => navigate('/')}><HomeIcon/></div>
        <div className='col-md-3 pr-4' alt='' onClick={() => navigate('/about')}><PersonIcon /></div>
        <div className='col-md-3 pr-4' alt='' onClick={() => navigate('/portfolio')}><FormatListBulletedIcon/></div>
        <div className='col-md-3 pr-4' alt='' onClick={() => navigate('/contact')}><CallIcon /></div>
      </div>
    </div>
  )

}

export default Link;
