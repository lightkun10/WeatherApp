import CONFIG from './config';

const API_ENDPOINT = {
  CITY_NAME: (city) => `${CONFIG.BASE_URL}q=${city}&appid=${CONFIG.KEY}&units=metric`,
  CITY_ID: (id) => `${CONFIG.BASE_URL}id=${id}&appid=${CONFIG.KEY}&units=metric`,
  ICON: (iconId) => `http://openweathermap.org/img/wn/${iconId}@2x.png`,
};

export default API_ENDPOINT;
