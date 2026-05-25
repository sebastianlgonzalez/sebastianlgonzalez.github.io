'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import WordWrap from './WordWrap';
import { Project } from './Menu';

type DetailsProps = {
	className?: string;
	selected: Project | null;
};

export default function Details({ className, selected }: DetailsProps) {
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
		<div className={`flex items-start ${className}`}>
			<div
				className={`w-full flex flex-col gap-6 transition-opacity duration-300 ease-in-out ${
					isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
				}`}
			>
				{displayedProject && (
					<>
						<WordWrap
							text={displayedProject.name}
							className="text-3xl text-black font-black italic uppercase -skew-x-[18deg]"
						/>
						<p className="text-sm text-[#444] font-['Arial',sans-serif] font-semibold max-w-xl leading-relaxed">
							{displayedProject.description}
						</p>
						{displayedProject.link && (
							displayedProject.link.startsWith('/') ? (
								<Link
									href={displayedProject.link}
									className="w-fit border border-black px-5 py-2 text-sm font-['Arial',sans-serif] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors duration-150"
								>
									{displayedProject.linkLabel ?? 'Open'}
								</Link>
							) : (
								<a
									href={displayedProject.link}
									target="_blank"
									rel="noopener noreferrer"
									className="w-fit border border-black px-5 py-2 text-sm font-['Arial',sans-serif] font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors duration-150"
								>
									{displayedProject.linkLabel ?? 'Open'}
								</a>
							)
						)}
					</>
				)}
			</div>
		</div>
	);
}