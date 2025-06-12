import Image from 'next/image';

interface PageIntroProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}

export default function PageIntro({ title, description, imgSrc, imgAlt }: PageIntroProps) {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-base">
            {title}
          </h1>
          <p className="mt-4 text-lg text-base/80 max-w-xl mx-auto md:mx-0">
            {description}
          </p>
        </div>

        <div className="flex-shrink-0 w-3/4 md:w-2/5 max-w-sm">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={500}
            height={400}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

      </div>
    </section>
  );
}