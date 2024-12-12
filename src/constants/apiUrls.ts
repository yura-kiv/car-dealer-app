export const API_URLS = {
  GET_MAKES:
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json',
  GET_MODELS_BY_MAKE_AND_YEAR: (makeId: number, year: number) =>
    `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
};
