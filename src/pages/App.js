import React from 'react';
import Photo from '../assets/wanda.jpg'
import Layout from '../component/Layout';
import Loading from '../component/Loading';

const App = () => {
  return (
    <Layout>
            {/* <Loading
                control={false}
            /> */}
            <div className='container'>
                <div className='row mb-14 mt-14'>
                    <div className='col-md-6 col-sm-12'>
                        <img className='w-4/5 rounded shadow-2xl border-x-2 pb-3.5 pl-6 pr-6 pt-3.5 h-auto' src={Photo} />
                    </div>
                    <div className='col-md-6 col-sm-12 pt-32 text-white text-center text-6xl font-bold'>
                        Hi, I'm Wanda.<br/>A Frontend Engineer
                    </div>
                </div>
            </div>
        </Layout>
  );
}

export default App;
