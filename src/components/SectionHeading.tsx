import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = 'light',
  align = 'left',
  className = ''
}: SectionHeadingProps) {
  const isDark = theme === 'dark';
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex max-w-3xl flex-col ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`text-sm font-medium tracking-wide ${
            isDark ? 'text-sand' : 'text-terracotta-accessible'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2.5 font-display text-3xl font-medium tracking-tight sm:text-[2.5rem] sm:leading-[1.14] ${
          isDark ? 'text-ivory' : 'text-olive'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            isDark ? 'text-ivory/82' : 'text-olive-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
