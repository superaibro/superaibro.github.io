import PromoCard from '@/components/PromoCard';
import OtherProductsSection from '@/components/OtherProductsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-решения для бизнеса: Умные боты и анализаторы данных',
  description: 'Разрабатываем и внедряем AI-ботов и системы анализа данных для автоматизации бизнес-процессов, повышения продаж и оптимизации работы с клиентами.',
};

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-12">
        <PromoCard
          href="/ai-analyzers/"
          title="AI-Анализаторы"
          description="Глубокий анализ данных с помощью передовых нейросетей. Получайте инсайты, стройте прогнозы и оптимизируйте процессы."
          imgSrc="/images/analyzer-promo.svg"
          imgAlt="Промо-изображение AI-анализаторов"
        />
        <PromoCard
          href="/ai-bots/"
          title="AI-Боты"
          description="Интеллектуальные ассистенты и чат-боты для вашего бизнеса. Автоматизируйте коммуникацию с клиентами 24/7."
          imgSrc="/images/bot-promo.svg"
          imgAlt="Промо-изображение AI-ботов"
        />
          <hr className="my-16 border-gray-200" />
    
          <section>
            <OtherProductsSection />
          </section>
      </div>
    </div>
  );
}