import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  styles: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  styles,
}) => {
  return (
    <div className={`section-heading ${styles}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
