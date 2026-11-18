import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackTitle}
        className={`flex flex-col items-center justify-center bg-[#161B26] border border-[#272F40] text-center p-6 ${className}`}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
          className="mb-3 text-[#E4C06C]"
        >
          <rect x="3" y="3" width="26" height="26" rx="4" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 22L14 15L18.5 19.5L22 16L25 22H8Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <span className="text-xs font-medium text-[#A8B0C2]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
