const DrawerInitiator = {
  init({
    button,
    drawer,
    closeButton,
    navBackground,
    navList,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    closeButton.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    navBackground.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    navList.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    this._navBackground = navBackground;
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
    this._navBackground.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    this._navBackground.classList.remove('open');
  },
};

export default DrawerInitiator;
