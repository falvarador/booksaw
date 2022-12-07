type BookProps = {
  author: string
  price: string
  title: string
}

export default function Book({ author, price, title }: BookProps) {
  return (
    <article>
      <figure className='border border-solid border-septenaryStroke bg-septenary'>
        <img
          src='https://itbook.store/img/books/9781617294136.png'
          alt='book cover'
          className='object-cover drop-shadow-lg'
        />
      </figure>
      <aside className='p-4'>
        <h3 className='text-center font-prata text-lg font-normal text-quaternary'>
          {title.replace(/(^\w{1})|(\s+\w{1})/g, letter =>
            letter.toUpperCase()
          )}
        </h3>
        <p className='mt-2 text-center font-plus_jakarta_sans text-sm font-normal text-sextenary'>
          {author}
        </p>
        <p className='mt-4 text-center font-prata text-sm font-normal text-sextenary'>
          ${price}
        </p>
      </aside>
    </article>
  )
}
