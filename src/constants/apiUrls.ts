const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_URLS = {
  GET_MAKES: `${BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
  GET_MODELS_BY_MAKE_AND_YEAR: (makeId: number, year: number) =>
    `${BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
};
