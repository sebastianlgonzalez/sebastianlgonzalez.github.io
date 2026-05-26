'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SkewWordWrap from '@/components/SkewWordWrap';
import { cn } from '@/utils/cn';

type CategoryProps = {
	label: string;
	children: React.ReactNode;
};

export default function Category({ label, children }: CategoryProps) {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				type="button"
				aria-expanded={isOpen}
				className="flex items-center gap-2 cursor-pointer select-none group text-left"
				onClick={() => setIsOpen(prev => !prev)}
			>
				<ChevronRight
					size={14}
					className={cn(
						'flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
						isOpen ? 'rotate-90' : 'rotate-0'
					)}
				/>
				<SkewWordWrap
					text={label}
					gap="sm"
					className="text-3xl text-black font-black italic uppercase -skew-x-[18deg] transition-colors duration-150 group-hover:text-[#444]"
				/>
			</button>

			<div className={cn(
				'overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
				isOpen ? 'max-h-[30vh] opacity-100' : 'max-h-0 opacity-0'
			)}>
				<div className={cn(
            "faded", 
          )}>
					<div
						className={cn(
							"custom-scrollbar max-h-38 overflow-y-auto overflow-x-hidden py-2",
						)}
						dir="rtl"
					>
						<div className="flex flex-col pl-6 pr-2" dir="ltr">
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}