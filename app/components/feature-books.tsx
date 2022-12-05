import Book from './commons/book'

const subtitle = 'Some quality items'.toUpperCase()

export default function FeatureBooks() {
  return (
    <>
      <p className='mt-32 text-center font-plus_jakarta_sans text-sm text-sextenary'>
        {subtitle}
      </p>
      <section className='mx-auto mt-12 flex max-w-6xl flex-col items-center justify-evenly border-t border-b border-octonary'>
        <h2 className='mb-14 -mt-8 bg-primary px-16 font-prata text-5xl'>
          Featured Books
        </h2>
        <section className='flex gap-10'>
          <Book
            author='Armor Ramsey'
            price='40.00'
            title='Simple way of piece life'
          />
          <Book
            author='Armor Ramsey'
            price='40.00'
            title='Simple way of piece life'
          />
          <Book
            author='Armor Ramsey'
            price='40.00'
            title='Simple way of piece life'
          />
          <Book
            author='Armor Ramsey'
            price='40.00'
            title='Simple way of piece life'
          />
        </section>
      </section>
    </>
  )
}
