import Head from 'next/head'
import Image from 'next/image'

export default function Home () {
  return (
    <div>
      <Head>
        <title>albertesc.dev | Albert Escamilla desarrollador frontend</title>

        <meta property='og:title' content='Albert Escamilla' />
        <meta property='og:description' content='Frontend Developer | Javascript | React | UI/UX Integration' />
        <meta property='og:image' content='/og-image.png' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
      </Head>

      <div>
        <header className='flex justify-between items-center py-3 md:py-5 px-5 md:px-8 w-full bg-gray-100'>
          <h1 className='font-serif text-blue-500 md:text-xl text-lg'>albertesc.dev</h1>
          <div className='text-sm text-gray-800 md:block hidden'>
            <a href='mailto:albertesc@gmail.com' className='hover:text-sky-500'>albertesc@gmail.com</a> - <a href='http://linkedin.com/in/albertescam' rel='noopener noreferrer' className='hover:text-sky-500'>/in/albertescam/</a> - <a href='http://github.com/albertesc' rel='noopener noreferrer' className='hover:text-sky-500'>github.com/albertesc</a>
          </div>
        </header>

        <section className='bg-gray-100 pt-2 md:pt-20'>
          <div className='container flex items-end flex-col md:flex-row'>
            <div className='w-full md:w-3/5 md:pr-20'>
              <div className='text-yellow-400 md:-rotate-[15deg] md:-ml-5 text-xl md:text-2xl inline-block'>¡Hola!</div>
              <h2 className='text-3xl md:text-5xl xl:text-6xl 2xl:text-[4.5rem] font-bold mb-2 md:mb-4'>Meet your next <span className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-sky-400 from-blue-600'>Frontend</span> Developer</h2>
              <p className='mb-8'>+16 años desarrollando aplicaciones web.</p>
              <div className='flex items-center gap-x-6 md:gap-x-8'>
                <a href='mailto:albertesc@gmail.com' className='bg-yellow-400 px-6 py-2 rounded inline-block' rel='noopener noreferrer' target='_blank'>¿Hablamos?</a>
                <a href='./albertescamilla.pdf' className='bg-blue-500 px-6 py-2 rounded inline-block text-white' rel='noopener noreferrer' download target='_blank'>Descargar CV</a>
                <a href='https://github.com/albertesc' className='block' rel='noopener noreferrer' target='_blank'><svg viewBox='0 0 21 23' width={21} height={23} stroke='currentColor' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.371 3.371 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.442 5.442 0 0 0 20 4.77 5.072 5.072 0 0 0 19.91 1C19.397-.198 18.73.65 16 2.48a13.384 13.384 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.072 5.072 0 0 0 5 4.77a5.441 5.441 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.372 3.372 0 0 0 9 18.13V22' transform='translate(-1.5 .055)' /></svg></a>
              </div>
              <p className='mt-8 md:mt-20 mb-4 text-sm'>Construyendo la web con:</p>
              <div className='flex items-center justify-between mb-8 md:mb-16'>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/javascript.svg' width={60} height={60} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/html.svg' width={60} height={60} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/css.svg' width={60} height={60} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/react.svg' width={60} height={60} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/next.svg' width={70} height={70} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/laravel.svg' width={60} height={60} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/storybook.svg' width={60} height={60} layout='responsive' /></div>
                <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-8 md:h-8 lg:w-12 lg:h-12 xl:w-16 xl:h-16'><Image src='/git.svg' width={60} height={60} layout='responsive' /></div>
              </div>
            </div>
            <div className='w-full max-w-[450px] mx-auto md:w-2/5 relative'>
              <Image src='/albert.png' alt='albertesc.dev' width={497} height={589} quality={100} layout='responsive' className='relative z-30' />
              <span className='block w-1/2 h-[60%] bg-gradient-to-r from-sky-400 to-blue-600 rounded-[40px] xl:rounded-[60px] absolute bottom-[60px] left-0 z-20' />
              <span className='block w-8/12 h-[80%] bg-gradient-to-b from-yellow-400 to-orange-400 rounded-[40px] xl:rounded-[60px] absolute top-0 right-0 z-10' />
            </div>
          </div>
        </section>

        <section>
          <div className='container max-w-3xl py-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>Sobre mí</h2>
            <p className='mb-6'>
              Mi nombre es Albert Escamilla y soy un apasionado por el lenguaje JavaScript.
              Construyo la web desde hace más de 16 años, con tecnologías como <span className='font-semibold'>Html, Css, Scss y frameworks como React y Nextjs</span>.
              Además, tengo experiencia en <span className='font-semibold'>backend con Laravel, Node, Express y MongoDB</span>.
            </p>
            <p className='mb-6'>
              Mi formación en diseño y publicidad hace que sea un programador con una gran sensibilidad
              para el diseño. Una cosa que me obsesiona siempre es tener el código limpio y ordenado.
            </p>
            <p className='mb-16'>
              Si quieres ampliar información puedes visitar mi LinkedIn aquí 👉
              <a href='http://linkedin/in/albertescam' className='text-sky-500 inline-block mr-1' rel='noopener noreferrer'>/in/albertescam</a>
              o descargar mi curriculum aquí 👉 <a href='/albertescamilla.pdf' className='text-sky-500' rel='noopener noreferrer'>albertescamilla.pdf</a>
            </p>
            <div className='flex items-center mb-10'>
              <span className='w-5 h-5 border-2 border-gray-600 rounded flex-none mr-8 rotate-45' />
              <div className='flex flex-col'>
                <span className='text-yellow-400'>AtSistemas</span>
                <span className='text-xl font-semibold'>Frontend Developer UI/UX</span>
                <span className='text-sm text-gray-400'>2021 - Actualmente</span>
              </div>
            </div>
            <div className='flex items-center mb-10'>
              <span className='w-5 h-5 border-2 border-gray-600 rounded flex-none mr-8 rotate-45' />
              <div className='flex flex-col'>
                <span className='text-yellow-400'>La teva web</span>
                <span className='text-xl font-semibold'>Frontend Web Developer</span>
                <span className='text-sm text-gray-400'>2016 - 2021</span>
              </div>
            </div>
            <div className='flex items-center mb-10'>
              <span className='w-5 h-5 border-2 border-gray-600 rounded flex-none mr-8 rotate-45' />
              <div className='flex flex-col'>
                <span className='text-yellow-400'>Leman SAS</span>
                <span className='text-xl font-semibold'>Webmaster y Creativo</span>
                <span className='text-sm text-gray-400'>2016 - 2016</span>
              </div>
            </div>
            <div className='flex items-center mb-10'>
              <span className='w-5 h-5 border-2 border-gray-600 rounded flex-none mr-8 rotate-45' />
              <div className='flex flex-col'>
                <span className='text-yellow-400'>Peta Zetas</span>
                <span className='text-xl font-semibold'>Webmaster</span>
                <span className='text-sm text-gray-400'>2010 - 2015</span>
              </div>
            </div>
          </div>
        </section>

        <section className='bg-gray-100 pt-16'>
          <div className='container'>
            <div className='flex flex-col-reverse lg:flex-row gap-x-12'>
              <div className='w-full lg:w-1/2'>
                <div className='lg:-ml-20 lg:-mr-56 lg:mt-16'>
                  <Image src='/choost.png' alt='albertesc.dev' width={870} height={512} quality={100} layout='responsive' className='relative z-30' />
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <h2 className='text-3xl lg:text-4xl font-bold mb-8'>Proyectos aparte</h2>
                <h3 className='font-semibold mb-4'>UI component library</h3>
                <p>Choost proporciona una biblioteca de componentes de interfaz de usuario de  código
                  abierto de módulos NPM con la utilidad JavaScript básica de cada componente, para
                  que no tengas que pensar en cualquier cosa, lo que le permite crear su propio sistema
                  de diseño.
                </p>
                <div className='flex items-center gap-x-4 mb-8 mt-4'>
                  <a href='https://github.com/albertesc/choost' className='block' rel='noopener noreferrer' target='_blank'><svg viewBox='0 0 21 23' width={21} height={23} stroke='currentColor' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.371 3.371 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.442 5.442 0 0 0 20 4.77 5.072 5.072 0 0 0 19.91 1C19.397-.198 18.73.65 16 2.48a13.384 13.384 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.072 5.072 0 0 0 5 4.77a5.441 5.441 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.372 3.372 0 0 0 9 18.13V22' transform='translate(-1.5 .055)' /></svg></a>
                  <a href='https://choost-web.vercel.app/' className='text-sky-500' rel='noopener noreferrer' target='_blank'>https://choost-web.vercel.app/</a>
                </div>
              </div>
            </div>

            <div className='flex items-end flex-col-reverse lg:flex-row gap-x-12'>
              <div className='w-full lg:w-1/2'>
                <div className='xl:mr-12 relative'>
                  <Image src='/albert2.png' alt='albertesc.dev' width={580} height={369} quality={100} layout='responsive' className='relative z-30' />
                  <span className='block w-1/2 h-[50%] bg-gradient-to-r from-sky-400 to-blue-600 rounded-t-[40px] xl:rounded-t-[60px] absolute bottom-0 left-0 z-20' />
                  <span className='block w-8/12 h-[100%] bg-gradient-to-b from-yellow-400 to-orange-400 rounded-t-[40px] xl:rounded-t-[60px] absolute bottom-0 right-0 z-10' />
                </div>
              </div>
              <div className='w-full lg:w-1/2'>
                <h3 className='text-xl font-bold mb-8'>Otros proyectos de código abierto</h3>

                <p>Bailerplate base de Storybook con Vuejs 3</p>
                <div className='flex items-center gap-x-4 mt-3 mb-8'>
                  <svg className='flex-none' viewBox='0 0 21 23' width={21} height={23} stroke='currentColor' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.371 3.371 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.442 5.442 0 0 0 20 4.77 5.072 5.072 0 0 0 19.91 1C19.397-.198 18.73.65 16 2.48a13.384 13.384 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.072 5.072 0 0 0 5 4.77a5.441 5.441 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.372 3.372 0 0 0 9 18.13V22' transform='translate(-1.5 .055)' /></svg>
                  <a href='https://github.com/albertesc/storybook-vue3' className='block text-sky-500 text-sm sm:text-base' rel='noopener noreferrer' target='_blank'>https://github.com/albertesc/storybook-vue3</a>
                </div>

                <p>Utilidades SASS y reset CSS</p>
                <div className='flex items-center gap-x-4 mt-3 mb-8'>
                  <svg className='flex-none' viewBox='0 0 21 23' width={21} height={23} stroke='currentColor' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.371 3.371 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.442 5.442 0 0 0 20 4.77 5.072 5.072 0 0 0 19.91 1C19.397-.198 18.73.65 16 2.48a13.384 13.384 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.072 5.072 0 0 0 5 4.77a5.441 5.441 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.372 3.372 0 0 0 9 18.13V22' transform='translate(-1.5 .055)' /></svg>
                  <a href='https://github.com/albertesc/sass-utilities' className='block text-sky-500 text-sm sm:text-base' rel='noopener noreferrer' target='_blank'>https://github.com/albertesc/sass-utilities</a>
                </div>

                <h3 className='text-xl font-bold mt-4 mb-8'>Mis proyectos para pasar el rato</h3>

                <p>Ejemplo de Blog de cocina con Next.js</p>
                <div className='flex items-center gap-x-4 mt-3 mb-8'>
                  <svg className='flex-none' viewBox='0 0 21 23' width={21} height={23} stroke='currentColor' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.371 3.371 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.442 5.442 0 0 0 20 4.77 5.072 5.072 0 0 0 19.91 1C19.397-.198 18.73.65 16 2.48a13.384 13.384 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.072 5.072 0 0 0 5 4.77a5.441 5.441 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.372 3.372 0 0 0 9 18.13V22' transform='translate(-1.5 .055)' /></svg>
                  <a href='https://github.com/albertesc/soloaperitivos' className='block text-sky-500 text-sm sm:text-base' rel='noopener noreferrer' target='_blank'>https://github.com/albertesc/soloaperitivos</a>
                </div>

                <p>Buscador de muñecos Funkopop de Marvel</p>
                <div className='flex items-center gap-x-4 mt-3 mb-8 lg:mb-24'>
                  <svg className='flex-none' viewBox='0 0 21 23' width={21} height={23} stroke='currentColor' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.371 3.371 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.442 5.442 0 0 0 20 4.77 5.072 5.072 0 0 0 19.91 1C19.397-.198 18.73.65 16 2.48a13.384 13.384 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.072 5.072 0 0 0 5 4.77a5.441 5.441 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.372 3.372 0 0 0 9 18.13V22' transform='translate(-1.5 .055)' /></svg>
                  <a href='https://github.com/albertesc/funko-marvel-collection' className='block text-sky-500 text-sm sm:text-base' rel='noopener noreferrer' target='_blank'>https://github.com/albertesc/funko-marvel-collection</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className='py-6 md:py-16'>
          <p className='text-center text-sm'>Hecho con ♥️ por Albert Escamilla.
            <br />Sígueme en <span className='font-semibold'>LinkedIn:</span> <a href='http://linkedin.com/in/albertescam' rel='noopener noreferrer' className='hover:text-sky-500'>/in/albertescam/</a> o <span className='font-semibold'>Github:</span> <a href='http://github.com/albertesc' rel='noopener noreferrer' className='hover:text-sky-500'>github.com/albertesc</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
