import HeroImage from '../assets/images/notebook-class.png'

const Hero = () => {
  return (
    <div className="hero grid grid-cols-1 items-center gap-10 pt-25 md:pt-30 md:gap-20 md:grid-cols-2 xl:px-7">
        <div className="boxText">
            <h1 className='mb-8 text-justify text-2xl text-amber-50 font-bold md:text-3xl lg:text-5xl'>Optimalkan Linkedln untuk Raih Karir Impianmu</h1>
            <p className='mb-10 text-justify text-base/7 text-amber-50'>Bangun personal branding yang kuat dan perluas jaringan profesional Anda. Manfaatkan LinkedIn untuk meningkatkan visibilitas karier serta membuka peluang baru.</p>
            <a href="#" className='bg-amber-50 py-2 px-20 text-center rounded text-[#1C4CAD] font-medium transition-all hover:bg-blue-100 block mx-auto md:px-4 md:inline-block'>Daftar Sekarang</a>
        </div>
        <div className="boxImage">
            <img src={HeroImage} alt="Hero Image"  className='w-[350px] md:w-[450px] mx-auto md:mx-auto'/>
        </div>
    </div>
  )
}

export default Hero