
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, light }) => {
  return (
    <div className="mb-12">
      <h2 className={`text-3xl md:text-4xl font-serif font-bold ${light ? 'text-beige' : 'text-sapGreen'} mb-2`}>
        {title}
      </h2>
      <div className={`h-1 w-20 ${light ? 'bg-beige-dark' : 'bg-sapGreen-light'} rounded-full mb-4`}></div>
      {subtitle && <p className={`max-w-2xl text-lg ${light ? 'text-beige/80' : 'text-gray-600'}`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
