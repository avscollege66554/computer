import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const MicrosoftLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Microsoft Logo">
    <rect x="5" y="5" width="42" height="42" fill="#F25022" rx="2" />
    <rect x="53" y="5" width="42" height="42" fill="#7FBA00" rx="2" />
    <rect x="5" y="53" width="42" height="42" fill="#00A4EF" rx="2" />
    <rect x="53" y="53" width="42" height="42" fill="#FFB900" rx="2" />
  </svg>
);

export const AppleLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 170 170" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Apple Logo">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.92-3.26-7.85-8.12-11.78-14.59-6.3-10.4-11.22-21.73-14.76-33.99-3.54-12.26-5.31-23.77-5.31-34.54 0-14.28 3.73-26.24 11.2-35.88 7.46-9.64 16.9-14.57 28.3-14.79 4.35 0 9.28 1.16 14.79 3.49 5.51 2.33 9.4 3.55 11.66 3.65 1.96 0 6.09-1.32 12.38-3.97 6.29-2.65 11.83-3.79 16.62-3.41 12.83.97 22.97 5.75 30.41 14.33-11.09 6.74-16.52 16.19-16.31 28.33.22 9.57 3.92 17.51 11.09 23.82 7.18 6.3 15.66 9.89 25.45 10.76-2.18 6.74-4.89 13.59-8.15 20.55zM119.22 33.15c0-7.39 2.61-14.46 7.83-21.2C132.27 5.2 138.8.84 146.63 0c.22 1.09.33 2.07.33 2.94 0 7.39-2.72 14.57-8.16 21.53-5.43 6.96-12.07 11.19-19.91 12.72-.44-1.31-.67-2.65-.67-4.04z" />
  </svg>
);

export const GoogleLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Google Logo">
    <path fill="#4285F4" d="M96 50.8c0-3.3-.3-6.4-.8-9.4H50v17.8h25.8c-1.1 5.9-4.5 10.9-9.5 14.3v11.9h15.4c9-8.3 14.3-20.5 14.3-34.6z"/>
    <path fill="#34A853" d="M50 97.5c12.9 0 23.7-4.3 31.6-11.6L66.2 74c-4.3 2.9-9.8 4.6-16.2 4.6-12.4 0-23-8.4-26.8-19.7H7.3v12.3c8 15.9 24.3 26.8 42.7 26.8z"/>
    <path fill="#FBBC05" d="M23.2 58.9c-1-2.9-1.6-6-1.6-9.2s.6-6.3 1.6-9.2V28.2H7.3C4.1 34.6 2.3 41.8 2.3 49.7s1.8 15.1 5 21.5l15.9-12.3z"/>
    <path fill="#EA4335" d="M50 20.8c7 0 13.3 2.4 18.2 7.1l13.7-13.7C73.6 6.3 62.8 2 50 2 31.6 2 15.3 12.9 7.3 28.8l15.9 12.3c3.8-11.3 14.4-19.7 26.8-19.7z"/>
  </svg>
);

export const IntelLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 140 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Intel Logo">
    <rect width="140" height="100" rx="12" fill="#0068B5" />
    <text x="70" y="65" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="42" textAnchor="middle" letterSpacing="-2">
      intel
    </text>
    <circle cx="48" cy="32" r="5" fill="#00C7FD" />
  </svg>
);

export const NvidiaLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 120 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="NVIDIA Logo">
    <rect width="120" height="100" rx="16" fill="#111827" />
    <path d="M40 70C30 65 25 55 25 45c0-15 15-28 35-28 18 0 32 10 35 24-5-4-13-8-22-8-12 0-22 8-22 18 0 8 6 15 16 17-9 1-19 1-27 2z" fill="#76B900" />
    <path d="M60 76c-18 0-33-10-33-24 0-16 16-28 36-28 15 0 28 8 32 20-3-2-9-5-16-5-10 0-18 6-18 15 0 7 6 13 15 14-6 5-11 8-16 8z" fill="#FFFFFF" />
    <path d="M52 64c-6 0-11-4-11-9 0-6 6-10 13-10 5 0 9 2 11 5-2 8-7 14-13 14z" fill="#76B900" />
    <text x="60" y="93" fill="#76B900" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="13" textAnchor="middle" letterSpacing="2">
      nVIDIA
    </text>
  </svg>
);

