"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 3,
        title: "About",
        url: "/about",
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 5,
        title: "Dashboard",
        url: "/dashboard"
    },
];

const Navbar = () => {

    const session = useSession()

    const [navbar, setNavbar] = useState(false);

    const handleNav = () => {
        setNavbar(!navbar);
    }

    const navLogic = navbar ? (
        <FontAwesomeIcon icon={faXmark} className='font-bold' size='lg' style={{color: "#97df97",}} />
   ) : (
       <FontAwesomeIcon icon={faBars} size='lg' className='font-bold' style={{color: "#75d88e",}} />
   )

   
    

  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">ocanza</Link>
    <div>

        <div className='md:hidden flex gap-3 items-center h-full w-full '>    
                <button
                    className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                    onClick={handleNav}>
                        {navLogic}
                        </button>
            </div>
            
        </div>

    <div className='max-md:hidden'>
   <div className={styles.links}>
    <DarkModeToggle />
        {links.map(link => (
            <Link 
                key={link.id}
                href={link.url} 
                className={styles.link}> 
                    {link.title}
            </Link>
            ))}

        { session .status === "authenticated" && ( 
        <button
            className={styles.logout}
            onClick={signOut}
            >
                logout
        </button>
        )}
    </div>
    </div>

    <div className={
        navbar 
        ? "fixed left-0 top-0 w-[96%] md:hidden h-screen bg-[#d6d6d6] p-10 ease-in duration-500 z-10"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500 "
    }>
        <DarkModeToggle />
        <div className='flex w-full items-center justify-end'>
            <div onClick={handleNav}>
                {navLogic}
            </div>
        </div>

        <div className='flex-col pt-12 '>
        
        {links.map(link => (
            <Link 
                onClick={handleNav}
                key={link.id}
                href={link.url} 
                className="flex flex-col text-slate-950 mb-5 underline-offset-1 text-center font-bold"
                > 
                    {link.title}
            </Link>
            ))}
        </div>

    </div>

   </div>
  )
}

export default Navbar