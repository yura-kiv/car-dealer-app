import { Model } from '@/types';

export function validateModels(models: Model[]): Model[] {
  const uniqueModels = new Map<number, Model>();

  models.forEach((model) => {
    if (!uniqueModels.has(model.Model_ID)) {
      uniqueModels.set(model.Model_ID, model);
    }
  });

  return Array.from(uniqueModels.values());
}