export const LinuxLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Linux Logo">
    {/* Body */}
    <ellipse cx="50" cy="55" rx="30" ry="34" fill="#1E293B" />
    {/* White belly */}
    <ellipse cx="50" cy="62" rx="20" ry="24" fill="#F8FAFC" />
    {/* Head */}
    <circle cx="50" cy="30" r="20" fill="#1E293B" />
    {/* Eyes */}
    <circle cx="43" cy="26" r="4.5" fill="#F8FAFC" />
    <circle cx="57" cy="26" r="4.5" fill="#F8FAFC" />
    <circle cx="44" cy="26" r="2.2" fill="#0F172A" />
    <circle cx="56" cy="26" r="2.2" fill="#0F172A" />
    {/* Beak */}
    <polygon points="42,32 58,32 50,42" fill="#F59E0B" />
    {/* Feet */}
    <ellipse cx="34" cy="88" rx="14" ry="7" fill="#F59E0B" />
    <ellipse cx="66" cy="88" rx="14" ry="7" fill="#F59E0B" />
  </svg>
);

export const AndroidLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Android Logo">
    {/* Antennae */}
    <line x1="36" y1="22" x2="28" y2="12" stroke="#3DDC84" strokeWidth="4" strokeLinecap="round" />
    <line x1="64" y1="22" x2="72" y2="12" stroke="#3DDC84" strokeWidth="4" strokeLinecap="round" />
    {/* Head */}
    <path d="M22 45 A28 28 0 0 1 78 45 Z" fill="#3DDC84" />
    {/* Eyes */}
    <circle cx="37" cy="34" r="3.5" fill="#FFFFFF" />
    <circle cx="63" cy="34" r="3.5" fill="#FFFFFF" />
    {/* Body */}
    <rect x="22" y="50" width="56" height="34" rx="8" fill="#3DDC84" />
    {/* Arms */}
    <rect x="9" y="50" width="9" height="26" rx="4.5" fill="#3DDC84" />
    <rect x="82" y="50" width="9" height="26" rx="4.5" fill="#3DDC84" />
    {/* Legs */}
    <rect x="33" y="84" width="9" height="14" rx="4.5" fill="#3DDC84" />
    <rect x="58" y="84" width="9" height="14" rx="4.5" fill="#3DDC84" />
  </svg>
);

export const IBMLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 140 80" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="IBM Logo">
    <rect width="140" height="80" rx="10" fill="#052F61" />
    <g fill="#5692F5">
      {/* 8-bar striped IBM representation */}
      <rect x="15" y="16" width="110" height="4" />
      <rect x="15" y="23" width="110" height="4" />
      <rect x="15" y="30" width="110" height="4" />
      <rect x="15" y="37" width="110" height="4" />
      <rect x="15" y="44" width="110" height="4" />
      <rect x="15" y="51" width="110" height="4" />
      <rect x="15" y="58" width="110" height="4" />
      <rect x="15" y="65" width="110" height="4" />
    </g>
    <text x="70" y="54" fill="#FFFFFF" fontFamily="monospace, sans-serif" fontWeight="900" fontSize="34" textAnchor="middle" letterSpacing="4">
      IBM
    </text>
  </svg>
);

export const HPLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="HP Logo">
    <circle cx="50" cy="50" r="46" fill="#0096D6" />
    <text x="48" y="66" fill="#FFFFFF" fontStyle="italic" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="48" textAnchor="middle" letterSpacing="-2">
      hp
    </text>
  </svg>
);

export const DellLogo: React.FC<LogoProps> = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="Dell Logo">
    <circle cx="50" cy="50" r="46" fill="#007DB8" />
    <g transform="translate(18, 32)">
      <text x="0" y="26" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="26">
        D
      </text>
      <text x="21" y="26" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="26" transform="rotate(-20 28 20)">
        E
      </text>
      <text x="38" y="26" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="26">
        LL
      </text>
    </g>
  </svg>
);

export const RenderLogoByName: React.FC<{ name: string; className?: string }> = ({ name, className = "w-24 h-24" }) => {
  const normalized = name.toLowerCase().trim();
  if (normalized.includes('microsoft')) return <MicrosoftLogo className={className} />;
  if (normalized.includes('apple')) return <AppleLogo className={className} />;
  if (normalized.includes('google')) return <GoogleLogo className={className} />;
  if (normalized.includes('intel')) return <IntelLogo className={className} />;
  if (normalized.includes('nvidia')) return <NvidiaLogo className={className} />;
  if (normalized.includes('linux')) return <LinuxLogo className={className} />;
  if (normalized.includes('android')) return <AndroidLogo className={className} />;
  if (normalized.includes('ibm')) return <IBMLogo className={className} />;
  if (normalized.includes('hp')) return <HPLogo className={className} />;
  if (normalized.includes('dell')) return <DellLogo className={className} />;
  return <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 font-bold">LOGO</div>;
};
