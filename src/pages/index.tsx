import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Hero } from 'Layout/Hero'
import { Services } from 'Layout/Services'
import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  )
}

export default Home
