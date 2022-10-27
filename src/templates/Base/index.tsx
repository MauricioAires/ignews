import { ReactNode } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

interface BaseTemplateProps {
  children: ReactNode
}
export function BaseTemplate({ children }: BaseTemplateProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
