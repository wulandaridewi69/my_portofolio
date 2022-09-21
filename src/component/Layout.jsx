import React, { component } from 'react';
import Link from './Link';

const Layout = (props) => {

  return (
    <div className='bg-slate-900'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {props.children}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 ml-96 -mr-64  relative'><Link /></div>
        </div>
      </div>
    </div>
  )

}
export default Layout;
