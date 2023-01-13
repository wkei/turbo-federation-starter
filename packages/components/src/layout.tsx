import { Outlet } from 'react-router-dom'

import { Header } from './header'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
    </div>
  )
}
