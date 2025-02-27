import { Switch } from "../components/commons/Switch";
import { Drawer } from "../components/Drawer";
import { MobileMenuButton } from "../components/MobileMenuButton";
import { Menu } from "../components/Menu";
import { DrawerProvider } from "../providers/drawer/DrawerProvider";
import type React from "react";

let enabled = true;

export const Navigator: React.FC = () => {
  return(
    <DrawerProvider>
      <header className="bg-white/50 backdrop-blur-lg shadow-2xl m-5 rounded-3xl fixed inset-x-1 top-1">
        <nav aria-label="Global" className="mx-auto flex items-center justify-between p-6 lg:px-8">
          <div className="max-lg:hidden lg:flex lg:flex-1 ">
            <a href="#" className="-m-1.5 p-1.5">
              <h2 className='text-3xl font-bold text-terracotta-600'> &gt; SermarDev</h2>
            </a>
          </div>
          <div className="lg:hidden text-gray-900">
            <MobileMenuButton />
          </div>
          <Menu/>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <Switch checked={enabled} type='dark'/>
          </div>
        </nav>
      </header>
      <Drawer />
    </DrawerProvider>
  );
}


