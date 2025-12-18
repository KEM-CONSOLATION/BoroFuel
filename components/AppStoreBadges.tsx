import Link from 'next/link';

interface AppStoreBadgesProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function AppStoreBadges({ className = '', size = 'md' }: AppStoreBadgesProps) {
  const sizeClasses = {
    sm: 'h-10 w-36 sm:h-10 sm:w-36',
    md: 'h-12 w-40 sm:h-12 sm:w-44',
    lg: 'h-14 w-44 sm:h-16 sm:w-48',
  };

  return (
    <div className={`flex flex-col gap-2 sm:flex-row sm:gap-3 ${className}`}>
      {/* App Store Badge */}
      <Link
        href="https://apps.apple.com/us/app/borofuel/id6755387996"
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} relative overflow-hidden rounded-lg bg-black transition-transform hover:scale-105`}
        aria-label="Download on the App Store"
      >
        <div className="flex h-full items-center justify-center px-3 sm:px-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <svg
              className="h-6 w-6 flex-shrink-0 text-white sm:h-7 sm:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </Link>

      {/* Google Play Badge */}
      <Link
        href="https://play.google.com/store/apps/details?id=com.borofuel.app"
        target="_blank"
        rel="noopener noreferrer"
        className={`${sizeClasses[size]} relative overflow-hidden rounded-lg bg-black transition-transform hover:scale-105`}
        aria-label="Get it on Google Play"
      >
        <div className="flex h-full items-center justify-center px-3 sm:px-4">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <svg
              className="h-6 w-6 flex-shrink-0 text-white sm:h-7 sm:w-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </Link>
    </div>
  );
}
