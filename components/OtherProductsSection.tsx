'use client';

export default function OtherProductsSection() {
    const products = [
      'Веб-приложения',
      'Мобильная разработка', 
      'Парсеры',
      'Анализ данных'
    ];
  
    const techStackBlocks = [
      {
        title: 'Frontend',
        technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Figma']
      },
      {
        title: 'Backend',
        technologies: ['Nest.js', 'FastAPI', 'PostgreSQL', 'RabbitMQ']
      },
      {
        title: 'DevOps',
        technologies: ['Kubernetes', 'Terraform', 'GitLab CI/CD', 'Ansible']
      },
      {
        title: 'Other',
        technologies: ['React Native', 'Telethon', 'aiogram', 'Selenium']
      },      
    ];

    const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
      const container = e.currentTarget;
      const hasOverflow = container.scrollWidth > container.clientWidth;
      
      if (hasOverflow) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
  
    return (
      <section className="bg-gray-50 rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-base mb-4">
            Индивидуальные решения
          </h2>

          <p className="text-lg text-base/80 leading-relaxed">
            Разработка современных приложений на микросервисной архитектуре с интеграцией продвинутых ИИ функций:
          </p>
          
          <div className="text-lg text-base/80 leading-relaxed">
            <div className="block sm:hidden text-left">
              {products.map((product, index) => (
                <div key={index} className="mb-1">
                  <b>{product}</b>
                </div>
              ))}
            </div>
            
            <div className="hidden sm:block">
              {products.map((product, index) => (
                <span key={index}>
                  <b>{product}</b>
                  {index < products.length - 1 && (
                    <span className="mx-2 text-gray-400">/</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold text-base text-center mb-6">
            Технологический стек:
          </h3>
          
          <div 
            className="flex overflow-x-auto gap-6 pb-4 lg:grid lg:grid-cols-4 lg:overflow-x-visible lg:pb-0"
            onWheel={handleWheel}
          >
            {techStackBlocks.map((block, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow flex-shrink-0 w-64 lg:w-auto"
              >
                <h4 className="text-lg font-bold text-base mb-3 text-center">
                  {block.title}
                </h4>
                <div className="space-y-2">
                  {block.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-50 rounded px-3 py-2 text-center"
                    >
                      <span className="text-sm font-medium text-base/80">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }