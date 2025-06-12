import Image from 'next/image';

interface IconLinkProps {
  href: string;
  iconSrc: string;
  label: string;
  size?: number;
  text?: string;
  textSize?: string;
}

export default function IconLink({ href, iconSrc, label, size = 24, text, textSize = 'text-sm' }: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center p-2 rounded-full text-base hover:bg-light transition-colors group no-underline"
    >
      <Image
        src={iconSrc}
        alt={`${label} icon`}
        width={size}
        height={size}
      />
      {text && <span className={`ml-2 font-medium ${textSize}`}>{text}</span>}
    </a>
  );
}