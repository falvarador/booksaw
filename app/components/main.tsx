import { RxArrowRight } from 'react-icons/rx'

import Background from './commons/background'
import Button from './commons/button'

type MainProps = {
  title: string
  desc: string
  image: string
  imageAlt: string
}

export default function Main({ title, desc, image, imageAlt }: MainProps) {
  return (
    <main className='container mx-auto mt-14 flex flex-col items-center justify-around p-4 md:mt-28 md:flex-row'>
      <Background />
      <article className='flex flex-col items-start space-y-12 lg:w-2/5'>
        <h2 className='text-center font-prata text-6xl font-normal capitalize md:text-left'>
          {title}
        </h2>
        <p className='text-justify font-plus_jakarta_sans'>
          <q>{desc}</q>
        </p>
        <Button to='/demo' text='READ MORE' icon={RxArrowRight} />
      </article>
      <img
        className='hidden w-2/5 object-cover md:block'
        src={image}
        alt={imageAlt}
      />
    </main>
  )
}
