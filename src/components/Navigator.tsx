import React, { useState } from 'react'
import { Switch } from './commons/Switch';

export const Navigator: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  const handleEnabled = (value: boolean) => {
    setEnabled(value)
  }

  return (
    <header className="bg-white shadow-2xl m-5 rounded-3xl">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h2 className='text-3xl font-bold text-terracotta-600'>SermarDev</h2>
          </a>
        </div>
        <div className="lg:flex lg:gap-x-12">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Inicio
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Sobre mí
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Tecnologías
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Proyectos
          </a>
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Contacto
          </a>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Switch checked={enabled} type='dark'/>
        </div>
      </nav>
    </header>
  )
}
