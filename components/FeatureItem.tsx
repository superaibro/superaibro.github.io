import Image from 'next/image';

interface FeatureItemProps {
  text: string;
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <Image
          src="/icons/feature-icon.svg"
          alt="Иконка услуги"
          width={24}
          height={24}
        />
      </div>
      <span className="text-base/80">{text}</span>
    </div>
  );
}