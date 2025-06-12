// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'SuperAiBro | AI-решения для бизнеса: умные боты и анализаторы данных.',
  description: 'Разрабатываем и внедряем AI-ботов и системы анализа данных для автоматизации бизнес-процессов, повышения продаж и оптимизации работы с клиентами.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white text-base">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}