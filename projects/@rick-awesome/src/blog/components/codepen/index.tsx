import { useTheme } from '@/hooks/useTheme';

const Codepen: React.FC<{ id: string }> = ({ id }) => {
  const { mode } = useTheme();
  return (
    <iframe
      className="w-full h-[500px] border-0 rounded overflow-hidden"
      title="codepen"
      src={`https://codepen.io/graphilla/embed/${id}?%2Cresult&editable=true&theme-id=${mode}`}
      loading="lazy"
    />
  );
};

export default Codepen;
