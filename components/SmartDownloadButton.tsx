'use client';

import { useEffect, useState } from 'react';
import { Download, Apple, Smartphone } from 'lucide-react';
import Link from 'next/link';

interface SmartDownloadButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadges?: boolean;
}

export default function SmartDownloadButton({
  className = '',
  size = 'md',
  showBadges = false,
}: SmartDownloadButtonProps) {
  const [device, setDevice] = useState<'ios' | 'android' | 'mac' | 'windows' | 'unknown'>(
    'unknown'
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const platform = navigator.platform?.toLowerCase() || '';

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDevice('ios');
    } else if (/android/i.test(userAgent)) {
      setDevice('android');
    } else if (/macintosh|mac os x|macintel/i.test(userAgent) || platform.includes('mac')) {
      setDevice('mac');
    } else if (/win32|win64|windows|wince/i.test(userAgent) || platform.includes('win')) {
      setDevice('windows');
    } else {
      setDevice('unknown');
    }
  }, []);

  const badgeSizes = {
    sm: 'h-11 min-w-[140px]',
    md: 'h-14 min-w-[160px]',
    lg: 'h-16 min-w-[180px]',
  };

  const iconSizes = {
    sm: 'h-7 w-7',
    md: 'h-8 w-8',
    lg: 'h-9 w-9',
  };

  const textSizes = {
    sm: { small: 'text-[9px]', large: 'text-xs' },
    md: { small: 'text-[10px]', large: 'text-sm' },
    lg: { small: 'text-xs', large: 'text-base' },
  };

  const getDownloadUrl = () => {
    if (device === 'ios' || device === 'mac') {
      return 'https://apps.apple.com/us/app/borofuel/id6755387996';
    } else if (device === 'android') {
      return 'https://play.google.com/store/apps/details?id=com.borofuel.app';
    }
    return null;
  };

  if (!mounted) {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <button
          disabled
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg"
        >
          <Download className="mr-2 h-5 w-5" />
          Download App
        </button>
      </div>
    );
  }

  const downloadUrl = getDownloadUrl();

  if (showBadges || device === 'unknown' || device === 'windows' || !downloadUrl) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
        {/* App Store Badge */}
        <Link
          href="https://apps.apple.com/us/app/borofuel/id6755387996"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex ${badgeSizes[size]} items-center justify-center gap-3 overflow-hidden rounded-xl bg-black px-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <Apple className={`${iconSizes[size]} flex-shrink-0 text-white`} />
          <div className="flex flex-col items-start text-white">
            <span className={`${textSizes[size].small} font-normal leading-tight opacity-90`}>
              Download on the
            </span>
            <span className={`${textSizes[size].large} font-semibold leading-tight`}>
              App Store
            </span>
          </div>
        </Link>

        {/* Play Store Badge */}
        <Link
          href="https://play.google.com/store/apps/details?id=com.borofuel.app"
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex ${badgeSizes[size]} items-center justify-center gap-3 overflow-hidden rounded-xl bg-black px-5 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <svg
            className={`${iconSizes[size]} flex-shrink-0 text-white`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
          <div className="flex flex-col items-start text-white">
            <span className={`${textSizes[size].small} font-normal leading-tight opacity-90`}>
              GET IT ON
            </span>
            <span className={`${textSizes[size].large} font-semibold leading-tight`}>
              Play Store
            </span>
          </div>
        </Link>
      </div>
    );
  }

  // Single button for detected device
  return (
    <Link
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-primary-600 hover:to-primary-700 hover:shadow-xl"
    >
      {device === 'ios' || device === 'mac' ? (
        <Apple className="h-5 w-5" />
      ) : (
        <Smartphone className="h-5 w-5" />
      )}
      <span>
        {device === 'ios' || device === 'mac' ? 'Download on App Store' : 'Get it on Play Store'}
      </span>
    </Link>
  );
}
