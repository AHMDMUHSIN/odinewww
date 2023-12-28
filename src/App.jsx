
import './App.css'
import Navbar from './components/navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/body/home/Home'
import About from './components/body/about/About'
import Contact from './components/body/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
      <Route path='/contact' Component={Contact}/>

     </Routes>
     <Footer/>
     </BrowserRouter>

     
    </>
  )
}

export default App
