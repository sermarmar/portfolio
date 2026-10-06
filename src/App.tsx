import { useLayoutEffect } from 'react'
import { Outlet, ScrollRestoration, useLocation, type Location } from 'react-router'
import { Navigator } from './template/Navigator'

// La primera página que se carga en una pestaña siempre tiene la clave "default": sin la ruta en la clave,
// abrir otra URL desde cero en la misma pestaña recuperaría el scroll de la anterior.
const scrollKey = (location: Location) => `${location.pathname}${location.hash}:${location.key}`

// El `scroll-behavior: smooth` del CSS animaría el salto al cambiar de página (arriba del todo o la posición guardada al volver).
// Se desactiva justo antes de que ScrollRestoration haga scroll y se recupera en el siguiente frame para los anclajes de la misma página.
function InstantScrollOnPageChange() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    const html = document.documentElement
    html.style.scrollBehavior = 'auto'
    const frame = requestAnimationFrame(() => html.style.removeProperty('scroll-behavior'))
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

function App() {

  return (
    <>
      <Navigator />
      <Outlet />
      <InstantScrollOnPageChange />
      <ScrollRestoration getKey={scrollKey} />
    </>
  )
}

export default App
