import Image from 'next/image'
import React from 'react'

type Props = {
    nome: string,
    descricao: string,
    valor: string,
    imagem?: string,
    shadow: string,
    text: string
}

export default function Cardplano({nome, descricao, valor, imagem, shadow, text}: Props) {
  return (
    <div className={`w-80 bg-stone-800 rounded-lg shadow-lg p-6 flex flex-col justify-between gap-6 hover:scale-105 transition-all transition-300 hover:${shadow}`}>
        <h1 className=' font-bold text-center'>Plano <span className={`font-bold text-2xl ${text}`}>{nome}</span></h1>
        <Image
            src={imagem || '/plano-basico.jpg'}
            alt={nome}
            width={150}
            height={250}
        />
        <p className='text-center mt-4'>{descricao}</p>
        <p className='text-center mt-2 font-bold text-green-500'>Valor: {valor}</p>
    </div>
  )
}