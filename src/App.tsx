import './App.css'
import { BrightnessIcon } from "@fluentui/react-icons-mdl2"
import { Canvas } from '@react-three/fiber'
import { Suspense, useLayoutEffect, useState } from 'react'
import Scene from './components/scene/Scene'
import gsap from 'gsap'

function App() {
  const [color, setColor] = useState(["0.88", "0.24", "0.3"]);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      setTimeline(tl);
    });
    return () => ctx.revert();
  }, []);

  const setValuesAndAnimate = (values: string[], id: string) => {
    setColor(values)
    timeline?.to(`#${id}`, {
      color: "#FFF",
      duration: 0.1
    })
  }

  const reverseAnimation = (id: string) => {
    timeline?.to(`#${id}`, {
      color: "#4f4f4f",
      duration: 0.1
    })
  }

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <BrightnessIcon style={{color: "#FFF", fontSize:"1.5rem"}}/>
          </div>
          <div className="links">
            <ul>
              <li><a href="#">Work</a></li>
              <li><a href="#">Agency</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Store</a></li>
            </ul>
            <a href="#" className="Showreel">
              Showreel
            </a>
          </div>
        </nav>
      </header>

      <main>
        <a href='#' onMouseLeave={() => reverseAnimation('Azure')} onMouseEnter={() => setValuesAndAnimate(["0.88", "0.24", "0.3"],'Azure')} id='Azure'>Azure</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Euphoria')} onMouseEnter={() => setValuesAndAnimate(["0.48", "0.48", "0.83"],'Euphoria')} id='Euphoria'>Euphoria</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Scratcher')} onMouseEnter={() => setValuesAndAnimate(["0.24", "0.88", "0.41"],'Scratcher')} id='Scratcher'>Scratcher</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Ember')} onMouseEnter={() => setValuesAndAnimate(["0.84", "0.24", "0.3"],'Ember')} id='Ember'>Ember</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Liquid')} onMouseEnter={() => setValuesAndAnimate(["0.48", "0.24", "0.83"],'Liquid')} id='Liquid'>Liquid Soleil</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Vaccum')} onMouseEnter={() => setValuesAndAnimate(["0.24", "0.88", "0.41"],'Vaccum')} id='Vaccum'>Vaccum</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Morph')} onMouseEnter={() => setValuesAndAnimate(["0.60", "0.24", "0.41"],'Morph')} id='Morph'>Morph</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Resplendent')} onMouseEnter={() => setValuesAndAnimate(["0.48", "0.48", "0.83"],'Resplendent')} id='Resplendent'>Resplendent</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Synthesis')} onMouseEnter={() => setValuesAndAnimate(["0.24", "0.33", "0.41"],'Synthesis')} id='Synthesis'>Synthesis</a>
        <a href='#' onMouseLeave={() => reverseAnimation('Nuke')} onMouseEnter={() => setValuesAndAnimate(["0.88", "0.82", "0.3"],'Nuke')} id='Nuke'>Nuke</a>
      </main>

      <div className="canvas">
          <Canvas>
            <Suspense fallback={null}>
              <Scene color={color}/>
            </Suspense>
          </Canvas>
      </div>
    </>
  )
}

export default App
