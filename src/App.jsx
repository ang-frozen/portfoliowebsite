
import styles from './App.module.css'
import {About} from './components/About/About'
import { Awards } from './components/Awards/Awards'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Publications } from './components/Publications/Publications'
import { Certificates } from './components/Certificates/Certificates'
import { Contact } from './components/Contact/Contact'
import { Down } from './components/down/Down'

function App() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Down />
      <About />
      <Skills />
      <Awards />
      <Publications />
      <Certificates />
      <Experience />
      <Projects />
      <Contact/>
    </div>
    
  )
}

export default App
