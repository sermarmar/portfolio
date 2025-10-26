import React from 'react';

const listMenu = [
  { name: 'Inicio', link: '#home' },
  { name: 'Sobre mí', link: '#about' },
  { name: 'Tecnologías', link: '#tecnology' },
  { name: 'Proyectos', link: '#projects' },
  { name: 'Contacto', link: '#contact' }
] 

export const Menu: React.FC = () => {
  return (
    <div className="lg:flex lg:gap-x-12 max-lg:hidden text-[16px] text-gray-900 font-semibold">
      { listMenu.map((item, index) => (
        <a key={ index } href={ item.link } className="hover:text-terracotta-600">
          {item.name}
        </a>
      )) }
    </div>
  );
};