import { TriangleAlert } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="inline-flex items-center gap-3 border border-black px-5 py-[10px] m-2">
      <TriangleAlert size={18} strokeWidth={2.5} className='flex-shrink-0' />
      <span className="text-[11px] font-['Arial',sans-serif] font-bold uppercase tracking-[0.1em] text-black">
        Pardon the appearance. This website is currently being revamped.
      </span>
    </div>
  );
}