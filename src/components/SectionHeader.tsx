
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-10">
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-4 font-josefin text-lg text-wedding-dark/80">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
