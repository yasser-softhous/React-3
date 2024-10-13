
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import { Home } from './Components/Home/Home.jsx'
import { Navbar } from './Components/Navbar/Navbar.jsx'
import {Contact} from './Components/Contact/Contact.jsx'
import {Products} from './Components/Products/Products.jsx'
import {ProductDetails} from './Components/ProductDetails/ProductDetails.jsx'
import { Footer } from './Components/Footer/Footer.jsx'
import { About } from './Components/About/About.jsx'
import {NotFound} from './Components/NotFound/NotFound.jsx'
import { Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
        <Navbar />

    <Routes>
      <Route path='/'  element={<Home />} />
      <Route path='/products'  element={<Products />  } />
      <Route path='/products/:id'  element={<ProductDetails />  } />
      <Route path='/about'  element={<About />} />
      <Route path='/contact'  element={<Contact />} />
      <Route path='*'  element={<NotFound />} />        
    </Routes>
      <Footer />
    </>
  )
}

export default App
