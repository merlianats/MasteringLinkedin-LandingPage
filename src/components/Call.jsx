import HurryImage from '../assets/images/hurry.gif'

const Call = () => {
  return (
    <div className="about grid grid-cols-1 items-center gap-10 px-6 pt-20 md:pt-2 md:gap-20 md:grid-cols-2 xl:px-7">
                <div className="boxImage">
                    <img src={HurryImage} alt="About Image"  className='w-[350px] md:w-[450px] mx-auto md:mx-auto'/>
                </div>
                <div className="boxText">
                    <h1 className='mb-8 text-justify text-2xl text-amber-50 font-bold md:text-3xl'><span className='text-blue-400'>Tunggu Apalagi? </span> Segera Daftarkan Kelas Anda di bawah ini</h1>
                    <a href="#" className='bg-amber-50 py-2 px-20 text-center rounded text-[#1C4CAD] font-medium transition-all hover:bg-blue-100 block mx-auto md:px-4 md:inline-block'>Daftar Sekarang</a>
                </div>
    </div>
  )
}

export default Call