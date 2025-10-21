import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 shadow-md sticky bg-stone-900/75 top-0 z-50 backdrop-blur-lg'>
        <Image 
            src="/logo.png" 
            alt="Infit Logo" 
            width={120} 
            height={40} 
        />
        <h1 className='font-bold flex flex-col justify-center items-center italic'><span className='text-green-500 font-bold text-2xl'>In-Fit</span> Consultoria Esportiva</h1>
        <ul className='flex space-x-6 text-md font-medium'>
            <a href='/' className='font-bold hover:text-green-500 hover:scale-125 transition-all'>Home</a>
            <a href='/planos' className='font-bold hover:text-green-500 hover:scale-125 transition-all'>Planos</a>
            <a href='/contatos' className='font-bold hover:text-green-500 hover:scale-125 transition-all'>Contato</a>
        </ul>
    </div>
  )
}