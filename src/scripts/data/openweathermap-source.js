import API_ENDPOINT from '../globals/api-endpoint';

const OpenWeatherMapSource = (() => {
  const getWeatherFromCity = async (city) => {
    let responseJson;
    try {
      const response = await fetch(API_ENDPOINT.CITY_NAME(city));
      responseJson = await response.json();
    } catch (err) {
      console.log(err);
    }
    return responseJson;
  };

  return { getWeatherFromCity };
})();

export default OpenWeatherMapSource;
