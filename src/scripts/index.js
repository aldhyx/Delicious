import 'regenerator-runtime'; /* for async await transpile */
import './styles/main.scss';
import swRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburger'),
  closeButton: document.querySelector('#closeHamburger'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  navBackground: document.querySelector('#navBackground'),
  navList: document.querySelector('.nav__list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
