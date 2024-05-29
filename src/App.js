
import './App.css';

import Nav from './Component/Nav/Nav.js'
import Home from './Component/Home/Home.js'
import About from './Component/About/About.js'
import About2 from './Component/About/About2.js'
import About3 from './Component/About/About3.js'
import Menu from './Component/Menu/Menu.js'
import Chef from './Component/Chef/Chef.js'
import Book from './Component/Book/Book.js'
import Contact from './Component/Contact/Contact.js'
import Footer from './Component/Footer/Footer.js'
import Gallery from './Component/Gallery/Gallery.js'

function App() {
  return (

    <div id='app'>
      <Nav/>
      <Home/>
      <About/>
      <About2/>
      <About3/>
      <Menu/>
      <Chef/>
      <Book/>
      <Gallery/>
      <Contact/>
       <Footer/>
   
    </div>
  );
}

export default App;
