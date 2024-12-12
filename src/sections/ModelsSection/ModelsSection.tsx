import { ModelList } from '@/components/widgets';
import { fetchModelsByMakeAndYear } from '@/lib';

interface ModelsSectionProps {
  makeId: string;
  year: string;
}

const ModelsSection: React.FC<ModelsSectionProps> = async ({
  makeId,
  year,
}) => {
  const models = await fetchModelsByMakeAndYear(Number(makeId), Number(year));

  return <ModelList models={models} />;
};

export default ModelsSection;
