import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

export default function Footer() {
    return (
        <footer className='mt-[4rem]'>
			<div className='container mx-auto flex flex-col w-full max-w-[75rem] gap-y-[2rem]'>
				<div className='flex flex-row justify-between'>
					{/* menu  */}
					<div className='flex flex-col gap-y-6 px-6'>
						<a className={`${archivo.className} p medium text-[#080808] font-[600] leading-[1] after:content-[''] after:w-[3rem] after:mt-1 after:h-[2px] after:bg-[#ff0000] after:block`}>Menu</a>
						<a href='/' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Home </a>
						<a href='/portfolio' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Portfolio </a>
						<a href='/about' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> Contact </a>
						<a href='/contact' className={`${archivo.className} p hover:text-[#000000a1] transition-all`}> About </a>
					</div>

					<div className='flex flex-col items-center px-6'>
						{/* icon & text  */}
						<div className='flex flex-col items-center w-full max-w-[30rem]'>
							<img src="/logo.png" className='w-full max-w-[64px] h-full max-h-[64px] mb-3' alt="" />
							<p className={`${archivo.className} p small mb-10 w-[8rem] md:w-full text-center`}>GMW Construct is everywhere to attend you.</p>
						</div>
						
						{/* social media  */}
						<div className='flex flex-col md:flex-col justify-between'>
							<div className=' flex flex-col gap-y-6'>
								<nav>
									<ul className='flex flex-col md:flex-row gap-2 md:gap-8'>
										<li><a className={`${archivo.className} social_link`} href="mailto:gmwconstruct@outlook.com" target='_blank'>Email</a></li>
										<li><a className={`${archivo.className} social_link`} href="https://www.instagram.com/gmwconstructsrl/" target='_blank'>Instagram</a></li>
										<li><a className={`${archivo.className} social_link`} href="https://api.whatsapp.com/send?phone=32471555540" target='_blank'>Whatsapp</a></li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div className='mx-4 w-[75%] md:w-full max-w-[75rem] h-[2px] bg-[#2c2c2c] self-center'></div>
				<p className={`${archivo.className} p small self-center text-center m-[1rem]`}>Copyright © 2024 GMW Construct SRL. Todos direitos reservados.</p>
			</div>
		</footer>
    )
}