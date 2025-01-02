import { Archivo } from 'next/font/google';
const archivo = Archivo({subsets: ['latin'], weight: ['400','600']});

export default function Home() {
  return (
    <section className="section flex flex-col gap-y-10 lg:gap-y-20">
      <div className="banner flex flex-col w-full h-screen items-end relative">
        <div className="mt-44 lg:mt-54 mx-12 lg:mr-12 flex flex-col gap-y-6">
          <div className='flex flex-col lg:gap-y-2'>
            <h1 className="h1 !leading-10 pb-2">GMW Construct SRL</h1>
            <p className="text-[1.3rem] text-[#ffffffed] lg:text-[#000] leading-6">Construindo confiança, um telhado por vez.</p>
          </div>
          <a className="btn max-w-60" href="#contactus">CONTACT US</a>
        </div>
      </div>

      <div className='flex flex-col gap-y-20 py-8'>
        {/* ABOUT US */}
        <div className='container mx-auto flex flex-col items-center gap-y-1'>
          <div className='flex flex-row items-center gap-20'>
            {/* image */}
            <img className='max-w-[36rem] rounded-lg hidden md:flex' src='images/fixroof.jpg'></img>
            {/* texts */}
            <div className='flex flex-col gap-y-4'>
              <div className='flex flex-col gap-y-2'>
                <h3 className='h3'>About Us</h3>
                <p className='p md:large w-[18rem] md:w-[20rem] lg:w-[32rem]'>GMW Construct SRL, your trusted partner in roofing solutions. With years of experience in the industry, we specialize in providing top-quality roofing services designed to protect your property and enhance its value. From residential to commercial projects, we deliver craftsmanship and professionalism in every job we undertake.</p>
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
              <h5 className="h5">Trust in our professional roofers.</h5>
              <h3 className="h3">We fix and replace all types of roofs.</h3>  
            </div>

            <div className='wrapper-card mb-20'>
              <div className="card">
                <img className="card-image" src="images/residentialroofs.webp"></img>
                <h5 className="card-text h5">Telhados residenciais</h5>
                <p className='card-text p'>Se o telhado da sua casa precisar de reparos, ligue para nós. Nossos telhadores podem consertar qualquer telhado  —  e oferecemos check-ups de telhado gratuitos. Entre em contato conosco para agendar seu check-up hoje mesmo.</p>
              </div>
              <div className="card">
                <img className="card-image" src="images/commercialroofs.jpg"></img>
                <h5 className="card-text h5">Telhados comerciais</h5>
                <p className='card-text p'>Não importa que tipo de negócio ou prédio você tenha, confie em nossa equipe para cuidar do telhado. Por décadas, ajudamos nossos clientes comerciais com seus projetos de reparo e substituição de telhados.</p>
              </div> 
              <div className="card">
                <img className="card-image" src="images/epdm.webp"></img>
                <h5 className="card-text h 5">Aplicação de EPDM Resitrix</h5>
                <p className='card-text p'>O Resitrix pode ser usado tanto para novas construções quanto para reformas. É também ideal para coberturas verdes, coberturas de retenção ou coberturas com painéis solares.</p>
              </div> 
            </div>
          </div>

        </div>

        {/* CONTACT US */}
        <div id='contactus' className='container mx-auto flex flex-col items-center gap-y-10'>
          <h3 className='h3'>Contate-nos</h3>

          <form className="w-80 lg:w-full lg:max-w-lg mx-auto flex flex-col items-center">
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="floating_name" id="floating_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="text" name="subject" id="floating_subject" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required />
                <label htmlFor="floating_subject" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subject</label>
            </div>
            <div className="grid md:gap-6 w-full">
              <div className="relative z-0 w-full mb-5 group">
                  <textarea type="message" rows="8" name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-gray-900 peer" placeholder=" " required></textarea>
                  <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:dark:text-gray-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your message (optional)</label>
              </div>
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>

          <div className='line'></div>

        </div>
      </div>
    </section>
  )
}
