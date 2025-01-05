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
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link'

import {ImInstagram, ImWhatsapp} from 'react-icons/im'

//ASSURANCE
import { AiOutlineFileDone } from "react-icons/ai";
//INTEGRITY
import { BiCheckShield } from "react-icons/bi";
//EXCELLENCE
import { MdOutlineWorkspacePremium } from "react-icons/md";
//CUSTOMER SERVICE
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, ArrowRightStartOnRectangleIcon } from '@heroicons/react/20/solid'

const services = [
  { name: 'Assurance', description: "We offer a 10-year warranty on our work", href: '#', icon: AiOutlineFileDone },
  { name: 'Integrity', description: 'Always working with integrity in order to develop a good customer-company relationship', href: '#', icon: BiCheckShield },
  { name: 'Excellence', description: '+10 years of experience in roofing to deliver excellent work to you', href: '#', icon: MdOutlineWorkspacePremium },
  { name: 'Great customer service', description: 'A 24/7 customer service to clear up any of your doubts', href: '#', icon: PhoneIcon },
]
const callsToAction = [
  { name: 'Visit Our Instagram', href: 'https://www.instagram.com/gmwconstructsrl/', icon: ArrowRightStartOnRectangleIcon },
  { name: 'Get An Estimate', href: 'https://api.whatsapp.com/send?phone=32471555540', icon: ImWhatsapp },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
      <header className="z-10 fixed w-full bg-black lg:bg-white">
      <nav aria-label="Global" className="flex flex-row items-center justify-around">
        <div className="max-w-max lg:flex-1 flex flex-row items-center gap-x-4 my-2">
          <a href="/" className="">
            <img alt="" src="logo.png" className="h-16 w-auto"/>
          </a>
          <div className='flex flex-col'>
            <p className='text-[#ffffffe1] lg:text-black p small'>TVA BE 1003.984.048</p>
            <p className='text-[#ffffffe1] lg:text-black p small hidden lg:flex'>Lindestraat 42 Sint-Genesius-Rode 1640</p>
            <div className='flex flex-row gap-x-1 lg:hidden'>
              <PhoneIcon className='size-5 text-[#ffffff]'/>
              <p className='text-[#ffffffe1] lg:text-black p small'> 471 55 55 40</p>
            </div>
          </div>
        </div>
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
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
          <div className='flex flex-row gap-x-2'>
            <PhoneIcon className='size-7' />
            <h5 className='h5'>471 55 55 40</h5>
          </div>

          <a href="/" className="text-md/6 font-semibold text-gray-900">
            Accueil
          </a>
          
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-900">
            Pourquoi nous?
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

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

          <Link href="#services" className="text-md/6 font-semibold text-gray-900">
            Nos services
          </Link>

          <a href="/portfolio" className="text-md/6 font-semibold text-gray-900">
            Notre travail
          </a>
          {/* <a href="contact" className="text-md/6 font-semibold text-gray-900">
            Contact
          </a> */}
          {/* <a href="#" className="text-md/6 font-semibold text-gray-900">
            À propos de nous
           </a> */}
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">GMW Construct SRL</span>
              <img
                alt=""
                src="logo.png"
                className="h-8 w-auto"
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
                <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Accueil
                </a>
                <Link onClick={() => setMobileMenuOpen(false)} href="#services" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Nos services
                </Link>

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
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Notre Travail
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