
import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

const SectionHeading = ({ title, subtitle, action }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 border-b border-rekhta-gold/20 pb-2">
      <div>
        <h2 className="text-2xl font-serif text-rekhta-brown">{title}</h2>
        {subtitle && <p className="text-rekhta-brown/70 mt-1">{subtitle}</p>}
      </div>
      {action && <div className="mt-2 sm:mt-0">{action}</div>}
    </div>
  );
};

export default SectionHeading;
