// menu.ts
export interface MenuItem {
  href: string;
  label: string;
}

export const menuItems: MenuItem[] = [
  { href: '/ai-analyzers/', label: 'AI-Анализаторы' },
  { href: '/ai-bots/', label: 'AI-Боты' },
];