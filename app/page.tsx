import React from 'react'
import Card from './components/card'


export default function Home() {
  return (
    <>
    <main className='bg-linear-to-b from-stone-900 to-black text-white flex flex-col justify-center items-center space-y-6'>
      <div className="flex flex-col justify-center items-center min-h-screen space-y-6">
        <h1 className='font-bold text-green-500 text-5xl italic'>Bem-vindo a In-Fit</h1>
        <p className='font-bold text-lg italic'>A consultoria esportiva que transforma seu corpo com a musculação</p>
        <span className='rotate-90 text-green-500 text-4xl'>{">"}</span>
        <span className='rotate-90 text-green-500 text-2xl opacity-55'>{">"}</span>
        <span className='rotate-90 text-green-500 text-lg  opacity-25'>{">"}</span>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className='font-bold text-2xl text-green-500 italic'>O que a In-Fit?</h2>
        <p className='font-medium text-center max-w-xl'>A In-Fit é uma consultoria esportiva especializada em musculação, dedicada a ajudar você a alcançar seus objetivos de forma eficaz e segura. Nossa equipe de profissionais experientes oferece planos personalizados, acompanhamento contínuo e suporte motivacional para garantir que você obtenha os melhores resultados possíveis.</p>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className='font-bold text-2xl text-green-500 italic'>Por que escolher a In-Fit?</h2>
        <ul className='list-disc list-inside space-y-2 max-w-xl'>
          <li className='font-medium'>Planos Personalizados: Cada indivíduo é único, e nossos planos são adaptados às suas necessidades específicas.</li>
          <li className='font-medium'>Profissionais Qualificados: Nossa equipe é composta por especialistas em musculação e nutrição esportiva.</li>
          <li className='font-medium'>Acompanhamento Contínuo: Monitoramos seu progresso e ajustamos seu plano conforme necessário.</li>
          <li className='font-medium'>Suporte Motivacional: Estamos aqui para incentivar você a cada passo do caminho.</li>
        </ul>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
        <h2 className='font-bold text-2xl text-green-500 italic'>Conheça o seu Personal</h2>
        <Card nome={"José Venâncio Júnior"} descricao={"Personal Traineer, Competidor e Mestre de Taekwoondo"} experiencia={"Mais de 10 anos de experiência em treinamento personalizado e preparação física."
        }/>
      </div>
    </main>
    </>
  )
}