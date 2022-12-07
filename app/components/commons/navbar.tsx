import Link from './link'

export default function Navbar() {
  return (
    <nav className='flex flex-col items-center justify-center px-4 md:flex-row md:justify-between'>
      <h1 className='mb-6 font-cormorant_unicase text-5xl font-bold md:mb-0'>
        BOOK
        <p className='inline font-light'>SAW</p>
      </h1>
      <section className='flex flex-col gap-3 text-center font-plus_jakarta_sans font-light uppercase tracking-wide md:flex-row md:space-x-12'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/books'>Books</Link>
        <Link to='/contact'>Contact</Link>
      </section>
    </nav>
  )
}
