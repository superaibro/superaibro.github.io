"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`block md:inline-block px-3 py-2 rounded-md text-lg font-bold transition-colors no-underline ${
        isActive
          ? 'border-b-2 border-primary'
          : 'border-b-2 border-transparent hover:border-primary'
      }`}
    >
      {label}
    </Link>
  );
}