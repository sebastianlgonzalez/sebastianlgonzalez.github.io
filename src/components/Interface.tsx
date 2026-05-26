'use client';

import { useState } from 'react';
import { Project } from './Menu';
import Menu from './Menu';
import Details from './Details';
import Nameplate from './Nameplate';

export default function Interface() {
	const [selected, setSelected] = useState<Project | null>(null);

	return (
		<div className="w-full h-full bg-white font-['Arial_Black',Arial,sans-serif]">
			<Nameplate />
			<div className='flex justify-between'>
				<Menu selected={selected} onSelect={setSelected} />
				<Details selected={selected} />
			</div>
		</div>
	);
}