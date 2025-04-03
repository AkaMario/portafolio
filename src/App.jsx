import './App.css'
import Navbar from './components/Navbar'
import Animacion from './components/Animacion'
import AnimacionArrow from './components/ArrowAnimacion'


function App() {

  return (
    <>
      <Navbar />
      <div className="principal">
        <h1>Mario</h1>
        <p>Systems Engineer | Web Developer | UX/UI</p>
      </div>
      <Animacion/>
      <AnimacionArrow/>
    </>
  )
}

export default App
