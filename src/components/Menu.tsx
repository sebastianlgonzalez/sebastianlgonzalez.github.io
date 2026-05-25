'use client';

import { useState } from 'react';
import WordWrap from './WordWrap';
import { ChevronRight } from 'lucide-react';

export type Project = {
	name: string;
	description: string;
	link?: string;
	linkLabel?: string;
};

type Category = {
	label: string;
	projects: Project[];
};

type MenuProps = {
	className?: string;
	selected: Project | null;
	onSelect: (project: Project) => void;
};

export const categories: Category[] = [
	{
		label: 'Freelance',
		projects: [
			{
				name: 'multilayeredwoodfloors.com',
				description:
					'Designed and developed a business website for a local wood flooring company, built in accordance with client specifications and requirements.',
				link: 'https://multilayeredwoodfloors.com',
				linkLabel: 'Visit site',
			},
			{
				name: 'Coming Soon...',
				description: 'Next freelance project coming soon.',
			},
		],
	},
	{
		label: 'Projects',
		projects: [
			{
				name: 'A.I. Voice Assistant',
				description:
					'The main objective of the project was to create an always-online voice assistant on a Raspberry Pi Model 4, similar to Google Home or Amazon Alexa, capable of answering questions and responding to user voice input. The focus was on providing users with a voice-activated interface for interacting with Bing Chat (now known as Copilot).',
				link: 'https://github.com/sebastianlgonzalez/A.I._Voice_Assistant',
				linkLabel: 'Open in new tab',
			},
			{
				name: 'Microcomputer-Driven Robotic Arm',
				description:
					'A 7 degree of freedom robotic arm project focused on inverse kinematics and servo control. Designed to replicate human arm motion with precision using programmed control sequences and carry a 1-pound load.',
				link: '/robotic_arm',
				linkLabel: 'View More',
			},
			{
				name: 'Coming Soon...',
				description: 'Next project coming soon.',
			},
		],
	},
	{
		label: 'Open Source',
		projects: [
			{
				name: 'next-build-image',
				description:
					'A Next.js utility package that streamlines image optimization during the build process. Automates resizing and format conversion.',
				link: 'https://www.npmjs.com/package/next-build-image',
				linkLabel: 'Open in new tab',
			},
			{
				name: 'Coming Soon...',
				description: 'Next open source project coming soon.',
			},
		],
	},
];

export default function Menu({ className, selected, onSelect }: MenuProps) {
	const [openCat, setOpenCat] = useState<string | null>(null);

	const toggle = (label: string) => {
		setOpenCat((prev) => (prev === label ? null : label));
	};

	return (
		<nav className={`flex flex-col overflow-visible ${className}`} aria-label="Main menu">
			{categories.map((cat) => {
				const isOpen = openCat === cat.label;
				return (
					<div key={cat.label} className="mb-2">
						<button
							type="button"
							aria-expanded={isOpen}
							className="flex items-center gap-2 cursor-pointer select-none group text-left"
							onClick={() => toggle(cat.label)}
						>
							<ChevronRight
								size={14}
								className={`transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'rotate-90' : 'rotate-0'
									}`}
							/>
							<WordWrap
								text={cat.label}
								gap = "sm"
								className="text-3xl text-black font-black italic uppercase -skew-x-[18deg] transition-colors duration-150 group-hover:text-[#444]"
							/>
						</button>

						<div
							className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[30vh] opacity-100' : 'max-h-0 opacity-0'
								}`}
						>
							<div
								className="custom-scrollbar max-h-38 overflow-y-auto overflow-x-hidden pt-2"
								dir="rtl"
							>
								<div className="flex flex-col pl-6 pr-2" dir="ltr">
									{cat.projects.map((project, idx) => (
										<button
											key={idx}
											onClick={() => onSelect(project)}
											className="grid text-left cursor-pointer group"
										>
											<div
												aria-hidden="true"
												className="col-start-1 row-start-1 invisible pointer-events-none"
											>
												<WordWrap
													text={project.name}
													gap = "sm"
													className="text-2xl font-black italic uppercase -skew-x-[18deg] tracking-[0.02em]"
												/>
											</div>

											<div className="col-start-1 row-start-1">
												<WordWrap
													text={project.name}
													gap = "sm"
													className={`text-2xl font-black italic uppercase -skew-x-[18deg] transition-all duration-100 ${selected?.name === project.name
															? 'text-black tracking-[0.02em]'
															: 'text-[#888] group-hover:text-[#444] group-hover:tracking-[0.02em]'
														}`}
												/>
											</div>
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</nav>
	);
}