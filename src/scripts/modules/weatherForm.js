import OpenWeatherMapSource from '../data/openweathermap-source';
import SearchResult from './searchResult';

/* eslint-disable no-underscore-dangle */
const WeatherForm = (() => {
  const _form = document.querySelector('#search-weather');
  const _loadingSection = document.querySelector('.results__loading__loader');

  const _showLoading = () => {
    _loadingSection.style.display = 'block';
  };

  const _hideLoading = () => {
    _loadingSection.style.display = 'none';
  };

  const submitForm = () => {
    _form.onsubmit = (e) => {
      try {
        const city = _form.querySelector('#search').value;
        _showLoading();
        setTimeout(async () => {
          const result = await OpenWeatherMapSource.getWeatherFromCity(city);
          await SearchResult.showResult(result);
          await _hideLoading();
        });
      } catch (err) {
        console.log(err);
        SearchResult.showResult(err);
      }

      e.preventDefault();
    };
  };

  return { submitForm };
});

export default WeatherForm;
