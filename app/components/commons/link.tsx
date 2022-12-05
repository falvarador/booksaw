import type { ReactNode } from 'react'

import { NavLink } from '@remix-run/react'

type LinkProps = {
  children: ReactNode | string
  to: string
}

export default function Link({ children, to }: LinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? 'text-quaternary hover:underline' : 'hover:underline'
      }
    >
      {children}
    </NavLink>
  )
}
