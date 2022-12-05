import { Link } from '@remix-run/react'
import React from 'react'

import type { IconType } from 'react-icons/lib'

type ButtonProps = {
  icon: IconType
  text: string
  to: string
}

export default function Button({ icon, text, to }: ButtonProps) {
  return (
    <Link
      className='flex h-14 w-44 cursor-pointer items-center justify-center border border-tertiary p-6 text-center font-plus_jakarta_sans text-sm font-normal uppercase transition hover:bg-tertiaryAlpha'
      to={to}
    >
      {text}
      <div className='ml-2'>{React.createElement(icon)}</div>
    </Link>
  )
}
