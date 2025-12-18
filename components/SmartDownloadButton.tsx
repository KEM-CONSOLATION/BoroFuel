'use client';

import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
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

    // Check for iOS devices (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDevice('ios');
    }
    // Check for Android devices
    else if (/android/i.test(userAgent)) {
      setDevice('android');
    }
    // Check for Mac (macOS)
    else if (/macintosh|mac os x|macintel/i.test(userAgent) || platform.includes('mac')) {
      setDevice('mac');
    }
    // Check for Windows
    else if (/win32|win64|windows|wince/i.test(userAgent) || platform.includes('win')) {
      setDevice('windows');
    } else {
      setDevice('unknown');
    }
  }, []);

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const getDownloadUrl = () => {
    if (device === 'ios' || device === 'mac') {
      return 'https://apps.apple.com/us/app/borofuel/id6755387996';
    } else if (device === 'android') {
      return 'https://play.google.com/store/apps/details?id=com.borofuel.app';
    }
    // Windows and unknown devices - show both badges
    return null;
  };

  const getButtonText = () => {
    if (device === 'ios') {
      return 'Download on App Store';
    } else if (device === 'mac') {
      return 'Download on App Store';
    } else if (device === 'android') {
      return 'Download on Google Play';
    }
    return 'Download App';
  };

  if (!mounted) {
    // Show a neutral button while detecting
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <button
          disabled
          className={`inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white transition-colors ${sizeClasses[size]}`}
        >
          <Download className={`mr-2 ${iconSizes[size]}`} />
          Download App
        </button>
      </div>
    );
  }

  const downloadUrl = getDownloadUrl();

  if (showBadges || device === 'unknown' || device === 'windows' || !downloadUrl) {
    // Show both badges if unknown device or if showBadges is true
    return (
      <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
        <Link
          href="https://apps.apple.com/us/app/borofuel/id6755387996"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-black px-3 transition-transform hover:scale-105 sm:h-12 sm:w-44 sm:px-4"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <svg
              className="h-6 w-6 flex-shrink-0 text-white sm:h-7 sm:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] leading-tight text-white sm:text-[11px]">
                Download on the
              </span>
              <span className="text-xs font-semibold leading-tight text-white sm:text-sm">
                App Store
              </span>
            </div>
          </div>
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.borofuel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-lg bg-black px-3 transition-transform hover:scale-105 sm:h-12 sm:w-44 sm:px-4"
        >
          <div className="flex items-center space-x-2 sm:space-x-3">
            <svg
              className="h-6 w-6 flex-shrink-0 text-white sm:h-7 sm:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-[10px] leading-tight text-white sm:text-[11px]">GET IT ON</span>
              <span className="text-xs font-semibold leading-tight text-white sm:text-sm">
                Google Play
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={downloadUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-lg bg-primary-500 ${sizeClasses[size]} font-semibold text-white transition-colors hover:bg-primary-600 ${className}`}
    >
      <Download className={`mr-2 ${iconSizes[size]}`} />
      {getButtonText()}
    </Link>
  );
}
