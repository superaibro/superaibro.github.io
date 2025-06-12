"use client";

import Link from "next/link";
import Image from "next/image";
export default function PromoCard({ href, title, description, imgSrc, imgAlt }: {
    href: string;
    title:string;
    description: string;
    imgSrc: string;
    imgAlt: string;
    }) {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 p-6 bg-white rounded-lg">
        <div className="flex-shrink-0 w-full md:w-1/3">
            <Image
            src={imgSrc}
            alt={imgAlt}
            width={400}
            height={300}
            className="rounded-lg object-cover"
            />
        </div>
        <div className="flex-grow">
            <Link href={href}>
            {/* Ссылка теперь основного цвета, а при наведении становится primary */}
            <h2 className="text-3xl font-bold text-base hover:text-primary transition-colors">
                {title}
            </h2>
            </Link>
            <p className="mt-4 text-lg text-base/80">
            {description}
            </p>
        </div>
        </div>
    );
    }
