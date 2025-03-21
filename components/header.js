'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { motion } from 'framer-motion';

import Link from 'next/link'

import {ImWhatsapp} from 'react-icons/im'

//ASSURANCE
import { AiOutlineFileDone } from "react-icons/ai";
//INTEGRITY
import { BiCheckShield } from "react-icons/bi";
//EXCELLENCE
import { MdOutlineWorkspacePremium } from "react-icons/md";
//CUSTOMER SERVICE
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid'
import { upward } from '@/public/variants/upward';
import { transition1 } from '@/public/transitions/transition1';
import { dropdown } from '@/public/variants/dropdown';
import { transition1_s } from '@/public/transitions/transition1_s';
import { righttoleft } from '@/public/variants/righttoleft';

const services = [
  { name: 'Assurance', description: "Nous offrons une garantie de 10 ans sur notre travail", href: '#', icon: AiOutlineFileDone },
  { name: 'Intégrité', description: 'Toujours travailler avec intégrité afin de développer une bonne relation client-entreprise', href: '#', icon: BiCheckShield },
  { name: 'Excellence', description: "Plus de 10 ans d'expérience en couverture pour vous fournir un travail d'excellence", href: '#', icon: MdOutlineWorkspacePremium },
  { name: 'Un excellent service client', description: 'Un service client disponible 24h/24 et 7j/7 pour répondre à toutes vos questions', href: '#', icon: PhoneIcon },
]
const callsToAction = [
  { name: 'Visitez Notre Instagram', href: 'https://www.instagram.com/gmwconstruct/', icon: ArrowRightStartOnRectangleIcon },
  { name: 'Obtenir Un Devis Gratuit', href: 'https://api.whatsapp.com/send?phone=32471555540', icon: ImWhatsapp },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <header id='parallax-header' className="z-10 fixed w-full bg-transparent lg:bg-white">
        <nav aria-label="Global" className="flex flex-row items-center justify-around">
          <motion.div variants={dropdown} initial="variantInit" whileInView="variantAnim" viewport={{once:true}} transition={transition1_s} className="max-w-max lg:flex-1 flex flex-row items-center gap-x-4 my-2">
            {/* LOGO */}
            <motion.a variants={dropdown} href="/" className="">
              <img alt="home" src="logo.png" className="h-16 w-auto"/>
            </motion.a>
            {/* INFO */}
            <motion.div variants={dropdown} className='flex flex-col'>
              <p className='text-white lg:text-[#121212] p small'>TVA BE 1003.984.048</p>
              <p className='text-white lg:text-[#121212] p small hidden lg:flex'>Lindestraat 42 Sint-Genesius-Rode 1640</p>
              <div className='flex flex-row items-center gap-x-1 lg:hidden'>
                <PhoneIcon className='size-4 text-[#ffffff]'/>
                <p className='text-white lg:text-[#121212] p small'> 466 10 60 41</p>
              </div>
            </motion.div>
          </motion.div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" color='#ffffff' className="size-6" />
            </button>
          </div>
          <motion.div variants={dropdown} whileInView="variantAnim" viewport={{once:true}} transition={transition1_s}>
            <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
              {/* PHONE NUMBER */}
              <motion.div>
                <div className='flex flex-row gap-x-2'>
                  <PhoneIcon className='size-7' />
                  <h5 className='h5'>466 10 60 41</h5>
                </div>
              </motion.div>

              {/* ACCUEIL */}
              <li>
                <a href="/" title='Accueil' className="text-md/6 font-semibold text-gray-900">
                  Accueil
                </a>
              </li>
              
              {/* POURQUOI NOUS */}
              < Popover className="relative">
                <motion.div>
                  <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-900">
                  Pourquoi nous?
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                  </PopoverButton>
                </motion.div>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-md/6"
                      >
                        <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                          <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-red-600" />
                        </div>
                        <div className="flex-auto">
                          <a className="block font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target='_blank'
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </Popover>

              {/* NOS SERVICES */}
              <li>
                <a href="/services" title='Notre Services' className="text-md/6 font-semibold text-gray-900">
                  Nos services
                </a>
              </li>

              {/* NOTRE TRAVAIL */}
              <li>
                <a title='Notre Travail' href="/portfolio" className="text-md/6 font-semibold text-gray-900">
                  Notre travail
                </a>
              </li>
              {/* CONTACT */}
              <li>
                <a title='Contact' href="/contact" className="text-md/6 font-semibold text-gray-900">
                  Contact
                </a>
              </li>
              {/* <a href="#" className="text-md/6 font-semibold text-gray-900">
                À propos de nous
              </a> */}
            </PopoverGroup>
          </motion.div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">GMW Construct SRL</span>
                <img
                  alt="gmw_logo"
                  src="logo.png"
                  className="h-16 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a title='home' href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Accueil
                  </a>
                  <a title='nos services' onClick={() => setMobileMenuOpen(false)} href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Nos services
                  </a>

                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Pourquoi nous?
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...services, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          <div className='flex flex-row gap-x-2'>
                            <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-red-600" />
                            {item.name}
                          </div>
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a title='portfolio'
                    href="/portfolio"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Notre Travail
                  </a>
                  <a title='contact'
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                  {/* <a
                    href="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </a> */}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
    </header>
    )
}