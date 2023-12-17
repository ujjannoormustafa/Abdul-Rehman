
import MobileNav from './componets/mobile-nav/MobileNav'
import TopHeader from './componets/top-header/TopHeader'
import Hero from './componets/hero-section/Hero'
import Feature from './componets/feature/Feature'
import Ebook from './componets/ebook/Ebook'
import Cta from './componets/cta/Cta'
export default function Home() {
  return (
    <>
      <TopHeader/>
      <MobileNav/>
      <Hero/>
      <Feature/>
     <Ebook/>
      <Cta/>
    </>

  )
}
