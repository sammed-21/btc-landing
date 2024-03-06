import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='bg-white h-[64px] px-[20px] md:px-[56px] lg:px-[72px] md:h-[80px] w-full border-b-[2px] border-[#DEDFE2]'>
        <Image src={logo} width={200} height={200} className='w-fit h-full object-contain' alt='logo'/>
    </div>
  )
}

export default Navbar