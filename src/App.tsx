import { Outlet, ScrollRestoration, type Location } from 'react-router'
import { SmoothScroll } from './components/SmoothScroll'
import { Navigator } from './template/Navigator'

// La primera página que se carga en una pestaña siempre tiene la clave "default": sin la ruta en la clave,
// abrir otra URL desde cero en la misma pestaña recuperaría el scroll de la anterior.
const scrollKey = (location: Location) => `${location.pathname}${location.hash}:${location.key}`

function App() {

  return (
    <>
      <Navigator />
      <Outlet />
      <ScrollRestoration getKey={scrollKey} />
      <SmoothScroll />
    </>
  )
}

export default App
