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
    <main className='mx-auto mt-28 flex max-w-6xl items-center p-4'>
      <Background />
      <article className='flex w-2/4 flex-col items-start space-y-12'>
        <h2 className='font-prata text-6xl font-normal capitalize'>{title}</h2>
        <p className='text-justify font-plus_jakarta_sans'>
          <q>{desc}</q>
        </p>
        <Button to='/demo' text='READ MORE' icon={RxArrowRight} />
      </article>
      <img className='w-2/4 object-cover' src={image} alt={imageAlt} />
    </main>
  )
}
