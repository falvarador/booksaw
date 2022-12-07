import Book from './commons/book'

const subtitle = 'Some quality items'.toUpperCase()

export default function FeatureBooks() {
  return (
    <section className='container mx-auto'>
      <p className='mt-32 text-center font-plus_jakarta_sans text-sm text-sextenary'>
        {subtitle}
      </p>
      <div className='mt-12 flex flex-col items-center justify-evenly border-t border-b border-octonary'>
        <h2 className='mb-14 -mt-8 bg-primary px-16 text-center font-prata text-5xl'>
          Featured Books
        </h2>
        <aside className='flex flex-col gap-5 p-2 md:flex-row lg:gap-10'>
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
        </aside>
      </div>
    </section>
  )
}
