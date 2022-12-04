import { Outlet } from '@remix-run/react'
import Header from '~/components/commons/header'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
