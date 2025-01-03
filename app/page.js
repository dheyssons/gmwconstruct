'use client'

import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

import emailJS from '@emailjs/browser'

import { useState } from 'react';

import { motion } from 'framer-motion';
import { transition1 } from '@/public/transitions/transition1';
import { upward } from '@/public/variants/upward';
import { righttoleft } from '@/public/variants/righttoleft';
import { lefttoright } from '@/public/variants/lefttoright';

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
        from_name: form["name"], message: form["message"],subject: form["subject"], email: form["email"]
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
      <div className="banner flex flex-col w-full h-screen items-end relative">
        {/* title */}
        <motion.div
        variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1}
        className="mt-44 lg:mt-54 mx-12 lg:mr-12 flex flex-col gap-y-6">
          <div className='flex flex-col lg:gap-y-2'>
            {/* TITLE */}
            <div className=''>
              <h1 className="h1 text-white lg:text-[#141414] !leading-10 pb-2">GMW Construct</h1>
            </div>
            <div className=''>
              <p className="text-[1.3rem] text-[#ffffffed] lg:text-[#000] leading-6">Bâtir la confiance, un toit à la fois.</p>
            </div>
          </div>
          <a className="btn max-w-max" href="#contactus">CONTACTEZ-NOUS</a>
        </motion.div>
      </div>

      <div className='flex flex-col gap-y-20 py-8'>
        {/* ABOUT US */}
        <div className='container mx-auto flex flex-col items-center gap-y-1'>
          <div className='flex flex-row items-center gap-20'>
            {/* image */}
            <motion.img variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='max-w-[36rem] rounded-lg hidden md:flex' src='images/fixroof.jpg'></motion.img>
            {/* texts */}
            <motion.div
            variants={righttoleft} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1}
            className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <h3 className='h3'>À propos de nous</h3>
                <p className='p md:large w-[18rem] md:w-[20rem] lg:w-[32rem]'>GMW Construct SRL, votre partenaire de confiance en solutions de toiture. Forts de plusieurs années d'expérience dans l'industrie, nous nous spécialisons dans la fourniture de services de toiture de haute qualité, conçus pour protéger votre propriété et en améliorer la valeur. Des projets résidentiels aux projets commerciaux, nous offrons un savoir-faire et un professionnalisme dans chaque travail que nous entreprenons.</p>
              </div>
              {/* <div className='flex flex-col items-center gap-y-2'>
                <p className='p text-[1rem] w-[32rem]'>At GMW Construct SRL, our mission is to build durable and reliable roofs while establishing long-lasting relationships with our clients. We believe in combining cutting-edge technology with superior materials to ensure that every roof we construct stands the test of time. Your satisfaction is our top priority.</p>
              </div> */}
            </motion.div>
          </div>
        </div>
        {/* DETAILS */}
        <div className="container mx-auto flex flex-col items-center gap-y-8">

          <div className='flex flex-col items-center gap-y-16'>

            <div className='flex flex-col items-center'>
              <h3 className="h3 text-center max-w-[25rem] md:max-w-max">Nous réparons et remplaçons tous types de toitures.</h3>  
              <h5 className="h5 text-center max-w-[20rem] md:max-w-max">Faites confiance à nos couvreurs professionnels.</h5>
            </div>

            <div className='wrapper-card mb-20'>
              <div className="card">
                <img className="card-image" src="images/residentialroofs.webp"></img>
                <h5 className="card-text h5">Toitures résidentielles</h5>
                <p className='card-text p'>Si le toit de votre maison a besoin de réparations, contactez-nous. Nos couvreurs peuvent réparer n'importe quel toit — et nous offrons des vérifications de toit gratuites. Contactez-nous pour planifier votre vérification dès aujourd'hui.</p>
              </div>
              <div className="card">
                <img className="card-image" src="images/commercialroofs.jpg"></img>
                <h5 className="card-text h5">Toitures commerciales</h5>
                <p className='card-text p'>Peu importe le type d'entreprise ou de bâtiment que vous avez, faites confiance à notre équipe pour prendre soin de votre toit. Depuis des décennies, nous aidons nos clients commerciaux avec leurs projets de réparation et de remplacement de toitures.</p>
              </div> 
              <div className="card">
                <img className="card-image" src="images/epdm.webp"></img>
                <h5 className="card-text h5">Application de EPDM Resitrix</h5>
                <p className='card-text p'>Le Resitrix peut être utilisé aussi bien pour les nouvelles constructions que pour les rénovations. Il est également idéal pour les toitures végétales, les toitures de rétention ou les toitures avec panneaux solaires.</p>
              </div> 
            </div>
          </div>

        </div>

        {/* OUR SERVICES
        <div className='container mx-auto flex flex-col items-center gap-y-8'>
          <h3 className='h3'>Nos </h3>
        </div> */}

        {/* CONTACT US */}
        <div id='contactus' className='container mx-auto flex flex-col items-center gap-y-10'>
          <h3 className='h3'>Contact</h3>

          <form onSubmit={handleSubmit} className="w-80 lg:w-full lg:max-w-lg mx-auto flex flex-col items-center">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" onBlur={(e) => handleChange(e)} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre nom</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" onBlur={(e) => handleChange(e)} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre e-mail</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" onBlur={(e) => handleChange(e)} name="subject" id="subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                <label htmlFor="subject" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Objet</label>
            </div>
            <div className="grid md:gap-6 w-full">
              <div className="relative z-0 w-full mb-5 group">
                  <textarea type="message" onBlur={(e) => handleChange(e)} rows="8" name="message" id="message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required></textarea>
                  <label htmlFor="message" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Votre message (facultatif)</label>
              </div>
            </div>
            <button type="submit" className="btn">Envoyer</button>
          </form>

          <div className='line'></div>

        </div>
      </div>
    </section>
  )
}
