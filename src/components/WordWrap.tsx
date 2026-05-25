type Gap = 'sm'  | 'lg';

const gapMap: Record<Gap, string> = {
  sm: 'gap-x-2',
  lg: 'gap-x-3',
};

type WordWrapProps = {
  text: string;
  className: string;
  onClick?: () => void;
  gap?: Gap;
};

export default function SkewWrap({ text, className, onClick, gap = "lg" }: WordWrapProps) {
  const words = text.split(' ');
  return (
    <span
      className={`flex flex-wrap group ${gapMap[gap]} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {words.map((word, i) => (
        <span key={i} className={className}>
          {word}
        </span>
      ))}
    </span>
  );
}