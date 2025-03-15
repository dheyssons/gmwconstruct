"use client"

import { motion } from 'framer-motion';
import { lefttoright } from '@/public/variants/lefttoright';
import { upward } from '@/public/variants/upward';
import { transition1 } from '@/public/transitions/transition1';
import { transition1_s } from '@/public/transitions/transition1_s';
import { FaRegCheckCircle } from "react-icons/fa";
import { item } from '@/public/variants/item';

import { useState } from 'react';

import emailJS from '@emailjs/browser'

import { MdOutlineMail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import { FaMapMarkerAlt } from "react-icons/fa";

export default function OurServices() {
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
        <section>
            <div className='container mx-auto flex flex-col items-center gap-y-10 lg:gap-y-20'>
                <div className='overflow-hidden max-w-max'>
                    <motion.h2 variants={lefttoright} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h1 mt-40'>Nos services</motion.h2>
                </div>

                <motion.div variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1_s} className='wrapper-services'>

                {/* bardage */}
                <motion.div id='bardage' variants={upward} className='card-services'>
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
                <motion.div id='charpente' variants={upward} className='card-services'>
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
                <motion.div id='couverture' variants={upward} className='card-services'>
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
                <motion.div id='plateforme' variants={upward} className='card-services'>
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
                <motion.div id='renovation' variants={upward} className='card-services'>
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
                <motion.div id='zinguerie' variants={upward} className='card-services'>
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

            <div id='contactus' className='container mx-auto flex flex-col items-center gap-y-8 overflow-hidden'>
                      <div className='flex flex-col gap-y-8 lg:flex-row gap-x-8 mt-40'>
                        {/* FORMULAIRE */}
                        <div className='flex flex-col gap-y-14'>
                          <div className=''>
                            <motion.h3 variants={upward} initial="variantInit" whileInView="variantAnim" viewport={{once: true}} transition={transition1} className='h3 text-center !text-[#c12c2c]'>Contactez-nous </motion.h3>
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
                              <a target="_blank" href="mailto:gmwconstruct@outlook.com" className="h6 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50 "><MdOutlineMail /> gmwconstruct@outlook.com</a>  
                              <a target="_blank" href="https://api.whatsapp.com/send?phone=32471555540" className="h6 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"><ImWhatsapp />466 10 60 41</a>  
                              <a target="_blank" href="https://maps.app.goo.gl/QohHCBALJ6q53rNv9" title="address" className="h6 flex flex-row items-center gap-x-2 opacity-90 hover:opacity-50"><FaMapMarkerAlt />Lindestraat 42 Sint-Genesius-Rode 1640</a>  
                          </div> 
                          </motion.div> 
                      </div>
            
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.933107224172!2d4.34559307642177!3d50.741063071649144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3cfa17e16d523%3A0x20abd56e040c7520!2sLindestraat%2042%2C%201640%20Sint-Genesius-Rode!5e1!3m2!1spt-BR!2sbe!4v1739471610177!5m2!1spt-BR!2sbe" width="1440" height="600" className="border-0 mt-20" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
                      <div className='line'></div>
                    </div>
        </section>
    )
}