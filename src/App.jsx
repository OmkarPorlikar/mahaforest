// import './App.css'

import AppandLinks from "./components/App&Links/AppandLinks"
import Forest from "./components/Forest/Forest"
import Header from "./components/Header/Header"
import Header1 from "./components/Header/Header1"
import Header2 from "./components/Header/Header2"
import ForestDepartmentHero from "./components/Hero/Hero"
import HeroSections from "./components/Hero/Hero"
import Hero1 from "./components/Hero/Hero1"
import HeroDesign4 from "./components/Hero/HeroDesign4"
import Gallery from "./components/Gallery/Gallery"
import Events from "./components/Events/Events"
import Events1 from "./components/Events/Events1"
import News from "./News"
import  { FooterVariantFour, FooterVariantOne, FooterVariantThree, FooterVariantTwo } from "./components/Footer/Footer"
import Links from "./components/Links/Link"
function App() {

  return (
    <>
    <div className="flex gap-8 flex-col">   
    <Header2/>
 {/* <HeroDesign4/> */}
 {/* <ForestDepartmentHero/> */}
 <Hero1/>
  <News/>
 <Forest/>
 {/* <Events/> */}
 <Events1/>
 <Gallery/>
 <AppandLinks/>
<Links/>
<FooterVariantOne/>
{/* <FooterVariantTwo/> */}
{/* <FooterVariantThree/> */}
{/* <FooterVariantFour/> */}
      </div>
    </>
  )
}

export default App
