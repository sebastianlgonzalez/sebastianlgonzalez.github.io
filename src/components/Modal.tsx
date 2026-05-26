'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import SkewWordWrap from './SkewWordWrap';
import { SelectionType } from './Menu';
import { cn } from '@/utils/cn';

type ModalProps = {
  selection: SelectionType | null;
  onClose: () => void;
};

export default function Modal({ selection, onClose }: ModalProps) {
  const [displayedSelection, setDisplayedSelection] = useState<SelectionType | null>(selection);
  const [isFading, setIsFading] = useState(false);
  
  const isOpen = selection !== null;
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selection !== displayedSelection) {
      if (!displayedSelection) {
        setDisplayedSelection(selection);
        return;
      }

      setIsFading(true);

      const timeoutId = setTimeout(() => {
        setDisplayedSelection(selection);
        setIsFading(false);
      }, 200);

      return () => clearTimeout(timeoutId);
    }
  }, [selection, displayedSelection]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          'fixed inset-0 z-40 bg-black transition-opacity duration-200 ease-out',
          isOpen ? 'opacity-20 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={displayedSelection?.name}
        className={cn(
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50',
          'w-[90vw] p-6',
          'bg-white border border-black',
          'overflow-y-auto transition-all duration-200 ease-out',
          isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex-shrink-0 text-black transition-colors duration-150 cursor-pointer"
          >
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>

        <div 
          className={cn(
            "flex flex-col gap-6 transition-opacity duration-200",
            isFading ? "opacity-0" : "opacity-100"
          )}
        >
          {displayedSelection && (
            <>
              {displayedSelection.name && (
                <SkewWordWrap
                  text={displayedSelection.name}
                  className="text-3xl text-black font-black italic uppercase -skew-x-[18deg]"
                />
              )}

              {displayedSelection.description && (
                <p className="text-sm text-[#444] font-['Arial',sans-serif] font-semibold leading-relaxed">
                  {displayedSelection.description}
                </p>
              )}

              {displayedSelection.link && (
                <Link
                  href={displayedSelection.link}
                  target={displayedSelection.link.startsWith('/') ? undefined : '_blank'}
                  rel={displayedSelection.link.startsWith('/') ? undefined : 'noopener noreferrer'}
                  className={cn(
                    "w-fit px-5 py-2",
                    "border border-black",
                    "text-sm font-['Arial',sans-serif] font-bold uppercase tracking-widest text-black",
                    "transition-colors duration-150 hover:bg-black hover:text-white"
                  )}
                >
                  {displayedSelection.linkLabel}
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}