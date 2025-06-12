import PageIntro from '@/components/PageIntro';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectPresentation from '@/components/ProjectPresentation';
import OtherProductsSection from '@/components/OtherProductsSection';
import { CheckCircle2 } from 'lucide-react'; 
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Парсеры и AI-анализаторы данных - Разрабатываем и поддерживаем.',
  description: 'Разрабатываем AI-анализаторы и асинхронные парсеры для бизнеса. Автоматизируем сбор данных, находим скрытые закономерности и точки роста для принятия верных стратегических решений.',
};

const intro = {
  title: "Асинхронные парсеры и AI-анализаторы данных",
  description: "Наши AI-системы просеют гигабайты ваших данных — от продаж до отзывов клиентов — чтобы найти скрытые закономерности и точки роста. Перестаньте гадать. Получите четкое видение рынка и стратегическое преимущество, основанное на фактах.",
  imgSrc: "/images/analyzer-promo.svg",
  imgAlt: "Асинхронные парсеры и AI-анализаторы данных",
};

const featureCategories = [
  {
    icon: '💡',
    title: 'Где применяются AI-анализаторы?',
    features: [
      'Прогнозирование спроса и анализ рыночных трендов',
      'Сегментация клиентской базы и поиск целевых аудиторий',
      'Оценка эффективности сотрудников и бизнес-процессов',
      'Мониторинг чатов, комментариев и постов в социальных сетях',
    ],
  },
  {
    icon: '🎯',
    title: 'Что умеют наши AI-анализаторы?',
    features: [
      'Высокопроизводительный многопоточный парсинг в реальном времени',
      'Иерархическая система принятия решений на базе машинного обучения',
      'Комплексный анализ текста, аудио, изображений и видео',
      'Микросервисная архитектура, масштабируемая под любые нагрузки',
    ],
  },
  {
    icon: '🔗',
    title: 'С чем интегрируются  наши AI-анализаторы?',
    features: [
      'Все популярные мессенджеры и соцсети',
      'Любые веб-сайты и мобильные приложения',
      'Внешние API сервисы',
      'CRM-системы (amoCRM, Bitrix24 и др.)',
    ],
  },
];


const projectDescription =
  <div className="space-y-4 pt-4">
    <p>
      Платформа для параллельного парсинга и анализа сообщений и постов в Telegram в реальном времени.
    </p>

    <p>
      В систему можно добавить неограниченное количество чатов и каналов и сгруппировать их по категориям. Источники обрабатываются роем парсеров: один кластер способен обрабатывать до 10 000 сообщений в минуту.
    </p>

    <p>
      Для анализа данных подключаются наблюдатели (обсерверы). Им задаются группы источников, настраивается быстрая первичная фильтрация по эмбеддингам и указывается промпт для анализа каждого сообщения.
    </p>

    <p>
      Каждое сообщение, прошедшее через обсервер, может быть отправлено в несколько Telegram-каналов или в Google Sheets, а также в любой внешний сервис через Webhook API.
    </p>

    <p>
      Обсерверы можно связать с проектами, чтобы контролировать расход токенов и выставлять счета вашим клиентам.
    </p>

    <p>
      <strong className="font-bold text-red-500">Скоро</strong> — расширенный ИИ-поиск по всей базе сообщений!
    </p>
  </div>

;

const aitemSlides = [
    {
      imgSrc: '/images/ai-analyzers/aitem_2.png',
      title: 'Анализ конкурентов'
    },
    {
      imgSrc: '/images/ai-analyzers/aitem_3.png',
      title: 'Поиск прибыльных ниш'
    },
    {
      imgSrc: '/images/ai-analyzers/aitem_4.png',
      title: 'Прогноз продаж'
    },
    {
      imgSrc: '/images/ai-analyzers/aitem_5.png',
      title: 'Автоматические отчеты'
    },
    {
      imgSrc: '/images/ai-analyzers/aitem_1.png',
      title: 'Дашборд с ключевыми метриками'
    }
];

export default function AiAnalyzersPage() {
  return (
    <div className="space-y-20 md:space-y-24">
      <PageIntro
        title={intro.title}
        description={intro.description}
        imgSrc={intro.imgSrc}
        imgAlt={intro.imgAlt}
      />

      <section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-base">
            Что именно может наша AI-платформа?
          </h2>
          <p className="mt-2 text-lg text-base/80 max-w-3xl mx-auto">
            Мы не просто показываем графики. Мы даем готовые ответы для роста вашего бизнеса, автоматизируя сложный анализ.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureCategories.map((category) => (
            <div key={category.title} className="bg-base/5 border border-base/10 rounded-lg p-6 flex flex-col">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              <ul className="mt-4 space-y-3 text-base/90 flex-grow">
                {category.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <ProjectHeader
          title="Aitem"
          subtitle="Пример продукта"
          description={projectDescription}
        />
        <ProjectPresentation slides={aitemSlides} />
      </section>

      {/* Секция с другими продуктами */}
      <section>
        <OtherProductsSection />
      </section>
    </div>
  );
}