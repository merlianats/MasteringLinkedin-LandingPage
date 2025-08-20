import React from 'react'

const Testimoni = () => {
  return (
    <div className="testimoni px-6 md:pt-22 md:px-7">
        <h1 className='mb-3 text-center  text-2xl text-[#1C4CAD] font-bold md:text-3xl'>Testimoni <span className='text-yellow-500'>Alumni</span></h1>
        <p className='text-center '>Di bawah ini merupakan testimoni dari alumni yang telah mengikuti kelas Belajar Linkedln</p>
        <div className="benefit-box grid grid-cols-1 gap-8 pt-12 transition-all sm:grid-cols-2 md:grid-cols-3 md:px-25">
            <div className="box-satu flex flex-col p-4 text-center rounded-lg">
                <i className="ri-user-smile-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <div className="flex justify-center gap-1 mt-2">
                    {Array(5).fill().map((_, i) => (
                    <i key={i} className="ri-star-s-fill text-3xl text-yellow-500"></i>
                    ))}
                </div>
                 <p className='text-base/loose font-medium mt-3'>"Gabriel Amanta"</p>
                <p className='text-base/loose'>Setelah ikut kelas ini, profil LinkedIn saya jadi lebih profesional. Recruiter langsung lebih sering menghubungi saya untuk peluang kerja.</p>
            </div>
            <div className="box-satu flex flex-col p-4 text-center rounded-lg">
                <i className="ri-user-smile-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <div className="flex justify-center gap-1 mt-2">
                    {Array(5).fill().map((_, i) => (
                    <i key={i} className="ri-star-s-fill text-3xl text-yellow-500"></i>
                    ))}
                </div>
                 <p className='text-base/loose font-medium mt-3'>"Justin Crul"</p>
                <p className='text-base/loose'>Awalnya saya kesulitan mendapatkan perhatian HR. Setelah menerapkan tips yang dipelajari, saya berhasil dipanggil interview di perusahaan besar.</p>
            </div>
            <div className="box-satu flex flex-col p-4 text-center rounded-lg">
                <i className="ri-user-smile-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <div className="flex justify-center gap-1 mt-2">
                    {Array(5).fill().map((_, i) => (
                    <i key={i} className="ri-star-s-fill text-3xl text-yellow-500"></i>
                    ))}
                </div>
                 <p className='text-base/loose font-medium mt-3'>"Anita Sri"</p>
                <p className='text-base/loose'>Dulu saya ragu bagaimana menulis deskripsi diri yang tepat. Sekarang saya jauh lebih percaya diri menampilkan skill dan pengalaman saya.</p>
            </div>
            <div className="box-satu flex flex-col p-4 text-center rounded-lg">
                <i className="ri-user-smile-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <div className="flex justify-center gap-1 mt-2">
                    {Array(5).fill().map((_, i) => (
                    <i key={i} className="ri-star-s-fill text-3xl text-yellow-500"></i>
                    ))}
                </div>
                 <p className='text-base/loose font-medium mt-3'>"Kevin Akbar"</p>
                <p className='text-base/loose'>Dengan strategi membangun koneksi yang benar, saya berhasil menambah jaringan profesional lintas industri.</p>
            </div>
            <div className="box-satu flex flex-col p-4 text-center rounded-lg">
                <i className="ri-user-smile-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <div className="flex justify-center gap-1 mt-2">
                    {Array(5).fill().map((_, i) => (
                    <i key={i} className="ri-star-s-fill text-3xl text-yellow-500"></i>
                    ))}
                </div>
                 <p className='text-base/loose font-medium mt-3'>"Nadia Omaria"</p>
                <p className='text-base/loose'>Tips optimasi dari kelas ini membuat profil saya muncul di pencarian recruiter, bahkan dilihat lebih dari 500 orang dalam sebulan.</p>
            </div>
            <div className="box-satu flex flex-col p-4 text-center rounded-lg">
                <i className="ri-user-smile-fill text-8xl text-[#1C4CAD] opacity-90"></i>
                <div className="flex justify-center gap-1 mt-2">
                    {Array(5).fill().map((_, i) => (
                    <i key={i} className="ri-star-s-fill text-3xl text-yellow-500"></i>
                    ))}
                </div>
                 <p className='text-base/loose font-medium mt-3'>"Sintia Gurl"</p>
                <p className='text-base/loose'>Tidak butuh waktu lama, setelah update profil sesuai materi, saya langsung mendapat tawaran magang dari perusahaan teknologi.</p>
            </div>
        </div>
    </div>
  )
}

export default Testimoni