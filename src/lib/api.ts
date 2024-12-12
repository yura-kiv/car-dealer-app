import { API_URLS } from '@/constants';
import { Make, Model } from '@/types';
import { validateModels } from './validation';

export async function fetchMakes(): Promise<Make[]> {
  try {
    const response = await fetch(API_URLS.GET_MAKES);
    const data = await response.json();
    return data.Results || [];
  } catch (error) {
    console.error('Error fetching makes:', error);
    throw error;
  }
}

export async function fetchModelsByMakeAndYear(
  makeId: number,
  year: number
): Promise<Model[]> {
  try {
    const response = await fetch(
      API_URLS.GET_MODELS_BY_MAKE_AND_YEAR(makeId, year)
    );
    const data = await response.json();
    return validateModels(data.Results) || [];
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
}
