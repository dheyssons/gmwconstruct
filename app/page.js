'use client'

import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

import { PhoneIcon } from '@heroicons/react/20/solid'
import { ImMail4, ImWhatsapp } from 'react-icons/im';

import emailJS from '@emailjs/browser'

import { useState } from 'react';

import { motion } from 'framer-motion';
import { transition1 } from '@/public/transitions/transition1';
import { upward } from '@/public/variants/upward';
import { item } from '@/public/variants/item';
import { transition1_s } from '@/public/transitions/transition1_s';
import OurServices from '@/components/OurServices';



export default function Home() {

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
    <section className="section flex flex-col gap-y-10 lg:gap-y-20">
      <div className="banner flex flex-col w-full h-screen items-start relative">
        {/* title */}
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="mt-44 lg:mt-52 mx-12 lg:mx-0 flex flex-col gap-y-20 lg:flex-row w-full justify-around">
          <div className='flex flex-col lg:gap-y-2 mr-40'>
            {/* TITLE */}
              <motion.h1 variants={item} className="h1 drop-shadow-2xl text-white lg:text-[#ffffff] !leading-10 pb-2">GMW Construct</motion.h1>
              <motion.p variants={item} className="text-[1.3rem] drop-shadow-2xl text-[#ffffffed] lg:text-[#ffffff] leading-6">Bâtir la confiance, un toit à la fois.</motion.p>
          </div>
          <div className='flex flex-col gap-y-2'>
           <motion.h3 className='h4 !text-white uppercase [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]' variants={item}>Obtenir Un <br/> Devis Gratuit</motion.h3>
            <a className="btn max-w-max" href="#contactus">CONTACTEZ-NOUS</a>
          </div>
        </motion.div>
      </div>

      <div className='flex flex-col gap-y-10 lg:gap-y-20 py-4 lg:py-8'>
        {/* ABOUT US */}
        <div className='container mx-auto flex flex-col items-center gap-y-1'>
          <div className='flex flex-row items-center gap-10 lg:gap-y-20'>
            {/* image */}
            <img alt='' className='max-w-[36rem] rounded-lg hidden md:flex' src='images/fixroof.jpg'></img>
            {/* texts */}
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <div className='overflow-hidden'>
                  <motion.h3 
                  variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1}  
                  className='h3'>À propos de nous</motion.h3>
                </div>
                <p className='p md:large w-[18rem] md:w-[20rem] lg:w-[32rem]'>GMW Construct, votre partenaire de confiance en solutions de toiture. Forts de plusieurs années d'expérience dans l'industrie, nous nous spécialisons dans la fourniture de services de toiture de haute qualité, conçus pour protéger votre propriété et en améliorer la valeur. Des projets résidentiels aux projets commerciaux, nous offrons un savoir-faire et un professionnalisme dans chaque travail que nous entreprenons.</p>
              </div>
              {/* <div className='flex flex-col items-center gap-y-2'>
                <p className='p text-[1rem] w-[32rem]'>At GMW Construct SRL, our mission is to build durable and reliable roofs while establishing long-lasting relationships with our clients. We believe in combining cutting-edge technology with superior materials to ensure that every roof we construct stands the test of time. Your satisfaction is our top priority.</p>
              </div> */}
            </div>
          </div>
        </div>
        {/* DETAILS */}
        <div className="container mx-auto flex flex-col items-center gap-y-8">

          <div className='flex flex-col items-center gap-y-16'>

            <div className='flex flex-col items-center'>
              <h3 className="h3 text-center max-w-[25rem] md:max-w-max">Nous réparons et remplaçons tous types de toitures.</h3>  
              <h5 className="h5 text-center max-w-[20rem] md:max-w-max">Faites confiance à nos couvreurs professionnels.</h5>
            </div>

            <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className='wrapper-card mb-20'>
              <motion.div variants={item} className="card">
                <img alt='' className="card-image" src="images/residentialroofs.webp"></img>
                <h5 className="card-text h5">Toitures résidentielles</h5>
                <p className='card-text p'>Si le toit de votre maison a besoin de réparations, contactez-nous. Nos couvreurs peuvent réparer n'importe quel toit — et nous offrons des vérifications de toit gratuites. Contactez-nous pour planifier votre vérification dès aujourd'hui.</p>
              </motion.div>
              <motion.div variants={item} className="card">
                <img alt='' className="card-image" src="images/commercialroofs.jpg"></img>
                <h5 className="card-text h5">Toitures commerciales</h5>
                <p className='card-text p'>Peu importe le type d'entreprise ou de bâtiment que vous avez, faites confiance à notre équipe pour prendre soin de votre toit. Depuis des décennies, nous aidons nos clients commerciaux avec leurs projets de réparation et de remplacement de toitures.</p>
              </motion.div> 
              {/* <div className="card">
                <img className="card-image" src="images/epdm.webp"></img>
                <h5 className="card-text h5">Application de EPDM Resitrix</h5>
                <p className='card-text p'>Le Resitrix peut être utilisé aussi bien pour les nouvelles constructions que pour les rénovations. Il est également idéal pour les toitures végétales, les toitures de rétention ou les toitures avec panneaux solaires.</p>
              </div>  */}
            </motion.div>
          </div>

        </div>

        {/* OUR SERVICES */}
        <OurServices />

        {/* CONTACT US */}
        <div id='contactus' className='container mx-auto flex flex-col items-center gap-y-8'>
          <div className=''>
            <motion.h3 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h3'>Contact</motion.h3>
          </div>

          <div className='flex flex-row gap-x-12 w-full justify-evenly'>
          {/* FORM */}
            <motion.form variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} onSubmit={handleSubmit} className="w-80 lg:w-full lg:max-w-md flex flex-col items-center">
              <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                  <input type="text" onBlur={(e) => handleChange(e)} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                  <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre nom</label>
              </motion.div>
              <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                  <input type="email" onBlur={(e) => handleChange(e)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                  <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre e-mail</label>
              </motion.div>
              <motion.div variants={item} className="relative z-0 w-full mb-5 group">
                  <input type="text" onBlur={(e) => handleChange(e)} name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                  <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Objet</label>
              </motion.div>
              <motion.div variants={item} className="grid md:gap-6 w-full">
                <div className="relative z-0 w-full mb-5 group">
                    <textarea type="message" onBlur={(e) => handleChange(e)} rows="8" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required></textarea>
                    <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre message (facultatif)</label>
                </div>
              </motion.div>
              <button type="submit" className="btn">Envoyer</button>
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

          <div className='line'></div>

        </div>
      </div>
    </section>
  )
}
