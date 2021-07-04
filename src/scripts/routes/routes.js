import Catalogue from '../views/pages/catalogue';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Catalogue,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
