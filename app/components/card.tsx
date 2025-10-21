import React from 'react'
import Image from 'next/image'




type Props = {
    nome: String,
    descricao: String,
    experiencia: String,
    imagem?: String
}

export default function Card({nome, descricao, experiencia, imagem}: Props) {
  return (
        <div className="w-80 bg-stone-800 rounded-lg shadow-lg p-6 flex flex-col justify-between gap-6 hover:scale-105 transition-all transition-300 hover:shadow-green-500">
            
            <h3 className="text-xl font-bold text-green-500 italic text-center">{nome}</h3>
            <Image 
                src="/personal-trainer.jpg" 
                alt="Personal Trainer"
                width={100}
                height={100}
                className="w-24 h-24 rounded-full mx-auto bg-green-500"
            />
            <div className='flex flex-col items-center justify-center text-center gap-4'>
                <p className="text-white mt-2 font-bold">{descricao}</p>
                <p className="text-white italic">{experiencia}</p>
            </div>
            <a className="bg-green-500 text-white font-bold py-2 px-4 text-center rounded hover:bg-green-600 transition-all"
                href="https://wa.me/5534992350081" 
                target="_blank" 
                rel="noopener noreferrer">
                    Saiba Mais
            </a>
        </div>
    )
}