"use client";

import { useState } from 'react';
import Image from 'next/image';
import NavLink from './NavLink';
import IconLink from './IconLink';
import { menuItems } from '@/menu';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex md:items-center md:space-x-6">
        <div className="flex items-center space-x-4">
          {menuItems.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>
        <div className="h-6 w-px bg-gray-200" />
        <div className="flex items-center space-x-1">
          <IconLink href="https://t.me/superaibro" label="Написать в Telegram" iconSrc="/icons/telegram.svg" size={28} />
          <IconLink href="https://wa.me/5491138187282" label="Написать в WhatsApp" iconSrc="/icons/whatsapp.svg" size={28} />
        </div>
      </nav>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Открыть меню" className="p-2">
          <Image src="/icons/hamburger.svg" alt="Иконка меню" width={32} height={32} />
        </button>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Закрыть меню"
            className="absolute top-8 right-6 p-2"
          >
            <Image src="/icons/close.svg" alt="Иконка закрытия меню" width={32} height={32} />
          </button>
          
          <nav 
            className="flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-8">
              {menuItems.map((link) => (
                <div key={link.href} onClick={() => setIsOpen(false)}>
                  <NavLink href={link.href} label={link.label} />
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center space-y-4">
              <span className="text-base font-medium">Контакты:</span>
              <div className="flex items-center space-x-4">
                  <IconLink 
                    href="https://t.me/superaibro" 
                    label="Написать в Telegram" 
                    iconSrc="/icons/telegram.svg" 
                    text="Telegram" 
                    size={32}
                    textSize="text-lg"
                  />
                  <IconLink 
                    href="https://wa.me/5491138187282" 
                    label="Написать в WhatsApp" 
                    iconSrc="/icons/whatsapp.svg" 
                    text="WhatsApp" 
                    size={32}
                    textSize="text-lg"
                  />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}