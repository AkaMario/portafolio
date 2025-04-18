import './App.css'
import Navbar from './components/Navbar'
import Animacion from './components/Animacion'
import AnimacionArrow from './components/ArrowAnimacion'
import About from './pages/SobreMi/about'
import Experience from './pages/Experiencias/experience'
import Proyectos from './pages/Proyectos/proyectos'
import Formacion from './pages/Formacion/formacion'


function App() {

  return (
    <>
      <Navbar />
      <section>
        <div className="principal">
          <h1>Mario</h1>
          <p>Systems Engineer | Web Developer | UX/UI</p>
        </div>
        <Animacion/>
      </section>
      <section>
       <About/>
      </section>
      <section>
        <Experience/>
      </section>
      <section>
        <Proyectos/>
      </section>
      <section>
        <Formacion/>
      </section>
      <AnimacionArrow/>
    </>
  )
}

export default App
