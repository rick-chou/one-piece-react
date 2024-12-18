import { useTheme } from '../../../theme-provider/useTheme';

const Codepen: React.FC<{ id: string }> = ({ id }) => {
  const { theme } = useTheme();
  return (
    <iframe
      className="w-full h-[500px] border-0 rounded overflow-hidden"
      title="codepen"
      src={`https://codepen.io/graphilla/embed/${id}?%2Cresult&editable=true&theme-id=${theme}`}
      loading="lazy"
    />
  );
};

export default Codepen;
