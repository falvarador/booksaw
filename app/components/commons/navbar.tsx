import Link from './link'

export default function Navbar() {
  return (
    <nav className='flex w-full items-center justify-between px-4'>
      <h1 className='font-cormorant_unicase text-5xl font-bold'>
        BOOK
        <p className='inline font-light'>SAW</p>
      </h1>
      <section className='flex space-x-12 font-plus_jakarta_sans font-light uppercase tracking-wide'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/books'>Books</Link>
        <Link to='/contact'>Contact</Link>
      </section>
    </nav>
  )
}
