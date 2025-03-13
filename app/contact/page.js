"use client"

import emailJS from '@emailjs/browser'
import { useState } from 'react';

import { motion } from 'framer-motion';
import { upward } from '@/public/variants/upward';
import { transition1 } from '@/public/transitions/transition1';
import { transition1_s } from '@/public/transitions/transition1_s';
import { item } from '@/public/variants/item';

import { MdOutlineMail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    
      const [validEmail, setValidEmail] = useState(false);
      const [emptyValue, setEmptyValue] = useState(false);
    
      const { SERVICEID = '', TEMPLATEID = '', PUBLICKEY = '' } = process.env;
    
      const handleChange = (e) => {
        let newProp = form;
        setValidEmail(true);
        newProp[e.target.name] = e.target.value;
        setForm({ ...newProp });
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        let emptyValues = Object.values(form).some(obj => obj == "");
        setEmptyValue(emptyValues);
    
        let validEmail = form["email"].toLocaleLowerCase().match(/[a-z]+@[a-z]+\.com(\.br)*/)
        setValidEmail(validEmail);
    
        const templateParams = {
            from_name: form["name"], message: form["message"], subject: form["subject"], email: form["email"]
        }
    
        document.querySelectorAll('input').forEach(element => element.value = "")
        if (!emptyValues && validEmail) {
          emailJS.send("service_ys5fnbq", "template_3she3x8", templateParams, "TZPoFP8sOe4vVKffU")
          .then((res) => {
            alert("email enviado", res.status, res.text)
          })
        }
      }

    return (
        <div id='contactus' className='container mx-auto flex flex-col items-center gap-y-8 overflow-hidden'>
          <div className='flex flex-col lg:flex-row gap-x-8 gap-y-8 mt-40'>
            {/* FORMULAIRE */}
            <div className='flex flex-col gap-y-14'>
              <div className=''>
                <motion.h1 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h3 text-center !text-[#c12c2c]'>Contactez-nous </motion.h1>
                <h3 className='h3 text-center'>sans engagement</h3>
              </div>

              <div className='flex flex-row gap-x-12 w-full justify-evenly'>
              {/* FORM */}
                <motion.form variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} onSubmit={handleSubmit} className="w-80 lg:w-full lg:max-w-md flex flex-col items-center">
                  <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                      <input type="text" onBlur={(e) => handleChange(e)} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre nom</label>
                  </motion.div>
                  <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                      <input type="email" onBlur={(e) => handleChange(e)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre e-mail</label>
                  </motion.div>
                  <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                      <input type="text" onBlur={(e) => handleChange(e)} name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                      <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Objet</label>
                  </motion.div>
                  <motion.div variants={item} className="grid md:gap-6 w-full">
                    <div className="relative z-0 w-full mb-5 group">
                        <textarea type="message" onBlur={(e) => handleChange(e)} rows="8" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required></textarea>
                        <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre message (facultatif)</label>
                    </div>
                  </motion.div>
                  <button type="submit" className="btn self-start">Envoyer</button>
                </motion.form>

                  {/* ADDITIONAL INFO
                <div className='bg-[#101010] py-8 px-10 rounded-lg flex flex-col gap-y-12'>
                    <h5 className='h5 !text-white'>Contact us and get a free estimate</h5>

                    <div className='flex flex-col gap-y-4'>
                      <div className='flex flex-row gap-x-1'>
                        <PhoneIcon className='size-5 text-white'/>
                        <p className='p small text-white !opacity-100'> 471 55 55 40</p>
                      </div>

                      <div className='flex flex-row gap-x-1'>
                        <ImWhatsapp className='size-5 text-white'></ImWhatsapp>
                        <p className='p small text-white !opacity-100'>471 55 55 40</p>
                      </div>

                      <div className='flex flex-row gap-x-1'>
                        <ImMail4 className='size-5 text-white'></ImMail4>
                        <p className='p small text-white !opacity-100'>gmwconstruct@outlook.com</p>
                      </div>
                    </div>
                </div> */}
              </div>
            </div>

            {/* OTHER INFOS */}
            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className="text-white flex flex-col gap-y-16 p-12 lg:p-20 bg-[#151515] lg:rounded-lg">
              <div className="flex flex-col justify-center gap-y-2">
                  <div className='flex flex-row overflow-hidden'>
                      <h2 className="h2 !text-white">Contact</h2>
                  </div>
                  <p className="p !text-white">Nous sommes là pour vous aider avec toutes vos questions ou tout support dont vous pourriez avoir besoin.</p>
              </div>
              <div className="flex flex-col justify-center gap-y-3">
                  <a target="_blank" href="mailto:bresap@gmail.com" className="h6 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50 "><MdOutlineMail /> bresap.srv@gmail.com</a>  
                  <a target="_blank" href="https://api.whatsapp.com/send?phone=32465580914" className="h6 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"><ImWhatsapp />465 58 09 14</a>  
                  <a target="_blank" href="https://maps.app.goo.gl/QohHCBALJ6q53rNv9" title="address" className="h6 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"><FaMapMarkerAlt /> Blvd Auguste Reyers 45, 1030 Schaerbeek</a>  
              </div> 
              </motion.div> 
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.933107224172!2d4.34559307642177!3d50.741063071649144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3cfa17e16d523%3A0x20abd56e040c7520!2sLindestraat%2042%2C%201640%20Sint-Genesius-Rode!5e1!3m2!1spt-BR!2sbe!4v1739471610177!5m2!1spt-BR!2sbe" width="1440" height="600" className="border-0 mt-20" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          <div className='line'></div>
        </div>
    )
}