import React, { useState } from 'react';
import { Cpu, Users, ShieldCheck, Tag, Image as ImageIcon } from 'lucide-react';
import { TopicId } from '../types';
import { RenderLogoByName } from './TechLogos';

interface ImageWithFallbackProps {
  src?: string;
  alt: string;
  category?: TopicId;
  logoSvgKey?: string;
  className?: string;
  aspectRatio?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  category,
  logoSvgKey,
  className = "w-full h-full object-cover",
  aspectRatio = "aspect-video"
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // If this item is a logo with an SVG key, render the crisp vector logo
  if (logoSvgKey || category === 'logos') {
    const lookupKey = logoSvgKey || alt;
    return (
      <div className={`w-full ${aspectRatio} bg-slate-900/90 rounded-xl flex items-center justify-center p-6 border border-slate-800 shadow-inner group-hover:border-cyan-500/30 transition-all`}>
        <RenderLogoByName name={lookupKey} className="w-24 h-24 max-h-full max-w-full drop-shadow-md" />
      </div>
    );
  }

  const getFallbackIcon = () => {
    switch (category) {
      case 'hardware':
        return <Cpu className="w-12 h-12 text-cyan-400 opacity-80" />;
      case 'persons':
        return <Users className="w-12 h-12 text-purple-400 opacity-80" />;
      case 'slogans':
        return <Tag className="w-12 h-12 text-amber-400 opacity-80" />;
      default:
        return <ImageIcon className="w-12 h-12 text-slate-500" />;
    }
  };

  if (!src || hasError) {
    return (
      <div className={`w-full ${aspectRatio} bg-slate-900 rounded-xl flex flex-col items-center justify-center p-4 border border-slate-800 text-slate-400 gap-2`}>
        {getFallbackIcon()}
        <span className="text-xs font-mono text-slate-400 text-center line-clamp-1 px-2">{alt}</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${aspectRatio} bg-slate-900/60 rounded-xl overflow-hidden border border-slate-800/80`}>
      {isLoading && (
        <div className="absolute inset-0 bg-slate-800/60 animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
};
