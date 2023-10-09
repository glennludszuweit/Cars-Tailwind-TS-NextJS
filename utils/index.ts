export const fetchCars = async () => {
  const url =
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=9&model=corolla';
  const headers = {
    'X-RapidAPI-Key': process.env.X_RAPIDAPI_KEY || '',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  try {
    const response = await fetch(url, { headers });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const calculateCarRent = (city_mpg: number, year: number): number => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  return Number(rentalRatePerDay.toFixed(0));
};
