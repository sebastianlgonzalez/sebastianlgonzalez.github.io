'use client';

import { useState } from 'react';
import { Project } from './Menu';
import Menu from './Menu';
import Details from './Details';
import Nameplate from './Nameplate';
import Disclaimer from './Disclaimer';

export default function Interface() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="fixed inset-0 w-full h-full bg-white font-['Arial_Black',Arial,sans-serif] subpixel-antialiased">
			<Disclaimer/>
      <div className="grid grid-rows-[auto_1fr] h-full px-[6vw] py-[6vh]">
        <Nameplate />
        <div className="grid grid-cols-[auto_1fr] gap-x-24 overflow-hidden">
          <Menu selected={selected} onSelect={setSelected} />
          <Details selected={selected} />
        </div>
      </div>
    </div>
  );
}