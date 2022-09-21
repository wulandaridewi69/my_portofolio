import React from 'react';
import { useState } from 'react';
import Layout from '../component/Layout';
import Alterra from '../assets/alterra.png';
import Digitallent from '../assets/digitallent.png';
import Seebooks from '../assets/seebooks.png';
import MNRoom from '../assets/mnroom.png';
import Gomeet from '../assets/gomeet.png';
import Autoroom from '../assets/autoroom.png';
import Todo from '../assets/to-do-list.png';
import Card from '../component/Cards'
import Summer from '../assets/weather.jpg'
import Study from '../assets/study.jpg'

const Portfolio = () => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([
    {
      "id": 1,
      "image": MNRoom,
      "title": "Booking room",
    },
    {
      "id": 2,
      "image": Gomeet,
      "title": "Event planning",
    },
    {
      "id": 3,
      "image": Seebooks,
      "title": "Book e-commerce",
    },
    {
      "id": 4,
      "image": Todo,
      "title": "Create activity list",
    }
  ]);

  const [data2, setData2] = useState([
    {
      "id": 1,
      "image": Autoroom,
      "title": "Showroom cars",
    }
  ]);

  const [soon, setSoon] = useState([
    {
      "id": 1,
      "image": Summer,
      "title": "Weather App",
    },
    {
      "id": 12,
      "image": Study,
      "title": "Bimbel buddies",
    }
  ]);

  return (
    <Layout>
      <h1 className='text-white font-bold text-center text-6xl pt-8'>PORTFOLIO</h1>

      <div className='font-bold text-orange-500 text-center mb-4 mt-8 text-4xl'>Alterra Academy</div>
      <div className='container'>
        <div className='row'>
          {data.map((item) => (
            <div className='col-md-3 col-sm-6 text-center'>
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <hr />

      <br />
      <div className='font-bold text-orange-500 text-center mb-4 mt-8 text-4xl col-sm-12'>Digital Talent Scholarship X Progate</div>
      <div className='container'>
        <div className='row'>
          {data2.map((item) => (
            <div className='col-md-3 col-sm-6 text-center'>
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
      <br />
      <hr />

      <br />
      <div className='font-bold text-center mb-4 mt-8 text-4xl text-orange-500'>Soon</div>
      <div className='container'>
        <div className='row'>
          {soon.map((item) => (
            <div className='col-md-3 col-sm-6'>
              <Card
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )

}

export default Portfolio;