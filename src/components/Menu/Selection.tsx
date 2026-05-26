import SkewWordWrap from '@/components/SkewWordWrap';
import { Project } from '@/components/Menu';
import { cn } from '@/utils/cn';

type SelectionProps = {
  project: Project;
  selected: Project | null;
  onSelect: (project: Project) => void;
};

export default function Selection({ project, selected, onSelect }: SelectionProps) {
  const isSelected = selected === project;

  return (
    <button
      onClick={() => onSelect(project)}
      className={cn(
        "text-left cursor-pointer group origin-left transition-all duration-100 ease-out mr-3",
        isSelected ? "scale-x-[1.025]" : "hover:scale-x-[1.025]"
      )}
    >
      <SkewWordWrap
        text={project.name}
        gap="sm"
        className={cn(
          'text-2xl font-black italic uppercase -skew-x-[18deg] transition-colors duration-100',
          isSelected
            ? 'text-black'
            : 'text-[#888] group-hover:text-[#444]'
        )}
      />
    </button>
  );
}