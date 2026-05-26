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

export default function SkewWordWrap({ text, className, onClick, gap = "lg" }: WordWrapProps) {
  return (
    <span
      className={`flex flex-wrap group ${gapMap[gap]} ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {text.split(/\s+/).filter(Boolean).map((word, i) => (
        <span key={i} className="flex flex-wrap">
          {word.split(/(?<=-)/).filter(Boolean).map((part, j) => (
            <span key={`${i}-${j}`} className={className}>
              {part}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}