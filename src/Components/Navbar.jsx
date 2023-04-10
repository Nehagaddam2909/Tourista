import { Link } from "react-router-dom";
import NavbarLinks from "../data/navbarLinks";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
const Navbar = () => {
	const [sidebarOpen, setsidebarOpen] = useState(false);

    return (<div className="relative flex space-x-4 items-center z-10 md:m-[4rem] flex-row-reverse justify-end md:justify-center lg:flex-row">
        <div className='Navbar-logo mr-5 mt-1'>
        <Link href='/'>
                    <div className="flex text-white space-x-2">
					<img className='w-[3rem] h-[3rem] -mt-4 cursor-pointer' src="/logo.png" alt='Logo' />

                    <div>Tourista</div>

                    </div>
				</Link>
			</div>
        <div className='Navbar-hamburger lg:hidden'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					onClick={() => setsidebarOpen(!sidebarOpen)}
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-6 h-6 cursor-pointer text-white'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
					/>
				</svg>
			</div>
            <Sidebar
				showSidebar={sidebarOpen}
				setshowSidebar={(e) => setsidebarOpen(e)}
			/>
        <div className='lg:flex hidden justify-center items-center h-full'>
				<div className='Navbar-links flex whitespace-nowrap lg:space-x-8 font-semibold'>
                
                    {NavbarLinks.map((link, index) => (
						<Link
							key={index}
							href="#"
							className='Navbar-link text-white hover:text-[#FA183E]'>
							{link.name}
						</Link>
					))}
				</div>
				<Link
					href='/register'
					className='Reach-us hidden lg:block text-white bg-[#FA183E] whitespace-nowrap rounded-2xl py-1 px-5 mx-10'>
					Enrollment
				</Link>
			</div>
    </div>  );
}
 
export default Navbar;