'use client';

import Category from "@/components/Menu/Category";
import Selection from "@/components/Menu/Selection";

export type Project = {
	name: string;
	description: string;
	link?: string;
	linkLabel?: string;
};

type CategoryItem = {
	label: string;
	projects: Project[];
};

type MenuProps = {
	className?: string;
	selected: Project | null;
	onSelect: (project: Project) => void;
};

export const data: CategoryItem[] = [
	{
		label: 'Freelance',
		projects: [
			{
				name: 'Pianeta Legno Floors',
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

export default function Menu({ selected, onSelect }: MenuProps) {
	return (
		<nav className='flex flex-col' aria-label="Main menu">
			{data.map((cat) => (
				<Category key={cat.label} label={cat.label}>
					{cat.projects.map((project) => (
						<Selection
							key={project.name}
							project={project}
							selected={selected}
							onSelect={onSelect}
						/>
					))}
				</Category>
			))}
		</nav>
	);
}