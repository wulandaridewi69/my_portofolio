import React from 'react';
import { useState } from 'react';
import Card from '../component/Cards';
import Layout from '../component/Layout';
import Rating from '../component/Rating';
import Brawijaya from '../assets/ub.png';
import Alterra from '../assets/alterra.png';
import Digitallent from '../assets/digitallent.png';
import Myskill from '../assets/myskill.png'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/js.png'
import Next from '../assets/nextjs-icon.png'
import Reacts from '../assets/react.png'
import Git from '../assets/github.png'
import Restful from '../assets/api.png'
import Figma from '../assets/figma.png'
import Tailwind from '../assets/tailwind.png'
import MUI from '../assets/mui.png'
import Surge from '../assets/surge.png'
import Vercel from '../assets/vercel.png'
import Markdown from '../assets/md.png'
import Bootstrap from '../assets/boostrap.png'
import NPM from '../assets/npm.png'
import Redux from '../assets/redux.png'
import SQL from '../assets/sql.png'
import Adobe from '../assets/adobe.png'
import Postman from '../assets/postman.png'
import Trello from '../assets/trello.png'
import Travel from '../assets/travel.jpg'
import Sport from '../assets/sport.jpg'
import Listen from '../assets/music.jpg'


const About = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([
        {
            "id": 1,
            "image": Myskill,
            "title": "MySkill (September 2022) - present",
        },
        {
            "id": 2,
            "image": Alterra,
            "title": "Alterra Academy (Mei - July 2022)",
        },
        {
            "id": 3,
            "image": Digitallent,
            "title": "Digital Talent Scholarship (2020)",
        },
        {
            "id": 4,
            "image": Brawijaya,
            "title": "Brawijaya University (2017 – 2020)",
        }
    ]);

    const [tech, setTech] = useState([
        {
            "id": 1,
            "image": HTML,
            "title": "HTML",
        },
        {
            "id": 2,
            "image": CSS,
            "title": "CSS",
        },
        {
            "id": 3,
            "image": Javascript,
            "title": "Javascript",
        },
        {
            "id": 4,
            "image": Next,
            "title": "Next.js",
        },
        {
            "id": 5,
            "image": Reacts,
            "title": "React.js",
        },
        {
            "id": 6,
            "image": Git,
            "title": "GitHub",
        },
        {
            "id": 7,
            "image": Restful,
            "title": "RESTful API",
        },
        {
            "id": 8,
            "image": Figma,
            "title": "Figma",
        },
        {
            "id": 9,
            "image": Tailwind,
            "title": "TailwindCSS",
        },
        {
            "id": 10,
            "image": MUI,
            "title": "Material UI",
        },
        {
            "id": 11,
            "image": Surge,
            "title": "Surge",
        },
        {
            "id": 12,
            "image": Vercel,
            "title": "Vercel",
        },
        {
            "id": 13,
            "image": Markdown,
            "title": "Markdown",
        },
        {
            "id": 14,
            "image": Bootstrap,
            "title": "Boostrap",
        },
        {
            "id": 15,
            "image": NPM,
            "title": "NPM",
        },
        {
            "id": 16,
            "image": Redux,
            "title": "Redux",
        }, 
        {
            "id": 17,
            "image": SQL,
            "title": "mySQL",
        },
        {
            "id": 18,
            "image": Adobe,
            "title": "Adobe Photoshop",
        },
        {
            "id": 19,
            "image": Postman,
            "title": "Postman API",
        },
        {
            "id": 20,
            "image": Trello,
            "title": "Trello",
        }
    ]);

    return (
        <Layout>
            <>
                <h1 className='text-white font-bold text-center text-6xl pt-8'>ABOUT ME</h1>

                <div className='font-bold text-center mb-4 mt-8 text-4xl text-orange-500'>About</div>
                <div className='container text-white text-center'>
                    <p>I joined Alterra Academy in Mei 2022 and graduated in July 2022.
                        I’ve specialized in Frontend using React.js, Next.js, Figma, and other stack related.
                        I learn many things since 2020 by joining the Digitalent program, then joining Alterra afterward.
                        I’ve created some projects such as MN Room App, Go Meet App, Seebooks App, and others.
                        I always keep learning to develop my skill. Hopefully, I can join this company as a Frontend Engineer in the future.
                    </p>
                </div>
                <br />
                <hr />

                <div className='font-bold text-center mb-4 mt-8 text-4xl text-orange-500'>Tech Stack</div>
                <div className='container'>
                    <div className='row'>
                        {tech.map((item) => (
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
                        {/* <div>
                            <Rating
                                name={'Microsoft Office'}
                                value={4}
                            />
                        </div> */}
                    </div>
                <br />
            <hr />
            <div className='font-bold text-center mb-4 mt-8 text-4xl text-orange-500'>Education</div>
            <div className='container'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-3 col-sm-6 text-center '>
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
            <div className='font-bold text-center mb-4 mt-8 text-4xl text-orange-500'>Hobbies</div>
            <div className='container mb-5'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 hover:shadow-gray-400 over:-mt-1 drop-shadow-xl hover:shadow-md'>
                        <h1 className='absolute ml-24 font-bold mt-20 text-3xl text-white'>Traveling</h1>
                        <img className='opacity-50' src={Travel}/>
                        </div> 
                    <div className='col-md-4 col-sm-12 gap-x-4 hover:shadow-gray-400 over:-mt-1 drop-shadow-xl hover:shadow-md'>
                        <h1 className='absolute mb-4 ml-24 font-bold mt-20 text-3xl text-white'>Basketball</h1>
                        <img className='opacity-50' src={Sport}/>
                        </div> 
                    <div className='col-md-4 col-sm-12 hover:shadow-gray-400 over:-mt-1 drop-shadow-xl hover:shadow-md'>
                        <h1 className='absolute mb-4 ml-24 font-bold mt-20 text-3xl text-white'>Listen Music</h1>
                        <img className='opacity-50' src={Listen}/>
                        </div>
                </div>
            </div>
        </>
        </Layout >
    )
}

export default About;
