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
import { lefttoright } from '@/public/variants/lefttoright';
import { FaRegCheckCircle } from "react-icons/fa";


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
        <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className="mt-44 lg:mt-52 mx-12 lg:mx-0 flex flex-col">
          <div className='flex flex-col gap-y-20 lg:gap-y-20 lg:ml-20'>
              {/* TITLE */}
              <div>
                <motion.h1 variants={item} className="h1 drop-shadow-2xl text-white lg:text-[#ffffff] !leading-10 pb-2">GMW Construct</motion.h1>
                <motion.p variants={item} className="text-[1.3rem] drop-shadow-2xl text-[#ffffffed] lg:text-[#ffffff] leading-6">Bâtir la confiance, un toit à la fois.</motion.p>
              </div>
              {/* CALL TO ACTION  */}
              <div className='flex flex-col gap-y-2'>
                <h4 className='h4 !text-white uppercase'>devis gratuit</h4>
                <a className="btn max-w-max" href="#contactus">CONTACTEZ-NOUS</a>
              </div>
          </div>
        </motion.div>
      </div>

      <div className='flex flex-col gap-y-10 lg:gap-y-32 py-4 lg:py-8'>
        {/* ABOUT US */}
        <div className='container mx-auto flex flex-col items-center gap-y-1'>
          <div className='flex flex-row items-center gap-10 lg:gap-y-20'>
            {/* texts */}
            <div className='flex flex-col gap-y-16 items-center'>
              <div className='flex flex-col gap-y-8 items-center '>
                <div className='flex flex-col gap-y-2 items-center lg:items-start'>
                  <div>
                    <motion.h3
                    variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1}  
                    className='h3'>À propos de nous</motion.h3>
                  </div>
                  <h6 className='h6 text-center'>"Protection, qualité et valorisation pour votre propriété!</h6>
                </div>
                <p className='p md:large w-[20rem] md:w-[20rem] lg:w-[32rem]'>
                Chez GMW Construct, nous offrons des solutions de toiture alliant efficacité et durabilité. Forts de plusieurs années d'expérience, nous garantissons la protection de votre maison ou de votre entreprise tout en augmentant sa valeur. Que ce soit pour un projet résidentiel ou commercial, vous pouvez compter sur notre expertise et notre engagement à chaque étape. Contactez-nous dès aujourd’hui pour trouver la solution idéale pour votre projet !"</p>
              </div>
              <a className="btn max-w-max lg:self-start" href="/contact">OBTENIR UN DEVIS GRATUIT</a>
            </div>
            {/* image */}
            <img alt='' className='max-w-[36rem] rounded-lg hidden md:flex' src='images/fixroof.jpg'></img>
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
        <div id='services' className='container mx-auto flex flex-col items-center gap-y-8 lg:gap-y-20'>
                <div className='overflow-hidden max-w-max'>
                  <motion.h2 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1'>Nos services</motion.h2>
                </div>
        
                <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" transition={transition1_s} className='wrapper-services'>
        
                  {/* bardage */}
                  <motion.div variants={upward} className='card-services'>
                      <img className='image-services' alt='bardage' src="images/services/bardage.webp"></img>
                      {/* text */}
                      <div className='flex flex-col gap-y-8 justify-around'>
                        {/* title */}
                          <div>  
                            <div className='overflow-hidden max-w-max'>
                                <h4 className='h4'>Bardage</h4>
                            </div>
                            <p className='p small'>Le bardage est la solution idéale pour ceux qui cherchent à allier protection et esthétique lors de la construction ou de la rénovation de leur bâtiment. Ce revêtement extérieur protège les murs contre les intempéries telles que la pluie, le vent et la neige, tout en ajoutant une touche d’élégance au design de la façade.</p>
                          </div>
                          {/* benefits */}
                          <div className='wrapper-benefits'>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Durabilité: Des matériaux de haute qualité tels que le bois, l'aluminium, le vinyle ou le fibrociment assurent une résistance et une longue durée de vie.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Isolation thermique et acoustique : Améliorez l'efficacité énergétique de votre logement et réduisez les bruits extérieurs.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Personnalisation : Disponible dans une large gamme de styles, de couleurs et de finitions, le bardage s'adapte à tous les types de constructions.</p>
                            </li>
                          </div>
                      </div>
                  </motion.div>
        
                  {/* Charpente */}
                  <motion.div variants={upward} className='card-services'>
                    <img className='image-services' alt='charpenter' src='images/services/charpenter.webp'></img>
                    {/* text */}
                    <div className='flex flex-col gap-y-8 justify-around'>
                      {/* title */}
                      <div>
                        <div className='overflow-hidden max-w-max'>
                          <h4 className='h4'>Charpente</h4>
                        </div>  
                        <p className='p small'>La charpente est l'élément clé qui garantit la solidité et la stabilité de votre toiture. Conçue pour supporter le poids du toit et résister aux intempéries, elle joue un rôle essentiel dans la construction ou la rénovation de tout type de bâtiment.</p>
                      </div>
                      {/* benefits */}
                      <div className='wrapper-benefits'>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Soutenir le toit : Elle assure la stabilité et la répartition uniforme des charges, comme la neige, le vent ou la pluie.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Protéger le bâtiment : En garantissant un appui solide pour la couverture, elle préserve l’intégrité de la construction face aux éléments extérieurs.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Apporter une base esthétique : Les charpentes apparentes ajoutent souvent du caractère et une touche authentique aux espaces intérieurs.</p>
                            </li>
                      </div>
                    </div>
                  </motion.div>
        
                  {/* Couverture */}
                  <motion.div variants={upward} className='card-services'>
                    <img className='image-services' alt='couverture' src='images/services/couverture.png'></img>
                    {/* text */}
                    <div className='flex flex-col gap-y-8 justify-around'>
                      {/* title */}
                      <div>
                        <div className='overflow-hidden max-w-max'>
                          <h4 className='h4'>Couverture</h4>
                        </div> 
                        <p className='p small'>La couverture est la couche extérieure d’un toit, conçue pour protéger votre bâtiment contre les intempéries et garantir son isolation. En plus de son rôle fonctionnel, elle contribue à l’esthétique et à la durabilité de votre construction.</p>
                      </div>
                      {/* benefits */}
                      <div className='wrapper-benefits'>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Protéger contre les éléments : Pluie, neige, vent, soleil ou grêle.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Isoler thermiquement : Réduire les pertes de chaleur en hiver et limiter la chaleur en été.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Donner du style : Offrir une finition esthétique adaptée au style architectural de votre bâtiment.</p>
                            </li>
                          </div>
                    </div>
                  </motion.div>
        
                  {/* Plateforme */}
                  <motion.div variants={upward} className='card-services'>
                    <img className='image-services' alt='plateforme' src='images/services/plateforme.webp'></img>
                    {/* text */}
                    <div className='flex flex-col gap-y-8 justify-around'>
                      {/* title */}
                      <div>
                        <div className='overflow-hidden max-w-max'>
                          <h4 className='h4'>Plateforme</h4>
                        </div>
                        <p className='p small'>La plateforme représente une solution architecturale moderne, qu'il s'agisse d'un toit plat ou d'une structure horizontale conçue pour divers usages. Ce type de conception offre à la fois esthétisme, fonctionnalité et flexibilité pour répondre aux besoins des constructions contemporaines.</p>
                      </div>
                      {/* benefits */}
                      <div className='wrapper-benefits'>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Esthétique moderne : Les toits plats s’intègrent parfaitement aux designs architecturaux contemporains.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Espace exploitable : Transformez votre toit en terrasse, jardin suspendu ou zone technique pour panneaux solaires.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Polyvalence : Adaptable aux constructions résidentielles, commerciales ou industrielles.</p>
                            </li>
                          </div>
                    </div>
        
                  </motion.div>
        
                  {/* renovation */}
                  <motion.div variants={upward} className='card-services'>
                    <img className='image-services' alt='renovation' src='images/services/renovation.png'></img>
                    <div className='flex flex-col gap-y-8 justify-around'>
                      <div>
                        <div className='overflow-hidden max-w-max'>
                          <h4 className='h4'>Renovation</h4>
                        </div>
                        <p className='p small'>La rénovation est une étape clé pour améliorer, moderniser ou restaurer vos bâtiments et espaces. Que ce soit pour réparer des dommages, moderniser une structure ou augmenter l'efficacité énergétique, nos services de rénovation sont conçus pour répondre à vos besoins tout en respectant vos attentes.</p>
                      </div>
                      {/* benefits */}
                      <div className='wrapper-benefits'>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Réparation des dégâts : Protégez votre bâtiment des dommages causés par le temps, les intempéries ou l'usure.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Modernisation : Apportez une touche contemporaine à votre espace en améliorant les matériaux et les finitions.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Valorisation immobilière : Augmentez la valeur de votre propriété grâce à des rénovations bien planifiées.</p>
                            </li>
                          </div>
                    </div>
                  </motion.div>
        
                  {/* zinguerie */}
                  <motion.div variants={upward} className='card-services'>
                    <img className='image-services' alt='zinguerie' src='images/services/zinguerie.webp'></img>
                    {/* text */}
                    <div className='flex flex-col gap-y-8 justify-around'>
                      <div>
                        <div className='overflow-hidden max-w-max'>
                          <h4 className='h4'>Zinguerie</h4>
                        </div>
                        <p className='p small'>La zinguerie est essentielle pour maintenir la protection et la fonctionnalité de votre bâtiment. Alliant technique et durabilité, nos services de zinguerie garantissent un écoulement efficace des eaux pluviales et préviennent les infiltrations susceptibles de compromettre la structure du bâtiment.</p>
                      </div>
                      {/* benefits */}
                      <div className='wrapper-benefits'>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Imperméabilisation : empêche les fuites dans les toits et les murs.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Drainage efficace : l'eau de pluie est évacuée en toute sécurité, ce qui permet d'éviter les dommages structurels.</p>
                            </li>
                            <li className='benefits'>
                              <div>
                                <FaRegCheckCircle className='opacity-90 size-7' />
                              </div>
                              <p className='p small'>Finition esthétique : contribue à l'aspect général du bâtiment, en particulier dans les constructions plus traditionnelles ou architecturales.</p>
                            </li>
                          </div>
                    </div>
                  </motion.div>
                </motion.div>
        </div>

        {/* CONTACT US */}
         <div id='contactus' className='container mx-auto flex flex-col items-center gap-y-8'>
          <div className=''>
            <motion.h3 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h3 lg:mt-40'>Contactez-nous sans engagement</motion.h3>
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

          <div className='line'></div>

        </div>
      </div>
    </section>
  )
}
