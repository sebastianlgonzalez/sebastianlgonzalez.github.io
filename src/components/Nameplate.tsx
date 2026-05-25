import WordWrap from './WordWrap';

export default function Nameplate() {
  return (
    <div className="mb-3">
      <WordWrap
        text="Sebastian Gonzalez"
        gap="lg"
        className="text-5xl text-black font-black uppercase italic -skew-x-[18deg]"
      />
    </div>
  );
}