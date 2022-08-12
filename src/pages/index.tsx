import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Hero } from 'Layout/Hero'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default Home
