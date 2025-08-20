const Benefits = () => {
  return (
    <div className="benefits px-6 md:pt-22 md:px-7">
        <h1 className='mb-3 text-center  text-2xl text-[#1C4CAD] font-bold md:text-3xl'>Apa yang Akan Anda <span className='text-blue-400'>Dapatkan?</span></h1>
        <p className='text-center '>Simak manfaat Anda ketika mengikuti kelas di bawah ini</p>
        <div className="benefit-box grid grid-cols-1 gap-8 pt-12 transition-all md:grid-cols-2 md:px-25">
            <div className="box-satu p-4 text-center rounded-lg">
                <i class="ri-account-pin-circle-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <h3 className='mt-6 mb-2 text-xl text-[#1C4CAD] font-semibold opacity-90'>Profil Menarik</h3>
                <p className='text-base/loose'>Buat profil profesional dan menarik yang langsung mencuri perhatian <i>recruiter</i>.</p>
            </div>
            <div className="box-kedua p-4 text-center rounded-lg">
                <i className="ri-lock-unlock-fill text-8xl text-blue-400"></i>
                <h3 className='mt-6 mb-2 text-xl text-blue-400 font-semibold'>Fitur Rahasia Linkedln</h3>
                <p>Tingkatkan kredibilitas dengan rekomendasi dari orang-orang profesional.</p>
            </div>
            <div className="box-ketiga p-4 text-center  rounded-lg">
                <i className="ri-bar-chart-grouped-line text-8xl text-blue-400"></i>
                <h3 className='mt-6 mb-2 text-xl text-blue-400 font-semibold'>Jaringan Lebih Luas</h3>
                <p>Pelajari cara membangun koneksi yang tepat dan relevan untuk kariermu.</p>
            </div>
            <div className="box-keempat p-4 text-center rounded-lg">
                <i className="ri-file-list-3-fill  text-8xl text-[#1C4CAD] opacity-90"></i>
                <h3 className='mt-6 mb-2 text-xl text-[#1C4CAD] font-semibold opacity-90'>Rekomendasi Berkualitas</h3>
                <p className='text-base/loose'>Temukan trik tersembunyi untuk profil lebih menonjol dan dilihat banyak orang.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits