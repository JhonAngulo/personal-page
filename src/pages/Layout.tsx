import Header from '../components/Header'
import Footer from '../components/Footer'
import type { FC } from 'react'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main-container'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
