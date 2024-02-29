"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from './Button'



function Navbar() {

    const [isClick,setisClick]= useState(false);

    const toggleNavbar =():void=>{
        setisClick(!isClick)
    }




  return (
    <nav className=' flexBetween max-container padding-container relative z-20 py-5'
      
>
    <Link href="/">
    <Image src="/hilink-logo.svg" alt='logo' width={74} height={29}/>
    </Link>
    
    <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500">
                {link.label}
            </Link>
        ))}
    </ul>
    <div className="lg:flexCenter hidden w-40 h-40">
    <Button
    type="button"
    title="Login"
    icon="/user.svg"
    variant="btn_dark_green"
    />
    </div>
  

    <div className="flex items-start">
        
     {isClick &&
    <div>
          <ul className='flex  flex-col h-full gap-16 lg:flex '>
        {NAV_LINKS.map((link)=>(
            <Link href={link.href} key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-500">
                {link.label}
            </Link>
        ))}



    </ul>
    <div className="lg:flexCenter hidden w-40 h-40">
    <Button
    type="button"
    title="Login"
    icon="/user.svg"
    variant="btn_dark_green"
    />
    </div>
    </div>
    }
    <Image
    src = "menu.svg"
    alt="menu"
    width={32}
    height={32}
    className="inline-block cursor-pointer lg:hidden"
    onClick={toggleNavbar}
        />
        
    </div>
   
    
   
    </nav>
  )
}

export default Navbar