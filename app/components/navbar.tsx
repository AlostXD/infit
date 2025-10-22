import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 shadow-md sticky bg-stone-900/75 top-0 z-50 backdrop-blur-lg'>
        <Image 
            src="https://instagram.fpoj1-1.fna.fbcdn.net/v/t51.2885-19/459950045_502153209268852_1280059655585493986_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby45NzUuYzIifQ&_nc_ht=instagram.fpoj1-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2QGrVb3akjb0ZSlc_wrcOsgrSZNc0Yo6Tp4sT5hXFhzBUxtrqfEYy2yDQci0kEtwLAc&_nc_ohc=QLv3WCuoclMQ7kNvwF3uSQB&_nc_gid=GTH-KjTv8Q71ZUWqftgNKg&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfeyBKXc99sGSJl14R-NsK3KM3t3n5JBkLdnYF8xqx4UVg&oe=68FDF3F1&_nc_sid=7a9f4b" 
            alt="Infit Logo" 
            width={120} 
            height={40}
            className='rounded-full'
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