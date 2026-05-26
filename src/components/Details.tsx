'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import WordWrap from './SkewWordWrap';
import { Project } from './Menu';
import { cn } from '@/utils/cn';

type DetailsProps = {
	className?: string;
	selected: Project | null;
};

export default function Details({ selected }: DetailsProps) {
	const [displayedProject, setDisplayedProject] = useState<Project | null>(selected);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		if (selected !== displayedProject) {
			if (!displayedProject) {
				setDisplayedProject(selected);
				return;
			}

			setIsFading(true);

			const timeoutId = setTimeout(() => {
				setDisplayedProject(selected);
				setIsFading(false);
			}, 200);

			return () => clearTimeout(timeoutId);
		}
	}, [selected, displayedProject]);

	const isVisible = !isFading && displayedProject !== null;

	return (
		<div className={cn('flex w-full max-w-4xl')}>
			<div
				className={cn(
					'flex w-full flex-col gap-6 transition-opacity duration-300 ease-in-out',
					isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
				)}
			>
				{displayedProject && (
					<>
						<WordWrap
							text={displayedProject.name}
							className={cn(
								'text-3xl font-black italic uppercase text-black',
								'-skew-x-[18deg]'
							)}
						/>

						<p className="max-w-xl font-['Arial',sans-serif] text-sm font-semibold leading-relaxed text-[#444]">
							{displayedProject.description}
						</p>
						{displayedProject.link && (
							<Link
								href={displayedProject.link}
								className={cn(
									"text-sm font-['Arial',sans-serif] text-black font-bold uppercase tracking-widest",
									"w-fit px-5 py-2 border border-black transition-colors duration-150",
									"hover:bg-black hover:text-white"
								)}
								target={displayedProject.link.startsWith('/') ? undefined : "_blank"}
								rel={displayedProject.link.startsWith('/') ? undefined : "noopener noreferrer"}
							>
								{displayedProject.linkLabel ?? 'Open'}
							</Link>
						)}
					</>
				)}
			</div>
		</div>
	);
}