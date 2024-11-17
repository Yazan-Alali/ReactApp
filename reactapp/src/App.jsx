import './App.css'
import Carousel from './components/Carousel'
import Client from './components/Client'
import Contacts from './components/Contacts'
import Customers from './components/Customers'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import MainNav from './components/Mainnav'
import ShowCase from './components/ShowCase'
import Subscribe from './components/Subscribe'
import Transfers from './components/Transfers'

function App() {


  return (
    <>
     <MainNav />
    <main id="main">
      <ShowCase />
      <Customers />
      <Features />
      <Carousel />
      <Transfers />
      <Contacts />
      <Client />
      <Faq />
      <Subscribe />
      <Footer />
    </main>

    </>
  )
}

export default App


