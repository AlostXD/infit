import React from 'react'
import Cardplano from '../components/cardplano'

type Props = {}

export default function Planos({}: Props) {
  return (
    <>
    <main className='bg-linear-to-b from-stone-900 to-black text-white flex flex-col justify-center items-center space-y-6'>
        <h1>Planos Page</h1>
        <div className="flex flex-col md:flex-row gap-6">
            <Cardplano 
                nome="Básico"
                descricao="Acesso a treinos personalizados e acompanhamento mensal."
                valor="R$99,90/mês"
                imagem="/plano-basico.jpg"
                cor="red"
            />
            <Cardplano
                nome="In-fit"
                descricao="Inclui plano básico + consultas quinzenais com o personal trainer."
                valor="R$199,90/mês"
                imagem="/plano-intermediario.jpg"
                cor="green"
            />
            <Cardplano
                nome="Gold"
                descricao="Inclui plano intermediário + acompanhamento nutricional e suporte 24/7."
                valor="R$299,90/mês"
                imagem="/plano-avancado.jpg"
                cor="yellow"
            />
        </div>
    </main> 
    </>
  )
}