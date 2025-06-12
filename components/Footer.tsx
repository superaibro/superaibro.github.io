import IconLink from './IconLink';
import NavLink from './NavLink';
import { menuItems } from '@/menu';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex justify-center">
        <div className="inline-flex flex-col items-center space-y-6 bg-gray-100 rounded-t-lg px-12 py-6">

          <div className="flex flex-col items-center space-y-4">
            <span className="text-lg text-base font-medium">Контакты:</span>
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

          <div className="w-full h-px bg-gray-300"></div>

          <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            {menuItems.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

        </div>
      </div>
    </footer>
  );
}