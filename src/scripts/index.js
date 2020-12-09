import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import WeatherForm from './modules/weatherForm';

// Init shell
// eslint-disable-next-line no-unused-vars
const appShell = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

const searchForm = document.querySelector('#search-weather');
searchForm.addEventListener('click', () => {
  WeatherForm().submitForm();
});
