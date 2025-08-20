import AboutImage from '../assets/images/information.png'

const About = () => {
  return (
        <div className="about grid grid-cols-1 items-center gap-10 px-6 pt-20 md:pt-20 md:gap-20 md:grid-cols-2 xl:px-7">
            <div className="boxImage">
                <img src={AboutImage} alt="About Image"  className='w-[350px] md:w-[450px] mx-auto md:mx-auto'/>
            </div>
            <div className="boxText">
                <h1 className='mb-8 text-justify text-2xl text-[#1C4CAD] font-bold md:text-3xl'><span className='text-blue-400'>Ingin LinkedIn-mu bekerja</span> untuk karier dan peluang bisnis yang lebih besar?</h1>
                <p className='mb-10 text-justify text-base/loose'>Kelas ini akan membantumu membangun personal branding kuat, memperluas jaringan, dan unggul di LinkedIn. Kamu 
                akan belajar mengoptimalkan profil, membuat konten menarik, serta memanfaatkan fitur LinkedIn secara maksimal. Dengan pendekatan praktis, strategi yang dipelajari bisa langsung 
                diterapkan untuk membuka peluang kerja, memperluas koneksi, dan meningkatkan interaksi profesional online.</p>
                
            </div>
        </div>
  )
}

export default About