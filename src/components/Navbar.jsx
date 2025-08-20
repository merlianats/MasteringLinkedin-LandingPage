import { useEffect, useState } from 'react'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false)

    const handleOnClick = () => {
        setMenu(!menu);
    }

    let menuActive = menu ? "left-0" : "-left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 5){
                setScroll(true);
                setMenu(false);
            } else {
                setScroll(false);
            }
        })
    })

    let scrollActive = scroll ? "py-5" : "py-3";

    return (
        <div className={`navbar fixed w-full transition-all bg-[#1C4CAD] ${scrollActive}`}>
            <div className='container mx-auto px-8 md:px-4 xl:px-10'>
                <div className='navbar-box flex items-center justify-between'>
                    <div className='logo'>
                        <h1 className='text-xl underline text-amber-50 opacity-90 font-bold md:text-2xl'>Belajar Linkedln</h1>
                    </div>
                    <ul className={`flex fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-6 py-6 gap-8  rounded-tr-md rounded-br-md shadow-lg 
                    shadow-slate-100 bg-[#1C4CAD] font-bold text-amber-50 transition-all md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 
                    md:p-0 md:m-0 lg:gap-12`}>
                        <li className='items-center'>
                            <i className="ri-home-fill text-xl pr-2 md:hidden"></i>
                            <a href="#" className='font-medium opacity-90'>Beranda</a>
                        </li>
                        <li className='items-center'>
                            <i className="ri-info-i text-xl pr-2  md:hidden"></i>
                            <a href="#about" className='font-medium opacity-90'>Informasi</a>
                        </li>
                        <li className='items-center'>
                            <i className="ri-bard-fill text-xl pr-2  md:hidden"></i>
                            <a href="#benefits" className='font-medium opacity-90'>Manfaat</a>
                        </li>
                        <li className='items-center'>
                            <i className="ri-team-fill text-xl pr-2 md:hidden"></i>
                            <a href="#testimoni" className='font-medium opacity-90'>Testimoni</a>
                        </li>
                    </ul>
                    <div className="hamburger md:hidden">
                        <i className="ri-menu-line text-amber-50 text-3xl opacity-90" onClick={handleOnClick}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar