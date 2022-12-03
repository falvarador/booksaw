import type { Book } from '~/types/book'

type SearchParams = {
  query: string
  page: number
}

export async function getNewBooks(): Promise<Book[]> {
  const response = await fetch('https://api.itbook.store/1.0/new')
  return await response.json()
}

export async function searchBooks({
  query,
  page
}: SearchParams): Promise<Book[]> {
  const response = await fetch(
    `https://api.itbook.store/1.0/search/${query}/${page}`
  )
  return await response.json()
}

export async function getBook(isbn: string): Promise<Book> {
  const response = await fetch(`https://api.itbook.store/1.0/books/${isbn}`)
  return await response.json()
}
