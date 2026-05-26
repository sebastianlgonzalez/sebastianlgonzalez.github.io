'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import WordWrap from './SkewWordWrap';
import { SelectionType } from './Menu';
import { cn } from '@/utils/cn';

type DetailsProps = {
	className?: string;
	selected: SelectionType | null;
};

export default function Details({ selected }: DetailsProps) {
	const [displayedSelection, setDisplayedSelection] = useState<SelectionType | null>(selected);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		if (selected !== displayedSelection) {
			if (!displayedSelection) {
				setDisplayedSelection(selected);
				return;
			}

			setIsFading(true);

			const timeoutId = setTimeout(() => {
				setDisplayedSelection(selected);
				setIsFading(false);
			}, 200);

			return () => clearTimeout(timeoutId);
		}
	}, [selected, displayedSelection]);

	const isVisible = !isFading && displayedSelection !== null;

	return (
		<div className='flex w-full'>
			<div
				className={cn(
					'flex flex-col gap-6 transition-opacity duration-300 ease-in-out',
					isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
				)}
			>
				{displayedSelection && (
					<>
						<WordWrap
							text={displayedSelection.name}
							className={cn(
								'text-3xl font-black italic uppercase text-black',
								'-skew-x-[18deg]'
							)}
						/>

						<p className="max-w-xl font-['Arial',sans-serif] text-sm font-semibold leading-relaxed text-[#444]">
							{displayedSelection.description}
						</p>
						{displayedSelection.link && (
							<Link
								href={displayedSelection.link}
								className={cn(
									"text-sm font-['Arial',sans-serif] text-black font-bold uppercase tracking-widest",
									"w-fit px-5 py-2 border border-black transition-colors duration-150",
									"hover:bg-black hover:text-white"
								)}
								target={displayedSelection.link.startsWith('/') ? undefined : "_blank"}
								rel={displayedSelection.link.startsWith('/') ? undefined : "noopener noreferrer"}
							>
								{displayedSelection.linkLabel ?? 'Open'}
							</Link>
						)}
					</>
				)}
			</div>
		</div>
	);
}