import PageIntro from '@/components/PageIntro';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectPresentation from '@/components/ProjectPresentation';
import OtherProductsSection from '@/components/OtherProductsSection';
import { CheckCircle2 } from 'lucide-react'; 

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI-боты - Разрабатываем и поддерживаем.',
  description: 'Создаем умных AI-ботов для автоматизации вашего бизнеса. Они примут заказы, ответят на вопросы клиентов и интегрируются с CRM. Освободите сотрудников от рутинных задач.',
};


const intro = {
  title: "Продвинутые AI-боты",
  description: "Освободите своих сотрудников от рутины и подарите клиентам лучший пользовательский опыт. Мы разрабатываем умных AI-ботов, которые говорят на естественном языке, легко встраиваются в вашу рабочую среду и берут на себя ключевые задачи — от приёма заказов до сбора обратной связи.",
  imgSrc: "/images/bot-promo.svg",
  imgAlt: "Интеллектуальные AI-боты",
};

const featureCategories = [
  {
    icon: '📈',
    title: 'Где можно использовать AI-ботов?',
    features: [
      'Сайты и лендинги',
      'Мессенджеры и социальные сети', 
      'Мобильные приложения',
      'API сторонних сервисов',
    ]
  },
  {
    icon: '⚙️',
    title: 'Что умеют делать наши AI-боты?',
    features: [
      'Принимать заказы и записывать на услуги',
      'Отвечать на типовые вопросы',
      'Собирать обратную связь и проводить опросы',
      'Переключать на нужного сотрудника'
    ]
  },
  {
    icon: '🔗',
    title: 'С чем интегрируются AI-боты?',
    features: [
      'CRM-системы (amoCRM, Bitrix24 итд.)',
      'Системы управления складом и товарами',
      'Платежные системы для приема оплаты',
      'Любые другие сервисы с API'
    ]
  }
];

const cambioBotDescription = 
  <div className='space-y-4 pt-4'>
      <p>
          Telegram-бот и CRM-система для криптообменников.
          Позволяет рассчитывать стоимость и принимать заказы на обмен валют.
      </p>
      <p>
          Клиент в свободной форме указывает валютные пары и суммы, которые желает обменять. Система автоматически рассчитывает стоимость обмена по актуальному курсу и запрашивает способ получения средств, время и адрес доставки. Далее заказ подтверждается и отправляется в CRM-систему. Также клиент может задавать вопросы, на которые бот ответит, если ответ есть в FAQ, или предложит обратиться к менеджеру.
      </p>
      <p>
          В панели администратора можно добавлять, удалять и редактировать валютные пары, а также просматривать историю заказов. Новые заказы также отправляются в Telegram-канал. В настройках можно указать стоимость доставки, минимальную сумму заказа, ответы на часто задаваемые вопросы и другие параметры.
      </p>
  </div>
;

// Данные для слайдов проекта (оставил ваши данные)
const cambioBotSlides = [
    {
      imgSrc: '/images/ai-bots/aicambiobot_1.png',
      title: 'Запрос стоимости обмена',
    },
    {
      imgSrc: '/images/ai-bots/aicambiobot_2.png',
      title: 'Указание адреса доставки',
    },
    {
      imgSrc: '/images/ai-bots/aicambiobot_3.png',
      title: 'Подтверждение заказа',
    },
    {
      imgSrc: '/images/ai-bots/aicambiobot_4.png',
      title: 'Ответы на вопросы клиента',
    },
    {
      imgSrc: '/images/ai-bots/aicambiobot_5.png',
      title: 'Управление валютными парами',
    },
    {
      imgSrc: '/images/ai-bots/aicambiobot_6.png',
      title: 'История заказов',
    },
    {
      imgSrc: '/images/ai-bots/aicambiobot_7.png',
      title: 'Страница настроек',
    }
];

export default function AiBotsPage() {
  return (
    <div className="space-y-20 md:space-y-24">
      <PageIntro
        title={intro.title}
        description={intro.description}
        imgSrc={intro.imgSrc}
        imgAlt={intro.imgAlt}
      />

      {/* Новый структурированный раздел возможностей */}
      <section>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-base">
            Что сможет ваш новый AI-сотрудник?
          </h2>
          <p className="mt-2 text-lg text-base/80 max-w-3xl mx-auto">
            Мы создадим для вас не просто чат-бота, а полноценного цифрового помощника, который решает конкретные задачи вашего бизнеса.
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

      {/* Секция с примером проекта */}
      <section>
        <ProjectHeader
          title="AiCambioBot"
          subtitle="Пример продукта"
          description={cambioBotDescription}
        />
        <ProjectPresentation slides={cambioBotSlides} />
      </section>
      

      <section>
        <OtherProductsSection />
      </section>
    </div>
  );
}