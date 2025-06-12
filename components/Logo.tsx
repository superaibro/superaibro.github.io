import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 150, height = 50 }: LogoProps) {
  return (
    <Link href="/" aria-label="Вернуться на главную">
      <Image
        src="/logo.svg"
        alt="Логотип сайта"
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}