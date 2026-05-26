'use client';

import { useState } from 'react';
import { SelectionType } from './Menu';
import Menu from './Menu';
import Details from './Details';
import Nameplate from './Nameplate';
import Modal from './Modal';
export default function Interface() {
	const [selected, setSelected] = useState<SelectionType | null>(null);

	return (
		<div className="w-full h-full bg-white font-['Arial_Black',Arial,sans-serif]">
			<Nameplate />
			<div className='flex justify-between'>
				<Menu selected={selected} onSelect={setSelected} />
				<div className="max-w-4xl w-full hidden md:flex ">
					<Details selected={selected} />
				</div>

			</div>

		</div>
	);
}