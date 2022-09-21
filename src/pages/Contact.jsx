import React from 'react'
import Email from '../assets/mail.png'
import Input from '../component/input'
import Ig from '../assets/instagram.png'
import Layout from '../component/Layout';
import Button from '../component/Button';
import Linke from '../assets/linkedin.png'
import Git from '../assets/github-icon.png'
import Handphone from '../assets/handphone.png'
import Graduate from '../assets/graduate-cap.png'
import { useContext, useState, useEffect } from "react";
import Point from '../assets/placeholder-filled-point.png'
import Footer from '../component/Footer';


const Contact = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [project, setProject] = useState("");
    const [objUpdate, setObjUpdate] = useState('');

    const handleChange = (value, key) => {
        let temp = { ...objUpdate };
        temp[key] = value;
      };
 
      const handleName = (e) => {
        const inputName = e.target.value;
        setName(inputName);
      };
    
      const handleEmail = (e) => {
        const inputEmail = e.target.value;
        setEmail(inputEmail);
      };

      const handleProject = (e) => {
        const inputProject = e.target.value;
        setProject(inputProject);
      };

    return (
        <Layout>
            <h1 className='text-white font-bold ml-80 pl-2 text-6xl pt-24 pb-10'>CONTACT ME</h1>
            <div className='container pl-80 opacity-50'>
                <div className='row'>
                    <div className='col-md-12 col-sm-10 gap-7 flex'>
                        <a className='border rounded-full pb-2 pt-3 pl-4 pr-4 bg-white' href='https://dewi.wulandari.ruslan@gmail.com'><img src={Email} /></a>
                        <a className='border rounded-full pb-2 pt-3 pl-4 pr-4 bg-white' href='https://wa.me/6282334426054'><img src={Handphone} /></a>
                        <a className='border rounded-full pb-2 pt-3 pl-4 pr-4 bg-white' href='https://www.linkedin.com/in/dewi-wulandari-970590136/'><img src={Linke} /></a>
                        <a className='border rounded-full pb-2 pt-3 pl-4 pr-4 bg-white' href='https://instagram.com/wanda_1437'><img src={Ig} /></a>
                        <a className='border rounded-full pb-3 pt-3 pl-4 pr-4 bg-white' href='https://github.com/wulandaridewi69'><img src={Git} /></a>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div>
                    <p className='text-white pt-10 pb-9 font-bold text-3xl'>Write me your project</p>
                    <div className='bg-white pb-4 pt-4 pl-5 pr-5 rounded opacity-50 mr-48'>
                        <Input
                            className="text-white form w-full input border-slate-400 pt-2 pb-2 "
                              onChange={(e) => {
                                handleName(e)
                                handleChange(e.target.value, "name")
                              }}
                            label="Name"
                            value={name}
                        //   onKeyDown={(e) => callUpdate(e)}
                        />
                        <Input
                            className="text-white border-white form w-full input pt-2 pb-2"
                              onChange={(e) => {
                                handleEmail(e)
                                handleChange(e.target.value, "email")
                              }}
                            label="Email"
                            value={email}
                        //   onKeyDown={(e) => callUpdate(e)}
                        />
                        <Input
                            className="text-white form w-full input pt-2 pb-2"
                              onChange={(e) => {
                                handleProject(e)
                                handleChange(e.target.value, "project")
                              }}
                            label="Write your project"
                            value={project}
                        //   onKeyDown={(e) => callUpdate(e)}
                        />
                    </div>
                    <div className='mt-12 mb-12 '>
                        <a href='mailto:dewi.wulandari.ruslan@gmail.com'>
                        <Button
                            className="bg-rose-700 hover:bg-rose-400 font-bold py-2 px-4 rounded text-white"
                            label="Send Message"
                        />
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact;

