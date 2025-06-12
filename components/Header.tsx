"use client";

import { usePathname } from 'next/navigation';
import Logo from './Logo';
import NavBar from './NavBar';
import HomeCover from './HomeCover';

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (isHomePage) {
    return (
      <header className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <Logo width={300} height={120} />
            </div>
            <div className="flex-grow">
              <HomeCover />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between w-full">
          
          <div className="flex-shrink-0">
            <Logo width={300} height={120} />
          </div>

          <div>
            <NavBar />
          </div>

        </div>
      </div>
    </header>
  );
}