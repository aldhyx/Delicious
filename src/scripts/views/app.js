import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ button, closeButton, drawer, content, navBackground }) {
    this._button = button;
    this._closeButton = closeButton;
    this._drawer = drawer;
    this._content = content;
    this._navBackground = navBackground;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      closeButton: this._closeButton,
      drawer: this._drawer,
      navBackground: this._navBackground,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
