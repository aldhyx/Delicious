import { createLoader } from '../views/templates/template-creator';

const LoaderHelper = {
  renderLoader({ containerLoader }) {
    containerLoader.innerHTML = createLoader();
  },

  removeLoader({ containerLoader }) {
    containerLoader.innerHTML = '';
  },
};

export default LoaderHelper;
