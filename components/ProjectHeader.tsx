import { ReactNode } from "react";

interface ProjectHeaderProps {
    title: string;
    subtitle: string;
    description: string | ReactNode;
  }
  
  export default function ProjectHeader({ title, subtitle, description }: ProjectHeaderProps) {
    return (
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-base">{title}</h2>
        <p className="text-xl text-base/80 mt-2">{subtitle}</p>
        <div className="flex items-center justify-center mt-4">
          <div className="text-lg text-base/80 max-w-3xl">
            {description}
          </div>
        </div>
      </div>
    );
  }
