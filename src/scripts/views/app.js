import DrawerInitiator from '../utils/drawer-init';

class App {
  constructor({
    button, drawer, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    // initial Drawer
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    // other components
  }
}

export default App;
