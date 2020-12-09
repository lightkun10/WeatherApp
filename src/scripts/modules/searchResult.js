import API_ENDPOINT from '../globals/api-endpoint';

const SearchResult = (() => {
  const _resultSection = document.querySelector('#results');
  const _resultInfo = document.querySelector('.results__info');
  const _loading = _resultSection.querySelector('.results__loading__loader');

  const _showFailure = (msg) => {
    if (msg) {
      _resultInfo.innerHTML = `${msg}`;
    } else {
      _resultInfo.innerHTML = 'Uh oh. Something wrong is happening.';
    }
  };

  const _showSuccess = (result) => {
    _loading.style.display = 'none';
    _resultInfo.innerHTML = `
      <div class="results__main">
        <img src="${API_ENDPOINT.ICON(result.weather[0].icon)}" alt="">
      </div>
      <div class="results__main">
        <div class="results__main__description">${result.weather[0].description}</div>
        <div class="results__main__name">${result.name}</div>
        <div class="results__main__temp">${result.main.temp}</div>
      </div>
      <div class="results__secondary">
        <div class="results__secondary__wind">Wind: ${result.wind.speed}MPH</div>
        <div class="results__secondary__humidity">Humidity: ${result.main.humidity}%</div>
        <div class="results__secondary__feels">Feels Like: ${result.main.feels_like}</div>
      </div>
    `;
  };

  const showResult = (result) => {
    console.log(result);
    if (!result) {
      _showFailure();
    } else if (result.cod === '404') {
      _showFailure(result.message);
    } else {
      _showSuccess(result);
    }
  };

  return { showResult };
})();

export default SearchResult;
